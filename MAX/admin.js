// Admin Data for Techmax Tours Dashboard

const adminData = {
    // Email Data
    inboxEmails: [
        { from: 'user1@example.com', subject: 'Inquiry about tours', date: '2023-10-01', message: 'Dear Techmax Tours,\n\nI am interested in booking a tour to Zanzibar. Could you please provide more information about your available packages?\n\nBest regards,\nUser1' },
        { from: 'user2@example.com', subject: 'Booking confirmation', date: '2023-10-02', message: 'Dear Techmax Tours,\n\nI have successfully booked a tour. Please confirm the details.\n\nBest regards,\nUser2' }
    ],

    newsletterEmails: [
        { email: 'subscriber1@example.com', subscribedDate: '2023-09-15', status: 'Active' },
        { email: 'subscriber2@example.com', subscribedDate: '2023-09-20', status: 'Active' }
    ],

    contactEmails: [
        { name: 'John Smith', email: 'john@example.com', subject: 'Tour Inquiry', message: 'Interested in Zanzibar tour...', date: '2023-10-01', status: 'Pending' },
        { name: 'Jane Doe', email: 'jane@example.com', subject: 'Booking Question', message: 'How to book a package...', date: '2023-10-02', status: 'Replied' }
    ],

    bookingEmails: [
        { name: 'Michael Johnson', email: 'michael@example.com', package: 'Zanzibar Beach Tour', travelDate: '2023-11-15', status: 'Processing' },
        { name: 'Sarah Wilson', email: 'sarah@example.com', package: 'Stone Town Experience', travelDate: '2023-12-01', status: 'Confirmed' }
    ],

    // User Data
    users: [
        { name: 'John Doe', email: 'john@example.com', role: 'User', status: 'Active' },
        { name: 'Jane Smith', email: 'jane@example.com', role: 'Admin', status: 'Active' }
    ],

    // Tours Data
    tours: [
        { name: 'Zanzibar Island Tour', duration: '3 Days', price: '$450', bookings: 25, status: 'Active' },
        { name: 'Stone Town Walking Tour', duration: '1 Day', price: '$80', bookings: 15, status: 'Active' },
        { name: 'Spice Plantation Tour', duration: '2 Days', price: '$120', bookings: 20, status: 'Active' },
        { name: 'Dolphin Watching Adventure', duration: '1 Day', price: '$75', bookings: 18, status: 'Active' },
        { name: 'Jozani Forest Hike', duration: 'Half Day', price: '$40', bookings: 12, status: 'Active' },
        { name: 'Prison Island Visit', duration: '1 Day', price: '$60', bookings: 10, status: 'Active' },
        { name: 'Beach Relaxation Package', duration: '2 Days', price: '$200', bookings: 22, status: 'Active' },
        { name: 'Cultural Heritage Tour', duration: '3 Days', price: '$350', bookings: 16, status: 'Active' },
        { name: 'Sunset Dhow Cruise', duration: 'Evening', price: '$50', bookings: 30, status: 'Active' },
        { name: 'Mangrove Forest Kayaking', duration: 'Half Day', price: '$45', bookings: 14, status: 'Active' }
    ],

    // Car Rental Data
    cars: [
        { model: 'Toyota Corolla', type: 'Sedan', price: '$35', availability: 'Available', bookings: 12 },
        { model: 'Jeep Wrangler', type: 'SUV', price: '$60', availability: 'Booked', bookings: 8 },
        { model: 'Honda Civic', type: 'Sedan', price: '$40', availability: 'Available', bookings: 15 },
        { model: 'Ford Explorer', type: 'SUV', price: '$70', availability: 'Available', bookings: 10 },
        { model: 'BMW X5', type: 'Luxury SUV', price: '$120', availability: 'Booked', bookings: 5 },
        { model: 'Nissan Altima', type: 'Sedan', price: '$45', availability: 'Available', bookings: 18 },
        { model: 'Chevrolet Tahoe', type: 'SUV', price: '$80', availability: 'Available', bookings: 7 },
        { model: 'Mercedes C-Class', type: 'Luxury Sedan', price: '$100', availability: 'Booked', bookings: 3 }
    ],

    // Package Data
    packages: [
        { name: 'Zanzibar Complete Package', includes: 'Tour + Hotel + Transfer', price: '$800', duration: '5 Days', bookings: 18 },
        { name: 'Stone Town Cultural Package', includes: 'Tour + Guide + Meals', price: '$350', duration: '2 Days', bookings: 22 },
        { name: 'Beach Relaxation Package', includes: 'Hotel + Spa + Transfer', price: '$600', duration: '4 Days', bookings: 15 },
        { name: 'Adventure Package', includes: 'Hiking + Snorkeling + Guide', price: '$450', duration: '3 Days', bookings: 20 },
        { name: 'Family Package', includes: 'Tour + Hotel + Activities', price: '$950', duration: '6 Days', bookings: 12 },
        { name: 'Honeymoon Deal', includes: 'Romantic Tour + Resort + Dinner', price: '$1200', duration: '5 Days', bookings: 8 },
        { name: 'Budget Package', includes: 'Basic Tour + Hostel', price: '$300', duration: '3 Days', bookings: 25 },
        { name: 'Luxury Package', includes: 'Private Tour + 5-Star Hotel', price: '$2000', duration: '7 Days', bookings: 5 }
    ],

    // Excursion Data
    excursions: [
        { name: 'Spice Tour', type: 'Cultural', price: '$50', duration: '4 Hours', bookings: 30 },
        { name: 'Dolphin Watching', type: 'Adventure', price: '$75', duration: '6 Hours', bookings: 25 },
        { name: 'Prison Island Visit', type: 'Historical', price: '$60', duration: '5 Hours', bookings: 20 },
        { name: 'Jozani Forest Hike', type: 'Nature', price: '$45', duration: '3 Hours', bookings: 18 },
        { name: 'Stone Town Walking Tour', type: 'Cultural', price: '$40', duration: '2 Hours', bookings: 35 },
        { name: 'Sunset Dhow Cruise', type: 'Romantic', price: '$80', duration: '3 Hours', bookings: 22 },
        { name: 'Mangrove Forest Kayaking', type: 'Adventure', price: '$55', duration: '4 Hours', bookings: 15 },
        { name: 'Beach Snorkeling', type: 'Water Sports', price: '$65', duration: '5 Hours', bookings: 28 }
    ],

    // Blog Data
    blogs: [
        { title: 'Exploring Zanzibar\'s Hidden Gems', author: 'Admin', publishedDate: '2023-09-15', views: 1234, status: 'Published' },
        { title: 'Top 10 Beaches in Zanzibar', author: 'Editor', publishedDate: '2023-09-20', views: 987, status: 'Published' }
    ],

    // Reviews Data
    reviews: [
        { name: 'John Doe', email: 'john@example.com', rating: 5, review: 'Amazing experience! Highly recommend.', date: '2023-10-01', status: 'Approved' },
        { name: 'Jane Smith', email: 'jane@example.com', rating: 4, review: 'Great tour, but could be better organized.', date: '2023-10-02', status: 'Approved' },
        { name: 'Mike Johnson', email: 'mike@example.com', rating: 5, review: 'Fantastic service and beautiful locations.', date: '2023-10-03', status: 'Pending' },
        { name: 'Sarah Wilson', email: 'sarah@example.com', rating: 3, review: 'Good, but expensive for what you get.', date: '2023-10-04', status: 'Approved' },
        { name: 'David Brown', email: 'david@example.com', rating: 5, review: 'Exceeded expectations! Will book again.', date: '2023-10-05', status: 'Approved' }
    ],

    // Analytics Data
    analytics: {
        overallViews: { labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'], data: [1200, 1900, 3000, 5000, 2000, 3000] },
        pageViews: { labels: ['Home', 'Tours', 'Bookings', 'Contact', 'Techmax short', 'About', 'Blog'], data: [5677, 2345, 1234, 890, 10567, 1890, 987] },
        newViewers: { labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'], data: [150, 200, 180, 220] },
        newViewersSource: { labels: ['Google Search', 'Social Media', 'Direct', 'Referral'], data: [40, 30, 20, 10] },
        returningViewers: { labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'], data: [300, 350, 280, 320] },
        returningVsNew: {
            labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
            newData: [150, 200, 180, 220],
            returningData: [300, 350, 280, 320]
        },
        specialInsights: { labels: ['Performance', 'Engagement', 'Conversion', 'Retention', 'Satisfaction'], data: [85, 90, 75, 80, 88] },
        newsletterPerformance: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            openRate: [25, 30, 28, 35, 32, 38],
            clickRate: [5, 7, 6, 8, 7, 9]
        },
        contactForm: { labels: ['Tour Inquiry', 'Booking Question', 'Pricing', 'Other'], data: [45, 30, 15, 10] },
        bookingTrends: { labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'], data: [20, 35, 45, 50, 40, 55] },
        popularPackages: { labels: ['Zanzibar Complete', 'Stone Town Cultural', 'Beach Relaxation', 'Adventure Package'], data: [40, 30, 20, 10] },
        tourPerformance: { labels: ['Zanzibar Island Tour', 'Stone Town Walking Tour', 'Spice Plantation Tour', 'Dolphin Watching'], data: [25, 15, 20, 18] },
        carRental: { labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'], data: [12, 18, 22, 25, 20, 28] },
        packagePerformance: { labels: ['Zanzibar Complete', 'Stone Town Cultural', 'Family Package', 'Honeymoon Deal'], data: [18, 22, 15, 12] },
        excursion: { labels: ['Spice Tour', 'Dolphin Watching', 'Prison Island', 'Jozani Forest'], data: [30, 25, 20, 25] },
        blogPerformance: { labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'], data: [1200, 1500, 1800, 1600, 2000, 2200] }
    },

    // Page Analytics Table Data
    pageAnalytics: [
        { page: 'Home', views: 5677, uniqueVisitors: 3456, bounceRate: '45%', avgTime: '2:30' },
        { page: 'Tour', views: 2345, uniqueVisitors: 1890, bounceRate: '38%', avgTime: '3:15' },
        { page: 'Booking form', views: 1234, uniqueVisitors: 987, bounceRate: '52%', avgTime: '1:45' },
        { page: 'Contact', views: 890, uniqueVisitors: 654, bounceRate: '41%', avgTime: '2:10' },
        { page: 'Techmax short', views: 10567, uniqueVisitors: 1754, bounceRate: '69%', avgTime: '5:10' },
        { page: 'About', views: 567, uniqueVisitors: 432, bounceRate: '35%', avgTime: '2:45' },
        { page: 'Blog', views: 1890, uniqueVisitors: 1234, bounceRate: '48%', avgTime: '3:00' },
        { page: 'Gallery', views: 1456, uniqueVisitors: 1098, bounceRate: '42%', avgTime: '2:20' },
        { page: 'Car rental', views: 789, uniqueVisitors: 567, bounceRate: '55%', avgTime: '1:50' },
        { page: 'Excursion', views: 1234, uniqueVisitors: 987, bounceRate: '39%', avgTime: '2:55' },
        { page: 'Planner', views: 678, uniqueVisitors: 543, bounceRate: '46%', avgTime: '3:10' },
        { page: 'Package', views: 2345, uniqueVisitors: 1890, bounceRate: '37%', avgTime: '4:00' }
    ],

    // New Viewers Detailed Data
    newViewersDetails: [
        { date: '2023-10-01', newViewers: 150, source: 'Google Search', device: 'Mobile', location: 'Tanzania' },
        { date: '2023-10-02', newViewers: 200, source: 'Social Media', device: 'Desktop', location: 'Kenya' },
        { date: '2023-10-03', newViewers: 180, source: 'Direct', device: 'Mobile', location: 'USA' },
        { date: '2023-10-04', newViewers: 220, source: 'Referral', device: 'Tablet', location: 'UK' },
        { date: '2023-10-05', newViewers: 190, source: 'Google Search', device: 'Desktop', location: 'Germany' },
        { date: '2023-10-06', newViewers: 210, source: 'Social Media', device: 'Mobile', location: 'India' },
        { date: '2023-10-07', newViewers: 175, source: 'Direct', device: 'Tablet', location: 'Canada' },
        { date: '2023-10-08', newViewers: 230, source: 'Referral', device: 'Mobile', location: 'Australia' }
    ],

    // Returning Viewers Details
    returningViewersDetails: [
        { date: '2023-10-01', returningViewers: 300, avgSessionDuration: '4:30', pagesPerSession: 3.2, conversionRate: '15%' },
        { date: '2023-10-02', returningViewers: 350, avgSessionDuration: '5:15', pagesPerSession: 4.1, conversionRate: '18%' },
        { date: '2023-10-03', returningViewers: 280, avgSessionDuration: '3:45', pagesPerSession: 2.8, conversionRate: '12%' }
    ],

    // Calendar Events
    calendarEvents: [
        {
            id: '1',
            title: 'Tour Booking',
            start: '2023-10-01',
            description: 'Booking for Zanzibar Island Tour',
            reminder: 60 // minutes before
        },
        {
            id: '2',
            title: 'Excursion Event',
            start: '2025-11-05',
            end: '2025-12-01',
            description: 'Stone Town Cultural Excursion',
            reminder: 120
        }
    ],

    // Right Sidebar Metrics
    rightSidebar: {
        totalViews: 12345,
        emailsReceived: 567,
        emailsSent: 234,
        activeUsers: 89
    }
};

// Function to populate inbox emails table
function populateInboxEmails() {
    const tbody = document.querySelector('#inboxTable tbody');
    tbody.innerHTML = '';
    adminData.inboxEmails.forEach(email => {
        const row = `
            <tr>
                <td>${email.from}</td>
                <td>${email.subject}</td>
                <td>${email.date}</td>
                <td><button class="btn btn-sm btn-primary">View</button></td>
            </tr>
        `;
        tbody.innerHTML += row;
    });
}

// Function to populate newsletter emails table
function populateNewsletterEmails() {
    const tbody = document.querySelector('#newsletterTable tbody');
    tbody.innerHTML = '';
    adminData.newsletterEmails.forEach(email => {
        const row = `
            <tr>
                <td>${email.email}</td>
                <td>${email.subscribedDate}</td>
                <td><span class="badge bg-success">${email.status}</span></td>
                <td><button class="btn btn-sm btn-danger">Unsubscribe</button></td>
            </tr>
        `;
        tbody.innerHTML += row;
    });
}

// Function to populate contact emails table
function populateContactEmails() {
    const tbody = document.querySelector('#contactTable tbody');
    tbody.innerHTML = '';
    adminData.contactEmails.forEach(email => {
        const statusClass = email.status === 'Pending' ? 'warning' : 'success';
        const row = `
            <tr>
                <td>${email.name}</td>
                <td>${email.email}</td>
                <td>${email.subject}</td>
                <td>${email.message}</td>
                <td>${email.date}</td>
                <td><span class="badge bg-${statusClass}">${email.status}</span></td>
                <td><button class="btn btn-sm btn-primary">Reply</button></td>
            </tr>
        `;
        tbody.innerHTML += row;
    });
}

// Function to populate booking emails table
function populateBookingEmails() {
    const tbody = document.querySelector('#bookingTable tbody');
    tbody.innerHTML = '';
    adminData.bookingEmails.forEach(email => {
        const statusClass = email.status === 'Processing' ? 'info' : 'success';
        const row = `
            <tr>
                <td>${email.name}</td>
                <td>${email.email}</td>
                <td>${email.package}</td>
                <td>${email.travelDate}</td>
                <td><span class="badge bg-${statusClass}">${email.status}</span></td>
                <td><button class="btn btn-sm btn-primary">Confirm</button></td>
            </tr>
        `;
        tbody.innerHTML += row;
    });
}

// Function to populate users table
function populateUsers() {
    const tbody = document.querySelector('#usersTable tbody');
    tbody.innerHTML = '';
    adminData.users.forEach(user => {
        const row = `
            <tr>
                <td>${user.name}</td>
                <td>${user.email}</td>
                <td>${user.role}</td>
                <td><span class="badge bg-success">${user.status}</span></td>
                <td>
                    <button class="btn btn-sm btn-primary me-1">Edit</button>
                    <button class="btn btn-sm btn-danger">Delete</button>
                </td>
            </tr>
        `;
        tbody.innerHTML += row;
    });
}

// Function to populate tours table
function populateTours() {
    const tbody = document.querySelector('#toursTable tbody');
    tbody.innerHTML = '';
    adminData.tours.forEach(tour => {
        const row = `
            <tr>
                <td>${tour.name}</td>
                <td>${tour.duration}</td>
                <td>${tour.price}</td>
                <td>${tour.bookings}</td>
                <td><span class="badge bg-success">${tour.status}</span></td>
                <td>
                    <button class="btn btn-sm btn-primary me-1">Edit</button>
                    <button class="btn btn-sm btn-danger">Delete</button>
                </td>
            </tr>
        `;
        tbody.innerHTML += row;
    });
}

// Function to populate cars table
function populateCars() {
    const tbody = document.querySelector('#carsTable tbody');
    tbody.innerHTML = '';
    adminData.cars.forEach(car => {
        const availabilityClass = car.availability === 'Available' ? 'success' : 'warning';
        const row = `
            <tr>
                <td>${car.model}</td>
                <td>${car.type}</td>
                <td>${car.price}</td>
                <td><span class="badge bg-${availabilityClass}">${car.availability}</span></td>
                <td>${car.bookings}</td>
                <td>
                    <button class="btn btn-sm btn-primary me-1">Edit</button>
                    <button class="btn btn-sm btn-danger">Delete</button>
                </td>
            </tr>
        `;
        tbody.innerHTML += row;
    });
}

// Function to populate packages table
function populatePackages() {
    const tbody = document.querySelector('#packagesTable tbody');
    tbody.innerHTML = '';
    adminData.packages.forEach(pkg => {
        const row = `
            <tr>
                <td>${pkg.name}</td>
                <td>${pkg.includes}</td>
                <td>${pkg.price}</td>
                <td>${pkg.duration}</td>
                <td>${pkg.bookings}</td>
                <td>
                    <button class="btn btn-sm btn-primary me-1">Edit</button>
                    <button class="btn btn-sm btn-danger">Delete</button>
                </td>
            </tr>
        `;
        tbody.innerHTML += row;
    });
}

// Function to populate excursions table
function populateExcursions() {
    const tbody = document.querySelector('#excursionsTable tbody');
    tbody.innerHTML = '';
    adminData.excursions.forEach(excursion => {
        const row = `
            <tr>
                <td>${excursion.name}</td>
                <td>${excursion.type}</td>
                <td>${excursion.price}</td>
                <td>${excursion.duration}</td>
                <td>${excursion.bookings}</td>
                <td>
                    <button class="btn btn-sm btn-primary me-1">Edit</button>
                    <button class="btn btn-sm btn-danger">Delete</button>
                </td>
            </tr>
        `;
        tbody.innerHTML += row;
    });
}

// Function to populate blogs table
function populateBlogs() {
    const tbody = document.querySelector('#blogsTable tbody');
    tbody.innerHTML = '';
    adminData.blogs.forEach(blog => {
        const row = `
            <tr>
                <td>${blog.title}</td>
                <td>${blog.author}</td>
                <td>${blog.publishedDate}</td>
                <td>${blog.views}</td>
                <td><span class="badge bg-success">${blog.status}</span></td>
                <td>
                    <button class="btn btn-sm btn-primary me-1">Edit</button>
                    <button class="btn btn-sm btn-danger">Delete</button>
                </td>
            </tr>
        `;
        tbody.innerHTML += row;
    });
}

// Function to populate reviews table
function populateReviews() {
    const tbody = document.querySelector('#reviewsTable tbody');
    tbody.innerHTML = '';
    adminData.reviews.forEach(review => {
        const statusClass = review.status === 'Approved' ? 'success' : 'warning';
        const stars = '★'.repeat(review.rating) + '☆'.repeat(5 - review.rating);
        const row = `
            <tr>
                <td>${review.name}</td>
                <td>${review.email}</td>
                <td>${stars}</td>
                <td>${review.review}</td>
                <td>${review.date}</td>
                <td><span class="badge bg-${statusClass}">${review.status}</span></td>
                <td>
                    <button class="btn btn-sm btn-primary me-1">Approve</button>
                    <button class="btn btn-sm btn-danger">Reject</button>
                </td>
            </tr>
        `;
        tbody.innerHTML += row;
    });
}

// Function to populate page analytics table
function populatePageAnalytics() {
    const tbody = document.querySelector('#pageAnalyticsTable tbody');
    tbody.innerHTML = '';
    adminData.pageAnalytics.forEach(page => {
        const row = `
            <tr>
                <td>${page.page}</td>
                <td>${page.views}</td>
                <td>${page.uniqueVisitors}</td>
                <td>${page.bounceRate}</td>
                <td>${page.avgTime}</td>
            </tr>
        `;
        tbody.innerHTML += row;
    });
}

// Function to populate new viewers details table
function populateNewViewersDetails() {
    const tbody = document.querySelector('#newViewersDetailsTable tbody');
    tbody.innerHTML = '';
    adminData.newViewersDetails.forEach(viewer => {
        const row = `
            <tr>
                <td>${viewer.date}</td>
                <td>${viewer.newViewers}</td>
                <td>${viewer.source}</td>
                <td>${viewer.device}</td>
                <td>${viewer.location}</td>
            </tr>
        `;
        tbody.innerHTML += row;
    });
}

// Function to populate returning viewers details table
function populateReturningViewersDetails() {
    const tbody = document.querySelector('#returningViewersDetailsTable tbody');
    tbody.innerHTML = '';
    adminData.returningViewersDetails.forEach(viewer => {
        const row = `
            <tr>
                <td>${viewer.date}</td>
                <td>${viewer.returningViewers}</td>
                <td>${viewer.avgSessionDuration}</td>
                <td>${viewer.pagesPerSession}</td>
                <td>${viewer.conversionRate}</td>
            </tr>
        `;
        tbody.innerHTML += row;
    });
}

// Function to format numbers with abbreviations
function formatNumber(num) {
    if (num >= 1000000000) {
        return { display: (num / 1000000000).toFixed(1).replace(/\.0$/, '') + 'B', full: num.toString() };
    } else if (num >= 1000000) {
        return { display: (num / 1000000).toFixed(1).replace(/\.0$/, '') + 'M', full: num.toString() };
    } else if (num >= 1000) {
        return { display: (num / 1000).toFixed(1).replace(/\.0$/, '') + 'k', full: num.toString() };
    } else {
        return { display: num.toString(), full: num.toString() };
    }
}

// Function to populate right sidebar metrics
function populateRightSidebar() {
    // Calculate total views from all pages
    const totalViews = adminData.pageAnalytics.reduce((sum, page) => sum + page.views, 0);

    // Calculate emails received from all email categories
    const emailsReceived = adminData.inboxEmails.length + adminData.contactEmails.length + adminData.bookingEmails.length;

    // Calculate emails sent (using newsletter subscribers as proxy for sent emails)
    const emailsSent = adminData.newsletterEmails.length;

    // Calculate active users
    const activeUsers = adminData.users.filter(user => user.status === 'Active').length;

    // Calculate total reviews
    const totalReviews = adminData.reviews.length;

    // Format and set totalViews
    const totalViewsFormatted = formatNumber(totalViews);
    const totalViewsEl = document.getElementById('totalViews');
    totalViewsEl.textContent = totalViewsFormatted.display;
    totalViewsEl.setAttribute('title', totalViewsFormatted.full);

    // Format and set emailsReceived
    const emailsReceivedFormatted = formatNumber(emailsReceived);
    const emailsReceivedEl = document.getElementById('emailsReceived');
    emailsReceivedEl.textContent = emailsReceivedFormatted.display;
    emailsReceivedEl.setAttribute('title', emailsReceivedFormatted.full);

    // Format and set emailsSent
    const emailsSentFormatted = formatNumber(emailsSent);
    const emailsSentEl = document.getElementById('emailsSent');
    emailsSentEl.textContent = emailsSentFormatted.display;
    emailsSentEl.setAttribute('title', emailsSentFormatted.full);

    // Format and set activeUsers
    const activeUsersFormatted = formatNumber(activeUsers);
    const activeUsersEl = document.getElementById('activeUsers');
    activeUsersEl.textContent = activeUsersFormatted.display;
    activeUsersEl.setAttribute('title', activeUsersFormatted.full);

    // Format and set totalReviews
    const totalReviewsFormatted = formatNumber(totalReviews);
    const totalReviewsEl = document.getElementById('totalReviews');
    totalReviewsEl.textContent = totalReviewsFormatted.display;
    totalReviewsEl.setAttribute('title', totalReviewsFormatted.full);
}

// Function to initialize overall views chart
function initializeOverallViewsChart() {
    const ctx = document.getElementById('overallViewsChart').getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: adminData.analytics.overallViews.labels,
            datasets: [{
                label: 'Views',
                data: adminData.analytics.overallViews.data,
                borderColor: 'rgba(102, 126, 234, 1)',
                backgroundColor: 'rgba(102, 126, 234, 0.2)',
            }]
        }
    });
}

// Function to initialize page views chart
function initializePageViewsChart() {
    const ctx = document.getElementById('pageViewsChart').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: adminData.analytics.pageViews.labels,
            datasets: [{
                label: 'Views',
                data: adminData.analytics.pageViews.data,
                backgroundColor: 'rgba(118, 75, 162, 0.6)',
            }]
        }
    });
}

