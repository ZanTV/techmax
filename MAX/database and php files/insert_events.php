<?php
include 'config.php';

$events = [
    [
        'id' => 1,
        'key_name' => 'tourism-expo',
        'title' => 'Tourism Expo 2025',
        'date' => '2025-12-01',
        'time' => '10:00',
        'description' => 'Join us for the biggest tourism expo in Zanzibar, featuring local vendors and travel deals.',
        'status' => 'upcoming',
        'img' => 'https://media.istockphoto.com/id/2198632896/photo/boat-touring-turquoise-waters-near-kizimkazi-zanzibar-revealing-lush-island-backdrop-with.jpg?s=612x612&w=0&k=20&c=kYHctUWDP9DhC9aWy2U6GWWpiWlatveSRvYG3nYw_kQ='
    ],
    // Ongeza wengine kutoka context
];

foreach ($events as $event) {
    $stmt = $pdo->prepare("INSERT INTO events (id, key_name, title, date, time, description, status, img) VALUES (?, ?, ?, ?, ?, ?, ?, ?)");
    $stmt->execute([$event['id'], $event['key_name'], $event['title'], $event['date'], $event['time'], $event['description'], $event['status'], $event['img']]);
}

echo "Events inserted successfully!";
?>