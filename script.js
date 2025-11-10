// --- Base de Datos de Productos ---
const products = [
    // Tarjetas Madre Intel
    { 
        id: 101, 
        name: 'ASUS ROG MAXIMUS Z790 HERO', 
        price: 3500000, 
        image: 'https://dlcdnwebimgs.asus.com/gain/c2b9de36-433c-457a-82b9-259999a3fa65/w800', 
        category: 'boards', 
        brand: 'intel',
        description: 'La ROG Maximus Z790 Hero pone a tu disposición refrigeración, suministro de energía y conectividad de última generación para sacar el máximo partido a los procesadores Intel® Core de 13.ª Gen. Esta bestia con temática oscura está lista para tomar el mando de tu montaje de exhibición de gama alta.',
        gallery: [
            'https://dlcdnwebimgs.asus.com/gain/c2b9de36-433c-457a-82b9-259999a3fa65/w800',
            'https://dlcdnwebimgs.asus.com/gain/28369933-a252-4412-a2a6-7a893339e64f/w800',
            'https://dlcdnwebimgs.asus.com/gain/99a0f5d7-34b7-4c4f-95a6-16add9100954/w800'
        ]
    },
    { id: 102, name: 'Gigabyte Z790 AORUS MASTER', price: 3200000, image: 'https://images.unsplash.com/photo-1614398642344-0a46a5753a96?q=80&w=800&auto=format&fit=crop', category: 'boards', brand: 'intel', description: 'Descripción detallada para Gigabyte Z790 AORUS MASTER.', gallery: ['https://images.unsplash.com/photo-1614398642344-0a46a5753a96?q=80&w=800&auto=format&fit=crop'] },
    { id: 103, name: 'MSI MPG Z790 CARBON WIFI', price: 2800000, image: 'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?q=80&w=800&auto=format&fit=crop', category: 'boards', brand: 'intel', description: 'Descripción detallada para MSI MPG Z790 CARBON WIFI.', gallery: ['https://images.unsplash.com/photo-1593640408182-31c70c8268f5?q=80&w=800&auto=format&fit=crop'] },
    { id: 104, name: 'ASUS TUF GAMING B760M-PLUS', price: 1100000, image: 'https://images.unsplash.com/photo-1614624532983-6ce3e59b1e43?q=80&w=800&auto=format&fit=crop', category: 'boards', brand: 'intel', description: 'Descripción detallada para ASUS TUF GAMING B760M-PLUS.', gallery: ['https://images.unsplash.com/photo-1614624532983-6ce3e59b1e43?q=80&w=800&auto=format&fit=crop'] },
    { id: 105, name: 'Gigabyte B760M AORUS ELITE AX', price: 950000, image: 'https://images.unsplash.com/photo-1614398642344-0a46a5753a96?q=80&w=800&auto=format&fit=crop', category: 'boards', brand: 'intel', description: 'Descripción detallada para Gigabyte B760M AORUS ELITE AX.', gallery: ['https://images.unsplash.com/photo-1614398642344-0a46a5753a96?q=80&w=800&auto=format&fit=crop'] },
    { id: 106, name: 'MSI PRO B760M-A WIFI DDR5', price: 850000, image: 'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?q=80&w=800&auto=format&fit=crop', category: 'boards', description: 'Descripción detallada para MSI PRO B760M-A WIFI DDR5.', gallery: ['https://images.unsplash.com/photo-1593640408182-31c70c8268f5?q=80&w=800&auto=format&fit=crop'] },

    // Tarjetas Madre AMD
    { id: 201, name: 'ASUS ROG CROSSHAIR X670E HERO', price: 3800000, image: 'https://images.unsplash.com/photo-1614624532983-6ce3e59b1e43?q=80&w=800&auto=format&fit=crop', category: 'boards', description: 'Descripción detallada para ASUS ROG CROSSHAIR X670E HERO.', gallery: ['https://images.unsplash.com/photo-1614624532983-6ce3e59b1e43?q=80&w=800&auto=format&fit=crop'] },
    { id: 202, name: 'Gigabyte X670 AORUS ELITE AX', price: 1800000, image: 'https://images.unsplash.com/photo-1614398642344-0a46a5753a96?q=80&w=800&auto=format&fit=crop', category: 'boards', description: 'Descripción detallada para Gigabyte X670 AORUS ELITE AX.', gallery: ['https://images.unsplash.com/photo-1614398642344-0a46a5753a96?q=80&w=800&auto=format&fit=crop'] },
    { id: 203, name: 'MSI MAG B650 TOMAHAWK WIFI', price: 1300000, image: 'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?q=80&w=800&auto=format&fit=crop', category: 'boards', description: 'Descripción detallada para MSI MAG B650 TOMAHAWK WIFI.', gallery: ['https://images.unsplash.com/photo-1593640408182-31c70c8268f5?q=80&w=800&auto=format&fit=crop'] },
    { id: 204, name: 'ASUS TUF GAMING B650-PLUS', price: 1150000, image: 'https://images.unsplash.com/photo-1614624532983-6ce3e59b1e43?q=80&w=800&auto=format&fit=crop', category: 'boards', description: 'Descripción detallada para ASUS TUF GAMING B650-PLUS.', gallery: ['https://images.unsplash.com/photo-1614624532983-6ce3e59b1e43?q=80&w=800&auto=format&fit=crop'] },
    { id: 205, name: 'Gigabyte B550 AORUS PRO AC', price: 900000, image: 'https://images.unsplash.com/photo-1614398642344-0a46a5753a96?q=80&w=800&auto=format&fit=crop', category: 'boards', brand: 'amd', description: 'Descripción detallada para Gigabyte B550 AORUS PRO AC.', gallery: ['https://images.unsplash.com/photo-1614398642344-0a46a5753a96?q=80&w=800&auto=format&fit=crop'] },
    { id: 206, name: 'MSI MAG B550M MORTAR', price: 750000, image: 'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?q=80&w=800&auto=format&fit=crop', category: 'boards', brand: 'amd', description: 'Descripción detallada para MSI MAG B550M MORTAR.', gallery: ['https://images.unsplash.com/photo-1593640408182-31c70c8268f5?q=80&w=800&auto=format&fit=crop'] },

    // Procesadores Intel
    { 
        id: 301, 
        name: 'Intel Core i9-14900K', 
        price: 3100000, 
        image: 'https://images.unsplash.com/photo-1608363909912-791d5b436338?q=80&w=800&auto=format&fit=crop', 
        category: 'processors', 
        brand: 'intel',
        description: 'El procesador para equipos de desktop Intel Core i9-14900K de 14ᵃ Generación ofrece la experiencia más inmersiva para gamers y creadores. Con 24 núcleos (8 de performance y 16 de eficiencia) y hasta 6.0 GHz de frecuencia turbo máxima.',
        gallery: [
            'https://images.unsplash.com/photo-1608363909912-791d5b436338?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1591799264318-7e6e74e3cce9?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1610701596007-115a28617f1c?q=80&w=800&auto=format&fit=crop'
        ]
    },
    { id: 302, name: 'Intel Core i7-14700K', price: 2200000, image: 'https://images.unsplash.com/photo-1591799264318-7e6e74e3cce9?q=80&w=800&auto=format&fit=crop', category: 'processors', brand: 'intel', description: 'Descripción detallada para Intel Core i7-14700K.', gallery: ['https://images.unsplash.com/photo-1591799264318-7e6e74e3cce9?q=80&w=800&auto=format&fit=crop'] },
    { id: 303, name: 'Intel Core i5-14600K', price: 1600000, image: 'https://images.unsplash.com/photo-1610701596007-115a28617f1c?q=80&w=800&auto=format&fit=crop', category: 'processors', brand: 'intel', description: 'Descripción detallada para Intel Core i5-14600K.', gallery: ['https://images.unsplash.com/photo-1610701596007-115a28617f1c?q=80&w=800&auto=format&fit=crop'] },
    { id: 304, name: 'Intel Core i9-13900K', price: 2900000, image: 'https://images.unsplash.com/photo-1608363909912-791d5b436338?q=80&w=800&auto=format&fit=crop', category: 'processors', brand: 'intel', description: 'Descripción detallada para Intel Core i9-13900K.', gallery: ['https://images.unsplash.com/photo-1608363909912-791d5b436338?q=80&w=800&auto=format&fit=crop'] },
    { id: 305, name: 'Intel Core i7-13700F', price: 1900000, image: 'https://images.unsplash.com/photo-1591799264318-7e6e74e3cce9?q=80&w=800&auto=format&fit=crop', category: 'processors', brand: 'intel', description: 'Descripción detallada para Intel Core i7-13700F.', gallery: ['https://images.unsplash.com/photo-1591799264318-7e6e74e3cce9?q=80&w=800&auto=format&fit=crop'] },
    { id: 306, name: 'Intel Core i5-13400F', price: 950000, image: 'https://images.unsplash.com/photo-1610701596007-115a28617f1c?q=80&w=800&auto=format&fit=crop', category: 'processors', brand: 'intel', description: 'Descripción detallada para Intel Core i5-13400F.', gallery: ['https://images.unsplash.com/photo-1610701596007-115a28617f1c?q=80&w=800&auto=format&fit=crop'] },
    { id: 307, name: 'Intel Core i3-13100', price: 650000, image: 'https://images.unsplash.com/photo-1589824783364-8651a2981759?q=80&w=800&auto=format&fit=crop', category: 'processors', brand: 'intel', description: 'Descripción detallada para Intel Core i3-13100.', gallery: ['https://images.unsplash.com/photo-1589824783364-8651a2981759?q=80&w=800&auto=format&fit=crop'] },

    // Procesadores AMD
    { id: 401, name: 'AMD Ryzen 9 7950X3D', price: 3400000, image: 'https://images.unsplash.com/photo-1608363909912-791d5b436338?q=80&w=800&auto=format&fit=crop', category: 'processors', brand: 'amd', description: 'Descripción detallada para AMD Ryzen 9 7950X3D.', gallery: ['https://images.unsplash.com/photo-1608363909912-791d5b436338?q=80&w=800&auto=format&fit=crop'] },
    { id: 402, name: 'AMD Ryzen 7 7800X3D', price: 2100000, image: 'https://images.unsplash.com/photo-1591799264318-7e6e74e3cce9?q=80&w=800&auto=format&fit=crop', category: 'processors', brand: 'amd', description: 'Descripción detallada para AMD Ryzen 7 7800X3D.', gallery: ['https://images.unsplash.com/photo-1591799264318-7e6e74e3cce9?q=80&w=800&auto=format&fit=crop'] },
    { id: 403, name: 'AMD Ryzen 5 7600X', price: 1300000, image: 'https://images.unsplash.com/photo-1610701596007-115a28617f1c?q=80&w=800&auto=format&fit=crop', category: 'processors', brand: 'amd', description: 'Descripción detallada para AMD Ryzen 5 7600X.', gallery: ['https://images.unsplash.com/photo-1610701596007-115a28617f1c?q=80&w=800&auto=format&fit=crop'] },
    { id: 404, name: 'AMD Ryzen 9 5900X', price: 1500000, image: 'https://images.unsplash.com/photo-1608363909912-791d5b436338?q=80&w=800&auto=format&fit=crop', category: 'processors', brand: 'amd', description: 'Descripción detallada para AMD Ryzen 9 5900X.', gallery: ['https://images.unsplash.com/photo-1608363909912-791d5b436338?q=80&w=800&auto=format&fit=crop'] },
    { id: 405, name: 'AMD Ryzen 7 5800X3D', price: 1450000, image: 'https://images.unsplash.com/photo-1591799264318-7e6e74e3cce9?q=80&w=800&auto=format&fit=crop', category: 'processors', brand: 'amd', description: 'Descripción detallada para AMD Ryzen 7 5800X3D.', gallery: ['https://images.unsplash.com/photo-1591799264318-7e6e74e3cce9?q=80&w=800&auto=format&fit=crop'] },
    { id: 406, name: 'AMD Ryzen 5 5600G', price: 650000, image: 'https://images.unsplash.com/photo-1610701596007-115a28617f1c?q=80&w=800&auto=format&fit=crop', category: 'processors', brand: 'amd', description: 'Descripción detallada para AMD Ryzen 5 5600G.', gallery: ['https://images.unsplash.com/photo-1610701596007-115a28617f1c?q=80&w=800&auto=format&fit=crop'] },

    // Productos adicionales para llegar a 30
    { id: 107, name: 'ASRock Z790 Taichi', price: 3000000, image: 'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?q=80&w=800&auto=format&fit=crop', category: 'boards', brand: 'intel', description: 'Descripción detallada para ASRock Z790 Taichi.', gallery: ['https://images.unsplash.com/photo-1593640408182-31c70c8268f5?q=80&w=800&auto=format&fit=crop'] },
    { id: 207, name: 'ASRock X670E Steel Legend', price: 1600000, image: 'https://images.unsplash.com/photo-1614624532983-6ce3e59b1e43?q=80&w=800&auto=format&fit=crop', category: 'boards', brand: 'amd', description: 'Descripción detallada para ASRock X670E Steel Legend.', gallery: ['https://images.unsplash.com/photo-1614624p532983-6ce3e59b1e43?q=80&w=800&auto=format&fit=crop'] },
    { id: 308, name: 'Intel Core i5-12400', price: 800000, image: 'https://images.unsplash.com/photo-1610701596007-115a28617f1c?q=80&w=800&auto=format&fit=crop', category: 'processors', brand: 'intel', description: 'Descripción detallada para Intel Core i5-12400.', gallery: ['https://images.unsplash.com/photo-1610701596007-115a28617f1c?q=80&w=800&auto=format&fit=crop'] },
    { id: 407, name: 'AMD Ryzen 7 5700X', price: 850000, image: 'https://images.unsplash.com/photo-1591799264318-7e6e74e3cce9?q=80&w=800&auto=format&fit=crop', category: 'processors', brand: 'amd', description: 'Descripción detallada para AMD Ryzen 7 5700X.', gallery: ['https://images.unsplash.com/photo-1591799264318-7e6e74e3cce9?q=80&w=800&auto=format&fit=crop'] },
];