// Function to initialize new viewers chart
function initializeNewViewersChart() {
    const ctx = document.getElementById('newViewersChart').getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: adminData.analytics.newViewers.labels,
            datasets: [{
                label: 'New Viewers',
                data: adminData.analytics.newViewers.data,
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
            }]
        }
    });
}

// Function to initialize new viewers source chart
function initializeNewViewersSourceChart() {
    const ctx = document.getElementById('newViewersSourceChart').getContext('2d');
    new Chart(ctx, {
        type: 'pie',
        data: {
            labels: adminData.analytics.newViewersSource.labels,
            datasets: [{
                data: adminData.analytics.newViewersSource.data,
                backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
            }]
        }
    });
}

// Function to initialize returning viewers chart
function initializeReturningViewersChart() {
    const ctx = document.getElementById('returningViewersChart').getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: adminData.analytics.returningViewers.labels,
            datasets: [{
                label: 'Returning Viewers',
                data: adminData.analytics.returningViewers.data,
                borderColor: 'rgba(153, 102, 255, 1)',
                backgroundColor: 'rgba(153, 102, 255, 0.2)',
            }]
        }
    });
}

// Function to initialize returning vs new chart
function initializeReturningVsNewChart() {
    const ctx = document.getElementById('returningVsNewChart').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: adminData.analytics.returningVsNew.labels,
            datasets: [{
                label: 'New Viewers',
                data: adminData.analytics.returningVsNew.newData,
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
            }, {
                label: 'Returning Viewers',
                data: adminData.analytics.returningVsNew.returningData,
                backgroundColor: 'rgba(153, 102, 255, 0.6)',
            }]
        }
    });
}

