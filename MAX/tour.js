// Tours data
const tours = [
    {
    title: 'Zanzibar Nature & Forest Adventure',
    description: 'Discover the wild side of Zanzibar through its unique coastal forests, rare wildlife, and untouched natural landscapes. Explore Jozani Forest—home to the endangered Red Colobus monkeys—walk through mangrove boardwalks, and learn about the island’s rich biodiversity from expert local guides.',
    subdescription: 'A refreshing eco-adventure perfect for nature lovers and explorers.',
    price: '10% off for groups >5',
    image: 'https://media.istockphoto.com/id/2198498167/photo/tourists-swimming-alongside-sea-turtles-in-crystal-clear-waters-of-zanzibars-natural-cave.jpg?s=612x612&w=0&k=20&c=oiYMOv5mPs_kKqxPR6459IwmlSWg6YtVMiarUTNQPcM=',
    gallery: [
        'https://media.istockphoto.com/id/2211146747/photo/lush-vegetation-framing-a-secluded-cenote-in-zanzibar-tanzania.jpg?s=612x612&w=0&k=20&c=SFb4qmlJXI132XIs7iwk4tZR14ZRK56Fw3fvkT99ZVc=',
        'https://media.istockphoto.com/id/1622462909/photo/low-angle-of-a-monkey-perched-on-a-green-tree-branch-in-jozani-forest-zanzibar.jpg?s=612x612&w=0&k=20&c=coltWeOy5wDVe_bNZOOY1-J8AZfmlGFewnlosD4OXBg=',
        'https://media.istockphoto.com/id/1368010035/photo/zanzibar-jozani-rain-forest-jozani-chwaka-bay-conservation-area-tanzania-africa.jpg?s=612x612&w=0&k=20&c=SzptUZsEZTOv58CxHnHhW7rHuuINbp1HU35bZGv2Ph8=',
        'https://media.istockphoto.com/id/115928221/photo/exploring-the-mangrove.jpg?s=612x612&w=0&k=20&c=NMXqT7rQlbxRyQx9xGTdtci_WKU_6Rx7zsU0_ZkUlPo='
    ],
    highlights: [
        'Meet the endangered Red Colobus monkeys',
        'Walk through Jozani mangrove boardwalk',
        'Explore Zanzibar’s indigenous flora and fauna',
        'Guided eco-tour with conservation insights'
    ],
    itinerary: [
        'Day 1: Pick-up and introduction to Jozani Forest ecosystem',
        'Day 2: Mangrove boardwalk tour + butterfly center visit',
        'Day 3: Nature walk, local village visit, and departure'
    ],
    inclusions: [
        'Eco-friendly accommodation or forest lodge',
        'Guided nature tours',
        'Transportation',
        'Entrance fees'
    ],
    exclusions: [
        'International flights',
        'Personal expenses',
        'Travel insurance'
    ],
    category: 'nature',
    priceRange: 'mid'
},

    {
    title: 'Pristine Beach Getaway',
    description: 'Unwind on Zanzibar’s breathtaking white-sand beaches while enjoying crystal-clear turquoise waters and gentle ocean breezes. This getaway features guided beach walks, optional trips to top snorkeling spots like Mnemba or Nakupenda, and serene sunset moments that guarantee pure relaxation.',
    subdescription: 'Escape to paradise and experience peaceful beachfront living.',
    price: '10% off for groups >5',
    image: 'https://images.unsplash.com/photo-1621583628955-42fbc37bf424?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=600',
    gallery: [
        'https://images.unsplash.com/photo-1621583628955-42fbc37bf424?ixlib=rb-4.1.0&auto=format&fit=crop&w=600&q=60',
        'https://media.istockphoto.com/id/1255713718/photo/white-rice-with-seafood-and-vegetables-close-up-fish-squid-shrimp-rice-tomato-and-cucumber-in.jpg?s=612x612&w=0&k=20&c=7FegZmxQj8y_nWVEZgVSH6EHHY16DVwleuMgM5_9Duo=',
        'https://media.istockphoto.com/id/1098385852/photo/adult-woman-swimming-in-sea-on-summer-vacations-in-africa.jpg?s=612x612&w=0&k=20&c=o1UuQI7-t9zQWgEdTT2Jpe41-CwCxicgrDQOpM6qj-U='
    ],
    highlights: [
        'Private beachfront access',
        'Snorkeling excursions to Mnemba or local reefs',
        'Sunset yoga or relaxation sessions',
        'Fresh Swahili-style seafood dinners'
    ],
    itinerary: [
        'Day 1: Check-in and relaxation by the beach',
        'Day 2: Snorkeling adventure + guided beach walk',
        'Day 3: Leisure time, sunset viewing, and departure'
    ],
    inclusions: [
        'Beachfront accommodation',
        'Snorkeling gear',
        'Guided beach activities',
        'Daily breakfast or selected meals'
    ],
    exclusions: [
        'International flights',
        'Spa treatments',
        'Personal expenses'
    ],
    category: 'beach',
    priceRange: 'low'
},

    {
    title: 'Stone Town Cultural Tour',
    description: 'Dive into the heart of Zanzibar’s culture and history with an immersive tour of Stone Town. Wander through its narrow alleys, admire carved wooden doors, explore iconic landmarks such as the Old Fort and the Forodhani waterfront, and learn the stories behind this UNESCO World Heritage Site from knowledgeable local guides.',
    subdescription: 'A journey through centuries of Swahili, Arab, Persian, and European influence.',
    price: '10% off for groups >5',
    image: 'https://images.unsplash.com/photo-1713253702141-6b95e745260d?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=600',
    gallery: [
        'https://images.unsplash.com/photo-1713253702141-6b95e745260d?ixlib=rb-4.1.0&auto=format&fit=crop&w=600&q=60',
        'https://media.istockphoto.com/id/2239117698/photo/aerial-view-of-stone-town-zanzibar-showcasing-its-historic-architecture-and-coastline.jpg?s=612x612&w=0&k=20&c=IxCF7ivz2q6z76Z610kNkkwSHMQO1c10D8DmqSghgdw=',
        'https://media.istockphoto.com/id/2219760915/photo/tanzania-zanzibar-stone-town-two-veiled-women-at-the-market.jpg?s=612x612&w=0&k=20&c=o1rcl8vNd77rgn051606Chvruex2j2QC_kc0evjk5Bw='
    ],
    highlights: [
        'Exterior visit to the House of Wonders (under restoration)',
        'Exploration of the Old Fort & Forodhani Gardens',
        'Walking tour through historic alleys and local markets',
        'Local cuisine tasting & Swahili culture insights'
    ],
    itinerary: [
        'Day 1: Arrival and Stone Town orientation walk',
        'Day 2: Full-day cultural & historical exploration',
        'Day 3: Market visits, handicraft shopping, and farewell'
    ],
    inclusions: [
        'Professional local guide',
        'Entrance fees to major sites',
        'Local transport within Stone Town',
        'Cultural experiences or performances'
    ],
    exclusions: [
        'International flights',
        'Meals (unless part of tasting activities)',
        'Personal expenses'
    ],
    category: 'cultural',
    priceRange: 'high'
},

    {
    title: 'Zanzibar Spice Plantation Tour',
    description: 'Step into the fragrant world of Zanzibar’s spice plantations and explore the island\'s rich agricultural heritage. Learn about the cultivation and uses of cloves, cinnamon, nutmeg, and vanilla through hands-on demonstrations, guided walks, and tasting sessions that awaken your senses.',
    subdescription: 'A sensory and educational journey through Zanzibar\'s spice heritage.',
    price: '10% off for groups >5',
    image: 'https://media.istockphoto.com/id/1498870651/photo/boabab.jpg?s=612x612&w=0&k=20&c=hG7wq7Eplyyk3dkIvnpu4pxhzr-k9bje1nkiAGuen6k=',
    gallery: [
        'https://media.istockphoto.com/id/1498870651/photo/boabab.jpg?s=612x612&w=0&k=20&c=hG7wq7Eplyyk3dkIvnpu4pxhzr-k9bje1nkiAGuen6k=',
        'https://media.istockphoto.com/id/186842160/photo/fresh-peppercorn.jpg?s=612x612&w=0&k=20&c=7HKawt-MbHEQOs5p4NHEKhQPKYfx4_8YrZlAshhulto=',
        'https://media.istockphoto.com/id/1500670640/photo/a-man-of-african-race-shows-half-of-an-unripe-nutmeg-plucked-from-a-tree.jpg?s=612x612&w=0&k=20&c=AHJj78qKTZsyrCDleyrj8cMKZV74M15xjH19ew18dVQ='
    ],
    highlights: [
        'Hands-on spice harvesting and processing demonstrations',
        'Tasting sessions of fresh spices and local produce',
        'Guided plantation walks through lush gardens',
        'Traditional Swahili cooking class using spices'
    ],
    itinerary: [
        'Day 1: Arrival and introductory spice tour',
        'Day 2: Full-day plantation exploration with interactive demonstrations',
        'Day 3: Visit local spice markets and departure'
    ],
    inclusions: [
        'Professional guided tours',
        'Spice tasting experiences',
        'Transportation during tour',
        'Meals included during plantation visits'
    ],
    exclusions: [
        'International flights',
        'Personal expenses',
        'Souvenirs and optional extras'
    ],
    category: 'cultural',
    priceRange: 'mid'
},

    {
    title: 'Zanzibar Diving Expedition',
    description: 'Plunge into the vibrant underwater world of Zanzibar, exploring coral reefs teeming with colorful marine life and historic shipwrecks. This expedition features PADI-certified dives guided by professional instructors, ideal for both beginners and experienced divers.',
    subdescription: 'An unforgettable journey into Zanzibar\'s marine paradise beneath the waves.',
    price: '10% off for groups >5',
    image: 'https://media.istockphoto.com/id/1098385852/photo/adult-woman-swimming-in-sea-on-summer-vacations-in-africa.jpg?s=612x612&w=0&k=20&c=o1UuQI7-t9zQWgEdTT2Jpe41-CwCxicgrDQOpM6qj-U=',
    gallery: [
        'https://media.istockphoto.com/id/1098385852/photo/adult-woman-swimming-in-sea-on-summer-vacations-in-africa.jpg?s=612x612&w=0&k=20&c=o1UuQI7-t9zQWgEdTT2Jpe41-CwCxicgrDQOpM6qj-U=',
        'https://media.istockphoto.com/id/1255713718/photo/white-rice-with-seafood-and-vegetables-close-up-fish-squid-shrimp-rice-tomato-and-cucumber-in.jpg?s=612x612&w=0&k=20&c=7FegZmxQj8y_nWVEZgVSH6EHHY16DVwleuMgM5_9Duo=',
        'https://images.unsplash.com/photo-1621583628955-42fbc37bf424?ixlib=rb-4.1.0&auto=format&fit=crop&w=600&q=60'
    ],
    highlights: [
        'Dive among Zanzibar\'s vibrant coral reefs',
        'Explore historic shipwrecks',
        'Encounters with tropical marine life',
        'Guided underwater photography opportunities'
    ],
    itinerary: [
        'Day 1: Arrival, dive training, and safety briefing',
        'Day 2: Morning and afternoon reef dives',
        'Day 3: Advanced dive sites and departure'
    ],
    inclusions: [
        'All diving equipment',
        'Certified dive instructor guidance',
        'Boat transfers to dive sites',
        'Meals during diving days'
    ],
    exclusions: [
        'International flights',
        'PADI dive certification (if required)',
        'Personal expenses'
    ],
    category: 'adventure',
    priceRange: 'high'
},

    {
    title: 'Zanzibar Dolphin Watching Tour',
    description: 'Embark on a thrilling boat adventure along Zanzibar\'s coast to observe playful dolphins in their natural habitat. This eco-friendly tour also includes snorkeling stops and informative marine conservation talks.',
    subdescription: 'An enchanting encounter with Zanzibar\'s marine mammals.',
    price: '10% off for groups >5',
    image: 'https://media.istockphoto.com/id/681917346/photo/swimming-with-dolphins-close-mnemba-island-zanzibar-island-tanzania-indian-ocean-africa.jpg?s=612x612&w=0&k=20&c=QbZB7AYPdFX5K9VfFxBkjJWKlQ9dzT9C8XqMEG8CGQg=',
    gallery: [
        'https://media.istockphoto.com/id/681917346/photo/swimming-with-dolphins-close-mnemba-island-zanzibar-island-tanzania-indian-ocean-africa.jpg?s=612x612&w=0&k=20&c=QbZB7AYPdFX5K9VfFxBkjJWKlQ9dzT9C8XqMEG8CGQg=',
        'https://media.istockphoto.com/id/2132790657/photo/group-of-jumping-dolphins.jpg?s=612x612&w=0&k=20&c=zD4xIcMlG9olOr4YPRn_kFOe_cSA8GQ1YU9776ZS-XE=',
        'https://media.istockphoto.com/id/2170224455/photo/mnemba-island.jpg?s=612x612&w=0&k=20&c=1y932CC6vu66wkflO6z9L_eRhQyjUNjIGLe1O-EguSo=',
        'https://media.istockphoto.com/id/2202884601/photo/traditional-wooden-dhow-boat-with-tourists-sailing-in-the-indian-ocean-during-sunset-cruise.jpg?s=612x612&w=0&k=20&c=bR2tNwqJTtWCzJERtkxc1DAxS3FFUIoRAVIr42-Oml8='
    ],
    highlights: [
        'Spot playful dolphins in the wild',
        'Snorkeling in crystal-clear waters',
        'Learn about marine conservation',
        'Enjoy sunset cruises along the coast'
    ],
    itinerary: [
        'Day 1: Departure by boat and dolphin search',
        'Day 2: Extended marine exploration and snorkeling',
        'Day 3: Leisure cruise and farewell'
    ],
    inclusions: [
        'Boat tour with experienced guide',
        'Snorkeling gear',
        'Guided marine activities',
        'Meals during the tour'
    ],
    exclusions: [
        'International flights',
        'Personal expenses',
        'Travel insurance'
    ],
    category: 'adventure',
    priceRange: 'mid'
}
,
   
{
    title: 'Zanzibar Historical Fortresses Tour',
    description: 'Explore Zanzibar\'s ancient fortresses and palaces, delving into the island\'s colonial history and architectural wonders. This guided tour visits key historical sites while sharing fascinating stories of Zanzibar\'s past.',
    subdescription: 'Uncover the stories behind Zanzibar\'s fortified heritage.',
    price: '10% off for groups >5',
    image: 'https://media.istockphoto.com/id/2185134248/photo/stonetown-cannon.jpg?s=612x612&w=0&k=20&c=jlk8VDDzHvLwFjzhwbB-TwFLpFRXTS1bYwnVkjaZmQo=',
    gallery: [
        'https://media.istockphoto.com/id/2185134248/photo/stonetown-cannon.jpg?s=612x612&w=0&k=20&c=jlk8VDDzHvLwFjzhwbB-TwFLpFRXTS1bYwnVkjaZmQo=',
        'https://media.istockphoto.com/id/2207850079/photo/mtoni-palace-ruins-in-zanzibar.jpg?s=612x612&w=0&k=20&c=4Y1m_S6kPAzYIEfjmnzTODLZo8xCYI4HF66jkUUsOUw=',
        'https://media.istockphoto.com/id/1366664375/photo/tower-of-stone-town-muslim-fortress-zanzibar-tanzania.jpg?s=612x612&w=0&k=20&c=YP35wsJH119gUIuWvFWvct2YLo-EXbjU-jc35m4XNH4='
    ],
    highlights: [
        'Visits to historic fortresses',
        'Guided palace tours',
        'Lectures on colonial history',
        'Insights into archaeology and heritage'
    ],
    itinerary: [
        'Day 1: Arrival and orientation',
        'Day 2: Full-day historical exploration',
        'Day 3: Cultural performances and departure'
    ],
    inclusions: [
        'Guided tours',
        'Entrance fees',
        'Local transportation',
        'Meals'
    ],
    exclusions: [
        'International flights',
        'Personal expenses',
        'Souvenirs'
    ],
    category: 'cultural',
    priceRange: 'high'
}
,
    {
    title: 'Zanzibar Sunset Sailing Cruise',
    description: 'Embark on a romantic sunset sailing cruise along Zanzibar\'s coastline, enjoying breathtaking views, champagne, and a gourmet dinner on board.',
    subdescription: 'Sail into the golden hour with Zanzibar\'s stunning horizons.',
    price: '10% off for groups >5',
    image: 'https://media.istockphoto.com/id/2213950699/photo/silhouettes-of-the-fishermen-in-boat-against-sunset-zanzibar-tanzania.jpg?s=612x612&w=0&k=20&c=PWS3SH6UD7T3Qq5LW8WcrDc3IdfaGRaQ67vXutYks38=',
    gallery: [
        'https://media.istockphoto.com/id/2213950699/photo/silhouettes-of-the-fishermen-in-boat-against-sunset-zanzibar-tanzania.jpg?s=612x612&w=0&k=20&c=PWS3SH6UD7T3Qq5LW8WcrDc3IdfaGRaQ67vXutYks38=',
        'https://media.istockphoto.com/id/1301779924/photo/scenic-aerial-view-of-the-wooden-boat-sailing-on-the-turquoise-ocean-on-zanzibar-island.jpg?s=612x612&w=0&k=20&c=nlMXpjsqlPv3Bc-y4XTCsMrg4Ydc0khE7QPCVprdkaM=',
        'https://media.istockphoto.com/id/95941788/photo/sundown-in-africa.jpg?s=612x612&w=0&k=20&c=orhzsSD8IV2Zd27EyDbDB2h2SIDdhAMoiJYQeFGzPAc='
    ],
    highlights: [
        'Sunset views over the ocean',
        'Champagne toast',
        'Gourmet dinner on board',
        'Live music entertainment'
    ],
    itinerary: [
        'Evening: Cruise departure',
        'Evening: Sailing and dining experience',
        'Evening: Return to shore'
    ],
    inclusions: [
        'Boat cruise',
        'Dinner and drinks',
        'Entertainment',
        'Professional crew'
    ],
    exclusions: [
        'International flights',
        'Personal expenses',
        'Transportation to port'
    ],
    category: 'beach',
    priceRange: 'high'
},
{
    title: 'Zanzibar Wildlife Conservation Tour',
    description: 'Join efforts to protect Zanzibar\'s wildlife through this conservation-focused tour, including visits to reserves and hands-on activities with local experts.',
    subdescription: 'Contribute to Zanzibar\'s ecological preservation.',
    price: '10% off for groups >5',
    image: 'https://media.istockphoto.com/id/2198498367/photo/majestic-sea-turtles-gliding-through-the-clear-waters-of-a-zanzibar-cave-aquarium-showcasing.jpg?s=612x612&w=0&k=20&c=1LtSz4adq2VV9cKvGA_DJFwnghb0FtXvCpMsx5Sx3K8=',
    gallery: [
        'https://media.istockphoto.com/id/2198498367/photo/majestic-sea-turtles-gliding-through-the-clear-waters-of-a-zanzibar-cave-aquarium-showcasing.jpg?s=612x612&w=0&k=20&c=1LtSz4adq2VV9cKvGA_DJFwnghb0FtXvCpMsx5Sx3K8=',
        'https://media.istockphoto.com/id/1124441796/photo/red-colobus-monkey-in-jozani-forest-on-zanzibar.jpg?s=612x612&w=0&k=20&c=9ikK_sHs8pWCN6k9NJlgf6XK1h2vbCfakChp7fCgWGc=',
        'https://media.istockphoto.com/id/1313495530/photo/young-adult-man-petting-a-aldabra-tortoise.jpg?s=612x612&w=0&k=20&c=vUsKH37hadtHsu_6boNepZowrGIZ1Xbm3JreFb9h9q8='
    ],
    highlights: [
        'Conservation talks by experts',
        'Wildlife monitoring activities',
        'Habitat restoration projects',
        'Guided tours of reserves'
    ],
    itinerary: [
        'Day 1: Arrival and briefing on conservation efforts',
        'Day 2: Field activities and wildlife monitoring',
        'Day 3: Reflection, discussion, and departure'
    ],
    inclusions: [
        'Guided tours with experts',
        'Conservation materials',
        'Meals',
        'Transportation during activities'
    ],
    exclusions: [
        'International flights',
        'Personal expenses',
        'Optional donations'
    ],
    category: 'safari',
    priceRange: 'low'
}
,
{
    title: 'Zanzibar Mangrove Forest Kayaking',
    description: 'Paddle through Zanzibar\'s lush mangrove forests on a guided kayaking tour, exploring hidden waterways and observing diverse birdlife and marine creatures.',
    subdescription: 'An eco-adventure into Zanzibar\'s coastal ecosystems.',
    price: '10% off for groups >5',
    image: 'https://plus.unsplash.com/premium_photo-1750721376801-27a37dfc47e1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8WmFuemliYXIlMjBNYW5ncm92ZSUyMEZvcmVzdCUyMEtheWFraW5nfGVufDB8fDB8fHww',
    gallery: [
        'https://plus.unsplash.com/premium_photo-1750721376801-27a37dfc47e1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8WmFuemliYXIlMjBNYW5ncm92ZSUyMEZvcmVzdCUyMEtheWFraW5nfGVufDB8fDB8fHww',
        'https://plus.unsplash.com/premium_photo-1750721386026-fc78becca6a7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8WmFuemliYXIlMjBNYW5ncm92ZSUyMEZvcmVzdCUyMEtheWFraW5nfGVufDB8fDB8fHww',
        'https://media.istockphoto.com/id/1366040317/photo/small-river-in-mangrove-forest-zanzibar-tropical-forest-in-mud-jozani-forest.jpg?s=612x612&w=0&k=20&c=2J7ss6NIW6NQ7wQJNnrhPIJ9dn0elg1N2jSO4-YDKqM='
    ],
    highlights: [
        'Kayaking through mangrove channels',
        'Bird watching and wildlife spotting',
        'Exploring marine life habitats',
        'Eco-education and conservation insights'
    ],
    itinerary: [
        'Day 1: Kayak briefing and launch',
        'Day 2: Full-day mangrove exploration',
        'Day 3: Return and farewell'
    ],
    inclusions: [
        'Kayak rental',
        'Professional guide',
        'Safety equipment',
        'Meals during tour'
    ],
    exclusions: [
        'International flights',
        'Personal expenses',
        'Travel insurance'
    ],
    category: 'adventure',
    priceRange: 'mid'
},

 
{
    title: 'Zanzibar Kite Surfing Adventure',
    description: 'Harness the winds of Zanzibar for an exhilarating kite surfing experience on its pristine beaches, with lessons from certified instructors.',
    subdescription: 'Ride the waves and winds of Zanzibar.',
    price: '10% off for groups >5',
    image: 'https://media.istockphoto.com/id/966894374/photo/kiteboarders-in-paje-zanzibar-tanzania.jpg?s=612x612&w=0&k=20&c=Jd8oRnlEpMtDeMKVp42W9uHMiNiRbNKkeIa9G_UaCCA=',
    gallery: [
        'https://media.istockphoto.com/id/966894374/photo/kiteboarders-in-paje-zanzibar-tanzania.jpg?s=612x612&w=0&k=20&c=Jd8oRnlEpMtDeMKVp42W9uHMiNiRbNKkeIa9G_UaCCA=',
        'https://media.istockphoto.com/id/926416184/photo/kiteboarders-in-paje-zanzibar-tanzania.jpg?s=612x612&w=0&k=20&c=rUX2DO6azoI2BREh5l9iOVhVR7tCYK7bxXmv-OdZo1Q=',
        'https://media.istockphoto.com/id/463779359/photo/zanzibar-kitesurfing.jpg?s=612x612&w=0&k=20&c=7fb_GJnNo8nFcHCf5eUwsyKiCjkgm6siqumFFU4gf_k='
    ],
    highlights: [
        'Kite surfing lessons',
        'Equipment rental',
        'Safety training',
        'Beachside fun'
    ],
    itinerary: [
        'Day 1: Training session',
        'Day 2: Full-day surfing',
        'Day 3: Advanced practice and departure'
    ],
    inclusions: [
        'Kite surfing gear',
        'Instructor',
        'Safety equipment',
        'Meals'
    ],
    exclusions: [
        'International flights',
        'Personal expenses',
        'Travel insurance'
    ],
    category: 'adventure',
    priceRange: 'high'
},

 
{
    title: 'Zanzibar Bird Watching Expedition',
    description: 'Explore Zanzibar’s unique birdlife with expert guides, spotting endemic and migratory species across the island’s diverse habitats.',
    subdescription: 'Experience the avian wonders of Zanzibar.',
    price: '10% off for groups >5',
    image: 'https://media.istockphoto.com/id/2218136595/photo/the-patient-hunter-of-the-tidal-flats-western-reef-heron.jpg?s=612x612&w=0&k=20&c=4cQTS_ShkXbD4fMY79qTqZVjF8YmyW5Tk0rNqEvsSFQ=',
    gallery: [
        'https://media.istockphoto.com/id/2218136595/photo/the-patient-hunter-of-the-tidal-flats-western-reef-heron.jpg?s=612x612&w=0&k=20&c=4cQTS_ShkXbD4fMY79qTqZVjF8YmyW5Tk0rNqEvsSFQ=',
        'https://media.istockphoto.com/id/872865330/photo/heron-ascending-tide-uroa-beach-tanzania-zanzibar.jpg?s=612x612&w=0&k=20&c=QraprqaE3j6oZ8tXu0G42N_Q-87l0nqmECK5LWbbIPA=',
        'https://media.istockphoto.com/id/465140958/photo/black-bellied-glossy-starling.jpg?s=612x612&w=0&k=20&c=u-87-V3BLd5bXrvWy9gHfnWfprwmXpW6bfuP5Qbpa6I='
    ],
    highlights: ['Bird species identification', 'Habitat exploration', 'Photography tips', 'Conservation insights'],
    itinerary: ['Day 1: Orientation and first birding outing', 'Day 2: Full-day birdwatching', 'Day 3: Advanced spotting and departure'],
    inclusions: ['Expert guide', 'Binoculars', 'Meals', 'Local transport'],
    exclusions: ['International flights', 'Personal expenses', 'Travel insurance'],
    category: 'safari',
    priceRange: 'mid'
},
{
    title: 'Zanzibar Fishing Charter',
    description: 'Experience traditional deep-sea fishing around Zanzibar, learning local techniques and enjoying freshly caught seafood prepared on board.',
    subdescription: 'A hands-on adventure in Zanzibar’s waters.',
    price: '10% off for groups >5',
    image: 'https://media.istockphoto.com/id/873898306/photo/excursion-with-small-boat-around-mnemba-island-off-zanzibar-tanzania.jpg?s=612x612&w=0&k=20&c=QUnP8Sf2jDvbrA4hKWEn8zR4NHhE_AXGISZ8oeZbZEI=',
    gallery: [
        'https://media.istockphoto.com/id/873898306/photo/excursion-with-small-boat-around-mnemba-island-off-zanzibar-tanzania.jpg?s=612x612&w=0&k=20&c=QUnP8Sf2jDvbrA4hKWEn8zR4NHhE_AXGISZ8oeZbZEI=',
        'https://media.istockphoto.com/id/1515673004/photo/fishing.jpg?s=612x612&w=0&k=20&c=1cShIrMifcHO4cUtwKtFBB7N0bfgtstwJSwtF-cTCKg='
        
    ],
    highlights: ['Deep-sea fishing', 'Hands-on lessons', 'Fresh catch meals', 'Sunset views'],
    itinerary: ['Morning: Charter departure', 'Day: Fishing activities', 'Evening: Return and meal preparation'],
    inclusions: ['Boat charter', 'Fishing gear', 'Meals on board', 'Guide'],
    exclusions: ['International flights', 'Personal expenses', 'Processing of catch'],
    category: 'adventure',
    priceRange: 'high'
},

{
    title: 'Zanzibar Artisan Craft Workshop',
    description: 'Join a hands-on workshop to learn traditional Zanzibari crafts such as woodcarving, weaving, and jewelry making, guided by local artisans.',
    subdescription: 'Immerse yourself in Zanzibar’s rich artisanal heritage.',
    price: '10% off for groups >5',
    image: 'https://media.istockphoto.com/id/500872050/photo/craftsman-in-stone-town.jpg?s=612x612&w=0&k=20&c=2a8Y2UQs6K7y4lG1E5IrW67YDXgrccyzJb3FkZWSSAc=',
    gallery: [
        'https://media.istockphoto.com/id/500872050/photo/craftsman-in-stone-town.jpg?s=612x612&w=0&k=20&c=2a8Y2UQs6K7y4lG1E5IrW67YDXgrccyzJb3FkZWSSAc=',
        'https://media.istockphoto.com/id/1018326992/photo/fine-metalwork-craftsman-suicide-lane-stone-town-zanzibar-tanzania.jpg?s=612x612&w=0&k=20&c=9pe23AiD6l3-NmDeYsWudBkbst-WrQ6q_A8C214nNQ0=',
        'https://media.istockphoto.com/id/2183710987/photo/wood-carvers-at-work.jpg?s=612x612&w=0&k=20&c=XQtN_jxJeSsrOMnOQErUq7uczHYEQkxLv0RpQj6dXA4='
    ],
    highlights: ['Woodcarving lessons', 'Weaving demonstrations', 'Jewelry making', 'Interaction with local artisans'],
    itinerary: ['Morning: Workshop introduction and demonstration', 'Afternoon: Hands-on crafting session', 'Evening: Showcase of creations and departure'],
    inclusions: ['All craft materials', 'Instructor guidance', 'Meals', 'Local transport'],
    exclusions: ['International flights', 'Personal expenses', 'Keeping finished products'],
    category: 'cultural',
    priceRange: 'mid'
}

];
