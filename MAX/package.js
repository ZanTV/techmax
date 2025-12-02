// Package data
const packages = [
    {
        title: 'Zanzibar Safari Adventure Package',
        description: 'Embark on an unforgettable safari adventure in Zanzibar, exploring wildlife reserves, cultural sites, and pristine beaches. This comprehensive package includes guided tours, accommodations, and meals for a complete experience.',
        subdescription: 'A full-day adventure combining safari and cultural immersion.',
        price: '15% off for groups >10',
        days: 3,
        image: 'https://media.istockphoto.com/id/1152427067/photo/family-exploring-a-village-on-tropical-vacations-in-africa.jpg?s=612x612&w=0&k=20&c=j3zhEbDeNKxHK0ouTwCG40y-374UCuLAlZTsfmfO2h8=',
        gallery: [
            'https://media.istockphoto.com/id/1917083441/photo/the-maasai-warriors-on-sand-beach-of-zanzibar-island.jpg?s=612x612&w=0&k=20&c=RkBKpiHGWInrWI9kEmDRsCoP7_Cx4_fc7lzV2IYa-Bc=',
            'https://media.istockphoto.com/id/506895244/photo/zanzibar-red-colobus-monkey.jpg?s=612x612&w=0&k=20&c=Bh65c2bRcLFxDcPBbg4iPTdFVFJVi4X-4uYNbKSlbOM=',
            'https://media.istockphoto.com/id/1524477095/photo/meal.jpg?s=612x612&w=0&k=20&c=gv0Ru0DCa7Izha-q96AI4A_8wEZe-KejDzmK7eOZ0rQ='
        ],
        highlights: ['Wildlife safari in Jozani Forest', 'Stone Town cultural tour', 'Beach relaxation at Nungwi', 'Traditional Swahili dinner'],
        inclusions: ['Guided tours', 'Accommodation in beachfront hotel', 'Meals (breakfast, lunch, dinner)', 'Transportation', 'Entrance fees'],
        exclusions: ['International flights', 'Personal expenses', 'Travel insurance', 'Gratuities'],
        category: 'adventure',
        priceRange: 'high',
        itinerary: [
            {
                day: 1,
                title: 'Arrival and Jozani Forest Safari',
                activities: ['Arrival at Zanzibar International Airport', 'Transfer to accommodation', 'Afternoon wildlife safari in Jozani Forest', 'Evening relaxation at the beach', 'Dinner at the hotel']
            },
            {
                day: 2,
                title: 'Stone Town Cultural Exploration',
                activities: ['Morning breakfast', 'Full-day guided tour of Stone Town UNESCO site', 'Visit historical sites and markets', 'Traditional Swahili lunch', 'Afternoon free time for shopping', 'Sunset dhow cruise']
            },
            {
                day: 3,
                title: 'Beach Relaxation and Departure',
                activities: ['Morning beach activities at Nungwi', 'Swimming and water sports', 'Traditional farewell dinner', 'Transfer to airport for departure']
            }
        ]
    },
    {
        title: 'Romantic Zanzibar Getaway Package',
        description: 'Indulge in a romantic escape to Zanzibar with private beach dinners, spa treatments, and sunset cruises. Perfect for couples seeking intimacy and luxury in paradise.',
        subdescription: 'Luxury and romance for two.',
        price: '15% off for groups >10',
        days: 5,
        image: 'https://media.istockphoto.com/id/2237888045/photo/romantic-couple-relaxing-and-drinking-coconut-on-vacatin-in-hotel-room.jpg?s=612x612&w=0&k=20&c=_fsgpRI9B_gIIfvHdRNMdhDq5xakAHUzLd1oztlpK8A=',
        gallery: [
            'https://media.istockphoto.com/id/2237888045/photo/romantic-couple-relaxing-and-drinking-coconut-on-vacatin-in-hotel-room.jpg?s=612x612&w=0&k=20&c=_fsgpRI9B_gIIfvHdRNMdhDq5xakAHUzLd1oztlpK8A=',
            'https://media.istockphoto.com/id/2243909423/photo/romantic-holiday-moments-at-luxury-villa.jpg?s=612x612&w=0&k=20&c=Zpla7y1Ni854DIc9vEDfXSpD7eYl3zQn5Xvy7qMe-C8=',
            'https://media.istockphoto.com/id/2243910566/photo/romantic-getawey-couple-enjoying-walk-by-the-ocean.jpg?s=612x612&w=0&k=20&c=HtRTvCACA9TEG7lq0IspLWDz4Te6P3MZZMqgDM2iZtU='
        ],
        highlights: ['Private beach villa', 'Couples spa session', 'Sunset dhow cruise', 'Romantic dinner under the stars'],
        inclusions: ['Luxury accommodation', 'Spa treatments', 'Private transfers', 'Meals and beverages', 'Guided excursions'],
        exclusions: ['International flights', 'Personal expenses', 'Travel insurance', 'Gratuities'],
        category: 'luxury',
        priceRange: 'high',
        itinerary: [
            {
                day: 1,
                title: 'Arrival and Villa Check-in',
                activities: ['Arrival at Zanzibar International Airport', 'Private transfer to luxury villa', 'Welcome champagne and relaxation', 'Romantic dinner at the villa']
            },
            {
                day: 2,
                title: 'Spa and Beach Day',
                activities: ['Morning couples spa session', 'Private beach time', 'Afternoon massage', 'Sunset walk on the beach']
            },
            {
                day: 3,
                title: 'Island Exploration',
                activities: ['Guided tour of Stone Town', 'Visit to spice plantations', 'Private lunch at a beach restaurant', 'Evening dhow cruise']
            },
            {
                day: 4,
                title: 'Adventure and Relaxation',
                activities: ['Snorkeling excursion', 'Kayaking in the lagoon', 'Afternoon free time', 'Romantic beach picnic']
            },
            {
                day: 5,
                title: 'Departure Day',
                activities: ['Morning breakfast at villa', 'Last beach moments', 'Private transfer to airport', 'Departure']
            }
        ]
    },
    {
        title: 'Family Zanzibar Exploration Package',
        description: 'Create lasting memories with your family on a Zanzibar adventure featuring kid-friendly activities, snorkeling, and cultural experiences. Includes accommodations and meals for the whole family.',
        subdescription: 'Fun and adventure for families.',
        price: '15% off for groups >10',
        days: 2,
        image: 'https://media.istockphoto.com/id/1328273656/photo/rear-view-of-a-family-relaxing-on-the-beach-in-summer-day.jpg?s=612x612&w=0&k=20&c=TlG-qdopTY7Lc0t5GLSvCnvfzp3U0fD4HsLL_856XeA=',
        gallery: [
            'https://media.istockphoto.com/id/1328273656/photo/rear-view-of-a-family-relaxing-on-the-beach-in-summer-day.jpg?s=612x612&w=0&k=20&c=TlG-qdopTY7Lc0t5GLSvCnvfzp3U0fD4HsLL_856XeA=',
            'https://media.istockphoto.com/id/1163781680/photo/family-portrait-of-a-family-on-vacation-in-zanzibar.jpg?s=612x612&w=0&k=20&c=4P0K-pMz8u53RYK8z_BT010dfL1IKahlGa7x8SpPZUA=',
            'https://media.istockphoto.com/id/1079194222/photo/family-enjoying-christmas-lunch-on-the-tropical-seaside-under-the-palm-tree.jpg?s=612x612&w=0&k=20&c=AHqZRvgORPAnn4ou5DuAxO6gnRw-FyBgm8bLin3y5RU='
        ],
        highlights: ['Snorkeling at Mnemba Atoll', 'Stone Town walking tour', 'Beach games and activities', 'Family-friendly dining'],
        inclusions: ['Family accommodation', 'Guided tours', 'Snorkeling gear', 'Meals (breakfast, lunch, dinner)', 'Transportation'],
        exclusions: ['International flights', 'Personal expenses', 'Travel insurance', 'Gratuities'],
        category: 'family',
        priceRange: 'mid',
        itinerary: [
            {
                day: 1,
                title: 'Arrival and Stone Town Exploration',
                activities: ['Arrival at Zanzibar International Airport', 'Transfer to family accommodation', 'Afternoon walking tour of Stone Town', 'Family dinner at the hotel']
            },
            {
                day: 2,
                title: 'Snorkeling and Beach Fun',
                activities: ['Morning snorkeling at Mnemba Atoll', 'Beach games and activities', 'Family lunch', 'Departure transfer to airport']
            }
        ]
    }
];
