// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileNav = document.getElementById('mobileNav');
const mobileNavClose = document.getElementById('mobileNavClose');
const overlay = document.getElementById('overlay');

function openMobileMenu() {
    mobileNav.classList.add('active');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeMobileMenu() {
    mobileNav.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
}

mobileMenuBtn.addEventListener('click', openMobileMenu);
mobileNavClose.addEventListener('click', closeMobileMenu);
overlay.addEventListener('click', closeMobileMenu);

// Mobile Dropdown Toggle
const shopDropdownBtn = document.getElementById('shopDropdownBtn');
const shopDropdown = document.getElementById('shopDropdown');

shopDropdownBtn.addEventListener('click', function() {
    shopDropdown.classList.toggle('active');
    const icon = this.querySelector('span');
    icon.textContent = shopDropdown.classList.contains('active') ? '−' : '+';
});

// User Button Click (Simulated)
const userBtn = document.getElementById('userBtn');
userBtn.addEventListener('click', function() {
    alert('User Account\n(Login/Register feature would appear here)');
});

// Hero Slider Functionality
const heroSlides = document.querySelectorAll('.hero-slide');
const indicators = document.querySelectorAll('.indicator');
const prevBtn = document.getElementById('heroPrev');
const nextBtn = document.getElementById('heroNext');
let currentSlide = 0;
let slideInterval;

function showSlide(index) {
    heroSlides.forEach(slide => slide.classList.remove('active'));
    indicators.forEach(indicator => indicator.classList.remove('active'));
    heroSlides[index].classList.add('active');
    indicators[index].classList.add('active');
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % heroSlides.length;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + heroSlides.length) % heroSlides.length;
    showSlide(currentSlide);
}

function startAutoSlide() {
    slideInterval = setInterval(nextSlide, 5000);
}

function stopAutoSlide() {
    clearInterval(slideInterval);
}

nextBtn.addEventListener('click', function() {
    nextSlide();
    stopAutoSlide();
    startAutoSlide();
});

prevBtn.addEventListener('click', function() {
    prevSlide();
    stopAutoSlide();
    startAutoSlide();
});

indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', function() {
        currentSlide = index;
        showSlide(currentSlide);
        stopAutoSlide();
        startAutoSlide();
    });
});

const heroSection = document.querySelector('.hero-section');
heroSection.addEventListener('mouseenter', stopAutoSlide);
heroSection.addEventListener('mouseleave', startAutoSlide);

startAutoSlide();

