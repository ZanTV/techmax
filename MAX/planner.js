// Event Data Array - unified with id for countdown references
const events = [
    {
        id: 1,
        key: "tourism-expo",
        title: "Tourism Expo 2025",
        date: "2025-12-01",
        time: "10:00",
        description: "Join us for the biggest tourism expo in Zanzibar, featuring local vendors and travel deals.",
        status: "upcoming",
        img: "https://media.istockphoto.com/id/2198632896/photo/boat-touring-turquoise-waters-near-kizimkazi-zanzibar-revealing-lush-island-backdrop-with.jpg?s=612x612&w=0&k=20&c=kYHctUWDP9DhC9aWy2U6GWWpiWlatveSRvYG3nYw_kQ="
    },
    {
        id: 2,
        key: "group-safari",
        title: "Group Safari Adventure",
        date: "2025-11-15",
        time: "14:00",
        description: "A thrilling group safari exploring Zanzibar's wildlife reserves.",
        status: "upcoming",
        img: "https://media.istockphoto.com/id/1124441772/photo/young-woman-exploring-jozani-forest-on-zanzibar.webp?a=1&b=1&s=612x612&w=0&k=20&c=4m6IUPJhMnGu9vKpY5CI5S8DwkWP8G_5IEJ2GiHQ3H8="
    },
    {
        id: 3,
        key: "cultural-show",
        title: "Cultural Show Evening",
        date: "2025-11-22",
        time: "20:00",
        description: "Celebrate Zanzibar’s rich culture with music, dance and food.",
        status: "upcoming",
        img: "https://images.unsplash.com/photo-1676156787087-8b1ce952b59f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bXVzaWMlMjBhbmQlMjBkYW5jZSUyMGF0JTIwemFuemliYXJ8ZW58MHx8MHx8fDA%3D"
    },
    {
        id: 4,
        key: "beach-cleanup",
        title: "Beach Cleanup Day",
        date: "2025-09-10",
        time: "09:00",
        description: "A community event to clean and preserve Zanzibar's beaches.",
        status: "past",
        img: "https://images.unsplash.com/photo-1610093674388-cee0337f2684?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fEJlYWNoJTIwQ2xlYW51cCUyMERheXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600"
    },
    {
        id: 5,
        key: "new-event-2026",
        title: "New Event 2026",
        date: "2026-02-15",
        time: "12:00",
        description: "A new upcoming event in February 2026.",
        status: "upcoming",
        img: "https://media.istockphoto.com/id/2194813098/photo/boat-in-indian-ocean-of-zanzibar-tanzania.jpg?s=612x612&w=0&k=20&c=t_koxuhtYN6HCPiP9lpZ6Ee9DySHFhU8rhWvry1yk3w="
    }
];

// Render events into upcoming and past sections dynamically with badges
function renderEvents() {
    const upcomingContainer = document.getElementById('upcomingEvents');
    const pastContainer = document.getElementById('pastEvents');
    upcomingContainer.innerHTML = '';
    pastContainer.innerHTML = '';

    let upcomingCount = 0;

    events.forEach(event => {
        // Create main event card container
        const colDiv = document.createElement('div');
        colDiv.className = 'col-md-6 event-card';
        colDiv.style.setProperty('--i', String(event.id));
        colDiv.setAttribute('data-key', event.key);
        colDiv.setAttribute('data-date', `${event.date}T${event.time}:00`);

        // Add Badge span
        const badge = document.createElement('span');
        badge.className = 'status-badge ' + (event.status === 'upcoming' ? 'upcoming' : 'past');
        badge.textContent = event.status === 'upcoming' ? 'Upcoming' : 'Past';
        badge.style.position = 'absolute';
        badge.style.top = '15px';
        badge.style.left = '15px';
        badge.style.zIndex = '10';
        badge.style.color = 'red';
         badge.style.border = '2px solid #ff6b35'; badge.style.borderRadius = '5px'; 
         badge.style.padding = '4px';

        // Create card inner HTML
        colDiv.innerHTML = `
            <img src="${event.img}" class="card-img-top" alt="${event.title}">
            <div class="card-body">
                <h5 class="card-title">${event.title}</h5>
                <p class="card-text">${event.description}</p>
                <p class="card-text"><i class="fas fa-calendar-alt"></i> Date: ${new Date(event.date).toLocaleDateString(undefined, {year:'numeric', month:'long', day:'numeric'})}</p>
                <div class="countdown" id="countdown${event.id}"></div>
                ${event.status === 'upcoming' ? `<button class="btn-custom mt-3" onclick="joinEvent('${event.key}')">Join Event</button>` : ''}
            </div>
        `;
        colDiv.style.position = 'relative';
        colDiv.prepend(badge);

        // Append to appropriate container
        if (event.status === 'upcoming') {
            upcomingContainer.appendChild(colDiv);
            upcomingCount++;
        } else {
            pastContainer.appendChild(colDiv);
        }
    });

    // Show or hide no events message
    const noEventsMsg = document.getElementById('noEvents');
    if (upcomingCount === 0) {
        noEventsMsg.classList.remove('d-none');
    } else {
        noEventsMsg.classList.add('d-none');
    }
}

