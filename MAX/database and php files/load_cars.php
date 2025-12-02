  <?php
  include 'config.php';

  $stmt = $pdo->query("SELECT * FROM cars");
  $cars = $stmt->fetchAll(PDO::FETCH_ASSOC);

  header('Content-Type: application/json');
  echo json_encode($cars);
  ?>
  