// Function to initialize special insights chart
function initializeSpecialInsightsChart() {
    const ctx = document.getElementById('specialInsightsChart').getContext('2d');
    new Chart(ctx, {
        type: 'radar',
        data: {
            labels: adminData.analytics.specialInsights.labels,
            datasets: [{
                label: 'Metrics',
                data: adminData.analytics.specialInsights.data,
                borderColor: 'rgba(255, 99, 132, 1)',
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
            }]
        }
    });
}

// Function to initialize newsletter performance chart
function initializeNewsletterPerformanceChart() {
    const ctx = document.getElementById('newsletterPerformanceChart').getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: adminData.analytics.newsletterPerformance.labels,
            datasets: [{
                label: 'Open Rate (%)',
                data: adminData.analytics.newsletterPerformance.openRate,
                borderColor: 'rgba(54, 162, 235, 1)',
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
            }, {
                label: 'Click Rate (%)',
                data: adminData.analytics.newsletterPerformance.clickRate,
                borderColor: 'rgba(255, 206, 86, 1)',
                backgroundColor: 'rgba(255, 206, 86, 0.2)',
            }]
        }
    });
}

// Function to initialize contact form chart
function initializeContactFormChart() {
    const ctx = document.getElementById('contactFormChart').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: adminData.analytics.contactForm.labels,
            datasets: [{
                label: 'Submissions',
                data: adminData.analytics.contactForm.data,
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
            }]
        }
    });
}

