  <?php
  include 'config.php';

  $excursions = [
      [
          'title' => 'Dolphin Watching Adventure',
          'description' => 'Experience the thrill of watching playful dolphins in their natural habitat off the coast of Zanzibar. Join our expert guides on a boat tour to spot these magnificent creatures and learn about marine conservation.',
          'subdescription' => 'A magical encounter with Zanzibar\'s marine life.',
          'price' => '$60 per person',
          'image' => 'https://media.istockphoto.com/id/2215409964/photo/young-woman-watches-dolphins-from-boat.jpg?s=612x612&w=0&k=20&c=CRBTftbILALHbBo6Cd3IlufyGqhoyAO9LM04vLI_0YM=',
          'gallery' => json_encode(["https://media.istockphoto.com/id/2215409964/photo/young-woman-watches-dolphins-from-boat.jpg?s=612x612&w=0&k=20&c=CRBTftbILALHbBo6Cd3IlufyGqhoyAO9LM04vLI_0YM=", "https://media.istockphoto.com/id/2216891690/photo/swimming-dolphins.jpg?s=612x612&w=0&k=20&c=KuYrLpdn1SE83XQrC3HPXkX9NhrM4xerEUzSIrQZN5k=", "https://media.istockphoto.com/id/945151376/photo/pod-of-spinner-dolphins-in-na-pali-coast-of-kauai-hawaii.jpg?s=612x612&w=0&k=20&c=jI4v812m80iOxwwUpUhVPWm3bZApLeq8iE3MQlkodPY="]),
          'highlights' => json_encode(["Boat tour to dolphin habitats", "Expert marine guides", "Snorkeling opportunities", "Conservation education"]),
          'itinerary' => json_encode(["Morning: Boat departure and briefing", "Midday: Dolphin watching and snorkeling", "Afternoon: Return to shore"]),
          'inclusions' => json_encode(["Boat transportation", "Snorkeling gear", "Guided tour", "Refreshments"]),
          'exclusions' => json_encode(["Hotel transfers", "Personal expenses", "Travel insurance"]),
          'category' => 'adventure',
          'priceRange' => 'low'
      ],
      // Ongeza wengine kutoka context
  ];

  foreach ($excursions as $excursion) {
      $stmt = $pdo->prepare("INSERT INTO excursions (title, description, subdescription, price, image, gallery, highlights, itinerary, inclusions, exclusions, category, priceRange) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");
      $stmt->execute([$excursion['title'], $excursion['description'], $excursion['subdescription'], $excursion['price'], $excursion['image'], $excursion['gallery'], $excursion['highlights'], $excursion['itinerary'], $excursion['inclusions'], $excursion['exclusions'], $excursion['category'], $excursion['priceRange']]);
  }

  echo "Excursions inserted successfully!";
  ?>
  