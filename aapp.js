// Velan Travels Website JavaScript

// Destination data from provided JSON
const destinationData = [
  {
    "category": "Tamilnadu",
    "destinations": [
      {
        "name": "Ooty",
        "slug": "ooty",
        "description": "Queen of Hill Stations, famous for tea gardens, Nilgiri Mountain Railway, botanical gardens",
        "bestTime": "April - June",
        "duration": "2-3 days",
        "activities": ["Tea Garden Tours", "Toy Train Ride", "Botanical Garden Visit", "Doddabetta Peak", "Ooty Lake Boating"],
        "highlights": ["Nilgiri Mountain Railway", "Tea Plantations", "Pleasant Climate", "Colonial Architecture"],
        "image": "ooty-hills.jpg"
      },
      {
        "name": "Kodaikanal",
        "slug": "kodaikanal",
        "description": "Princess of Hill Stations, known for lakes, valleys, misty mountains and cool climate",
        "bestTime": "September - May",
        "duration": "2-3 days", 
        "activities": ["Lake Boating", "Valley Views", "Trekking", "Coaker's Walk", "Bryant Park"],
        "highlights": ["Kodai Lake", "Pillar Rocks", "Misty Mountains", "Pine Forests"],
        "image": "kodai2.jpg"
      },
      
      {
        "name": "Madurai Meenakshi Temple",
        "slug": "madurai",
        "description": "Ancient temple dedicated to Goddess Meenakshi with stunning Dravidian architecture.",
        "bestTime": "October - March",
        "duration": "1-2 days",
        "activities": ["Temple Darshan", "Architecture Photography", "Evening Aarti", "Heritage Walk", "Local Markets"],
        "highlights": ["Dravidian Architecture", "Colorful Gopurams", "Cultural Heritage", "Religious Significance"],
        "image": "madurai.jpg"
      }

    ]
  },
  {
    "category": "Karnataka",
    "destinations": [
      {
        "name": "Coonoor",
        "slug": "coonoor",
        "description": "Charming hill station with tea plantations, Sim's Park, Lamb's Rock",
        "bestTime": "April - June",
        "duration": "1-2 days",
        "activities": ["Tea Factory Visit", "Sim's Park", "Lamb's Rock", "Dolphin's Nose", "Wellington"],
        "highlights": ["Tea Gardens", "Nilgiri Views", "Colonial Heritage", "Pleasant Weather"],
        "image": "conoor.jpg"
      },
      {
        "name": "Madurai Meenakshi Temple",
        "slug": "madurai",
        "description": "Ancient temple dedicated to Goddess Meenakshi with stunning Dravidian architecture",
        "bestTime": "October - March",
        "duration": "1-2 days",
        "activities": ["Temple Darshan", "Architecture Photography", "Evening Aarti", "Heritage Walk", "Local Markets"],
        "highlights": ["Dravidian Architecture", "Colorful Gopurams", "Cultural Heritage", "Religious Significance"],
        "image": "meenakshi-temple.jpg"
      },
      {
        "name": "Rameshwaram Temple",
        "slug": "rameshwaram",
        "description": "Sacred Jyotirlinga temple, one of the Char Dhams, longest temple corridor in world",
        "bestTime": "October - April",
        "duration": "2-3 days",
        "activities": ["Temple Visit", "Holy Bath", "Dhanushkodi Excursion", "Pamban Bridge", "Beach Visit"],
        "highlights": ["Jyotirlinga", "Longest Corridor", "Pilgrimage Site", "Island Location"],
        "image": "rameshwaram-temple.jpg"
      },
      {
        "name": "Mahabalipuram",
        "slug": "mahabalipuram",
        "description": "UNESCO World Heritage Site with ancient rock-cut temples and Shore Temple",
        "bestTime": "November - February",
        "duration": "1-2 days",
        "activities": ["Shore Temple Visit", "Five Rathas", "Arjuna's Penance", "Beach Activities", "Stone Carving Workshops"],
        "highlights": ["UNESCO Site", "Rock Cut Temples", "Ancient Sculptures", "Coastal Location"],
        "image": "shore-temple.jpg"
      }
    ]
  },
  {
    "category": "Beaches",
    "destinations": [
      {
        "name": "Marina Beach Chennai",
        "slug": "marina-beach",
        "description": "Second longest urban beach in world, vibrant atmosphere, local street food",
        "bestTime": "November - February",
        "duration": "Half day",
        "activities": ["Beach Walk", "Street Food", "Horse Riding", "Kite Flying", "Evening Strolls"],
        "highlights": ["Longest Urban Beach", "Vibrant Atmosphere", "Local Culture", "Street Food"],
        "image": "marina-beach.jpg"
      },
      {
        "name": "Kanyakumari Beach",
        "slug": "kanyakumari",
        "description": "Southernmost tip of India, confluence of three seas, stunning sunrises and sunsets",
        "bestTime": "October - March",
        "duration": "1-2 days",
        "activities": ["Sunrise/Sunset Viewing", "Vivekananda Memorial", "Thiruvalluvar Statue", "Beach Activities", "Ferry Rides"],
        "highlights": ["Three Seas Meeting", "Sunrise & Sunset", "Vivekananda Memorial", "Southern Tip"],
        "image": "kanyakumari-sunset.jpg"
      },
      {
        "name": "Covelong Beach",
        "slug": "covelong",
        "description": "Perfect for surfing, windsurfing, and beach activities",
        "bestTime": "November - February",
        "duration": "1 day",
        "activities": ["Surfing", "Windsurfing", "Beach Sports", "Fishing Village Visit", "Water Sports"],
        "highlights": ["Water Sports", "Surfing Destination", "Clean Beach", "Fishing Culture"],
        "image": "covelong-surf.jpg"
      }
    ]
  },
  {
    "category": "Wildlife & Nature",
    "destinations": [
      {
        "name": "Mudumalai National Park",
        "slug": "mudumalai",
        "description": "Tiger reserve with elephants, diverse wildlife, safari experiences",
        "bestTime": "October - May",
        "duration": "2-3 days",
        "activities": ["Wildlife Safari", "Elephant Spotting", "Bird Watching", "Nature Walks", "Photography"],
        "highlights": ["Tiger Reserve", "Elephant Herds", "Diverse Wildlife", "Safari Experience"],
        "image": "mudumalai-elephant.jpg"
      },
      {
        "name": "Annamalai Tiger Reserve",
        "slug": "annamalai",
        "description": "Western Ghats reserve with tigers, elephants, lion-tailed macaques",
        "bestTime": "October - April", 
        "duration": "2-3 days",
        "activities": ["Tiger Safari", "Trekking", "Wildlife Photography", "Bird Watching", "Nature Trails"],
        "highlights": ["Western Ghats", "Tiger Population", "Endemic Species", "Pristine Forest"],
        "image": "annamalai-tiger.jpg"
      }
    ]
  }
];