// Function to initialize booking trends chart
function initializeBookingTrendsChart() {
    const ctx = document.getElementById('bookingTrendsChart').getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: adminData.analytics.bookingTrends.labels,
            datasets: [{
                label: 'Bookings',
                data: adminData.analytics.bookingTrends.data,
                borderColor: 'rgba(255, 159, 64, 1)',
                backgroundColor: 'rgba(255, 159, 64, 0.2)',
            }]
        }
    });
}

// Function to initialize popular packages chart
function initializePopularPackagesChart() {
    const ctx = document.getElementById('popularPackagesChart').getContext('2d');
    new Chart(ctx, {
        type: 'pie',
        data: {
            labels: adminData.analytics.popularPackages.labels,
            datasets: [{
                data: adminData.analytics.popularPackages.data,
                backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
            }]
        }
    });
}

// Function to initialize tour performance chart
function initializeTourPerformanceChart() {
    const ctx = document.getElementById('tourPerformanceChart').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: adminData.analytics.tourPerformance.labels,
            datasets: [{
                label: 'Bookings',
                data: adminData.analytics.tourPerformance.data,
                backgroundColor: 'rgba(153, 102, 255, 0.6)',
            }]
        }
    });
}

// Function to initialize car rental chart
function initializeCarRentalChart() {
    const ctx = document.getElementById('carRentalChart').getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: adminData.analytics.carRental.labels,
            datasets: [{
                label: 'Rentals',
                data: adminData.analytics.carRental.data,
                borderColor: 'rgba(255, 99, 132, 1)',
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
            }]
        }
    });
}