// Products Data
const productsData = {
    bags: [
        { id: 1, name: "Vintage Leather bag", price: 38000, category: "Bags", image: "./assests/men bags/Daily Stylish Sling Messenger.jpeg" },
        { id: 2, name: "leather laptop Bag", price: 25000, category: "Bags", image: "./assests/men bags/download.jpeg" },
        { id: 3, name: "Sling Backpack", price: 32000, category: "Bags", image: "./assests/men bags/NICGID Sling Bag Chest Shoulder Backpack Crossbody Bags for Men Women.jpeg" },
        { id: 4, name: "Duflle Leather Side handbag", price: 42000, category: "Bags", image: "./assests/men bags/Sac A Main Femme Pas Cher Ivoire, Petit Sac À Main En Cuir.jpeg" },
        { id: 5, name: "Modern Laptop Bag", price: 35000, category: "Bags", image: "./assests/men bags/Vagarant Bags _ 16_ Classic Full Leather Briefcase Backpack L02blk _ Color_ Black _ Size_ Os.jpeg" }
    ],
    shoes: [
        { id: 6, name: "Black leather double Monk", price: 25000, category: "Shoes", image: "./assests/shoes for men/black leather double monk.jpeg" },
        { id: 7, name: "Oxford black Leather", price: 22000, category: "Shoes", image: "./assests/shoes for men/black leather oxforf shoe.jpeg" },
        { id: 8, name: "Corteo Flat Black Patent", price: 28000, category: "Shoes", image: "./assests/shoes for men/Corteo Flat Black Patent.jpeg" },
        { id: 9, name: "Classic Lace up Sneakers", price: 18000, category: "Shoes", image: "./assests/shoes for men/men sneakers.jpeg" }
    ],
    luggage: [
        { id: 10, name: "Black Premium Travel Bag", price: 45000, category: "Luggage", image: "./assests/travelling bags/download (6).jpeg" },
        { id: 11, name: "Leather Duffel Bag", price: 35000, category: "Luggage", image: "./assests/travelling bags/download (7).jpeg" },
        { id: 12, name: "White Carry-On Travel Bag", price: 38000, category: "Luggage", image: "./assests/travelling bags/download (8).jpeg" },
        { id: 13, name: "Weekend Travel Bag", price: 28000, category: "Luggage", image: "./assests/travelling bags/download (9).jpeg" }
    ],
    suits: [
        { id: 14, name: "Black & Teal Abstract Tuxedo", price: 75000, category: "Suits", image: "./assests/men suits/Black & Teal Abstract Tuxedo - 3 Piece 42R Matching Pant.jpeg" },
        { id: 15, name: "Purple floral Paisley Vest", price: 42000, category: "Suits", image: "./assests/men suits/Mens Silk Victorian Vest Tie Set Paisley Purple _ Color_ Purple_Red _ Size_ Various.jpeg" },
        { id: 16, name: "Business Suit vest", price: 85000, category: "Suits", image: "./assests/men suits/Herrenweste Classic - Kaffee _ S.jpeg" },
        { id: 17, name: "Blue Paisley Vest", price: 38000, category: "Suits", image: "./assests/men suits/Conjunto de chaleco elegante azul con diseño paisley.jpeg" }
    ],
    menTops: [
        { id: 18, name: "Gothic Leather Trench Coat", price: 12000, category: "Men's Tops", image: "./assests/cloths for men/Bold Gothic Mens Black Leather Trench Coat.jpeg" },
        { id: 19, name: "Men brown wool coat", price: 15000, category: "Men's Tops", image: "./assests/cloths for men/download (17).jpeg" },
        { id: 20, name: "Wool Pea Coat", price: 18000, category: "Men's Tops", image: "./assests/cloths for men/Herrenmantel.jpeg" },
        { id: 21, name: "Double collar trench coat", price: 10000, category: "Men's Tops", image: "./assests/cloths for men/Philip - Pardesiu modern cu buzunare pentru bărbați, Maro _ 4XL.jpeg" }
    ],
    femaleShoes: [
        { id: 22, name: "Women Pink Snickers", price: 28000, category: "Female Shoes", image: "./assests/female shoes/pink women snickers.jpeg" },
        { id: 23, name: "Women Ankle Snowboot", price: 18000, category: "Female Shoes", image: "./assests/female shoes/women ankle snowboot.jpeg" },
        { id: 24, name: "women Addidas Sandal", price: 25000, category: "Female Shoes", image: "./assests/female shoes/women addidas sandal.jpeg" },
        { id: 25, name: "red roamn women boot", price: 32000, category: "Female Shoes", image: "./assests/female shoes/red roamn women boot.jpeg" }
    ],
    femaleTops: [
        { id: 26, name: "Neck Ruched Mni dress", price: 18000, category: "Female Tops", image: "./assests/women gown/download (10).jpeg" },
        { id: 27, name: "Bowknow Decorated Hem dress", price: 14000, category: "Female Tops", image: "./assests/women gown/download (11).jpeg" },
        { id: 28, name: "Whimsical OFf shoulder", price: 22000, category: "Female Tops", image: "./assests/women gown/Witchy Retro Mysterious Star & Moon Print Off Shoulder Bell Sleeve A-Line Dress - Black2 _ XL.jpeg" },
        { id: 29, name: "Vintage Polka Dot Halter", price: 8000, category: "Female Tops", image: "./assests/women gown/download (15).jpeg" }
    ],
    femaleBags: [
        { id: 30, name: "Luxury Shoulder Handbag", price: 55000, category: "Female Bags", image: "./assests/women bags/download (1).jpeg" },
        { id: 31, name: "Blue Tote Bag", price: 28000, category: "Female Bags", image: "./assests/women bags/download (2).jpeg" },
        { id: 32, name: "Pink Evening Clutch", price: 22000, category: "Female Bags", image: "./assests/women bags/download (3).jpeg" },
        { id: 33, name: "Green Tote Bag", price: 32000, category: "Female Bags", image: "./assests/women bags/download (4).jpeg" }
    ]
};

