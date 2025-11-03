const products = [
  {
    id: 1,
    name: "Premium Wireless Headphones",
    price: 299,
    description: "Experience crystal-clear audio with our premium wireless headphones featuring active noise cancellation.",
    category: "Audio",
    image: "src/assets/headphones.jpg",
    inStock: true,
    features: [
      "Active Noise Cancellation",
      "40-hour battery life",
      "Premium leather ear cushions",
      "Wireless charging case"
    ]
  },
  {
    id: 2,
    name: "Smart Fitness Watch",
    price: 399,
    description: "Track your fitness goals with advanced health monitoring and GPS navigation.",
    category: "Wearables",
    image: "src/assets/smartwatch.jpg",
    inStock: true,
    features: [
      "Heart rate monitoring",
      "GPS tracking",
      "Water resistant up to 50m",
      "7-day battery life"
    ]
  },
  {
    id: 3,
    name: "Designer Backpack",
    price: 159,
    description: "Stylish and functional backpack perfect for daily commute or travel adventures.",
    category: "Accessories",
    image: "src/assets/backpack.jpg",
    inStock: false,
    features: [
      "Laptop compartment (15-inch)",
      "Water-resistant material",
      "Multiple organizational pockets",
      "Ergonomic shoulder straps"
    ]
  },
  {
    id: 4,
    name: "Running Sneakers Pro",
    price: 189,
    description: "Engineered for performance with responsive cushioning and superior grip.",
    category: "Footwear",
    image: "src/assets/sneakers.jpg",
    inStock: true,
    features: [
      "Breathable mesh upper",
      "Responsive foam cushioning",
      "Durable rubber outsole",
      "Lightweight design"
    ]
  },
  {
    id: 5,
    name: "Portable Bluetooth Speaker",
    price: 129,
    description: "Take your music anywhere with this powerful portable speaker with 360° sound.",
    category: "Audio",
    image: "src/assets/speaker.jpg",
    inStock: true,
    features: [
      "360-degree sound",
      "12-hour battery life",
      "IPX7 waterproof rating",
      "USB-C fast charging"
    ]
  },
  {
    id: 6,
    name: "Classic Aviator Sunglasses",
    price: 249,
    description: "Timeless style meets modern lens technology with 100% UV protection.",
    category: "Accessories",
    image: "src/assets/sunglasses.jpg",
    inStock: true,
    features: [
      "100% UV protection",
      "Polarized lenses",
      "Titanium frame",
      "Includes premium case"
    ]
  }
];

// DOM elements
const productGrid = document.getElementById('productGrid');
const modalOverlay = document.getElementById('modalOverlay');
const modalClose = document.getElementById('modalClose');
const modalBody = document.getElementById('modalBody');
const toastContainer = document.getElementById('toastContainer');

// Render product cards
function renderProducts() {
  productGrid.innerHTML = products.map(product => `
    <div class="product-card" onclick="openModal(${product.id})">
      <div class="product-image-wrapper">
        <img src="${product.image}" alt="${product.name}" class="product-image" />
      </div>
      <div class="product-body">
        <div class="product-header">
          <h3 class="product-name">${product.name}</h3>
          ${!product.inStock ? '<span class="badge badge-secondary">Out of Stock</span>' : ''}
        </div>
        <p class="product-description">${product.description}</p>
        <div class="product-footer">
          <p class="product-price">$${product.price}</p>
          <span class="badge badge-outline">${product.category}</span>
        </div>
      </div>
    </div>
  `).join('');
}

// Open modal
function openModal(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;

  modalBody.innerHTML = `
    <h2 class="modal-title">${product.name}</h2>
    <div class="modal-badges">
      <span class="badge badge-outline">${product.category}</span>
      ${product.inStock 
        ? '<span class="badge badge-stock">In Stock</span>' 
        : '<span class="badge badge-secondary">Out of Stock</span>'}
    </div>
    <div class="modal-grid">
      <div class="modal-image-wrapper">
        <img src="${product.image}" alt="${product.name}" class="modal-image" />
      </div>
      <div class="modal-details">
        <div>
          <p class="modal-price">$${product.price}</p>
          <p class="modal-description">${product.description}</p>
        </div>
        <div>
          <h4 class="features-title">Key Features</h4>
          <ul class="features-list">
            ${product.features.map(feature => `
              <li>
                <span class="check-icon">✓</span>
                <span>${feature}</span>
              </li>
            `).join('')}
          </ul>
        </div>
        <button 
          class="btn btn-primary" 
          onclick="addToCart(${product.id})"
          ${!product.inStock ? 'disabled' : ''}
        >
          🛒 ${product.inStock ? 'Add to Cart' : 'Out of Stock'}
        </button>
      </div>
    </div>
  `;

  modalOverlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

// Close modal
function closeModal() {
  modalOverlay.classList.remove('active');
  document.body.style.overflow = '';
}

// Add to cart
function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;

  showToast('Added to cart', `${product.name} has been added to your cart.`);
  closeModal();
}

// Show toast notification
function showToast(title, description) {
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `
    <div class="toast-title">${title}</div>
    <div class="toast-description">${description}</div>
  `;

  toastContainer.appendChild(toast);

  setTimeout(() => {
    toast.remove();
  }, 3000);
}

// Event listeners
modalClose.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', (e) => {
  if (e.target === modalOverlay) {
    closeModal();
  }
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
    closeModal();
  }
});

// Initialize
renderProducts();