// Update Countdown Timers and auto move expired to past events
function updateCountdowns() {
    const now = new Date().getTime();
    let changed = false;

    events.forEach(event => {
        const countdownEl = document.getElementById(`countdown${event.id}`);
        if (!countdownEl) return;

        const eventDateTime = new Date(`${event.date}T${event.time}:00`).getTime();
        const distance = eventDateTime - now;

        if (distance > 0) {
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            countdownEl.innerHTML = `Countdown: ${days}d ${hours}h ${minutes}m ${seconds}s`;

            // Set badge color green for upcoming
            countdownEl.style.color = '#28a745';
        } else {
            countdownEl.innerHTML = "Event has started!";
            countdownEl.style.color = 'gray';

            // Only move to past once
            if (event.status === 'upcoming') {
                event.status = 'past';
                changed = true;
            }
        }
    });

    if (changed) {
        renderEvents();
    }
}

// Populate event select for join form
function populateEventSelect() {
    const eventSelect = document.getElementById('event');
    if (!eventSelect) return;
    eventSelect.innerHTML = '<option value="">Select Event</option>';
    const now = new Date();
    now.setHours(0, 0, 0, 0); // Set to start of today
    events.forEach(event => {
        const eventDate = new Date(event.date + 'T00:00:00');
        if (eventDate >= now) {
            const option = document.createElement('option');
            option.value = event.key;
            option.textContent = event.title;
            eventSelect.appendChild(option);
        }
    });
}

// Initial render events
document.addEventListener('DOMContentLoaded', () => {
    renderEvents();
    populateEventSelect();
    // Every second update countdown timers
    setInterval(() => {
        updateCountdowns();
    }, 1000);
});

function joinEvent(eventKey) {
    // Scroll to join form section
    document.getElementById('joinFormSection').scrollIntoView({behavior: 'smooth'});

    // Auto-fill event select with eventKey
    const eventSelect = document.getElementById('event');
    eventSelect.value = eventKey;
}

// --- Calendar and Modal functionality for index.html ---
const calendarIcon = document.getElementById("calendarIcon");
const calendarOverlay = document.getElementById("calendarOverlay");
const calendarGrid = document.getElementById("calendarGrid");
const currentMonthYear = document.getElementById("currentMonthYear");
const prevMonthBtn = document.getElementById("prevMonth");
const nextMonthBtn = document.getElementById("nextMonth");
const closeCalendarBtn = document.getElementById("closeCalendar");
if (closeCalendarBtn) {
    closeCalendarBtn.style.backgroundColor = 'lightgray';
    closeCalendarBtn.style.borderRadius = '5px';
    closeCalendarBtn.style.padding = '5px';
}

const eventModal = document.getElementById("eventModal");
const modalTitle = document.getElementById("modalTitle");
const modalDate = document.getElementById("modalDate");
const modalDescription = document.getElementById("modalDescription");
const modalStatus = document.getElementById("modalStatus");
const joinBtn = document.getElementById("joinBtn");
const pastText = document.getElementById("pastText");

let currentYear = new Date().getFullYear();
let currentMonth = new Date().getMonth(); // zero-based