// State management
let cart = [];
let currentFilter = 'all';
const itemsPerCategory = 3;
let currentSearchQuery = '';

// Category display names
const categoryNames = {
    bags: 'Bags',
    shoes: 'Men Shoes',
    luggage: 'Luggage',
    suits: 'Suits/Vest',
    menTops: "Men's Coat",
    femaleShoes: 'Female Shoes',
    femaleTops: 'Female Tops',
    femaleBags: 'Female Bags'
};

// Initialize
function init() {
    loadCart();
    renderFilters();
    renderProducts();
    updateCartUI();
    attachEventListeners();
    setupSearchSuggestions();
}

// Render filter buttons
function renderFilters() {
    const filterContainer = document.getElementById('filterContainer');
    let filtersHTML = '<button class="filter-btn active" data-filter="all">All Products</button>';
    
    Object.keys(productsData).forEach(key => {
        filtersHTML += `<button class="filter-btn" data-filter="${key}">${categoryNames[key]}</button>`;
    });
    
    filterContainer.innerHTML = filtersHTML;
}

// Render products
function renderProducts() {
    const container = document.getElementById('productsContainer');
    let html = '';

    Object.keys(productsData).forEach(categoryKey => {
        const products = productsData[categoryKey];
        const categoryName = categoryNames[categoryKey];
        const showSeeMore = products.length > itemsPerCategory;

        html += `
            <div class="category-section" data-category="${categoryKey}">
                <div class="category-header">
                    <h3 class="category-title">${categoryName}</h3>
                    ${showSeeMore ? `<button class="see-more-btn" data-category="${categoryKey}">See More</button>` : ''}
                </div>
                <div class="product-grid">
                    ${products.map((product, index) => `
                        <div class="product-card ${index >= itemsPerCategory ? 'hidden' : ''}" data-product-id="${product.id}" data-category="${categoryKey}">
                            <div class="product-image">
                                ${product.image ? 
                                    `<img src="${product.image}" alt="${product.name}" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                                    <span style="display:none;">${product.name}</span>` 
                                    : 
                                    `<span>${product.name}</span>`
                                }
                            </div>
                            <div class="product-info">
                                <h4 class="product-name">${product.name}</h4>
                                <p class="product-price">₦${product.price.toLocaleString()}</p>
                                <button class="add-to-cart-btn" data-product='${JSON.stringify(product)}'>
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    });

    container.innerHTML = html;
}

// Setup Search with Suggestions
function setupSearchSuggestions() {
    // Get all search inputs
    const searchInputs = document.querySelectorAll('input[id="searchInput"]');
    
    searchInputs.forEach((searchInput, index) => {
        // Create suggestions dropdown
        const suggestionsDiv = document.createElement('div');
        suggestionsDiv.className = 'search-suggestions';
        suggestionsDiv.id = `searchSuggestions${index}`;
        searchInput.parentElement.appendChild(suggestionsDiv);
        
        // Input event for real-time search
        searchInput.addEventListener('input', (e) => {
            currentSearchQuery = e.target.value;
            updateAllSearchInputs(currentSearchQuery);
            showSuggestions(currentSearchQuery, suggestionsDiv);
            performSearch();
        });
        
        // Click outside to close suggestions
        document.addEventListener('click', (e) => {
            if (!searchInput.contains(e.target) && !suggestionsDiv.contains(e.target)) {
                suggestionsDiv.style.display = 'none';
            }
        });
    });
}