// Function to initialize package performance chart
function initializePackagePerformanceChart() {
    const ctx = document.getElementById('packagePerformanceChart').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: adminData.analytics.packagePerformance.labels,
            datasets: [{
                label: 'Bookings',
                data: adminData.analytics.packagePerformance.data,
                backgroundColor: 'rgba(54, 162, 235, 0.6)',
            }]
        }
    });
}

// Function to initialize excursion chart
function initializeExcursionChart() {
    const ctx = document.getElementById('excursionChart').getContext('2d');
    new Chart(ctx, {
        type: 'pie',
        data: {
            labels: adminData.analytics.excursion.labels,
            datasets: [{
                data: adminData.analytics.excursion.data,
                backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
            }]
        }
    });
}

// Function to initialize blog performance chart
function initializeBlogPerformanceChart() {
    const ctx = document.getElementById('blogPerformanceChart').getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: adminData.analytics.blogPerformance.labels,
            datasets: [{
                label: 'Blog Views',
                data: adminData.analytics.blogPerformance.data,
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
            }]
        }
    });
}

// Function to show users modal
function showUsersModal() {
    const modal = new bootstrap.Modal(document.getElementById('usersModal'));
    const tbody = document.querySelector('#usersModalTable tbody');
    tbody.innerHTML = '';
    adminData.users.forEach(user => {
        const row = `
            <tr>
                <td>${user.name}</td>
                <td>${user.email}</td>
                <td>${user.role}</td>
                <td><span class="badge bg-success">${user.status}</span></td>
                <td>
                    <button class="btn btn-sm btn-primary me-1">Edit</button>
                    <button class="btn btn-sm btn-danger">Delete</button>
                </td>
            </tr>
        `;
        tbody.innerHTML += row;
    });
    modal.show();
}