// Create and add bounce reset button for calendar to return to today's date
const calendarResetBtn = document.createElement('button');
calendarResetBtn.id = 'calendarResetBtn';
calendarResetBtn.title = "Return to Today";
calendarResetBtn.textContent = "Today";
calendarResetBtn.style.display = 'block';
calendarResetBtn.style.margin = '10px auto 0';
calendarResetBtn.style.padding = '8px 20px';
calendarResetBtn.style.background = 'linear-gradient(45deg, #FF7043, #FFB74D)';
calendarResetBtn.style.border = 'none';
calendarResetBtn.style.borderRadius = '50px';
calendarResetBtn.style.color = 'white';
calendarResetBtn.style.fontWeight = 'bold';
calendarResetBtn.style.cursor = 'pointer';
calendarResetBtn.style.animation = 'bounce 2s infinite';
// Add bounce animation keyframes in style tag
const style = document.createElement('style');
style.textContent = `
@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}
`;
document.head.appendChild(style);

// Append the reset button to calendar modal above the day headers
if (calendarOverlay) {
    const calendarModal = calendarOverlay.querySelector('.calendar-modal');
    if (calendarModal && calendarGrid) {
        calendarModal.insertBefore(calendarResetBtn, calendarGrid);
    }
}

// Reset button click event handler
calendarResetBtn.addEventListener('click', () => {
    currentYear = new Date().getFullYear();
    currentMonth = new Date().getMonth();
    generateCalendar(currentYear, currentMonth);
});

function computeEventStatus(event) {
    const eventDate = new Date(event.date + "T00:00:00");
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    if (eventDate >= today) {
        return "upcoming";
    } else {
        return "past";
    }
}

function updateBadge() {
    if (!calendarIcon) return;
    const upcomingCount = events.filter(event => computeEventStatus(event) === "upcoming").length;
    const badge = document.getElementById("upcomingBadge");
    if (badge) {
        if (upcomingCount > 0) {
            badge.textContent = upcomingCount;
            badge.style.display = "flex";
        } else {
            badge.style.display = "none";
        }
    }
}

function updateCalendarHeader() {
    const calendarHeader = document.querySelector('.calendar-header');
    if (!calendarHeader) return;

    // Get unique years from events
    const eventYears = [...new Set(events.map(event => new Date(event.date + "T00:00:00").getFullYear()))].sort((a, b) => a - b);

    if (eventYears.length === 1) {
        calendarHeader.textContent = `Event Calendar – ${eventYears[0]}`;
    } else if (eventYears.length > 1) {
        calendarHeader.textContent = `Event Calendar – ${eventYears.join(' / ')}`;
    } else {
        calendarHeader.textContent = 'Event Calendar';
    }
}

// Function to update the upcoming events summary in calendar modal for future dates
function updateUpcomingEventsSummary(year, month) {
    let summaryEl = document.getElementById('upcomingEventsSummary');
    if (!summaryEl) {
        summaryEl = document.createElement('div');
        summaryEl.id = 'upcomingEventsSummary';
        summaryEl.style.color = 'white';
        summaryEl.style.backgroundColor = 'rgba(0,0,0,0.3)';
        summaryEl.style.borderRadius = '10px';
        summaryEl.style.padding = '10px';
        summaryEl.style.marginTop = '15px';
        summaryEl.style.maxHeight = '150px';
        summaryEl.style.overflowY = 'auto';
        summaryEl.style.fontSize = '0.9rem';
        summaryEl.style.position = 'relative';
        summaryEl.style.zIndex = '10';
        document.querySelector('.calendar-modal').appendChild(summaryEl);
    }

    // Get today's date normalized to midnight
    const todayDate = new Date();
    todayDate.setHours(0, 0, 0, 0);

    // Filter events that occur on or after today (exclude past events)
    const futureEvents = events.filter(e => {
        const eventDate = new Date(e.date + 'T00:00:00');
        return eventDate >= todayDate;
    });

    if (futureEvents.length > 0) {
        let html = '<strong>Upcoming Events Summary:</strong><ul style="padding-left:20px; margin:5px 0;">';
        futureEvents.forEach(ev => {
            const evDate = new Date(ev.date + 'T00:00:00');
            const options = { year: 'numeric', month: 'short', day: 'numeric' };
            const formattedDate = evDate.toLocaleDateString(undefined, options);
            // Check if event date is today
            const isToday = evDate.getTime() === todayDate.getTime();
            let todayComment = '';
            if (isToday) {
                todayComment = ' <span style="animation: bounce 1.5s infinite; display: inline-block;" title="Today 🎉">🎉</span> <em>(today)</em>';
            }
            html += `<li><strong>${formattedDate}</strong>: ${ev.title} at ${ev.time}${todayComment}</li>`;
        });
        html += '</ul>';
        summaryEl.innerHTML = html;
        summaryEl.style.display = 'block';
    } else {
        summaryEl.innerHTML = "";
        summaryEl.style.display = 'none';
    }
}

