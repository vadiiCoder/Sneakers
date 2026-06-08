document.addEventListener('DOMContentLoaded', () => {
    // --- Hero Section Animations ---
    const heroElements = document.querySelectorAll('.hero-title, .hero-subtitle, .hero-product-info');
    heroElements.forEach((el, index) => {
        el.style.setProperty('--delay', `${index * 0.2}s`); // Staggered animation delay
        el.classList.add('animate-in');
    });

    // --- Product Data ---
    const products = [
        {
            id: 'air-force-01',
            name: "Air Force 1 Classic",
            category: "air-force",
            price: 119.99,
            image: "sneakers/sneaker1.png",
            description: "Timeless style and comfort. The original basketball shoe that crossed over.",
            colors: ["white", "black"]
        },
        {
            id: 'jordan-retro-4',
            name: "Jordan Retro 4",
            category: "jordan",
            price: 200.00,
            image: "sneakers/sneaker2.png",
            description: "Iconic design with legendary comfort. A must-have for sneakerheads.",
            colors: ["red", "black"]
        },
        {
            id: 'blazer-mid',
            name: "Blazer Mid '77 Vintage",
            category: "blazer",
            price: 99.00,
            image: "sneakers/sneaker3.png",
            description: "Retro hoops style for modern wear. Simple, classic, and always in style.",
            colors: ["white", "green"]
        },
        {
            id: 'crater-impact',
            name: "Crater Impact",
            category: "crater",
            price: 130.00,
            image: "sneakers/sneaker4.png",
            description: "Sustainability meets innovation. Made with at least 20% recycled materials.",
            colors: ["gray", "blue"]
        },
        {
            id: 'hippie-01',
            name: "Space Hippie 01",
            category: "hippie",
            price: 170.00,
            image: "sneakers/sneaker19.png",
            description: "Waste transformed into revolutionary footwear. Forward-thinking design.",
            colors: ["black", "orange"]
        },
        {
            id: 'air-force-02',
            name: "Air Force Utility",
            category: "air-force",
            price: 140.00,
            image: "sneakers/sneaker6.png",
            description: "Bold utility look with durable design. Ready for urban adventures.",
            colors: ["black", "tan"]
        },
        {
            id: 'jordan-1-mid',
            name: "Jordan 1 Mid",
            category: "jordan",
            price: 150.00,
            image: "sneakers/sneaker7.png",
            description: "The classic Jordan 1 silhouette reimagined for today's streets.",
            colors: ["white", "red"]
        },
        {
            id: 'blazer-low',
            name: "Blazer Low '77",
            category: "blazer",
            price: 85.00,
            image: "sneakers/sneaker8.png",
            description: "Low-cut profile for easy wear. Classic comfort, versatile style.",
            colors: ["pink", "white"]
        },
        {
            id: 'blazer-low',
            name: "happy",
            category: "happy",
            price: 80.00,
            image: "sneakers/sneaker20.png",
            description: "Low-cut profile for easy wear. Classic comfort, versatile style.",
            colors: ["pink", "white"]
        },
        // Add more products here if needed
    ];

    const productGrid = document.querySelector('.product-grid');

    // Function to render products
    function renderProducts(filteredProducts) {
        productGrid.innerHTML = ''; // Clear existing products
        filteredProducts.forEach(product => {
            const productCard = document.createElement('div');
            productCard.classList.add('product-card');
            productCard.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <span class="price">$${product.price.toFixed(2)}</span>
                <button class="add-to-cart" data-product-id="${product.id}">Add to Cart</button>
            `;
            productGrid.appendChild(productCard);
        });

        // Add event listener for "Add to Cart" buttons
        document.querySelectorAll('.add-to-cart').forEach(button => {
            button.addEventListener('click', (e) => {
                const productId = e.target.dataset.productId;
                const chosenProduct = products.find(p => p.id === productId);
                if (chosenProduct) {
                    alert(`Added "${chosenProduct.name}" to cart! (Demo)`);
                    // In a real app, you'd add to a cart array, update cart icon, etc.
                }
            });
        });
    }

    // Initial render of all products
    renderProducts(products);

    // --- Category Filtering ---
    const categoryItems = document.querySelectorAll('.category-item');
    categoryItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault(); // Prevent default link behavior
            const category = e.currentTarget.dataset.category;

            let filteredProducts;
            if (category === 'all') {
                filteredProducts = products;
            } else {
                filteredProducts = products.filter(p => p.category === category);
            }
            renderProducts(filteredProducts);

            // Optional: Scroll to products section after filtering
            document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
        });
    });

    // --- Hamburger Menu Functionality ---
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const navIcons = document.querySelector('.nav-icons'); // Get nav-icons too

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
        navIcons.classList.toggle('active'); // Toggle active for nav-icons
        document.body.classList.toggle('no-scroll'); // Optional: disable body scroll
    });

    // Close menu when a nav link is clicked
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            if (hamburger.classList.contains('active')) {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
                navIcons.classList.remove('active');
                document.body.classList.remove('no-scroll');
            }
        });
    });

    // --- Smooth Scrolling for Navbar Links ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
            // Close mobile menu if open after clicking a link
            if (hamburger.classList.contains('active')) {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
                navIcons.classList.remove('active');
                document.body.classList.remove('no-scroll');
            }
        });
    });
});