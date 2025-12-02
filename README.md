<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Othman Bakar Othman - Portfolio</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">
    <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
    <style>
        body {
            font-family: 'Inter', sans-serif;
        }
        .hero-bg {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        }
        .dark-mode {
            background-color: #1a202c;
            color: #f7fafc;
        }
        .dark-mode .hero-bg {
            background: linear-gradient(135deg, #2d3748 0%, #4a5568 100%);
        }
        .dark-mode nav {
            background-color: #2d3748;
            color: #f7fafc;
        }
        .dark-mode nav a {
            color: #e2e8f0;
        }
        .dark-mode nav a:hover {
            color: #a855f7;
        }
        .dark-mode section[id="about"] {
            background-color: #1a202c;
            color: #f7fafc;
        }
        .dark-mode section[id="about"] h2,
        .dark-mode section[id="about"] h3,
        .dark-mode section[id="about"] h4 {
            color: #f7fafc;
        }
        .dark-mode section[id="about"] p {
            color: #cbd5e0;
        }
        .dark-mode section[id="services"] {
            background-color: #2d3748;
        }
        .dark-mode section[id="services"] h2 {
            color: #f7fafc;
        }
        .dark-mode section[id="services"] p {
            color: #cbd5e0;
        }
        .dark-mode section[id="services"] .bg-white {
            background-color: #4a5568;
            color: #f7fafc;
        }
        .dark-mode section[id="services"] .bg-white h3,
        .dark-mode section[id="services"] .bg-white p {
            color: #f7fafc;
        }
        .dark-mode section[id="projects"] {
            background-color: #1a202c;
        }
        .dark-mode section[id="projects"] h2 {
            color: #f7fafc;
        }
        .dark-mode section[id="projects"] p {
            color: #cbd5e0;
        }
        .dark-mode section[id="projects"] .bg-gray-100 {
            background-color: #4a5568;
        }
        .dark-mode section[id="projects"] .bg-gray-100 h3,
        .dark-mode section[id="projects"] .bg-gray-100 p {
            color: #f7fafc;
        }
        .dark-mode section[id="projects"] .bg-gray-100 a {
            color: #a855f7;
        }
        .dark-mode section[id="shop"] {
            background-color: #2d3748;
        }
        .dark-mode section[id="shop"] h2 {
            color: #f7fafc;
        }
        .dark-mode section[id="shop"] p {
            color: #cbd5e0;
        }
        .dark-mode section[id="shop"] .bg-white {
            background-color: #4a5568;
            color: #f7fafc;
        }
        .dark-mode section[id="shop"] .bg-white h3,
        .dark-mode section[id="shop"] .bg-white p {
            color: #f7fafc;
        }
        .dark-mode section[id="shop"] button {
            background-color: #7c3aed;
        }
        .dark-mode section[id="shop"] button:hover {
            background-color: #6d28d9;
        }
        .dark-mode section[id="contact"] {
            background-color: #1a202c;
        }
        .dark-mode section[id="contact"] h2,
        .dark-mode section[id="contact"] h3,
        .dark-mode section[id="contact"] h4 {
            color: #f7fafc;
        }
        .dark-mode section[id="contact"] p {
            color: #cbd5e0;
        }
        .dark-mode section[id="contact"] .bg-gray-100 {
            background-color: #4a5568;
        }
        .dark-mode section[id="contact"] label {
            color: #e2e8f0;
        }
        .dark-mode section[id="contact"] input,
        .dark-mode section[id="contact"] textarea {
            background-color: #2d3748;
            border-color: #4a5568;
            color: #f7fafc;
        }
        .dark-mode section[id="contact"] input:focus,
        .dark-mode section[id="contact"] textarea:focus {
            border-color: #a855f7;
        }
        .dark-mode section[id="contact"] button {
            background-color: #7c3aed;
        }
        .dark-mode section[id="contact"] button:hover {
            background-color: #6d28d9;
        }
        .dark-mode footer {
            background-color: #1a202c;
        }
        .dark-mode #mobileMenu {
            background-color: #2d3748;
            color: #f7fafc;
        }
        .dark-mode #mobileMenu a {
            color: #e2e8f0;
        }
        .dark-mode #mobileMenu a:hover {
            color: #a855f7;
        }
    </style>
