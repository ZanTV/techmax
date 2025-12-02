// Data for videos and images
const shortsData = [
    {
        id: '1',
        type: 'video',
        src: 'videos/zanzibar_beach.mp4',
        embedUrl: '',
        title: 'Zanzibar Beach Paradise',
        description: 'Experience the stunning beaches of Zanzibar with crystal clear waters and white sands. Perfect for relaxation and adventure.',
        link: 'tour.html',
        uploadDate: new Date('2025-11-29'),
        category: 'beach'
    },
    {
        id: '2',
        type: 'image',
        src: 'https://images.unsplash.com/photo-1621583628955-42fbc37bf424?ixlib=rb-4.1.0&auto=format&fit=crop&w=600&q=60',
        embedUrl: '',
        title: 'Stone Town Exploration',
        description: 'Dive into the rich history of Zanzibar\'s Stone Town, a UNESCO World Heritage site filled with culture and architecture.',
        link: 'tour.html',
        uploadDate: new Date('2024-10-09'),
        category: 'culture'
    },
    {
        id: '3',
        type: 'video',
        src: 'videos/safari_adventure.mp4',
        embedUrl: '',
        title: 'Safari Adventure',
        description: 'Embark on a thrilling safari through Zanzibar\'s wildlife reserves. See exotic animals in their natural habitat.',
        link: 'excursion.html',
        uploadDate: new Date('2024-10-15'),
        category: 'safari'
    },
    {
        id: '4',
        type: 'image',
        src: 'https://images.unsplash.com/photo-1620896712848-d05411ec91ec?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fERob3clMjBTYWlsaW5nJTIwRXhwZXJpZW5jZSUyMGF0JTIwemFuemliYXJ8ZW58MHx8MHx8fDA%3D',
        embedUrl: '',
        title: 'Dhow Sailing Experience',
        description: 'Sail the Indian Ocean on a traditional dhow boat. Enjoy sunset views and marine life encounters.',
        link: 'excursion.html',
        uploadDate: new Date('2025-11-29'),
        category: 'adventure'
    },
    {
        id: '5',
        type: 'image',
        src: 'https://media.istockphoto.com/id/175411040/photo/fresh-peppercorn.jpg?s=612x612&w=0&k=20&c=vHFTUPHH-rP8HRTZf4uHBR1IW1GaORI_8c8eFWdCgI8=',
        embedUrl: '',
        title: 'Spice Farm Tour',
        description: 'Discover the aromatic spice farms of Zanzibar. Learn about cinnamon, cloves, and other exotic spices.',
        link: 'excursion.html',
        uploadDate: new Date('2024-10-16'),
        category: 'culture'
    },
    {
        id: '6',
        type: 'image',
        src: 'https://images.unsplash.com/photo-1668628507370-fe568778b4eb?ixlib=rb-4.1.0&auto=format&fit=crop&w=600&q=60',
        embedUrl: '',
        title: 'Wildlife Encounter',
        description: 'Get up close with Zanzibar\'s diverse wildlife. From monkeys to birds, nature comes alive here.',
        link: 'tour.html',
        uploadDate: new Date('2024-10-07'),
        category: 'wildlife'
    }
];

// Final short data
const shortsFinal = {
    id: 'final',  // Added unique ID for comments
    type: 'image',
    src: 'images/logo.jpg',
    title: 'Thanks for watching our shorts!',
    description: 'We appreciate you for sticking with us! Follow @techmaxtours on Instagram and Facebook for more exciting updates. Don’t forget to share with your friends, and explore more adventures at www.techmaxtours.com. See you on the next journey!'
};

// Comments storage (in a real app, this would be server-side)
let comments = {};

// Current short index
let currentShortIndex = 0;

// Sorted shorts array
let sortedShorts = [];

// Function to check if a short is recent (within 2 days)
function isRecent(uploadDate) {
    const now = Date.now();
    const uploadTime = uploadDate instanceof Date ? uploadDate.getTime() : uploadDate;
    const twoDaysMs = 2 * 24 * 60 * 60 * 1000;
    return (now - uploadTime) <= twoDaysMs;
}