// Emoji mapping for destination categories
const categoryEmojis = {
    'Hill Stations': '🏔️',
    'Temples & Heritage': '🕌',
    'Beaches': '🏖️',
    'Wildlife & Nature': '🐅'
};

// Current page state
let currentPage = 'home';
let currentCategory = 'all';

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, initializing app...');
    initializeApp();
});

// Initialize the application
function initializeApp() {
    console.log('Initializing application...');
    setupNavigation();
    loadFeaturedDestinations();
    loadAllDestinations();
    setupContactForm();
    loadSubmissions();
    setupCategoryFilters();
    setupHeroButtons();
    
    // Handle initial page load
    const hash = window.location.hash.substring(1);
    if (hash) {
        navigateTo(hash);
    }
    console.log('Application initialized successfully');
}

// Setup hero section buttons
function setupHeroButtons() {
    // Add event listeners to hero buttons using onclick handlers
    window.navigateTo = navigateTo;
    window.showDestinationDetail = showDestinationDetail;
    window.downloadCSV = downloadCSV;
    window.clearSubmissions = clearSubmissions;
}

// Navigation Setup
function setupNavigation() {
    console.log('Setting up navigation...');
    
    // Mobile navigation toggle
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            console.log('Nav toggle clicked');
            navMenu.classList.toggle('active');
        });
    }
    
    // Navigation links - using event delegation and direct onclick
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('nav-link')) {
            e.preventDefault();
            const page = e.target.getAttribute('data-page');
            console.log('Nav link clicked:', page);
            if (page) {
                navigateTo(page);
            }
        }
    });
}