// Function to show inbox modal (scroll to emails section)
function showInboxModal() {
    document.getElementById('emails').scrollIntoView({ behavior: 'smooth' });
}

// Function to initialize search functionality
function initializeSearch() {
    // Tours search
    document.getElementById('toursSearch').addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        const rows = document.querySelectorAll('#toursModalTable tbody tr');
        rows.forEach(row => {
            const text = row.textContent.toLowerCase();
            row.style.display = text.includes(searchTerm) ? '' : 'none';
        });
    });

    // Cars search
    document.getElementById('carsSearch').addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        const rows = document.querySelectorAll('#carsModalTable tbody tr');
        rows.forEach(row => {
            const text = row.textContent.toLowerCase();
            row.style.display = text.includes(searchTerm) ? '' : 'none';
        });
    });

    // Packages search
    document.getElementById('packagesSearch').addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        const rows = document.querySelectorAll('#packagesModalTable tbody tr');
        rows.forEach(row => {
            const text = row.textContent.toLowerCase();
            row.style.display = text.includes(searchTerm) ? '' : 'none';
        });
    });

    // Excursions search
    document.getElementById('excursionsSearch').addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        const rows = document.querySelectorAll('#excursionsModalTable tbody tr');
        rows.forEach(row => {
            const text = row.textContent.toLowerCase();
            row.style.display = text.includes(searchTerm) ? '' : 'none';
        });
    });

    // Users search
    document.getElementById('usersSearch').addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        const rows = document.querySelectorAll('#usersModalTable tbody tr');
        rows.forEach(row => {
            const text = row.textContent.toLowerCase();
            row.style.display = text.includes(searchTerm) ? '' : 'none';
        });
    });

    // Newsletter search
    document.getElementById('newsletterSearch').addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        const rows = document.querySelectorAll('#newsletterModalTable tbody tr');
        rows.forEach(row => {
            const text = row.textContent.toLowerCase();
            row.style.display = text.includes(searchTerm) ? '' : 'none';
        });
    });

    // Contact search
    document.getElementById('contactSearch').addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        const rows = document.querySelectorAll('#contactModalTable tbody tr');
        rows.forEach(row => {
            const text = row.textContent.toLowerCase();
            row.style.display = text.includes(searchTerm) ? '' : 'none';
        });
    });

    // Booking search
    document.getElementById('bookingSearch').addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        const rows = document.querySelectorAll('#bookingModalTable tbody tr');
        rows.forEach(row => {
            const text = row.textContent.toLowerCase();
            row.style.display = text.includes(searchTerm) ? '' : 'none';
        });
    });

    // Reviews search
    document.getElementById('reviewsSearch').addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        const rows = document.querySelectorAll('#reviewsModalTable tbody tr');
        rows.forEach(row => {
            const text = row.textContent.toLowerCase();
            row.style.display = text.includes(searchTerm) ? '' : 'none';
        });
    });

    // Global search functionality
    document.getElementById('globalSearch').addEventListener('input', function() {
        const query = this.value.toLowerCase().trim();
        const resultsDiv = document.getElementById('searchResults');
        if (query === '') {
            resultsDiv.style.display = 'none';
            return;
        }
        const results = [];
        // Search tours
        adminData.tours.forEach(tour => {
            if (tour.name.toLowerCase().includes(query)) {
                results.push({ type: 'Tour', name: tour.name, action: () => showToursModal() });
            }
        });
        // Search cars
        adminData.cars.forEach(car => {
            if (car.model.toLowerCase().includes(query)) {
                results.push({ type: 'Car', name: car.model, action: () => showCarsModal() });
            }
        });
        // Search packages
        adminData.packages.forEach(pkg => {
            if (pkg.name.toLowerCase().includes(query)) {
                results.push({ type: 'Package', name: pkg.name, action: () => showPackagesModal() });
            }
        });
        // Search excursions
        adminData.excursions.forEach(exc => {
            if (exc.name.toLowerCase().includes(query)) {
                results.push({ type: 'Excursion', name: exc.name, action: () => showExcursionsModal() });
            }
        });
        // Search users
        adminData.users.forEach(user => {
            if (user.name.toLowerCase().includes(query) || user.email.toLowerCase().includes(query)) {
                results.push({ type: 'User', name: user.name, action: () => showUsersModal() });
            }
        });
        // Search blogs
        adminData.blogs.forEach(blog => {
            if (blog.title.toLowerCase().includes(query)) {
                results.push({ type: 'Blog', name: blog.title, action: () => document.getElementById('blogs').scrollIntoView({ behavior: 'smooth' }) });
            }
        });
        // Search reviews
        adminData.reviews.forEach(review => {
            if (review.name.toLowerCase().includes(query) || review.review.toLowerCase().includes(query)) {
                results.push({ type: 'Review', name: review.name, action: () => showReviewsModal() });
            }
        });
        // Search inbox emails
        adminData.inboxEmails.forEach(email => {
            if (email.from.toLowerCase().includes(query) || email.subject.toLowerCase().includes(query)) {
                results.push({ type: 'Inbox Email', name: email.subject, action: () => showInboxModal() });
            }
        });
        // Search contact emails
        adminData.contactEmails.forEach(email => {
            if (email.name.toLowerCase().includes(query) || email.subject.toLowerCase().includes(query)) {
                results.push({ type: 'Contact Email', name: email.subject, action: () => showContactModal() });
            }
        });
        // Search booking emails
        adminData.bookingEmails.forEach(email => {
            if (email.name.toLowerCase().includes(query) || email.package.toLowerCase().includes(query)) {
                results.push({ type: 'Booking Email', name: email.package, action: () => showBookingModal() });
            }
        });
        // Render results
        resultsDiv.innerHTML = '';
        if (results.length > 0) {
            results.forEach(result => {
                const div = document.createElement('div');
                div.textContent = `${result.type}: ${result.name}`;
                div.style.color = 'gray';
                div.addEventListener('click', () => {
                    result.action();
                    resultsDiv.style.display = 'none';
                    document.getElementById('globalSearch').value = '';
                });
                resultsDiv.appendChild(div);
            });
            resultsDiv.style.display = 'block';
        } else {
            const noResultsDiv = document.createElement('div');
            noResultsDiv.textContent = 'No results found';
            noResultsDiv.style.color = 'gray';
            resultsDiv.appendChild(noResultsDiv);
            resultsDiv.style.display = 'block';
        }
    });
}

