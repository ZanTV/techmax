$(document).ready(function() {
    const imageData = [
        {
            src: "https://plus.unsplash.com/premium_photo-1676528716384-acf88fcbf7d9?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8emFuemliYXIlMjBzdG9uZSUyMHRvd258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600",
            alt: "Stone Town Cultural Tour",
            category: "tours",
            title: "Stone Town Cultural Tour",
            location: "Zanzibar City, Tanzania"
        },
        {
            src: "https://plus.unsplash.com/premium_photo-1701007034584-38c5ec8114a5?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YmVhY2glMjByZWxheHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600",
            alt: "Beach Relaxation Tour",
            category: "tours",
            title: "Beach Relaxation Tour",
            location: "Nungwi Beach, Zanzibar"
        },
        {
            src: "https://images.unsplash.com/photo-1760272067473-009a04d54cc5?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8V2lsZGxpZmUlMjBTYWZhcmklMjBUb3VyfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600",
            alt: "Wildlife Safari Tour",
            category: "tours",
            title: "Wildlife Safari Tour",
            location: "Jozani Forest, Zanzibar"
        },
        {
            src: "https://plus.unsplash.com/premium_photo-1661757655835-4546f4e865e9?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Um9tYW50aWMlMjBIb25leW1vb24lMjBUb3VyfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600",
            alt: "Romantic Honeymoon Tour",
            category: "tours",
            title: "Romantic Honeymoon Tour",
            location: "Paje Beach, Zanzibar"
        },
        {
            src: "https://plus.unsplash.com/premium_photo-1718737641394-feff4fba4882?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8WmFuemliYXIlMjBDdWx0dXJhbCUyMEZlc3RpdmFsfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600",
            alt: "Zanzibar Cultural Festival",
            category: "events",
            title: "Zanzibar Cultural Festival",
            location: "Stone Town, Zanzibar"
        },
        {
            src: "https://plus.unsplash.com/premium_photo-1726873289345-89cc7a4cf2ba?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8QmVhY2glMjBXZWRkaW5nJTIwRXZlbnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600",
            alt: "Beach Wedding Event",
            category: "events",
            title: "Beach Wedding Event",
            location: "Paje Beach, Zanzibar"
        },
        {
            src: "https://images.unsplash.com/photo-1676156787191-c055f62e9771?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8WmFuemliYXIlMjBNdXNpYyUyMEZlc3RpdmFsfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600",
            alt: "Zanzibar Music Festival",
            category: "events",
            title: "Zanzibar Music Festival",
            location: "Nungwi, Zanzibar"
        },
        {
            src: "https://images.unsplash.com/photo-1675843776560-b936ba1a931a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8U25vcmtlbGluZyUyMEFkdmVudHVyZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600",
            alt: "Snorkeling Adventure",
            category: "excursions",
            title: "Snorkeling Adventure",
            location: "Mnemba Atoll, Zanzibar"
        },
        {
            src: "https://images.unsplash.com/photo-1590640265333-3aee45101470?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8RG9scGhpbiUyMFdhdGNoaW5nJTIwRXhjdXJzaW9ufGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600",
            alt: "Dolphin Watching Excursion",
            category: "excursions",
            title: "Dolphin Watching Excursion",
            location: "Kizimkazi, Zanzibar"
        },
        {
            src: "https://images.unsplash.com/photo-1729689186959-2753ab6d6800?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Qm9hdCUyMFRyaXAlMjBFeGN1cnNpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600",
            alt: "Boat Trip Excursion",
            category: "excursions",
            title: "Boat Trip Excursion",
            location: "Indian Ocean, Zanzibar"
        },
        {
            src: "https://images.unsplash.com/photo-1694960679817-f471fb7d49dc?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fEpvemFuaSUyMGZvcmVzdCUyMGluJTIwemFuemliYXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600",
            alt: "Jozani Chwaka Bay National Park",
            category: "nature",
            title: "Jozani Chwaka Bay National Park",
            location: "Zanzibar, Tanzania"
        },
        {
            src: "https://plus.unsplash.com/premium_photo-1679366697638-af8505ceb16d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8U3BpY2UlMjBQbGFudGF0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600",
            alt: "Spice Plantation Nature",
            category: "nature",
            title: "Spice Plantation",
            location: "Unguja Island, Zanzibar"
        }
    ];

    function createGalleryItem(item) {
        const galleryItem = $(`
            <div class="gallery-item fade-in" data-category="${item.category}">
                <a href="${item.src}" class="gallery-link">
                    <img src="${item.src}" alt="${item.alt}">
                    <div class="overlay">
                        <h5>${item.title}</h5>
                        <p>${item.location}</p>
                    </div>
                </a>
            </div>
        `);
        return galleryItem;
    }

    function populateGallery() {
        const galleryGrid = $("#galleryGrid");
        galleryGrid.empty();
        imageData.forEach(item => {
            const galleryItem = createGalleryItem(item);
            galleryGrid.append(galleryItem);
        });

        $('.gallery-link').magnificPopup({
            type: 'image',
            gallery: { enabled: true },
            removalDelay: 300,
            mainClass: 'mfp-fade'
        });
    }

    function setupFilters() {
        $('.filter-buttons .btn').on('click', function() {
            const filter = $(this).data('filter');
            console.log("Filter selected:", filter);
            $('.filter-buttons .btn').removeClass('active');
            $(this).addClass('active');

            const allItems = $('.gallery-item');
            console.log("Total gallery items:", allItems.length);

            allItems.addClass('hidden').hide();

            if (filter === 'all') {
                allItems.removeClass('hidden').show();
                console.log("Showing all items");
            } else {
                const filteredItems = allItems.filter(`[data-category="${filter}"]`);
                filteredItems.removeClass('hidden').show();
                console.log(`Showing ${filteredItems.length} items for filter: ${filter}`);
            }
        });
    }

    populateGallery();
    setupFilters();
});
