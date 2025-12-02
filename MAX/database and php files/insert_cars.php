  <?php
  include 'config.php';

  $cars = [
      [
          'title' => 'Toyota Hiace',
          'description' => 'A spacious van ideal for group transfers, tours, and family trips in Zanzibar. Offers comfort and reliability for up to 12 passengers.',
          'subdescription' => 'Perfect for group travel and excursions.',
          'price' => '$80 per day',
          'image' => 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.1.0&auto=format&fit=crop&w=600&q=60',
          'gallery' => json_encode(["https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.1.0&auto=format&fit=crop&w=600&q=60", "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.1.0&auto=format&fit=crop&w=600&q=60", "https://images.unsplash.com/photo-1549399735-cef2e2c3f638?ixlib=rb-4.1.0&auto=format&fit=crop&w=600&q=60"]),
          'features' => json_encode(["Spacious interior", "Air conditioning", "Ample seating", "Cargo space"]),
          'inclusions' => json_encode(["Unlimited mileage", "Insurance coverage", "24/7 roadside assistance", "Fuel"]),
          'exclusions' => json_encode(["Driver", "Tolls and parking fees", "Personal items"]),
          'category' => 'van',
          'priceRange' => 'mid'
      ],
      // Ongeza wengine kutoka context
  ];

  foreach ($cars as $car) {
      $stmt = $pdo->prepare("INSERT INTO cars (title, description, subdescription, price, image, gallery, features, inclusions, exclusions, category, priceRange) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");
      $stmt->execute([$car['title'], $car['description'], $car['subdescription'], $car['price'], $car['image'], $car['gallery'], $car['features'], $car['inclusions'], $car['exclusions'], $car['category'], $car['priceRange']]);
  }

  echo "Cars inserted successfully!";
  ?>
  