</head>
<body class="bg-gray-50 text-gray-900">
    <!-- Navigation -->
    <nav class="bg-white shadow-lg fixed w-full z-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between h-16">
                <div class="flex items-center">
                    <a href="#" class="text-sm md:text-xl font-bold text-purple-600">Othman Bakar Othman</a>
                </div>
                <div class="flex items-center space-x-4">
                    <!-- Desktop Menu -->
                    <div class="hidden md:flex space-x-4">
                        <a href="#hero" class="text-gray-700 hover:text-purple-600">Home</a>
                        <a href="#about" class="text-gray-700 hover:text-purple-600">About</a>
                        <a href="#services" class="text-gray-700 hover:text-purple-600">Services</a>
                        <a href="#projects" class="text-gray-700 hover:text-purple-600">Projects</a>
                        <a href="#shop" class="text-gray-700 hover:text-purple-600">Shop</a>
                        <a href="#contact" class="text-gray-700 hover:text-purple-600">Contact</a>
                    </div>
                    <!-- Hamburger Menu Button -->
                    <button id="hamburgerMenu" class="md:hidden bg-gray-200 p-2 rounded-full hover:bg-gray-300">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                    <!-- Dark Mode Toggle -->
                    <button id="darkModeToggle" class="bg-gray-200 p-2 rounded-full hover:bg-gray-300">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path>
                        </svg>
                    </button>
                    
                </div>
            </div>
            <!-- Mobile Menu -->
            <div id="mobileMenu" class="md:hidden hidden bg-white shadow-lg">
                <div class="px-2 pt-2 pb-3 space-y-1">
                    <a href="#hero" class="block px-3 py-2 text-gray-700 hover:text-purple-600">Home</a>
                    <a href="#about" class="block px-3 py-2 text-gray-700 hover:text-purple-600">About</a>
                    <a href="#services" class="block px-3 py-2 text-gray-700 hover:text-purple-600">Services</a>
                    <a href="#projects" class="block px-3 py-2 text-gray-700 hover:text-purple-600">Projects</a>
                    <a href="#shop" class="block px-3 py-2 text-gray-700 hover:text-purple-600">Shop</a>
                    <a href="#contact" class="block px-3 py-2 text-gray-700 hover:text-purple-600">Contact</a>
                </div>
            </div>
        </div>
    </nav>

    <!-- Hero Section -->
    <section id="hero" class="hero-bg text-white py-20">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div class="mb-8" data-aos="fade-down">
                <img src="https://images.unsplash.com/photo-1740252117070-7aa2955b25f8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODV8fG1hbGUlMjBhdmF0YXJ8ZW58MHx8MHx8fDA%3D" alt="Othman Bakar Othman" class="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-white">
                <h1 class="text-4xl md:text-6xl font-bold mb-4">Othman Bakar Othman</h1>
                <p class="text-xl md:text-2xl mb-8">Full-Stack Web Developer & Designer</p>
                <a href="#contact" class="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition duration-300">Get In Touch</a>
            </div>
        </div>
    </section>

    <!-- About Me Section -->
    <section id="about" class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16" data-aos="fade-up">
                <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About Me</h2>
                <p class="text-lg text-gray-600">Passionate about creating beautiful and functional web experiences</p>
            </div>
            <div class="grid md:grid-cols-2 gap-12 items-center">
                <div data-aos="fade-right">
                    <img src="https://via.placeholder.com/500x400" alt="About Me" class="rounded-lg shadow-lg">
                </div>
                <div data-aos="fade-left">
                    <h3 class="text-2xl font-semibold mb-4">Hello, I'm Othman</h3>
                    <p class="text-gray-600 mb-6">I'm a dedicated full-stack web developer with expertise in modern technologies. I love turning ideas into reality through clean, efficient code and stunning designs.</p>
                    <h4 class="text-xl font-semibold mb-4">Skills</h4>
                    <div class="grid grid-cols-2 gap-4">
                        <div class="flex items-center">
                            <span class="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">HTML</span>
                        </div>
                        <div class="flex items-center">
                            <span class="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">CSS</span>
                        </div>
                        <div class="flex items-center">
                            <span class="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">TailwindCSS</span>
                        </div>
                        <div class="flex items-center">
                            <span class="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">Bootstrap</span>
                        </div>
                        <div class="flex items-center">
                            <span class="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">JavaScript</span>
                        </div>
                        <div class="flex items-center">
                            <span class="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">PHP</span>
                        </div>
                        <div class="flex items-center">
                            <span class="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">MySQL</span>
                        </div>
                        <div class="flex items-center">
                            <span class="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">API Integration</span>
                        </div>
                        <div class="flex items-center">
                            <span class="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">Responsive Design</span>
                        </div>
                        <div class="flex items-center">
                            <span class="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">UI/UX Basics</span>
                        </div>
                        <div class="flex items-center">
                            <span class="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">Git & GitHub</span>
                        </div>
                        <div class="flex items-center">
                            <span class="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">SEO Basics</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Services Section -->
    <section id="services" class="py-20 bg-gray-100">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16" data-aos="fade-up">
                <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Services</h2>
                <p class="text-lg text-gray-600">What I can do for you</p>
            </div>
            <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div class="bg-white p-6 rounded-lg shadow-lg text-center" data-aos="fade-up" data-aos-delay="100">
                    <div class="text-4xl text-purple-600 mb-4"><i class="fas fa-globe fa-spin"></i></div>
                    <h3 class="text-xl font-semibold mb-2">Website Development</h3>
                    <p class="text-gray-600">Custom websites built with modern technologies</p>
                </div>
                <div class="bg-white p-6 rounded-lg shadow-lg text-center" data-aos="fade-up" data-aos-delay="200">
                    <div class="text-4xl text-purple-600 mb-4"><i class="fas fa-shopping-cart fa-bounce"></i></div>
                    <h3 class="text-xl font-semibold mb-2">E-commerce Stores</h3>
                    <p class="text-gray-600">Online stores with secure payment integration</p>
                </div>
                <div class="bg-white p-6 rounded-lg shadow-lg text-center" data-aos="fade-up" data-aos-delay="300">
                    <div class="text-4xl text-purple-600 mb-4"><i class="fas fa-folder-open fa-pulse"></i></div>
                    <h3 class="text-xl font-semibold mb-2">Portfolio Websites</h3>
                    <p class="text-gray-600">Showcase your work with stunning portfolios</p>
                </div>
                <div class="bg-white p-6 rounded-lg shadow-lg text-center" data-aos="fade-up" data-aos-delay="400">
                    <div class="text-4xl text-purple-600 mb-4"><i class="fas fa-briefcase fa-flip"></i></div>
                    <h3 class="text-xl font-semibold mb-2">Business Websites</h3>
                    <p class="text-gray-600">Professional websites for your business</p>
                </div>
                <div class="bg-white p-6 rounded-lg shadow-lg text-center" data-aos="fade-up" data-aos-delay="500">
                    <div class="text-4xl text-purple-600 mb-4"><i class="fas fa-file-alt fa-beat"></i></div>
                    <h3 class="text-xl font-semibold mb-2">Landing Pages</h3>
                    <p class="text-gray-600">High-converting landing pages</p>
                </div>
                <div class="bg-white p-6 rounded-lg shadow-lg text-center" data-aos="fade-up" data-aos-delay="600">
                    <div class="text-4xl text-purple-600 mb-4"><i class="fas fa-cogs fa-shake"></i></div>
                    <h3 class="text-xl font-semibold mb-2">System Development</h3>
                    <p class="text-gray-600">Custom web applications and systems</p>
                </div>
                <div class="bg-white p-6 rounded-lg shadow-lg text-center" data-aos="fade-up" data-aos-delay="700">
                    <div class="text-4xl text-purple-600 mb-4"><i class="fas fa-wrench fa-fade"></i></div>
                    <h3 class="text-xl font-semibold mb-2">Website Maintenance</h3>
                    <p class="text-gray-600">Keep your website updated and secure</p>
                </div>
                <div class="bg-white p-6 rounded-lg shadow-lg text-center" data-aos="fade-up" data-aos-delay="800">
                    <div class="text-4xl text-purple-600 mb-4"><i class="fas fa-database fa-beat"></i></div>
                    <h3 class="text-xl font-semibold mb-2">Database Design</h3>
                    <p class="text-gray-600">Efficient and scalable database solutions</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Projects Section -->
    <section id="projects" class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16" data-aos="fade-up">
                <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Projects</h2>
                <p class="text-lg text-gray-600">Some of my recent work</p>
            </div>
            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div class="bg-gray-100 rounded-lg overflow-hidden shadow-lg" data-aos="fade-up" data-aos-delay="100">
                    <img src="https://via.placeholder.com/400x250" alt="Business Management System" class="w-full h-48 object-cover">
                    <div class="p-6">
                        <h3 class="text-xl font-semibold mb-2">Business Management System</h3>
                        <p class="text-gray-600 mb-4">A comprehensive system for managing business operations</p>
                        <a href="#" class="text-purple-600 hover:text-purple-800">View Project</a>
                    </div>
                </div>
                <div class="bg-gray-100 rounded-lg overflow-hidden shadow-lg" data-aos="fade-up" data-aos-delay="200">
                    <img src="https://via.placeholder.com/400x250" alt="E-commerce Store" class="w-full h-48 object-cover">
                    <div class="p-6">
                        <h3 class="text-xl font-semibold mb-2">E-commerce Store</h3>
                        <p class="text-gray-600 mb-4">Online shopping platform with modern design</p>
                        <a href="#" class="text-purple-600 hover:text-purple-800">View Project</a>
                    </div>
                </div>
                <div class="bg-gray-100 rounded-lg overflow-hidden shadow-lg" data-aos="fade-up" data-aos-delay="300">
                    <img src="https://via.placeholder.com/400x250" alt="School Website" class="w-full h-48 object-cover">
                    <div class="p-6">
                        <h3 class="text-xl font-semibold mb-2">School Website</h3>
                        <p class="text-gray-600 mb-4">Educational institution website with CMS</p>
                        <a href="#" class="text-purple-600 hover:text-purple-800">View Project</a>
                    </div>
                </div>
                <div class="bg-gray-100 rounded-lg overflow-hidden shadow-lg" data-aos="fade-up" data-aos-delay="400">
                    <img src="https://via.placeholder.com/400x250" alt="Personal Portfolio" class="w-full h-48 object-cover">
                    <div class="p-6">
                        <h3 class="text-xl font-semibold mb-2">Personal Portfolio</h3>
                        <p class="text-gray-600 mb-4">Creative portfolio website for designers</p>
                        <a href="#" class="text-purple-600 hover:text-purple-800">View Project</a>
                    </div>
                </div>
                <div class="bg-gray-100 rounded-lg overflow-hidden shadow-lg" data-aos="fade-up" data-aos-delay="500">
                    <img src="https://via.placeholder.com/400x250" alt="Travel & Booking Website" class="w-full h-48 object-cover">
                    <div class="p-6">
                        <h3 class="text-xl font-semibold mb-2">Travel & Booking Website</h3>
                        <p class="text-gray-600 mb-4">Booking platform for travel services</p>
                        <a href="#" class="text-purple-600 hover:text-purple-800">View Project</a>
                    </div>
                </div>
                <div class="bg-gray-100 rounded-lg overflow-hidden shadow-lg" data-aos="fade-up" data-aos-delay="600">
                    <img src="https://via.placeholder.com/400x250" alt="Restaurant Ordering System" class="w-full h-48 object-cover">
                    <div class="p-6">
                        <h3 class="text-xl font-semibold mb-2">Restaurant Ordering System</h3>
                        <p class="text-gray-600 mb-4">Online ordering system for restaurants</p>
                        <a href="#" class="text-purple-600 hover:text-purple-800">View Project</a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Shop Section -->
    <section id="shop" class="py-20 bg-gray-100">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16" data-aos="fade-up">
                <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Shop</h2>
                <p class="text-lg text-gray-600">Explore our amazing products</p>
            </div>
            <div class="grid md:grid-cols-3 gap-8">
                <div class="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 hover:shadow-2xl transition duration-300 cursor-pointer" data-aos="fade-up" data-aos-delay="100" onclick="window.location.href='product-detail.html?product=watch'">
                    <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" alt="Smart Watch" class="w-full h-48 object-cover">
                    <div class="p-6 text-center">
                        <h3 class="text-xl font-semibold mb-2">Smart Watch</h3>
                        <p class="text-gray-600 mb-2">Latest technology with health tracking features</p>
                        <p class="text-2xl font-bold text-purple-600 mb-2">$199.99</p>
                        <p class="text-sm text-green-600 font-semibold mb-4">In Stock: 15</p>
                        <button class="bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition duration-300">View Details</button>
                    </div>
                </div>
                <div class="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 hover:shadow-2xl transition duration-300 cursor-pointer" data-aos="fade-up" data-aos-delay="200" onclick="window.location.href='product-detail.html?product=tv'">
                    <img src="https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" alt="LED TV" class="w-full h-48 object-cover">
                    <div class="p-6 text-center">
                        <h3 class="text-xl font-semibold mb-2">LED TV 55"</h3>
                        <p class="text-gray-600 mb-2">Crystal clear display with smart features</p>
                        <p class="text-2xl font-bold text-purple-600 mb-2">$499.99</p>
                        <p class="text-sm text-green-600 font-semibold mb-4">In Stock: 8</p>
                        <button class="bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition duration-300">View Details</button>
                    </div>
                </div>
                <div class="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 hover:shadow-2xl transition duration-300 cursor-pointer" data-aos="fade-up" data-aos-delay="300" onclick="window.location.href='product-detail.html?product=laptop'">
                    <img src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" alt="Gaming Laptop" class="w-full h-48 object-cover">
                    <div class="p-6 text-center">
                        <h3 class="text-xl font-semibold mb-2">Gaming Laptop</h3>
                        <p class="text-gray-600 mb-2">High-performance laptop for gaming and work</p>
                        <p class="text-2xl font-bold text-purple-600 mb-2">$1299.99</p>
                        <p class="text-sm text-green-600 font-semibold mb-4">In Stock: 5</p>
                        <button class="bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition duration-300">View Details</button>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16" data-aos="fade-up">
                <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
                <p class="text-lg text-gray-600">Let's work together on your next project</p>
            </div>
            <div class="grid md:grid-cols-2 gap-12">
                <div data-aos="fade-right">
                    <h3 class="text-2xl font-semibold mb-6">Contact Information</h3>
                    <div class="space-y-4">
                        <div class="flex items-center">
                            <svg class="w-6 h-6 text-purple-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                            </svg>
                            <span>othman@example.com</span>
                        </div>
                        <div class="flex items-center">
                            <svg class="w-6 h-6 text-purple-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                            </svg>
                            <span>+1 (555) 123-4567</span>
                        </div>
                    </div>
                    <div class="mt-8">
                        <h4 class="text-lg font-semibold mb-4">Follow Me</h4>
                        <div class="flex space-x-4">
                            <a href="#" class="text-purple-600 hover:text-purple-800">
                                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                                </svg>
                            </a>
                            <a href="#" class="text-purple-600 hover:text-purple-800">
                                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.749.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.987C24.007 5.367 18.641.001.012.017z"/>
                                </svg>
                            </a>
                            <a href="#" class="text-purple-600 hover:text-purple-800">
                                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.749.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.987C24.007 5.367 18.641.001.012.017z"/>
                                </svg>
                            </a>
                            <a href="#" class="text-purple-600 hover:text-purple-800">
                                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
                <div data-aos="fade-left">
                    <form id="contactForm" class="bg-gray-100 p-6 rounded-lg">
                        <div class="mb-4">
                            <label for="name" class="block text-gray-700 font-semibold mb-2">Name</label>
                            <input type="text" id="name" name="name" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600" required>
                        </div>
                        <div class="mb-4">
                            <label for="email" class="block text-gray-700 font-semibold mb-2">Email</label>
                            <input type="email" id="email" name="email" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600" required>
                        </div>
                        <div class="mb-4">
                            <label for="message" class="block text-gray-700 font-semibold mb-2">Message</label>
                            <textarea id="message" name="message" rows="5" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600" required></textarea>
                        </div>
                        <button type="submit" class="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition duration-300 w-full">Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="bg-gray-900 text-white py-8">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p>&copy; 2023 Othman Bakar Othman. All rights reserved.</p>
        </div>
    </footer>

    <script>
        // Initialize AOS
        AOS.init();

        // Dark mode toggle
        const darkModeToggle = document.getElementById('darkModeToggle');
        const body = document.body;

        darkModeToggle.addEventListener('click', () => {
            body.classList.toggle('dark-mode');
        });

        // Contact form submission
        const contactForm = document.getElementById('contactForm');
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Thank you for your message! I will get back to you soon.');
            contactForm.reset();
        });

        // Hamburger menu toggle
        const hamburgerMenu = document.getElementById('hamburgerMenu');
        const mobileMenu = document.getElementById('mobileMenu');

        hamburgerMenu.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
    </script>
</body>
</html>