/**
 * Obtiene el carrito del localStorage.
 * @returns {Array} El carrito de compras.
 */
function getCart() {
  return JSON.parse(localStorage.getItem('cart')) || [];
}

/**
 * Guarda el carrito en el localStorage.
 * @param {Array} cart - El carrito de compras a guardar.
 */
function saveCart(cart) {
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartHeader();
  // Si estamos en la página del carrito, la volvemos a renderizar
  if (document.getElementById('cart-items-container')) {
    renderCartPage();
  }
}

/**
 * Añade un producto al carrito.
 * @param {number} productId - El ID del producto a añadir.
 */
function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;

  let cart = getCart();
  const existingProductIndex = cart.findIndex(item => item.id === product.id);

  if (existingProductIndex > -1) {
    cart[existingProductIndex].quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }
  saveCart(cart);
  alert(`${product.name} ha sido añadido al carrito.`);
}

/**
 * Actualiza la cantidad de un producto en el carrito.
 * @param {number} productId - El ID del producto.
 * @param {number} quantity - La nueva cantidad.
 */
function updateQuantity(productId, quantity) {
  let cart = getCart();
  const productIndex = cart.findIndex(item => item.id === productId);
  if (productIndex > -1) {
    if (quantity > 0) {
      cart[productIndex].quantity = quantity;
    } else {
      // Si la cantidad es 0 o menos, elimina el producto
      cart.splice(productIndex, 1);
    }
    saveCart(cart);
  }
}

