<?php
header('Content-Type: application/json');

// Enable error reporting for debugging
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Function to send email
function sendEmail($to, $subject, $message, $from) {
    $headers = "From: $from\r\n";
    $headers .= "Reply-To: $from\r\n";
    $headers .= "Content-Type: text/html; charset=UTF-8\r\n";

    return mail($to, $subject, $message, $headers);
}

// Function to save data to JSON file
function saveToJson($filename, $data) {
    $file = __DIR__ . '/' . $filename;
    $existing = file_exists($file) ? json_decode(file_get_contents($file), true) : [];
    $existing[] = $data;
    file_put_contents($file, json_encode($existing, JSON_PRETTY_PRINT));
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $response = ['success' => false, 'message' => ''];

    if (isset($_POST['form_type'])) {
        $formType = $_POST['form_type'];

        if ($formType === 'contact') {
            $name = htmlspecialchars($_POST['name']);
            $email = htmlspecialchars($_POST['email']);
            $subject = htmlspecialchars($_POST['subject']);
            $message = htmlspecialchars($_POST['message']);

            // Send email
            $emailSubject = "Contact Form: $subject";
            $emailMessage = "
                <h2>New Contact Form Submission</h2>
                <p><strong>Name:</strong> $name</p>
                <p><strong>Email:</strong> $email</p>
                <p><strong>Subject:</strong> $subject</p>
                <p><strong>Message:</strong></p>
                <p>$message</p>
            ";

            if (sendEmail('ortoman95@gmail.com', $emailSubject, $emailMessage, $email)) {
                // Save to JSON
                $data = [
                    'type' => 'contact',
                    'name' => $name,
                    'email' => $email,
                    'subject' => $subject,
                    'message' => $message,
                    'date' => date('Y-m-d H:i:s'),
                    'status' => 'unread'
                ];
                saveToJson('contacts.json', $data);

                $response = ['success' => true, 'message' => 'Contact form submitted successfully!'];
            } else {
                $response = ['success' => false, 'message' => 'Failed to send email.'];
            }

        } elseif ($formType === 'review') {
            $name = htmlspecialchars($_POST['reviewName']);
            $email = htmlspecialchars($_POST['reviewEmail']);
            $rating = htmlspecialchars($_POST['rating']);
            $reviewText = htmlspecialchars($_POST['reviewText']);

            // Send email
            $emailSubject = "New Review Submitted";
            $emailMessage = "
                <h2>New Review Submission</h2>
                <p><strong>Name:</strong> $name</p>
                <p><strong>Email:</strong> $email</p>
                <p><strong>Rating:</strong> $rating stars</p>
                <p><strong>Review:</strong></p>
                <p>$reviewText</p>
            ";

            if (sendEmail('ortoman95@gmail.com', $emailSubject, $emailMessage, $email)) {
                // Save to JSON
                $data = [
                    'type' => 'review',
                    'name' => $name,
                    'email' => $email,
                    'rating' => $rating,
                    'review' => $reviewText,
                    'date' => date('Y-m-d H:i:s'),
                    'status' => 'unread'
                ];
                saveToJson('reviews.json', $data);

                $response = ['success' => true, 'message' => 'Review submitted successfully!'];
            } else {
                $response = ['success' => false, 'message' => 'Failed to send email.'];
            }

        } elseif ($formType === 'newsletter') {
            $email = htmlspecialchars($_POST['newsletterEmail']);

            // Send email
            $emailSubject = "New Newsletter Subscription";
            $emailMessage = "
                <h2>New Newsletter Subscription</h2>
                <p><strong>Email:</strong> $email</p>
            ";

            if (sendEmail('ortoman95@gmail.com', $emailSubject, $emailMessage, $email)) {
                // Save to JSON
                $data = [
                    'type' => 'newsletter',
                    'email' => $email,
                    'date' => date('Y-m-d H:i:s'),
                    'status' => 'active'
                ];
                saveToJson('newsletters.json', $data);

                $response = ['success' => true, 'message' => 'Subscribed to newsletter successfully!'];
            } else {
                $response = ['success' => false, 'message' => 'Failed to subscribe.'];
            }
        }
    }

    echo json_encode($response);
} else {
    echo json_encode(['success' => false, 'message' => 'Invalid request method.']);
}
?>