function fadeIn(element, duration = 300) {
    element.style.opacity = 0;
    element.style.display = "flex";
    let last = +new Date();
    const tick = function() {
        element.style.opacity = +element.style.opacity + (new Date() - last) / duration;
        last = +new Date();

        if (+element.style.opacity < 1) {
            (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16);
        }
    };
    tick();
}

function fadeOut(element, duration = 300) {
    element.style.opacity = 1;
    let last = +new Date();
    const tick = function() {
        element.style.opacity = +element.style.opacity - (new Date() - last) / duration;
        last = +new Date();

        if (+element.style.opacity > 0) {
            (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16);
        } else {
            element.style.display = "none";
        }
    };
    tick();
}

function generateCalendar(year, month) {
    if (!calendarGrid) return;
    calendarGrid.innerHTML = "";

    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    days.forEach(day => {
        const header = document.createElement("div");
        header.className = "day-header";
        header.textContent = day;
        calendarGrid.appendChild(header);
    });

    const firstDay = new Date(year, month, 1).getDay();
    const lastDate = new Date(year, month + 1, 0).getDate();

    for (let i = 0; i < firstDay; i++) {
        const emptyCell = document.createElement("div");
        emptyCell.className = "date-cell empty";
        calendarGrid.appendChild(emptyCell);
    }

    // Check if there are events in the displayed year
    const hasEventsThisYear = events.some(event => {
        const eventYear = new Date(event.date + "T00:00:00").getFullYear();
        return eventYear === year;
    });

    if (!hasEventsThisYear && year > new Date().getFullYear()) {
        // Display message for no planned events in future year
        const messageDiv = document.createElement("div");
        messageDiv.className = "no-events-year-message";
        messageDiv.style.gridColumn = "span 7";
        messageDiv.style.textAlign = "center";
        messageDiv.style.padding = "20px";
        messageDiv.style.color = "white";
        messageDiv.style.fontWeight = "bold";
        messageDiv.textContent = `No planned events for the year ${year}`;
        calendarGrid.appendChild(messageDiv);
    } else {
        for (let date = 1; date <= lastDate; date++) {
            const dateCell = document.createElement("div");
            dateCell.className = "date-cell";
            dateCell.textContent = date;

            const cellDate = new Date(year, month, date);
            const today = new Date();
            if (cellDate.toDateString() === today.toDateString()) {
                dateCell.classList.add("today");
            }

            const eventDateStr = `${year}-${String(month + 1).padStart(2, "0")}-${String(date).padStart(2, "0")}`;
            const event = events.find(e => e.date === eventDateStr);

            if (event) {
                const dynamicStatus = computeEventStatus(event);
                const dot = document.createElement("div");
                dot.className = `event-dot ${dynamicStatus}`;
                dot.title = event.title;
                dateCell.appendChild(dot);
                dateCell.addEventListener("click", () => openModal(event));
            }

            calendarGrid.appendChild(dateCell);
        }
    }

    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    if (currentMonthYear) currentMonthYear.textContent = `${monthNames[month]} ${year}`;

    // Update the calendar header based on event years
    updateCalendarHeader();

    // Update the upcoming events summary
    updateUpcomingEventsSummary(year, month);
}