/**
 * Elimina un producto del carrito.
 * @param {number} productId - El ID del producto a eliminar.
 */
function removeFromCart(productId) {
  let cart = getCart().filter(item => item.id !== productId);
  saveCart(cart);
}

/**
 * Actualiza el ícono del carrito en el encabezado.
 */
function updateCartHeader() {
  const cart = getCart();
  const cartQuantityElement = document.querySelector('.cantidad-carrito');
  const cartCostElement = document.querySelector('.costo-carrito');
  
  const totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalCost = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (cartQuantityElement && cartCostElement) {
    cartQuantityElement.textContent = totalQuantity;
    cartCostElement.textContent = `$${totalCost.toLocaleString('es-CO')}`;
  }
}

/**
 * Renderiza la página del carrito.
 */
function renderCartPage() {
  const cart = getCart();
  const cartContainer = document.getElementById('cart-items-container');
  const summaryContainer = document.getElementById('cart-summary');
  
  if (!cartContainer) return;

  if (cart.length === 0) {
    cartContainer.innerHTML = `
      <div class="cart-empty">
        <p>Tu carrito está actualmente vacío.</p>
        <a href="catalogo.html" class="button">Ver catálogo</a>
      </div>`;
    summaryContainer.style.display = 'none';
  } else {
    summaryContainer.style.display = 'block';
    cartContainer.innerHTML = cart.map(item => `
      <div class="cart-item">
        <img src="${item.image}" alt="${item.name}" class="cart-item-image">
        <div class="cart-item-details">
          <h3>${item.name}</h3>
          <p class="cart-item-price">$${item.price.toLocaleString('es-CO')}</p>
          <div class="cart-item-actions">
            <div class="quantity-control">
              <button class="quantity-btn" onclick="updateQuantity(${item.id}, ${item.quantity - 1})">-</button>
              <input type="number" class="quantity-input" value="${item.quantity}" onchange="updateQuantity(${item.id}, parseInt(this.value))">
              <button class="quantity-btn" onclick="updateQuantity(${item.id}, ${item.quantity + 1})">+</button>
            </div>
            <a href="#" class="remove-btn" onclick="event.preventDefault(); removeFromCart(${item.id})">Eliminar</a>
          </div>
        </div>
        <div class="cart-item-subtotal">
          <p>$${(item.price * item.quantity).toLocaleString('es-CO')}</p>
        </div>
      </div>
    `).join('');

    const totalCost = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    document.getElementById('summary-subtotal').textContent = `$${totalCost.toLocaleString('es-CO')}`;
    document.getElementById('summary-total').textContent = `$${totalCost.toLocaleString('es-CO')}`;
  }
}

