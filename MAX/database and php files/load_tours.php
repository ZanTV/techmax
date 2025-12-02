<?php
include 'config.php';

$stmt = $pdo->query("SELECT * FROM tours");
$tours = $stmt->fetchAll(PDO::FETCH_ASSOC);

header('Content-Type: application/json');
echo json_encode($tours);
?>