 // Scroll-up button functionality
    const scrollUpBtn = document.getElementById('scrollUpBtn');

    function updateScrollVisibility() {
        const scrollTop = window.pageYOffset;
        if (scrollTop > 100) {
            scrollUpBtn.classList.add('show');
        } else {
            scrollUpBtn.classList.remove('show');
        }
    }

    window.addEventListener('scroll', updateScrollVisibility);

    scrollUpBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Accessibility: allow Enter and Space to trigger scroll
    scrollUpBtn.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    });