// Navigate to different pages
function navigateTo(page) {
    console.log('Navigating to:', page);
    
    // Hide all pages
    const pages = document.querySelectorAll('.page');
    pages.forEach(p => {
        p.classList.remove('active');
        console.log('Hiding page:', p.id);
    });
    
    // Show target page
    const targetPage = document.getElementById(page);
    if (targetPage) {
        targetPage.classList.add('active');
        currentPage = page;
        console.log('Showing page:', page);
        
        // Update navigation
        updateNavigation(page);
        
        // Update URL hash
        window.history.pushState(null, null, `#${page}`);
        
        // Update page title and meta description for SEO
        updatePageSEO(page);
        
        // Special handling for certain pages
        if (page === 'admin') {
            loadSubmissions();
        }
        
        // Close mobile menu
        const navMenu = document.getElementById('navMenu');
        if (navMenu) {
            navMenu.classList.remove('active');
        }
        
        // Scroll to top
        window.scrollTo(0, 0);
    } else {
        console.error('Page not found:', page);
    }
}

// Update navigation active state
function updateNavigation(activePage) {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('data-page') === activePage) {
            link.classList.add('active');
        }
    });
}

// Update page SEO elements
function updatePageSEO(page) {
    const titles = {
        'home': 'Velan Travels - Best Tamil Nadu Tour Packages | Hill Stations, Temples, Beaches',
        'destinations': 'Tamil Nadu Destinations - Explore Hill Stations, Temples & Beaches | Velan Travels',
        'about': 'About Velan Travels - Your Tamil Nadu Tourism Expert',
        'contact': 'Contact Velan Travels - Plan Your Tamil Nadu Tour Package',
        'admin': 'Admin Panel - Contact Form Submissions | Velan Travels'
    };
    
    const descriptions = {
        'home': 'Discover Tamil Nadu with Velan Travels. Explore hill stations like Ooty & Kodaikanal, ancient temples, pristine beaches, and wildlife sanctuaries.',
        'destinations': 'Explore the best destinations in Tamil Nadu. From Ooty hill stations to Madurai temples, Kanyakumari beaches to wildlife reserves.',
        'about': 'Learn about Velan Travels, your trusted partner for exploring Tamil Nadu. Over 10 years of experience in Tamil Nadu tourism.',
        'contact': 'Contact Velan Travels to plan your perfect Tamil Nadu tour. Expert guidance for hill stations, temples, beaches, and wildlife tours.',
        'admin': 'Admin panel for managing contact form submissions and customer inquiries.'
    };
    
    if (titles[page]) {
        document.title = titles[page];
    }
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription && descriptions[page]) {
        metaDescription.setAttribute('content', descriptions[page]);
    }
}

// Load featured destinations for homepage
function loadFeaturedDestinations() {
    const featuredGrid = document.getElementById('featuredGrid');
    if (!featuredGrid) return;
    
    console.log('Loading featured destinations...');
    
    // Get 4 featured destinations (one from each category)
    const featured = [];
    destinationData.forEach(category => {
        if (category.destinations.length > 0) {
            featured.push({...category.destinations[0], category: category.category});
        }
    });
    
    featuredGrid.innerHTML = featured.map(dest => createDestinationCard(dest)).join('');
    console.log('Featured destinations loaded:', featured.length);
}

// Load all destinations for destinations page
function loadAllDestinations() {
    const container = document.getElementById('destinationsContainer');
    if (!container) return;
    
    console.log('Loading all destinations...');
    
    const allDestinations = [];
    destinationData.forEach(category => {
        category.destinations.forEach(dest => {
            allDestinations.push({...dest, category: category.category});
        });
    });
    
    container.innerHTML = allDestinations.map(dest => createDestinationCard(dest)).join('');
    console.log('All destinations loaded:', allDestinations.length);
}