// Load shorts
function loadShorts() {
    const container = document.getElementById('shortsContainer');

    // Separate recent and non-recent shorts
    const recentShorts = shortsData.filter(short => isRecent(short.uploadDate));
    const oldShorts = shortsData.filter(short => !isRecent(short.uploadDate));

    // Shuffle the old shorts
    for (let i = oldShorts.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [oldShorts[i], oldShorts[j]] = [oldShorts[j], oldShorts[i]];
    }

    // Combine recent shorts first, then shuffled old shorts
    sortedShorts = [...recentShorts, ...oldShorts];
    sortedShorts.push(shortsFinal);

    sortedShorts.forEach((short, index) => {
        const shortDiv = document.createElement('div');
        shortDiv.className = 'short';
        shortDiv.id = `short-${index}`;
        shortDiv.style.display = index === 0 ? 'flex' : 'none';
        const isFinal = index === sortedShorts.length - 1;
        shortDiv.innerHTML = `
            ${short.type === 'video' ? (short.embedUrl ? `<iframe src="${short.embedUrl}" width="100%" height="100%" frameborder="0" scrolling="no" allowtransparency="true"></iframe>` : `<video src="${short.src}" loop></video><div class="progress-bar"><div class="progress-fill"></div></div><div class="play-pause-indicator" id="indicator-${index}"></div>`) : `<img src="${short.src}" alt="${short.title}">`}
            <div class="overlay">
                <div class="content">
                    <div class="title">${isFinal ? '' : (isRecent(short.uploadDate) ? '<span class="control-btn">new</span>' : '')} ${short.title}</div>
                    <div class="description">${short.description}${short.link ? ` <a href="${short.link}" style="color: #FF7043; text-decoration: none; font-weight: bold;">View More</a>` : ''}</div>
                </div>
                ${isFinal ? `
                <div class="final-controls">
                    <button class="control-btn" onclick="window.open('https://instagram.com/techmaxtours', '_blank')"><i class="fab fa-instagram"></i></button>
                    <button class="control-btn" onclick="window.open('https://facebook.com/techmaxtours', '_blank')"><i class="fab fa-facebook"></i></button>
                    <button class="control-btn" onclick="shareShort()"><i class="fas fa-share"></i></button>
                    <button class="control-btn" onclick="window.location.href='index.html'"><i class="fas fa-globe"></i></button>
                </div>
                ` : `
                <div class="controls">
                    <button class="control-btn" onclick="toggleLike(${index})" id="like-${index}"><i class="fas fa-heart"></i></button>
                    <button class="control-btn" onclick="toggleDislike(${index})" id="dislike-${index}"><i class="fas fa-thumbs-down"></i></button>
                    <button class="control-btn" onclick="showComments(${index})"><i class="fas fa-comment"></i></button>
                    <button class="control-btn" onclick="shareShort()"><i class="fas fa-share"></i></button>
                    <button class="control-btn" onclick="toggleSocialMenu()"><i class="fas fa-ellipsis-v"></i></button>
                </div>
                `}
            </div>
        `;
        container.appendChild(shortDiv);

        // Add click event to description for expansion
        const description = shortDiv.querySelector('.description');
        description.addEventListener('click', () => {
            description.classList.add('expanded');
            setTimeout(() => {
                description.classList.remove('expanded');
            }, 5000);
        });

        // Initialize comments for this short
        comments[index] = [];

        // Handle video playback
        if (short.type === 'video') {
            const video = shortDiv.querySelector('video');
            const progressFill = shortDiv.querySelector('.progress-fill');

            // Update progress bar
            video.addEventListener('timeupdate', () => {
                const progress = (video.currentTime / video.duration) * 100;
                progressFill.style.width = `${progress}%`;
            });

            // Add click to toggle play/pause
            video.addEventListener('click', () => {
                const indicator = shortDiv.querySelector('.play-pause-indicator');
                const progressBar = shortDiv.querySelector('.progress-bar');
                const progressFill = shortDiv.querySelector('.progress-fill');
                if (video.paused) {
                    video.play();
                    progressBar.classList.remove('paused');
                    progressFill.classList.remove('paused');
                    showIndicator(indicator, 'play');
                } else {
                    video.pause();
                    progressBar.classList.add('paused');
                    progressFill.classList.add('paused');
                    showIndicator(indicator, 'pause');
                }
            });
        }
    });

    // Add swipe gestures
    let startY = 0;
    let endY = 0;

    container.addEventListener('touchstart', (e) => {
        startY = e.touches[0].clientY;
    });

    container.addEventListener('touchend', (e) => {
        endY = e.changedTouches[0].clientY;
        const diffY = startY - endY;

        if (Math.abs(diffY) > 50) { // Minimum swipe distance
            if (diffY > 0) {
                // Swipe up - next short
                nextShort();
            } else {
                // Swipe down - previous short
                prevShort();
            }
        }
    });

    // Add keyboard navigation for desktop
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowDown') {
            e.preventDefault();
            nextShort();
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            prevShort();
        } else if (e.key === ' ') {
            e.preventDefault();
            togglePlayPause();
        }
    });
}

// Show next short
function nextShort() {
    if (currentShortIndex < sortedShorts.length - 1) {
        changeShort(currentShortIndex + 1);
    }
}

// Show previous short
function prevShort() {
    if (currentShortIndex > 0) {
        changeShort(currentShortIndex - 1);
    }
}

// Change to specific short
function changeShort(index) {
    // Hide current short
    const currentShort = document.getElementById(`short-${currentShortIndex}`);
    if (currentShort) {
        currentShort.style.display = 'none';
        const video = currentShort.querySelector('video');
        if (video) video.pause();
    }

    // Show new short
    currentShortIndex = index;
    const newShort = document.getElementById(`short-${currentShortIndex}`);
    if (newShort) {
        newShort.style.display = 'flex';
        const video = newShort.querySelector('video');
        if (video) {
            video.currentTime = 0;
            video.play();
        }
    }
}

