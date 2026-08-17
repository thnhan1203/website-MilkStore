// Dữ liệu mẫu sản phẩm sữa
const products = [
    {
        id: 1,
        name: "Sữa bột Vinamilk Optimum Gold số 4 (900g)",
        category: "Sữa bột trẻ em",
        price: 385000,
        image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?auto=format&fit=crop&q=80&w=500"
    },
    {
        id: 2,
        name: "Thùng Sữa Tươi Tiệt Trùng TH true MILK ít đường (1L x 12 hộp)",
        category: "Sữa tươi",
        price: 360000,
        image: "https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&q=80&w=500"
    },
    {
        id: 3,
        name: "Sữa bột Abbott Pediasure BA hương vani (850g)",
        category: "Sữa dinh dưỡng đặc biệt",
        price: 780000,
        image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&q=80&w=500"
    },
    {
        id: 4,
        name: "Sữa bột Ensure Gold dinh dưỡng người lớn (850g)",
        category: "Sữa người cao tuổi",
        price: 850000,
        image: "https://images.unsplash.com/photo-1528750999544-245842881079?auto=format&fit=crop&q=80&w=500"
    },
    {
        id: 5,
        name: "Lốc 4 Hộp Sữa Chua Uống Vinamilk ProBI",
        category: "Sữa chua uống",
        price: 30000,
        image: "https://images.unsplash.com/photo-1628088062854-d1870b4553da?auto=format&fit=crop&q=80&w=500"
    },
    {
        id: 6,
        name: "Sữa bột Frisolac Gold số 2 cho bé 6-12 tháng (900g)",
        category: "Sữa bột trẻ em",
        price: 580000,
        image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?auto=format&fit=crop&q=80&w=500"
    }
];

// Quản lý trạng thái giỏ hàng
let cart = JSON.parse(localStorage.getItem('milkStoreCart')) || [];

// Các phần tử DOM
const productGridContainer = document.getElementById('productGridContainer');
const cartOverlay = document.getElementById('cartOverlay');
const openCartBtn = document.getElementById('openCartBtn');
const closeCartBtn = document.getElementById('closeCartBtn');
const cartBody = document.getElementById('cartBody');
const cartBadge = document.getElementById('cartBadge');
const subTotalEl = document.getElementById('subTotal');
const shippingFeeEl = document.getElementById('shippingFee');
const finalTotalEl = document.getElementById('finalTotal');
const cartFooter = document.getElementById('cartFooter');
const searchInput = document.getElementById('searchInput');

// Format tiền tệ VND
function formatVND(amount) {
    return amount.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
}

// Hiển thị danh sách sản phẩm
function renderProducts(productsToRender = products) {
    if (productsToRender.length === 0) {
        productGridContainer.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; color: var(--text-muted); padding: 3rem 0;">
                <i class="fa-solid fa-box-open" style="font-size: 2.5rem; margin-bottom: 0.75rem;"></i>
                <p>Không tìm thấy sản phẩm phù hợp với từ khóa của bạn</p>
            </div>
        `;
        return;
    }

    productGridContainer.innerHTML = productsToRender.map(product => `
        <div class="product-card">
            <img src="${product.image}" alt="${product.name}" class="product-img">
            <div class="product-info">
                <span class="product-category">${product.category}</span>
                <h3 class="product-name">${product.name}</h3>
                <div class="product-price">${formatVND(product.price)}</div>
                <button class="add-to-cart-btn" onclick="addToCart(${product.id})">
                    <i class="fa-solid fa-cart-plus"></i> Thêm Vào Giỏ
                </button>
            </div>
        </div>
    `).join('');
}

// Tìm kiếm sản phẩm
searchInput.addEventListener('input', (e) => {
    const keyword = e.target.value.toLowerCase().trim();
    const filteredProducts = products.filter(product => 
        product.name.toLowerCase().includes(keyword) || 
        product.category.toLowerCase().includes(keyword)
    );
    renderProducts(filteredProducts);
});

// Thêm sản phẩm vào giỏ hàng
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    saveAndRenderCart();
    openCart();
}

// Thay đổi số lượng sản phẩm trong giỏ
function updateQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            cart = cart.filter(p => p.id !== productId);
        }
    }
    saveAndRenderCart();
}

// Xóa hẳn sản phẩm khỏi giỏ
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveAndRenderCart();
}

// Lưu localStorage và vẽ lại giỏ hàng
function saveAndRenderCart() {
    localStorage.setItem('milkStoreCart', JSON.stringify(cart));
    renderCart();
    updateBadge();
}

// Cập nhật badge số lượng giỏ hàng
function updateBadge() {
    const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartBadge.textContent = totalCount;
}

// Vẽ giao diện giỏ hàng
function renderCart() {
    if (cart.length === 0) {
        cartBody.innerHTML = `
            <div class="empty-cart">
                <i class="fa-solid fa-basket-shopping"></i>
                <p>Giỏ hàng của bạn đang trống</p>
            </div>
        `;
        cartFooter.style.display = 'none';
        return;
    }

    cartFooter.style.display = 'block';
    cartBody.innerHTML = cart.map(item => `
        <div class="cart-item">
            <img src="${item.image}" alt="${item.name}" class="cart-item-img">
            <div class="cart-item-details">
                <h4 class="cart-item-title">${item.name}</h4>
                <div class="cart-item-price">${formatVND(item.price)}</div>
                <div class="quantity-control">
                    <button class="qty-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
                    <span>${item.quantity}</span>
                    <button class="qty-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                </div>
            </div>
            <button class="cart-item-remove" onclick="removeFromCart(${item.id})">
                <i class="fa-solid fa-trash-can"></i>
            </button>
        </div>
    `).join('');

    const subTotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const shippingFee = subTotal > 500000 || subTotal === 0 ? 0 : 30000;
    const finalTotal = subTotal + shippingFee;

    subTotalEl.textContent = formatVND(subTotal);
    shippingFeeEl.textContent = shippingFee === 0 ? 'Miễn phí' : formatVND(shippingFee);
    finalTotalEl.textContent = formatVND(finalTotal);
}

// Đóng/Mở Cart Drawer
function openCart() {
    cartOverlay.classList.add('active');
}

function closeCart() {
    cartOverlay.classList.remove('active');
}

openCartBtn.addEventListener('click', openCart);
closeCartBtn.addEventListener('click', closeCart);
cartOverlay.addEventListener('click', (e) => {
    if (e.target === cartOverlay) closeCart();
});

// Thanh toán
function checkout() {
    if (cart.length === 0) return;
    alert('Đặt hàng thành công! Cảm ơn bạn đã mua hàng tại MilkStore.');
    cart = [];
    saveAndRenderCart();
    closeCart();
}

// Khởi chạy ban đầu
renderProducts();
renderCart();
updateBadge();