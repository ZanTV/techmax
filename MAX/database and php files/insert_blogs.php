<?php
include 'config.php';

$blogs = [
    [
        'id' => 1,
        'title' => 'Exploring Stone Town: A Cultural Journey',
        'summary' => 'Step into Zanzibar\'s Stone Town...',
        'content' => '<p>Stone Town, Zanzibar’s historic heart...</p>', // Fupisha kwa mfano
        'image' => 'https://media.istockphoto.com/id/2219761344/photo/tanzania-zanzibar-stone-town-old-wooden-door-and-old-architecture.jpg?s=612x612&w=0&k=20&c=IGwB9HFX0t9zjewoWyXi0nRyw59knaM3KBuK_0UtX1M=',
        'category' => 'tours',
        'date' => '2025-02-15'
    ],
    // Ongeza wengine kutoka context
];

foreach ($blogs as $blog) {
    $stmt = $pdo->prepare("INSERT INTO blogs (id, title, summary, content, image, category, date) VALUES (?, ?, ?, ?, ?, ?, ?)");
    $stmt->execute([$blog['id'], $blog['title'], $blog['summary'], $blog['content'], $blog['image'], $blog['category'], $blog['date']]);
}

echo "Blogs inserted successfully!";
?>