// Toggle like
function toggleLike(index) {
    const likeBtn = document.getElementById(`like-${index}`);
    const dislikeBtn = document.getElementById(`dislike-${index}`);
    likeBtn.classList.toggle('liked');
    dislikeBtn.classList.remove('disliked');
}

// Toggle dislike
function toggleDislike(index) {
    const likeBtn = document.getElementById(`like-${index}`);
    const dislikeBtn = document.getElementById(`dislike-${index}`);
    dislikeBtn.classList.toggle('disliked');
    likeBtn.classList.remove('liked');
}

// Show comments
function showComments(index) {
    currentShortIndex = index;
    const commentSection = document.getElementById('commentSection');
    const commentsList = document.getElementById('commentsList');
    // Load comments from server using short_id
    const shortId = sortedShorts[index].id;
    fetch(`database and php files/comments.php?short_id=${shortId}`)
        .then(response => response.json())
        .then(data => {
            commentsList.innerHTML = data.map(comment => `<div class="comment">${comment.comment_text} <small>${new Date(comment.timestamp).toLocaleString()}</small></div>`).join('');
            commentSection.classList.add('show');
        })
        .catch(error => console.error('Error loading comments:', error));
}

// Add comment
function addComment() {
    const input = document.getElementById('commentInput');
    const comment = input.value.trim();
    if (comment) {
        // Send comment to server using short_id
        const shortId = sortedShorts[currentShortIndex].id;
        fetch('database and php files/comments.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                short_id: shortId,
                comment_text: comment
            })
        })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    input.value = '';
                    showComments(currentShortIndex); // Reload comments to show the new one
                } else {
                    alert('Error posting comment: ' + (data.error || 'Unknown error'));
                }
            })
            .catch(error => {
                console.error('Error posting comment:', error);
                alert('Error posting comment. Please try again.');
            });
    }
}

// Share short
function shareShort() {
    const url = window.location.href;
    navigator.share ? navigator.share({ url }) : navigator.clipboard.writeText(url).then(() => alert('URL copied to clipboard!'));
}

// Toggle social menu
function toggleSocialMenu() {
    const menu = document.getElementById('socialMenu');
    menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
}

// Dismiss first-time overlay
function dismissOverlay() {
    const overlay = document.getElementById('firstTimeOverlay');
    overlay.style.display = 'none';
    localStorage.setItem('firstTimeShorts', 'false');
}

// Close comment section when clicking outside
document.addEventListener('click', (e) => {
    const commentSection = document.getElementById('commentSection');
    const socialMenu = document.getElementById('socialMenu');
    if (!commentSection.contains(e.target) && !e.target.closest('.control-btn')) {
        commentSection.classList.remove('show');
    }
    if (!socialMenu.contains(e.target) && !e.target.closest('.control-btn')) {
        socialMenu.style.display = 'none';
    }
});

// Check and show first-time overlay
function checkFirstTime() {
    if (!localStorage.getItem('firstTimeShorts')) {
        const overlay = document.getElementById('firstTimeOverlay');
        overlay.style.display = 'block';
    }
}

// Toggle play/pause for current video
function togglePlayPause() {
    const currentShort = document.getElementById(`short-${currentShortIndex}`);
    if (currentShort) {
        const video = currentShort.querySelector('video');
        const indicator = currentShort.querySelector('.play-pause-indicator');
        const progressBar = currentShort.querySelector('.progress-bar');
        const progressFill = currentShort.querySelector('.progress-fill');
        if (video) {
            if (video.paused) {
                video.play();
                progressBar.classList.remove('paused');
                progressFill.classList.remove('paused');
                showIndicator(indicator, 'play');
            } else {
                video.pause();
                progressBar.classList.add('paused');
                progressFill.classList.add('paused');
                showIndicator(indicator, 'pause');
            }
        }
    }
}

// Show play/pause indicator
function showIndicator(indicator, type) {
    if (indicator) {
        indicator.innerHTML = type === 'play' ? '<i class="fas fa-play"></i>' : '<i class="fas fa-pause"></i>';
        indicator.style.opacity = '1';
        setTimeout(() => {
            indicator.style.opacity = '0';
        }, 2000);
    }
}

// Toggle global mute
function toggleGlobalMute() {
    const muteBtn = document.getElementById('globalMuteBtn');
    const allVideos = document.querySelectorAll('.short video');
    const isMuted = allVideos.length > 0 && allVideos[0].muted;
    allVideos.forEach(video => video.muted = !isMuted);
    muteBtn.innerHTML = isMuted ? '<i class="fas fa-volume-up"></i>' : '<i class="fas fa-volume-mute"></i>';
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    loadShorts();
    checkFirstTime();
});