// Create destination card HTML

function createDestinationCard(destination) {
    const emoji = categoryEmojis[destination.category] || '📍';
    
    return `
        <div class="destination-card" onclick="showDestinationDetail('${destination.slug}')">
            <div class="destination-image">
                ${emoji}
            </div>
            <div class="destination-info">
                <span class="category-badge">${destination.category}</span>
                <h3>${destination.name}</h3>
                <p>${destination.description}</p>
                <div class="destination-meta">
                    <span>⏱️ ${destination.duration}</span>
                    <span>📅 ${destination.bestTime}</span>
                </div>
            </div>
        </div>
    `;
} 

    function createDestinationCard(destination) {
  const emoji = categoryEmojis[destination.category] || '📍';
  return `
    <div class="destination-card">
      <div class="destination-image">
        <img src="src/${destination.image}" alt="${destination.name}" />
      </div>
      <div class="destination-info">
        <span class="category-badge">${emoji} ${destination.category}</span>
        <h3>${destination.name}</h3>
        <p>${destination.description}</p>
      </div>
    </div>
  `;
}

// Setup category filters
function setupCategoryFilters() {
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('filter-btn')) {
            const category = e.target.getAttribute('data-category');
            console.log('Filter clicked:', category);
            filterDestinations(category);
            
            // Update active state
            const filterBtns = document.querySelectorAll('.filter-btn');
            filterBtns.forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
        }
    });
}

// Filter destinations by category
function filterDestinations(category) {
    const container = document.getElementById('destinationsContainer');
    if (!container) return;
    
    console.log('Filtering destinations by:', category);
    
    let filteredDestinations = [];
    
    if (category === 'all') {
        destinationData.forEach(cat => {
            cat.destinations.forEach(dest => {
                filteredDestinations.push({...dest, category: cat.category});
            });
        });
    } else {
        const categoryData = destinationData.find(cat => cat.category === category);
        if (categoryData) {
            filteredDestinations = categoryData.destinations.map(dest => ({
                ...dest,
                category: categoryData.category
            }));
        }
    }
    
    container.innerHTML = filteredDestinations.map(dest => createDestinationCard(dest)).join('');
    console.log('Filtered destinations:', filteredDestinations.length);
}

// Show destination detail page
function showDestinationDetail(slug) {
    console.log('Showing destination detail for:', slug);
    
    // Find destination by slug
    let destination = null;
    let category = null;
    
    for (let cat of destinationData) {
        const found = cat.destinations.find(dest => dest.slug === slug);
        if (found) {
            destination = found;
            category = cat.category;
            break;
        }
    }
    
    if (!destination) {
        console.error('Destination not found:', slug);
        return;
    }
    
    console.log('Found destination:', destination.name);
    
    // Create breadcrumb
    const breadcrumb = `
        <nav class="breadcrumb">
            <a href="#home" onclick="navigateTo('home')">Home</a> &gt; 
            <a href="#destinations" onclick="navigateTo('destinations')">Destinations</a> &gt; 
            <span>${destination.name}</span>
        </nav>
    `;
    
    // Create destination detail content
    const emoji = categoryEmojis[category] || '📍';
    const detailContent = `
        ${breadcrumb}
        <div class="destination-detail-card">
            <div class="destination-detail-header">
                <div style="text-align: center; font-size: 4rem; margin-bottom: 1rem;">${emoji}</div>
                <h1>${destination.name}</h1>
                <span class="category-badge">${category}</span>
                <p style="margin-top: 1rem; font-size: 1.1rem;">${destination.description}</p>
            </div>
            <div class="destination-detail-content">
                <div class="destination-highlights">
                    <div class="highlight-item">
                        <strong>⏱️ Duration</strong><br>
                        ${destination.duration}
                    </div>
                    <div class="highlight-item">
                        <strong>📅 Best Time</strong><br>
                        ${destination.bestTime}
                    </div>
                </div>
                
                <h3>Key Highlights</h3>
                <div class="destination-highlights">
                    ${destination.highlights.map(highlight => `
                        <div class="highlight-item">✨ ${highlight}</div>
                    `).join('')}
                </div>
                
                <h3>Activities & Attractions</h3>
                <div class="activities-list">
                    ${destination.activities.map(activity => `
                        <span class="activity-tag">${activity}</span>
                    `).join('')}
                </div>
                
                <div style="margin-top: 2rem; text-align: center;">
                    <button class="btn btn--primary btn--lg" onclick="navigateTo('contact')">
                        Book This Package
                    </button>
                    <button class="btn btn--outline btn--lg" onclick="navigateTo('destinations')" style="margin-left: 1rem;">
                        View More Destinations
                    </button>
                </div>
            </div>
        </div>
    `;
    
    document.getElementById('destinationDetailContent').innerHTML = detailContent;
    navigateTo('destination-detail');
    
    // Update SEO for destination page
    document.title = `${destination.name} Tour Package - ${category} | Velan Travels`;
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
        metaDescription.setAttribute('content', `Explore ${destination.name} with Velan Travels. ${destination.description} Best time to visit: ${destination.bestTime}.`);
    }
}