// Update all search inputs with same value
function updateAllSearchInputs(value) {
    const searchInputs = document.querySelectorAll('input[id="searchInput"]');
    searchInputs.forEach(input => {
        if (input.value !== value) {
            input.value = value;
        }
    });
}

// Show search suggestions
function showSuggestions(query, suggestionsDiv) {
    if (!query.trim()) {
        suggestionsDiv.style.display = 'none';
        return;
    }
    
    const allProducts = [];
    Object.values(productsData).forEach(category => {
        allProducts.push(...category);
    });
    
    const matches = allProducts.filter(product => 
        product.name.toLowerCase().includes(query.toLowerCase())
    ).slice(0, 5);
    
    if (matches.length === 0) {
        suggestionsDiv.innerHTML = '<div class="suggestion-item">No products found</div>';
        suggestionsDiv.style.display = 'block';
        return;
    }
    
   suggestionsDiv.innerHTML = matches.map(product => `
    <div class="suggestion-item" data-name="${product.name}" data-id="${product.id}">
            <img src="${product.image}" alt="${product.name}" onerror="this.style.display='none'">
            <div class="suggestion-info">
                <div class="suggestion-name">${product.name}</div>
                <div class="suggestion-price">₦${product.price.toLocaleString()}</div>
            </div>
        </div>
    `).join('');
    
    suggestionsDiv.style.display = 'block';
    
    // Click on suggestion
   // Click on suggestion
suggestionsDiv.querySelectorAll('.suggestion-item').forEach(item => {
    item.addEventListener('click', () => {
        const name = item.dataset.name;
        const productId = item.dataset.id;
        
        // Clear search and close suggestions
        currentSearchQuery = '';
        updateAllSearchInputs('');
        suggestionsDiv.style.display = 'none';
        
        // Reset filters to show all products
        currentFilter = 'all';
        document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
        document.querySelector('.filter-btn[data-filter="all"]').classList.add('active');
        
        // Show all products
        performSearch();
        
        // Scroll to the specific product
        setTimeout(() => {
            const productCard = document.querySelector(`.product-card[data-product-id="${productId}"]`);
            if (productCard) {
                // Make sure the product is visible (not hidden by "See More")
                productCard.classList.remove('hidden');
                productCard.style.display = 'block';
                
                // Smooth scroll to product with offset for header
                const headerOffset = 100;
                const elementPosition = productCard.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
                
                // Highlight the product temporarily
                productCard.style.transition = 'all 0.3s ease';
                productCard.style.transform = 'scale(1.05)';
                productCard.style.boxShadow = '0 0 20px rgba(212, 175, 55, 0.6)';
                
                setTimeout(() => {
                    productCard.style.transform = 'scale(1)';
                    productCard.style.boxShadow = '';
                }, 1000);
            }
        }, 100);
    });
});
}