/**
 * Renderiza la cuadrícula de productos en la página de catálogo.
 */
function renderProductGrid() {
    const productGrid = document.getElementById('product-grid');
    if (!productGrid) return; // No hacer nada si no estamos en la página del catálogo
    
    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get('category');
    const brand = urlParams.get('brand');

    let filteredProducts = products;

    if (category) {
        filteredProducts = filteredProducts.filter(p => p.category === category);
    }
    if (brand) {
        filteredProducts = filteredProducts.filter(p => p.brand === brand);
    }

    productGrid.innerHTML = filteredProducts.map(product => `
        <div class="product-card">
            <a href="producto.html?id=${product.id}" class="product-link">
                <img src="${product.image}" alt="${product.name}" class="product-image">
                <div class="product-info">
                    <h3 class="product-name">${product.name}</h3>
                    <p class="product-price">$${product.price.toLocaleString('es-CO')}</p>
                </div>
            </a>
            <div class="product-card-action">
                <button class="button" onclick="addToCart(${product.id})">Añadir al Carrito</button>
            </div>
        </div>
    `).join('');
}

/**
 * Renderiza la página de detalle de un producto.
 */
function renderProductDetailPage() {
    const container = document.getElementById('product-detail-container');
    if (!container) return; // No estamos en la página de producto

    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get('id'));
    const product = products.find(p => p.id === productId);

    if (!product) {
        container.innerHTML = '<h1 class="main-title">Producto no encontrado</h1>';
        return;
    }

    document.title = `${product.name} - Taller Curvatura`;

    container.innerHTML = `
        <div class="product-gallery">
            <div class="main-image-container">
                <img src="${product.image}" alt="${product.name}" id="main-product-image">
            </div>
            <div class="product-thumbnails">
                ${product.gallery.map((imgSrc, index) => `
                    <img src="${imgSrc}" alt="Thumbnail ${index + 1}" class="thumbnail-image ${index === 0 ? 'active' : ''}" onclick="changeMainImage('${imgSrc}')">
                `).join('')}
            </div>
        </div>
        <div class="product-details-info">
            <h1>${product.name}</h1>
            <p class="product-price">$${product.price.toLocaleString('es-CO')}</p>
            <button class="button" onclick="addToCart(${product.id})">Añadir al Carrito</button>
        </div>
        <div class="product-description-section">
            <h2>Descripción del Producto</h2>
            <p>${product.description}</p>
        </div>
    `;
}