// Setup contact form
function setupContactForm() {
    const form = document.getElementById('contactForm');
    if (!form) return;
    
    console.log('Setting up contact form...');
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        console.log('Form submitted');
        handleFormSubmission();
    });
    
    // Setup phone field to open phone app on mobile
    const phoneField = document.getElementById('phone');
    if (phoneField) {
        phoneField.addEventListener('focus', function() {
            // On mobile devices, this will help trigger the phone keyboard
            this.setAttribute('inputmode', 'tel');
        });
    }
}

// Handle contact form submission
function handleFormSubmission() {
    console.log('Handling form submission...');
    
    const form = document.getElementById('contactForm');
    const formData = new FormData(form);
    
    // Validate required fields
    const requiredFields = ['name', 'email', 'phone'];
    let isValid = true;
    
    requiredFields.forEach(field => {
        const input = document.getElementById(field);
        if (!input.value.trim()) {
            isValid = false;
            input.style.borderColor = 'var(--color-error)';
        } else {
            input.style.borderColor = '';
        }
    });
    
    // Email validation
    const emailField = document.getElementById('email');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailField.value && !emailRegex.test(emailField.value)) {
        isValid = false;
        emailField.style.borderColor = 'var(--color-error)';
    }
    
    // Phone validation
    const phoneField = document.getElementById('phone');
    const phoneRegex = /^[\+]?[0-9\-\s\(\)]{10,}$/;
    if (phoneField.value && !phoneRegex.test(phoneField.value)) {
        isValid = false;
        phoneField.style.borderColor = 'var(--color-error)';
    }
    
    if (!isValid) {
        alert('Please fill in all required fields correctly.');
        return;
    }
    
    // Create submission object
    const submission = {
        id: Date.now(),
        timestamp: new Date().toLocaleString(),
        name: formData.get('name'),
        email: formData.get('email'),
        phone: formData.get('phone'),
        destination: formData.get('destination') || 'Not specified',
        message: formData.get('message') || 'No message provided'
    };
    
    console.log('Form submission:', submission);
    
    // Save to localStorage (simulating Excel integration)
    saveSubmission(submission);
    
    // Show success message
    form.style.display = 'none';
    document.getElementById('formSuccess').classList.remove('hidden');
    
    // On mobile, try to open phone app with the provided number
    if (isMobileDevice() && submission.phone) {
        setTimeout(() => {
            window.location.href = `tel:${submission.phone}`;
        }, 2000);
    }
    
    // Reset form after delay
    setTimeout(() => {
        form.reset();
        form.style.display = 'block';
        document.getElementById('formSuccess').classList.add('hidden');
    }, 5000);
}

// Check if device is mobile
function isMobileDevice() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

// Save form submission to localStorage
function saveSubmission(submission) {
    let submissions = JSON.parse(localStorage.getItem('velan-travel-submissions') || '[]');
    submissions.unshift(submission); // Add to beginning of array
    localStorage.setItem('velan-travel-submissions', JSON.stringify(submissions));
    console.log('Submission saved to localStorage');
}