// Attach event listeners
function attachEventListeners() {
    // Filter buttons
    document.getElementById('filterContainer').addEventListener('click', (e) => {
        if (e.target.classList.contains('filter-btn')) {
            document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
            e.target.classList.add('active');
            currentFilter = e.target.dataset.filter;
            applyFilter();
        }
    });

    // See More buttons
    document.getElementById('productsContainer').addEventListener('click', (e) => {
        if (e.target.classList.contains('see-more-btn')) {
            const category = e.target.dataset.category;
            const categorySection = document.querySelector(`.category-section[data-category="${category}"]`);
            const hiddenProducts = categorySection.querySelectorAll('.product-card.hidden');
            
            hiddenProducts.forEach(product => product.classList.remove('hidden'));
            e.target.classList.add('hidden');
            
            if (currentSearchQuery) {
                performSearch();
            }
        }

        // Add to cart
        if (e.target.classList.contains('add-to-cart-btn')) {
            const productData = JSON.parse(e.target.dataset.product);
            addToCart(productData);
        }
    });

    // Cart controls
    document.getElementById('floatingCart').addEventListener('click', openCart);
    document.getElementById('closeCart').addEventListener('click', closeCart);
    document.getElementById('cartOverlay').addEventListener('click', closeCart);
    document.getElementById('whatsappBtn').addEventListener('click', sendWhatsApp);

    // Cart item controls
    document.getElementById('cartItems').addEventListener('click', (e) => {
        if (e.target.classList.contains('qty-btn')) {
            const productId = parseInt(e.target.dataset.id);
            const action = e.target.dataset.action;
            
            if (action === 'increase') {
                updateQuantity(productId, 1);
            } else if (action === 'decrease') {
                updateQuantity(productId, -1);
            }
        }

        if (e.target.classList.contains('remove-item')) {
            const productId = parseInt(e.target.dataset.id);
            removeFromCart(productId);
        }
    });
}

// Apply filter
function applyFilter() {
    performSearch();
}

// Search functionality
function performSearch() {
    const searchQuery = currentSearchQuery.toLowerCase().trim();
    const allProducts = document.querySelectorAll('.product-card');
    
    allProducts.forEach(product => {
        const productName = product.querySelector('.product-name').textContent.toLowerCase();
        const productCategory = product.dataset.category;
        
        const matchesSearch = searchQuery === '' || productName.includes(searchQuery);
        const matchesFilter = currentFilter === 'all' || productCategory === currentFilter;
        
        if (matchesSearch && matchesFilter) {
            product.style.display = 'block';
            product.classList.remove('hidden');
        } else {
            product.style.display = 'none';
        }
    });
    
    // Show/hide category sections
    document.querySelectorAll('.category-section').forEach(section => {
        const visibleProducts = Array.from(section.querySelectorAll('.product-card')).filter(
            p => p.style.display !== 'none'
        );
        const categoryFilter = currentFilter === 'all' || section.dataset.category === currentFilter;
        
        if (visibleProducts.length > 0 && categoryFilter) {
            section.style.display = 'block';
        } else {
            section.style.display = 'none';
        }
        
        // Handle "See More" button
        const seeMoreBtn = section.querySelector('.see-more-btn');
        if (seeMoreBtn) {
            if (searchQuery !== '') {
                seeMoreBtn.style.display = 'none';
            } else {
                const totalProducts = section.querySelectorAll('.product-card').length;
                const hiddenProducts = Array.from(section.querySelectorAll('.product-card')).filter(
                    p => p.classList.contains('hidden')
                ).length;
                if (hiddenProducts > 0 && totalProducts > itemsPerCategory) {
                    seeMoreBtn.style.display = 'inline-block';
                }
            }
        }
    });
}

// Cart functions (unchanged)
function loadCart() {
    const saved = localStorage.getItem('fashionCart');
    if (saved) {
        cart = JSON.parse(saved);
    }
}

function saveCart() {
    localStorage.setItem('fashionCart', JSON.stringify(cart));
}

