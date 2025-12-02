<?php
include 'config.php';

$tours = [
    [
        'title' => 'Zanzibar Nature & Forest Adventure',
        'description' => 'Discover the wild side of Zanzibar through its unique coastal forests, rare wildlife, and untouched natural landscapes. Explore Jozani Forest—home to the endangered Red Colobus monkeys—walk through mangrove boardwalks, and learn about the island’s rich biodiversity from expert local guides.',
        'subdescription' => 'A refreshing eco-adventure perfect for nature lovers and explorers.',
        'price' => '10% off for groups >5',
        'image' => 'https://media.istockphoto.com/id/2198498167/photo/tourists-swimming-alongside-sea-turtles-in-crystal-clear-waters-of-zanzibars-natural-cave.jpg?s=612x612&w=0&k=20&c=oiYMOv5mPs_kKqxPR6459IwmlSWg6YtVMiarUTNQPcM=',
        'gallery' => json_encode(["https://media.istockphoto.com/id/2211146747/photo/lush-vegetation-framing-a-secluded-cenote-in-zanzibar-tanzania.jpg?s=612x612&w=0&k=20&c=SFb4qmlJXI132XIs7iwk4tZR14ZRK56Fw3fvkT99ZVc=", "https://media.istockphoto.com/id/1622462909/photo/low-angle-of-a-monkey-perched-on-a-green-tree-branch-in-jozani-forest-zanzibar.jpg?s=612x612&w=0&k=20&c=coltWeOy5wDVe_bNZOOY1-J8AZfmlGFewnlosD4OXBg=", "https://media.istockphoto.com/id/1368010035/photo/zanzibar-jozani-rain-forest-jozani-chwaka-bay-conservation-area-tanzania-africa.jpg?s=612x612&w=0&k=20&c=SzptUZsEZTOv58CxHnHhW7rHuuINbp1HU35bZGv2Ph8=", "https://media.istockphoto.com/id/115928221/photo/exploring-the-mangrove.jpg?s=612x612&w=0&k=20&c=NMXqT7rQlbxRyQx9xGTdtci_WKU_6Rx7zsU0_ZkUlPo="]),
        'highlights' => json_encode(["Meet the endangered Red Colobus monkeys", "Walk through Jozani mangrove boardwalk", "Explore Zanzibar’s indigenous flora and fauna", "Guided eco-tour with conservation insights"]),
        'itinerary' => json_encode(["Day 1: Pick-up and introduction to Jozani Forest ecosystem", "Day 2: Mangrove boardwalk tour + butterfly center visit", "Day 3: Nature walk, local village visit, and departure"]),
        'inclusions' => json_encode(["Eco-friendly accommodation or forest lodge", "Guided nature tours", "Transportation", "Entrance fees"]),
        'exclusions' => json_encode(["International flights", "Personal expenses", "Travel insurance"]),
        'category' => 'nature',
        'priceRange' => 'mid'
    ],
    // Ongeza wengine kutoka context
];

foreach ($tours as $tour) {
    $stmt = $pdo->prepare("INSERT INTO tours (title, description, subdescription, price, image, gallery, highlights, itinerary, inclusions, exclusions, category, priceRange) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");
    $stmt->execute([$tour['title'], $tour['description'], $tour['subdescription'], $tour['price'], $tour['image'], $tour['gallery'], $tour['highlights'], $tour['itinerary'], $tour['inclusions'], $tour['exclusions'], $tour['category'], $tour['priceRange']]);
}

echo "Tours inserted successfully!";
?>