/**
 * Cambia la imagen principal en la galería de la página de producto.
 * @param {string} newImageSrc - La URL de la nueva imagen a mostrar.
 */
function changeMainImage(newImageSrc) {
    const mainImage = document.getElementById('main-product-image');
    if (mainImage) {
        mainImage.src = newImageSrc;
    }

    // Actualizar la clase 'active' en los thumbnails
    const thumbnails = document.querySelectorAll('.thumbnail-image');
    thumbnails.forEach(thumb => {
        if (thumb.src === newImageSrc) {
            thumb.classList.add('active');
        } else {
            thumb.classList.remove('active');
        }
    });
}

/**
 * Renderiza la página de Checkout.
 */
function renderCheckoutPage() {
    const summaryItemsContainer = document.getElementById('summary-items-container');
    if (!summaryItemsContainer) return; // No estamos en la página de checkout

    const cart = getCart();

    // Si el carrito está vacío, redirige a la página de inicio
    if (cart.length === 0) {
        window.location.href = 'index.html';
        return;
    }

    summaryItemsContainer.innerHTML = cart.map(item => `
        <div class="summary-item">
            <span class="summary-item-name">${item.name} <span>x ${item.quantity}</span></span>
            <span class="summary-item-price">$${(item.price * item.quantity).toLocaleString('es-CO')}</span>
        </div>
    `).join('');

    const totalCost = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    document.getElementById('summary-total-checkout').textContent = `$${totalCost.toLocaleString('es-CO')}`;

    // Manejar el envío del formulario
    const checkoutForm = document.getElementById('checkout-form');
    checkoutForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevenir el envío real del formulario

        const formData = new FormData(checkoutForm);
        const name = formData.get('name');

        // Simular un pedido exitoso
        alert(`¡Gracias por tu compra, ${name}!\n\nTu pedido ha sido realizado con éxito. Recibirás una confirmación por correo electrónico.`);

        // Vaciar el carrito
        saveCart([]);

        // Redirigir a la página de inicio después de 2 segundos
        setTimeout(() => {
            window.location.href = 'index.html';
        }, 2000);
    });
}

