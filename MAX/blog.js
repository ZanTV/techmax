const blogs = [
  {
    id: 1,
    title: "Exploring Stone Town: A Cultural Journey",
    summary: "Step into Zanzibar's Stone Town, a UNESCO World Heritage Site, and experience centuries of history, architecture, and vibrant culture.",
    content: `
      <p>Stone Town, Zanzibar’s historic heart, is a living museum of culture and heritage. Its labyrinth of narrow streets is lined with intricately carved wooden doors, bustling bazaars, and traditional dhows along the waterfront.</p>
      <h4>Must-See Landmarks</h4>
      <p>Don't miss the House of Wonders, the Old Fort, and the Anglican Cathedral. Each site tells a unique story of Zanzibar's rich past.</p>
      <img src="https://media.istockphoto.com/id/926379354/photo/one-of-the-towers-of-the-old-fort-also-known-as-the-arab-fort-in-stone-town-zanzibar-island.jpg?s=612x612&w=0&k=20&c=5m6TctKWVy796BOxFhi4O92yKZusg3jqTFotHv1pJto=" alt="Stone Town Tour" style="border-radius: 10px; margin-top: 10px; width:100%; max-width:900px;" />
      <h4>Cultural Experiences</h4>
      <p>Explore the aromatic spice markets, enjoy traditional Zanzibari cuisine, and attend Swahili music performances. Engage with local artisans crafting Tinga Tinga paintings and learn from guides who share captivating stories passed through generations.</p>
      <img src="https://media.istockphoto.com/id/502865662/photo/tingatinga-paintings-in-tanzania.jpg?s=612x612&w=0&k=20&c=UCFo7KY4Umzyst58m6ZJ4duj0G8nFw0hboClVTGNgA0=" alt="Stone Town Alleyways" style="border-radius: 10px; margin-top: 15px; width:100%; max-width:900px;" />
      <h4>Festivals & Events</h4>
      <p>Stone Town hosts vibrant festivals throughout the year, celebrating music, dance, and arts. Visitors can experience the lively atmosphere and connect with Zanzibar's heritage.</p>
      <img src="https://media.istockphoto.com/id/1271290694/photo/african-gymnasts-perform-in-front-of-tourists-on-a-tropical-beach-before-the-new-year-on-the.jpg?s=612x612&w=0&k=20&c=W6BvLIwWUoZAaae4zzBbI-UA9wIBdo5QdwvjeMyofHY=" alt="Stone Town Festival" style="border-radius: 10px; margin-top: 10px; width:100%; max-width:900px;" />
    `,
    image: "https://media.istockphoto.com/id/2219761344/photo/tanzania-zanzibar-stone-town-old-wooden-door-and-old-architecture.jpg?s=612x612&w=0&k=20&c=IGwB9HFX0t9zjewoWyXi0nRyw59knaM3KBuK_0UtX1M=",
    category: "tours",
    date: "2025-02-15"
  },
  {
    id: 2,
    title: "Essential Travel Tips for Zanzibar",
    summary: "Prepare for your Zanzibar adventure with practical tips on packing, safety, culture, and transportation for an unforgettable experience.",
    content: `
      <p>Visiting Zanzibar? Proper preparation ensures you enjoy every moment. Here are essential tips for a smooth trip.</p>
      <h4>Packing Essentials</h4>
      <p>Bring light, breathable clothes, sun protection, a reusable water bottle, insect repellent, and comfortable shoes. For beach trips, include swimwear and a towel.</p>
      <img src="https://media.istockphoto.com/id/513042980/photo/beach-accessories-bag-straw-hat-sunglasses-on-white-beach.jpg?s=612x612&w=0&k=20&c=9IjNM_iXVHLdyb4MSS-N6kJWPE_YHMUXS4sRYObK5l4=" alt="Travel Tips Zanzibar" style="border-radius: 10px; margin-top: 10px; width:100%; max-width:900px;" />
      <h4>Respect Local Culture</h4>
      <p>Zanzibar is predominantly Muslim. Dress modestly, especially in villages and religious sites. Always ask before photographing locals.</p>
      <h4>Health & Safety</h4>
      <p>Stay hydrated, use mosquito nets, and follow basic health precautions. Vaccinations and anti-malarial medication are recommended.</p>
      <img src="https://media.istockphoto.com/id/1309748857/photo/new-normal-for-summer-travel.jpg?s=612x612&w=0&k=20&c=G3b9pIjgOE5KyZxNI7kCrdwL0FD7UZSM6MB0hV4r_hw=" alt="Sunset Zanzibar" style="border-radius: 10px; margin-top: 15px; width:100%; max-width:900px;" />
      <h4>Connectivity & Transportation</h4>
      <p>Local SIM cards provide affordable data. Use dala-dalas for budget travel or hire a bodaboda for short trips, agreeing on fares in advance.</p>
      <img src="https://media.istockphoto.com/id/672873028/photo/benjamin-mkapa-road-at-darajani-market-stone-town-zanzibar-indian-ocean-east-africa.jpg?s=612x612&w=0&k=20&c=Lpi-6q66DUdV3e9gY7ubLxFXZfnCrmTu6R4oJLDKoVk=" alt="Zanzibar Connectivity" style="border-radius: 10px; margin-top: 10px; width:100%; max-width:900px;" />
    `,
    image: "https://media.istockphoto.com/id/171248405/photo/picas-zanzibar.jpg?s=612x612&w=0&k=20&c=m9FDyG9Ze4s5XU88lFQ6dGdrgpMEMkE1RSqBuaMZgfo=",
    category: "tips",
    date: "2025-02-12"
  },
  {
    id: 3,
    title: "Latest Updates on Zanzibar Tourism",
    summary: "Catch up on Zanzibar’s newest attractions, events, and sustainable tourism initiatives for travelers.",
    content: `
      <p>Zanzibar’s tourism scene is evolving rapidly. Here are the latest highlights for travelers.</p>
      <h4>New Resorts & Experiences</h4>
      <p>Eco-friendly resorts now offer beach yoga, marine tours, and community visits. Immerse yourself in culture while staying sustainable.</p>
      <img src="https://media.istockphoto.com/id/1437243132/photo/carefree-caucasian-woman-dancing-on-the-beach-zanzibar-tanzania.jpg?s=612x612&w=0&k=20&c=htSFfJLQPYOuNvxrPrlK4WtDGnwAnhBX0k6vo_H3L84=" alt="Zanzibar News" style="border-radius: 10px; margin-top: 10px; width:100%; max-width:900px;" />
      <h4>Festivals & Events</h4>
      <p>Annual festivals, like Sauti za Busara and Zanzibar Film Festival, celebrate music, arts, and culture from across Africa.</p>
      <h4>Travel Regulations</h4>
      <p>Check updated visa and health requirements for a smooth entry into Zanzibar.</p>
      <h4>Culinary Highlights</h4>
      <p>New restaurants combine traditional Zanzibari flavors with global cuisine for an unforgettable gastronomic experience.</p>
      
      <h4>Conservation & Eco-Tourism</h4>
      <p>Participate in beach clean-ups and coral reef restoration, supporting Zanzibar’s marine and wildlife preservation efforts.</p>
      <img src="https://media.istockphoto.com/id/2198498152/photo/endangered-sea-turtle-gliding-through-turquoise-waters-wooden-platform-framing-rocky-zanzibar.jpg?s=612x612&w=0&k=20&c=JKa91VoNbgFIw0Lzmf22ilHDA4mbNdqA22IhrLWId1g=" alt="Conservation Efforts" style="border-radius: 10px; margin-top: 15px; width:100%; max-width:900px;" />
    `,
    image: "https://media.istockphoto.com/id/2216670642/photo/tanzania-nungwi-sunset.jpg?s=612x612&w=0&k=20&c=B06jjhKtq95iBBBfMxk4XP-KUs5aoVjFc5f2oHi9yZk=",
    category: "news",
    date: "2025-02-10"
  },
  {
    id: 4,
    title: "Beach Adventures: Snorkeling in Mnemba Atoll",
    summary: "Explore Mnemba Atoll’s crystal-clear waters, colorful coral reefs, and vibrant marine life on a snorkeling adventure.",
    content: `
      <p>Mnemba Atoll is one of Zanzibar’s top snorkeling destinations, with calm waters perfect for beginners and experienced snorkelers alike.</p>
      <h4>Marine Life</h4>
      <p>Swim with tropical fish, turtles, and occasionally dolphins. Guides provide underwater insights to enhance your experience.</p>
      <img src="https://media.istockphoto.com/id/2196630292/photo/aerial-view-of-colorful-boats-and-yachts-in-transparent-water-on-sunny-summer-day-mnemba.webp?a=1&b=1&s=612x612&w=0&k=20&c=pINj1zDXGUMDDYbno5zqOIQJRsKlnWeX7V4uVVnAceA=" alt="Snorkeling Mnemba" style="border-radius: 10px; margin-top: 10px; width:100%; max-width:900px;" />
      <h4>Responsible Tourism</h4>
      <p>Use reef-safe sunscreen and avoid touching coral. Protecting Mnemba’s marine ecosystem is essential for future generations.</p>
      <h4>Booking Tips</h4>
      <p>Book with local operators for safety and expert guidance. Early morning trips offer the clearest waters.</p>
    `,
    image: "https://media.istockphoto.com/id/518413074/photo/snorkling-on-zanzibar-island.jpg?s=612x612&w=0&k=20&c=JUztwFz2Ai1MfN7uMkKE6BMXmMNCm8HcB7tu-nt5YUA=",
    category: "tours",
    date: "2025-02-01"
  }
];

// Utility functions
function getAllBlogs() {
  return blogs;
}

function getBlogById(id) {
  return blogs.find(blog => blog.id === id);
}

function getRecentPosts(limit = 3) {
  return blogs
    .slice()
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, limit);
}

export { getAllBlogs, getBlogById, getRecentPosts };