// Function to show tours modal
function showToursModal() {
    const modal = new bootstrap.Modal(document.getElementById('toursModal'));
    const tbody = document.querySelector('#toursModalTable tbody');
    tbody.innerHTML = '';
    adminData.tours.forEach(tour => {
        const row = `
            <tr>
                <td>${tour.name}</td>
                <td>${tour.duration}</td>
                <td>${tour.price}</td>
                <td>${tour.bookings}</td>
                <td><span class="badge bg-success">${tour.status}</span></td>
                <td>
                    <button class="btn btn-sm btn-primary me-1">Edit</button>
                    <button class="btn btn-sm btn-danger">Delete</button>
                </td>
            </tr>
        `;
        tbody.innerHTML += row;
    });
    modal.show();
}

// Function to show cars modal
function showCarsModal() {
    const modal = new bootstrap.Modal(document.getElementById('carsModal'));
    const tbody = document.querySelector('#carsModalTable tbody');
    tbody.innerHTML = '';
    adminData.cars.forEach(car => {
        const availabilityClass = car.availability === 'Available' ? 'success' : 'warning';
        const row = `
            <tr>
                <td>${car.model}</td>
                <td>${car.type}</td>
                <td>${car.price}</td>
                <td><span class="badge bg-${availabilityClass}">${car.availability}</span></td>
                <td>${car.bookings}</td>
                <td>
                    <button class="btn btn-sm btn-primary me-1">Edit</button>
                    <button class="btn btn-sm btn-danger">Delete</button>
                </td>
            </tr>
        `;
        tbody.innerHTML += row;
    });
    modal.show();
}

// Function to show packages modal
function showPackagesModal() {
    const modal = new bootstrap.Modal(document.getElementById('packagesModal'));
    const tbody = document.querySelector('#packagesModalTable tbody');
    tbody.innerHTML = '';
    adminData.packages.forEach(pkg => {
        const row = `
            <tr>
                <td>${pkg.name}</td>
                <td>${pkg.includes}</td>
                <td>${pkg.price}</td>
                <td>${pkg.duration}</td>
                <td>${pkg.bookings}</td>
                <td>
                    <button class="btn btn-sm btn-primary me-1">Edit</button>
                    <button class="btn btn-sm btn-danger">Delete</button>
                </td>
            </tr>
        `;
        tbody.innerHTML += row;
    });
    modal.show();
}

// Function to show excursions modal
function showExcursionsModal() {
    const modal = new bootstrap.Modal(document.getElementById('excursionsModal'));
    const tbody = document.querySelector('#excursionsModalTable tbody');
    tbody.innerHTML = '';
    adminData.excursions.forEach(excursion => {
        const row = `
            <tr>
                <td>${excursion.name}</td>
                <td>${excursion.type}</td>
                <td>${excursion.price}</td>
                <td>${excursion.duration}</td>
                <td>${excursion.bookings}</td>
                <td>
                    <button class="btn btn-sm btn-primary me-1">Edit</button>
                    <button class="btn btn-sm btn-danger">Delete</button>
                </td>
            </tr>
        `;
        tbody.innerHTML += row;
    });
    modal.show();
}

// Function to show newsletter modal
function showNewsletterModal() {
    const modal = new bootstrap.Modal(document.getElementById('newsletterModal'));
    const tbody = document.querySelector('#newsletterModalTable tbody');
    tbody.innerHTML = '';
    adminData.newsletterEmails.forEach(email => {
        const row = `
            <tr>
                <td>${email.email}</td>
                <td>${email.subscribedDate}</td>
                <td><span class="badge bg-success">${email.status}</span></td>
                <td><button class="btn btn-sm btn-danger">Unsubscribe</button></td>
            </tr>
        `;
        tbody.innerHTML += row;
    });
    modal.show();
}