/**
 * Renderiza los productos destacados en la página de inicio.
 */
function renderFeaturedProducts() {
    const featuredGrid = document.getElementById('featured-product-grid');
    if (!featuredGrid) return; // No estamos en la página de inicio

    // Selecciona 4 productos para destacar (puedes cambiar los IDs)
    const featuredIDs = [301, 201, 402, 102];
    const featuredProducts = products.filter(p => featuredIDs.includes(p.id));

    featuredGrid.innerHTML = featuredProducts.map(product => `
        <div class="product-card">
            <a href="producto.html?id=${product.id}" class="product-link">
                <img src="${product.image}" alt="${product.name}" class="product-image">
                <div class="product-info">
                    <h3 class="product-name">${product.name}</h3>
                    <p class="product-price">$${product.price.toLocaleString('es-CO')}</p>
                </div>
            </a>
            <div class="product-card-action">
                <button class="button" onclick="addToCart(${product.id})">Añadir al Carrito</button>
            </div>
        </div>
    `).join('');
}

// Se ejecuta cuando el DOM está completamente cargado
document.addEventListener('DOMContentLoaded', () => {
  updateCartHeader();
  renderCartPage(); // Renderiza la página del carrito si estamos en ella
  renderProductGrid(); // Renderiza los productos si estamos en el catálogo
  renderCheckoutPage(); // Renderiza la página de checkout si estamos en ella
  renderFeaturedProducts(); // Renderiza los productos destacados en el inicio
  renderProductDetailPage(); // Renderiza la página de detalle de producto
});
