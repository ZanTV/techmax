<?php
include 'config.php';

$shorts = [
    [
        'id' => '1',
        'type' => 'video',
        'src' => 'videos/zanzibar_beach.mp4',
        'embedUrl' => '',
        'title' => 'Zanzibar Beach Paradise',
        'description' => 'Experience the stunning beaches of Zanzibar with crystal clear waters and white sands. Perfect for relaxation and adventure.',
        'link' => 'tour.html',
        'uploadDate' => '2025-11-29 00:00:00',
        'category' => 'beach'
    ],
    // Ongeza wengine kutoka context
];

foreach ($shorts as $short) {
    $stmt = $pdo->prepare("INSERT INTO shorts (id, type, src, embedUrl, title, description, link, uploadDate, category) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)");
    $stmt->execute([$short['id'], $short['type'], $short['src'], $short['embedUrl'], $short['title'], $short['description'], $short['link'], $short['uploadDate'], $short['category']]);
}

echo "Shorts inserted successfully!";
?>