// Load and display submissions in admin panel
function loadSubmissions() {
    const tableContainer = document.getElementById('submissionsTable');
    if (!tableContainer) return;
    
    console.log('Loading submissions...');
    
    const submissions = JSON.parse(localStorage.getItem('velan-travel-submissions') || '[]');
    
    if (submissions.length === 0) {
        tableContainer.innerHTML = `
            <div class="no-submissions">
                <h3>No Submissions Yet</h3>
                <p>Contact form submissions will appear here.</p>
            </div>
        `;
        return;
    }
    
    const tableHTML = `
        <div class="submissions-table">
            <table>
                <thead>
                    <tr>
                        <th>Date & Time</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Destination</th>
                        <th>Message</th>
                    </tr>
                </thead>
                <tbody>
                    ${submissions.map(sub => `
                        <tr>
                            <td>${sub.timestamp}</td>
                            <td>${sub.name}</td>
                            <td><a href="mailto:${sub.email}">${sub.email}</a></td>
                            <td><a href="tel:${sub.phone}">${sub.phone}</a></td>
                            <td>${sub.destination}</td>
                            <td style="max-width: 200px; overflow: hidden; text-overflow: ellipsis;">${sub.message}</td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        </div>
    `;
    
    tableContainer.innerHTML = tableHTML;
    console.log('Submissions loaded:', submissions.length);
}

// Download submissions as CSV
function downloadCSV() {
    console.log('Downloading CSV...');
    
    const submissions = JSON.parse(localStorage.getItem('velan-travel-submissions') || '[]');
    
    if (submissions.length === 0) {
        alert('No submissions to download.');
        return;
    }
    
    // Create CSV content
    const headers = ['Date & Time', 'Name', 'Email', 'Phone', 'Destination', 'Message'];
    const csvContent = [
        headers.join(','),
        ...submissions.map(sub => [
            `"${sub.timestamp}"`,
            `"${sub.name}"`,
            `"${sub.email}"`,
            `"${sub.phone}"`,
            `"${sub.destination}"`,
            `"${sub.message.replace(/"/g, '""')}"`
        ].join(','))
    ].join('\n');
    
    // Create and download file
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', `velan-travels-submissions-${new Date().toISOString().split('T')[0]}.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    console.log('CSV download initiated');
}

// Clear all submissions
function clearSubmissions() {
    console.log('Clearing submissions...');
    
    if (confirm('Are you sure you want to clear all submissions? This action cannot be undone.')) {
        localStorage.removeItem('velan-travel-submissions');
        loadSubmissions();
        alert('All submissions have been cleared.');
        console.log('Submissions cleared');
    }
}

// Handle browser back/forward buttons
window.addEventListener('popstate', function() {
    const hash = window.location.hash.substring(1);
    if (hash) {
        navigateTo(hash);
    } else {
        navigateTo('home');
    }
});

// Smooth scrolling for anchor links
document.addEventListener('click', function(e) {
    if (e.target.tagName === 'A' && e.target.getAttribute('href') && e.target.getAttribute('href').startsWith('#')) {
        e.preventDefault();
        const targetId = e.target.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    }
});

// SEO and Performance optimizations
document.addEventListener('DOMContentLoaded', function() {
    // Add loading states
    document.body.classList.add('loaded');
    
    // Add structured data for destinations
    addDestinationStructuredData();
});

// Add structured data for destinations
function addDestinationStructuredData() {
    const allDestinations = [];
    destinationData.forEach(category => {
        category.destinations.forEach(dest => {
            allDestinations.push({
                "@context": "https://schema.org",
                "@type": "TouristDestination",
                "name": dest.name,
                "description": dest.description,
                "url": `https://velantravels.com/#${dest.slug}`,
                "addressRegion": "Tamil Nadu",
                "addressCountry": "India",
                "touristType": category.category,
                "availableLanguage": "en"
            });
        });
    });
    
    // Add to page head
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(allDestinations);
    document.head.appendChild(script);
}