// Function to show contact modal
function showContactModal() {
    const modal = new bootstrap.Modal(document.getElementById('contactModal'));
    const tbody = document.querySelector('#contactModalTable tbody');
    tbody.innerHTML = '';
    adminData.contactEmails.forEach(email => {
        const statusClass = email.status === 'Pending' ? 'warning' : 'success';
        const row = `
            <tr>
                <td>${email.name}</td>
                <td>${email.email}</td>
                <td>${email.subject}</td>
                <td>${email.message}</td>
                <td>${email.date}</td>
                <td><span class="badge bg-${statusClass}">${email.status}</span></td>
                <td><button class="btn btn-sm btn-primary">Reply</button></td>
            </tr>
        `;
        tbody.innerHTML += row;
    });
    modal.show();
}

// Function to show booking modal
function showBookingModal() {
    const modal = new bootstrap.Modal(document.getElementById('bookingModal'));
    const tbody = document.querySelector('#bookingModalTable tbody');
    tbody.innerHTML = '';
    adminData.bookingEmails.forEach(email => {
        const statusClass = email.status === 'Processing' ? 'info' : 'success';
        const row = `
            <tr>
                <td>${email.name}</td>
                <td>${email.email}</td>
                <td>${email.package}</td>
                <td>${email.travelDate}</td>
                <td><span class="badge bg-${statusClass}">${email.status}</span></td>
                <td><button class="btn btn-sm btn-primary">Confirm</button></td>
            </tr>
        `;
        tbody.innerHTML += row;
    });
    modal.show();
}

// Function to show reviews modal
function showReviewsModal() {
    const modal = new bootstrap.Modal(document.getElementById('reviewsModal'));
    const tbody = document.querySelector('#reviewsModalTable tbody');
    tbody.innerHTML = '';
    adminData.reviews.forEach(review => {
        const statusClass = review.status === 'Approved' ? 'success' : review.status === 'Pending' ? 'warning' : 'danger';
        const stars = '★'.repeat(review.rating) + '☆'.repeat(5 - review.rating);
        const row = `
            <tr>
                <td>${review.name}</td>
                <td>${review.email}</td>
                <td>${stars}</td>
                <td>${review.review}</td>
                <td>${review.date}</td>
                <td><span class="badge bg-${statusClass}">${review.status}</span></td>
                <td>
                    <button class="btn btn-sm btn-primary me-1">Approve</button>
                    <button class="btn btn-sm btn-danger">Reject</button>
                </td>
            </tr>
        `;
        tbody.innerHTML += row;
    });
    modal.show();
}

// Function to filter reviews
function filterReviews(status) {
    const tbody = document.querySelector('#reviewsModalTable tbody');
    tbody.innerHTML = '';
    const filteredReviews = status === 'All' ? adminData.reviews : adminData.reviews.filter(review => review.status === status);
    filteredReviews.forEach(review => {
        const statusClass = review.status === 'Approved' ? 'success' : review.status === 'Pending' ? 'warning' : 'danger';
        const stars = '★'.repeat(review.rating) + '☆'.repeat(5 - review.rating);
        const row = `
            <tr>
                <td>${review.name}</td>
                <td>${review.email}</td>
                <td>${stars}</td>
                <td>${review.review}</td>
                <td>${review.date}</td>
                <td><span class="badge bg-${statusClass}">${review.status}</span></td>
                <td>
                    <button class="btn btn-sm btn-primary me-1">Approve</button>
                    <button class="btn btn-sm btn-danger">Reject</button>
                </td>
            </tr>
        `;
        tbody.innerHTML += row;
    });
}

// Function to populate calendar events
function populateCalendarEvents() {
    const calendarEl = document.getElementById('calendar');
    if (!calendarEl) return;

    const calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        headerToolbar: {
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay'
        },
        events: adminData.calendarEvents.map(event => ({
            id: event.id,
            title: event.title,
            start: event.start,
            end: event.end,
            description: event.description,
            reminder: event.reminder
        })),
        eventClick: function(info) {
            alert(`Event: ${info.event.title}\nDescription: ${info.event.extendedProps.description}`);
        },
        dateClick: function(info) {
            // Handle date click to add new event
            const title = prompt('Enter event title:');
            if (title) {
                const newEvent = {
                    id: Date.now().toString(),
                    title: title,
                    start: info.dateStr,
                    description: 'New event added',
                    reminder: 60
                };
                adminData.calendarEvents.push(newEvent);
                calendar.addEvent(newEvent);
            }
        }
    });

    calendar.render();
}

// Function to show calendar modal
function showCalendarModal() {
    const modal = new bootstrap.Modal(document.getElementById('calendarModal'));
    modal.show();
}

// Function to initialize all data population
function initializeAdminData() {
    populateInboxEmails();
    populateNewsletterEmails();
    populateContactEmails();
    populateBookingEmails();
    populateUsers();
    populateTours();
    populateCars();
    populatePackages();
    populateExcursions();
    populateBlogs();
    populateReviews();
    populatePageAnalytics();
    populateNewViewersDetails();
    populateReturningViewersDetails();
    populateRightSidebar();
    populateCalendarEvents();
    initializeOverallViewsChart();
    initializePageViewsChart();
    initializeNewViewersChart();
    initializeNewViewersSourceChart();
    initializeReturningViewersChart();
    initializeReturningVsNewChart();
    initializeSpecialInsightsChart();
    initializeNewsletterPerformanceChart();
    initializeContactFormChart();
    initializeBookingTrendsChart();
    initializePopularPackagesChart();
    initializeTourPerformanceChart();
    initializeCarRentalChart();
    initializePackagePerformanceChart();
    initializeExcursionChart();
    initializeBlogPerformanceChart();

    // Initialize search functionality
    initializeSearch();
}

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { adminData, initializeAdminData };
}