function openModal(event) {
    if (!modalTitle || !modalDate || !modalDescription || !modalStatus || !joinBtn || !pastText) return;
    const dynamicStatus = computeEventStatus(event);

    modalTitle.textContent = event.title;
    modalDate.textContent = `${event.date} at ${event.time}`;
    modalDescription.textContent = event.description;
    modalStatus.textContent = dynamicStatus.charAt(0).toUpperCase() + dynamicStatus.slice(1);
    modalStatus.className = `status-badge ${dynamicStatus}`;

    if (dynamicStatus === "upcoming") {
        joinBtn.style.display = "block";
        pastText.style.display = "none";
    } else {
        joinBtn.style.display = "none";
        pastText.style.display = "block";
    }

    fadeIn(eventModal, 300);
}

if (calendarIcon) {
    calendarIcon.addEventListener("click", () => {
        if (!calendarOverlay) return;
        if (calendarOverlay.style.display === "flex") {
            fadeOut(calendarOverlay, 300);
        } else {
            fadeIn(calendarOverlay, 300);
            // Check for upcoming events and adjust starting year/month
            const upcomingEvents = events.filter(e => computeEventStatus(e) === 'upcoming');
            if (upcomingEvents.length > 0) {
                const earliestEvent = upcomingEvents.sort((a, b) => new Date(a.date) - new Date(b.date))[0];
                const eventDate = new Date(earliestEvent.date);
                const eventYear = eventDate.getFullYear();
                const eventMonth = eventDate.getMonth();
                const now = new Date();
                const currentYearNow = now.getFullYear();
                if (eventYear > currentYearNow) {
                    currentYear = eventYear;
                    currentMonth = 0; // Start from January of the event's year
                }
            }
            generateCalendar(currentYear, currentMonth);
        }
    });
}

if (closeCalendarBtn) {
    closeCalendarBtn.addEventListener("click", () => {
        if (!calendarOverlay) return;
        fadeOut(calendarOverlay, 300);
    });
}

if (calendarOverlay) {
    calendarOverlay.addEventListener("click", (e) => {
        if (e.target === calendarOverlay) {
            fadeOut(calendarOverlay, 300);
        }
    });
}

if (prevMonthBtn) {
    prevMonthBtn.addEventListener("click", () => {
        if (currentMonth > 0) {
            currentMonth--;
            generateCalendar(currentYear, currentMonth);
        } else {
            currentMonth = 11;
            currentYear--;
            generateCalendar(currentYear, currentMonth);
        }
    });
}

if (nextMonthBtn) {
    nextMonthBtn.addEventListener("click", () => {
        if (currentMonth < 11) {
            currentMonth++;
            generateCalendar(currentYear, currentMonth);
        } else {
            currentMonth = 0;
            currentYear++;
            generateCalendar(currentYear, currentMonth);
        }
    });
}

const closeModalBtn = document.getElementById("closeModal");
if (closeModalBtn) {
    closeModalBtn.addEventListener("click", () => {
        fadeOut(eventModal, 300);
    });
}

if (eventModal) {
    eventModal.addEventListener("click", (e) => {
        if (e.target === eventModal) {
            fadeOut(eventModal, 300);
        }
    });
}

if (joinBtn) {
    joinBtn.addEventListener("click", () => {
        window.location.href = "planner.html";
    });
}

document.addEventListener('keydown', function(e) {
    if (e.key === "Escape") {
        if (calendarOverlay && calendarOverlay.style.display === "flex") {
            fadeOut(calendarOverlay, 300);
        }
        if (eventModal && eventModal.style.display === "flex") {
            fadeOut(eventModal, 300);
        }
    }
    if (calendarOverlay && calendarOverlay.style.display === "flex") {
        if (e.key === "ArrowLeft") {
            if (currentMonth > 0) {
                currentMonth--;
                generateCalendar(currentYear, currentMonth);
            } else {
                currentMonth = 11;
                currentYear--;
                generateCalendar(currentYear, currentMonth);
            }
        }
        if (e.key === "ArrowRight") {
            if (currentMonth < 11) {
                currentMonth++;
                generateCalendar(currentYear, currentMonth);
            } else {
                currentMonth = 0;
                currentYear++;
                generateCalendar(currentYear, currentMonth);
            }
        }
    }
});

// Initialize badge on load
document.addEventListener('DOMContentLoaded', () => {
    updateBadge();
    renderEvents();
    setInterval(() => {
        updateCountdowns();
    }, 1000);
});