function addToCart(product) {
    const existing = cart.find(item => item.id === product.id);
    
    if (existing) {
        existing.quantity++;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    
    saveCart();
    updateCartUI();
    showCartNotification();
}

function updateQuantity(productId, change) {
    const item = cart.find(i => i.id === productId);
    
    if (item) {
        item.quantity += change;
        
        if (item.quantity <= 0) {
            removeFromCart(productId);
        } else {
            saveCart();
            updateCartUI();
        }
    }
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    updateCartUI();
}

function updateCartUI() {
    const cartItems = document.getElementById('cartItems');
    const cartCount = document.getElementById('cartCount');
    const cartTotal = document.getElementById('cartTotal');
    
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
    cartCount.classList.toggle('hidden', totalItems === 0);
    
    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div class="cart-empty">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                </svg>
                <p>Your cart is empty</p>
            </div>
        `;
    } else {
        cartItems.innerHTML = cart.map(item => `
            <div class="cart-item">
                <div class="cart-item-image">
                    ${item.image ? 
                        `<img src="${item.image}" alt="${item.name}" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                        <span style="display:none;">${item.name}</span>` 
                        : 
                        `<span>${item.name}</span>`
                    }
                </div>
                <div class="cart-item-details">
                    <h4 class="cart-item-name">${item.name}</h4>
                    <p class="cart-item-price">₦${item.price.toLocaleString()}</p>
                    <div class="quantity-controls">
                        <button class="qty-btn" data-id="${item.id}" data-action="decrease">-</button>
                        <span class="qty-display">${item.quantity}</span>
                        <button class="qty-btn" data-id="${item.id}" data-action="increase">+</button>
                    </div>
                </div>
                <button class="remove-item" data-id="${item.id}">×</button>
            </div>
        `).join('');
    }
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    cartTotal.textContent = `₦${total.toLocaleString()}`;
}

function openCart() {
    document.getElementById('cartSidebar').classList.add('active');
    document.getElementById('cartOverlay').classList.add('active');
}

function closeCart() {
    document.getElementById('cartSidebar').classList.remove('active');
    document.getElementById('cartOverlay').classList.remove('active');
}

function showCartNotification() {
    const floatingCart = document.getElementById('floatingCart');
    floatingCart.style.animation = 'none';
    setTimeout(() => {
        floatingCart.style.animation = 'pulse 0.5s ease';
    }, 10);
}

function sendWhatsApp() {
    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }

    const phoneNumber = '234813420378';
    let message = '*New Order from Fashion Store*\n\n';
    
    cart.forEach(item => {
        message += `• ${item.name}\n`;
        message += `  Quantity: ${item.quantity}\n`;
        message += `  Price: ₦${item.price.toLocaleString()}\n`;
        message += `  Subtotal: ₦${(item.price * item.quantity).toLocaleString()}\n\n`;
    });
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    message += `*Total: ₦${total.toLocaleString()}*`;
    
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
}

const style = document.createElement('style');
style.textContent = `
    @keyframes pulse {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.15); }
    }
