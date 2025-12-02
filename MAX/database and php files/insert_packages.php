<?php
include 'config.php';

$packages = [
    [
        'title' => 'Zanzibar Safari Adventure Package',
        'description' => 'Embark on an unforgettable safari adventure in Zanzibar, exploring wildlife reserves, cultural sites, and pristine beaches. This comprehensive package includes guided tours, accommodations, and meals for a complete experience.',
        'subdescription' => 'A full-day adventure combining safari and cultural immersion.',
        'price' => '15% off for groups >10',
        'days' => 3,
        'image' => 'https://media.istockphoto.com/id/1152427067/photo/family-exploring-a-village-on-tropical-vacations-in-africa.jpg?s=612x612&w=0&k=20&c=j3zhEbDeNKxHK0ouTwCG40y-374UCuLAlZTsfmfO2h8=',
        'gallery' => json_encode(["https://media.istockphoto.com/id/1917083441/photo/the-maasai-warriors-on-sand-beach-of-zanzibar-island.jpg?s=612x612&w=0&k=20&c=RkBKpiHGWInrWI9kEmDRsCoP7_Cx4_fc7lzV2IYa-Bc=", "https://media.istockphoto.com/id/506895244/photo/zanzibar-red-colobus-monkey.jpg?s=612x612&w=0&k=20&c=Bh65c2bRcLFxDcPBbg4iPTdFVFJVi4X-4uYNbKSlbOM=", "https://media.istockphoto.com/id/1524477095/photo/meal.jpg?s=612x612&w=0&k=20&c=gv0Ru0DCa7Izha-q96AI4A_8wEZe-KejDzmK7eOZ0rQ="]),
        'highlights' => json_encode(["Wildlife safari in Jozani Forest", "Stone Town cultural tour", "Beach relaxation at Nungwi", "Traditional Swahili dinner"]),
        'inclusions' => json_encode(["Guided tours", "Accommodation in beachfront hotel", "Meals (breakfast, lunch, dinner)", "Transportation", "Entrance fees"]),
        'exclusions' => json_encode(["International flights", "Personal expenses", "Travel insurance", "Gratuities"]),
        'category' => 'adventure',
        'priceRange' => 'high',
        'itinerary' => json_encode([["day" => 1, "title" => "Arrival and Jozani Forest Safari", "activities" => ["Arrival at Zanzibar International Airport", "Transfer to accommodation", "Afternoon wildlife safari in Jozani Forest", "Evening relaxation at the beach", "Dinner at the hotel"]], ["day" => 2, "title" => "Stone Town Cultural Exploration", "activities" => ["Morning breakfast", "Full-day guided tour of Stone Town UNESCO site", "Visit historical sites and markets", "Traditional Swahili lunch", "Afternoon free time for shopping", "Sunset dhow cruise"]], ["day" => 3, "title" => "Beach Relaxation and Departure", "activities" => ["Morning beach activities at Nungwi", "Swimming and water sports", "Traditional farewell dinner", "Transfer to airport for departure"]]])
    ],
    // Ongeza wengine kutoka context
];

foreach ($packages as $package) {
    $stmt = $pdo->prepare("INSERT INTO packages (title, description, subdescription, price, days, image, gallery, highlights, inclusions, exclusions, category, priceRange, itinerary) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");
    $stmt->execute([$package['title'], $package['description'], $package['subdescription'], $package['price'], $package['days'], $package['image'], $package['gallery'], $package['highlights'], $package['inclusions'], $package['exclusions'], $package['category'], $package['priceRange'], $package['itinerary']]);
}

echo "Packages inserted successfully!";
?>