`;
document.head.appendChild(style);

init();















const reviewsTrack = document.getElementById('reviewsSliderTrack');
        const reviewsPrevBtn = document.getElementById('reviewsPrevBtn');
        const reviewsNextBtn = document.getElementById('reviewsNextBtn');
        const reviewsDotsContainer = document.getElementById('reviewsDotsContainer');
        const reviewCards = document.querySelectorAll('.review-item');
        
        let currentReviewIndex = 0;
        const totalReviews = reviewCards.length;

        // Create dots
        function createReviewDots() {
            reviewsDotsContainer.innerHTML = '';
            for (let i = 0; i < totalReviews; i++) {
                const dot = document.createElement('div');
                dot.classList.add('slider-dot');
                if (i === 0) dot.classList.add('dot-active');
                dot.addEventListener('click', () => goToReview(i));
                reviewsDotsContainer.appendChild(dot);
            }
        }

        // Update dots
        function updateReviewDots() {
            const dots = document.querySelectorAll('.slider-dot');
            dots.forEach((dot, index) => {
                dot.classList.toggle('dot-active', index === currentReviewIndex);
            });
        }

        // Update buttons
        function updateReviewButtons() {
            reviewsPrevBtn.disabled = currentReviewIndex === 0;
            reviewsNextBtn.disabled = currentReviewIndex === totalReviews - 1;
        }

        // Go to specific slide
        function goToReview(index) {
            currentReviewIndex = index;
            reviewsTrack.style.transform = `translateX(-${currentReviewIndex * 100}%)`;
            updateReviewDots();
            updateReviewButtons();
        }

        // Next slide
        function nextReview() {
            if (currentReviewIndex < totalReviews - 1) {
                goToReview(currentReviewIndex + 1);
            }
        }

        // Previous slide
        function prevReview() {
            if (currentReviewIndex > 0) {
                goToReview(currentReviewIndex - 1);
            }
        }

        // Event listeners
        reviewsNextBtn.addEventListener('click', nextReview);
        reviewsPrevBtn.addEventListener('click', prevReview);

        // Touch/swipe support
        let reviewTouchStartX = 0;
        let reviewTouchEndX = 0;

        reviewsTrack.addEventListener('touchstart', (e) => {
            reviewTouchStartX = e.changedTouches[0].screenX;
        });

        reviewsTrack.addEventListener('touchend', (e) => {
            reviewTouchEndX = e.changedTouches[0].screenX;
            handleReviewSwipe();
        });

        function handleReviewSwipe() {
            if (reviewTouchEndX < reviewTouchStartX - 50) {
                nextReview();
            }
            if (reviewTouchEndX > reviewTouchStartX + 50) {
                prevReview();
            }
        }

        // Initialize only on mobile/tablet
        function initReviewsCarousel() {
            if (window.innerWidth <= 968) {
                createReviewDots();
                updateReviewButtons();
            }
        }

        // Reinitialize on resize
        window.addEventListener('resize', () => {
            if (window.innerWidth <= 968) {
                initReviewsCarousel();
            } else {
                reviewsDotsContainer.innerHTML = '';
                reviewsTrack.style.transform = 'translateX(0)';
            }
        });

        // Initial setup
        initReviewsCarousel();










        const faqItems = document.querySelectorAll('.faq-accordion-item');
        const faqButtons = document.querySelectorAll('.faq-question-btn');

        faqButtons.forEach((button, index) => {
            button.addEventListener('click', () => {
                const currentItem = faqItems[index];
                const isActive = currentItem.classList.contains('active-faq');

                // Close all other items (accordion behavior - only one open at a time)
                faqItems.forEach(item => {
                    if (item !== currentItem) {
                        item.classList.remove('active-faq');
                        const btn = item.querySelector('.faq-question-btn');
                        btn.setAttribute('aria-expanded', 'false');
                    }
                });

                // Toggle current item
                if (isActive) {
                    currentItem.classList.remove('active-faq');
                    button.setAttribute('aria-expanded', 'false');
                } else {
                    currentItem.classList.add('active-faq');
                    button.setAttribute('aria-expanded', 'true');
                }
            });
        });

        // Optional: Close accordion when clicking outside
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.faq-accordion-item')) {
                faqItems.forEach(item => {
                    item.classList.remove('active-faq');
                    const btn = item.querySelector('.faq-question-btn');
                    btn.setAttribute('aria-expanded', 'false');
                });
            }
        });

        // Optional: Keyboard navigation (Enter/Space to toggle)
        faqButtons.forEach((button, index) => {
            button.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    button.click();
                }
            });
        });













        // Newsletter Form Handler
        function handleSubscription(event) {
            event.preventDefault();
            const emailField = event.target.querySelector('.site-footer-email-field');
            const email = emailField.value;
            
            // Here you would typically send the email to your backend
            alert(`Thank you for subscribing with: ${email}`);
            emailField.value = '';
        }

        // Smooth scroll for all footer links
        document.querySelectorAll('.site-footer-nav-anchor').forEach(link => {
            link.addEventListener('click', (e) => {
                const href = link.getAttribute('href');
                if (href.startsWith('#')) {
                    e.preventDefault();
                    const targetId = href.substring(1);
                    const targetElement = document.getElementById(targetId);
                    if (targetElement) {
                        targetElement.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                    }
                }
            });
        });