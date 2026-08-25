/* =============================================
   MILKSTORE — SCRIPT.JS
   Vanilla JS: Products, Cart, Filter, Auth, Modals
   ============================================= */

// =============================================
// DATA: PRODUCTS
// =============================================
const products = [
    {
        id: 1,
        name: "Sữa bột Vinamilk Optimum Gold số 4 (900g)",
        brand: "Vinamilk",
        category: "Sữa bột trẻ em",
        price: 385000,
        oldPrice: 420000,
        badge: "hot",
        image: "./images/sua-cho-be-optimum-gold-3.jpg",
        description: "Sữa bột công thức Vinamilk Optimum Gold số 4 dành cho trẻ từ 2 tuổi trở lên. Giàu DHA, ARA, Nucleotides giúp phát triển não bộ và hệ miễn dịch."
    },
    {
        id: 2,
        name: "Thùng Sữa Tươi TH true MILK ít đường (1L x 12 hộp)",
        brand: "TH true MILK",
        category: "Sữa tươi",
        price: 360000,
        oldPrice: null,
        badge: "hot",
        image: "./images/thung-48-hop-sua-tuoi-tiet-trung-it-duong-th-true-milk-110ml-202211171539239485.jpg",
        description: "Sữa tươi tiệt trùng TH true MILK ít đường, nguồn gốc 100% tự nhiên từ bò sữa tươi, không chất bảo quản."
    },
    {
        id: 3,
        name: "Sữa bột Abbott Pediasure BA hương vani (850g)",
        brand: "Abbott",
        category: "Sữa bột trẻ em",
        price: 780000,
        oldPrice: 850000,
        badge: "sale",
        image: "./images/suabotAbbott.jpg",
        description: "PediaSure BA giúp bé tăng cân và phát triển chiều cao với Triple Sure — hệ thống 3 protein đặc biệt cùng hơn 30 dưỡng chất thiết yếu."
    },
    {
        id: 4,
        name: "Sữa bột Ensure Gold dinh dưỡng người lớn (850g)",
        brand: "Abbott",
        category: "Sữa người cao tuổi",
        price: 850000,
        oldPrice: 920000,
        badge: "hot",
        image: "./images/sua-ensure-gold.jpg",
        description: "Ensure Gold cung cấp dinh dưỡng cân bằng cho người lớn và người cao tuổi, hỗ trợ sức khỏe cơ bắp và xương chắc khỏe."
    },
    {
        id: 5,
        name: "Sữa chua uống Vinamilk ProBI hộp 130ml (x4 hộp)",
        brand: "Vinamilk",
        category: "Sữa chua uống",
        price: 30000,
        oldPrice: null,
        badge: null,
        image: "./images/VinamikProbi.jpg",
        description: "Sữa chua uống Vinamilk ProBI chứa vi khuẩn Probiotic L.Casei có lợi, hỗ trợ hệ tiêu hóa khỏe mạnh."
    },
    {
        id: 6,
        name: "Sữa bột Frisolac Gold số 2 cho bé 6-12 tháng (900g)",
        brand: "Friso",
        category: "Sữa bột trẻ em",
        price: 580000,
        oldPrice: 620000,
        badge: "new",
        image: "./images/sua-frisolac.jpg",
        description: "Frisolac Gold số 2 với công thức LOCK®NUTRI bảo toàn dưỡng chất tự nhiên, phù hợp cho bé 6-12 tháng tuổi."
    },
    {
        id: 7,
        name: "Sữa bầu Vinamilk Mom dạng bột hương vani (900g)",
        brand: "Vinamilk",
        category: "Sữa mẹ bầu",
        price: 290000,
        oldPrice: 320000,
        badge: "new",
        image: "./images/VinamikDielac.jpg",
        description: "Vinamilk Mom cung cấp DHA, Axit Folic, Canxi và nhiều dưỡng chất thiết yếu hỗ trợ thai kỳ khỏe mạnh."
    },
    {
        id: 8,
        name: "Sữa Ensure dành cho mẹ bầu Abbott (850g)",
        brand: "Abbott",
        category: "Sữa mẹ bầu",
        price: 620000,
        oldPrice: null,
        badge: "hot",
        image: "./images/ensureMeBau.jpg",
        description: "Ensure dành cho bà bầu bổ sung đầy đủ 28 vitamin và khoáng chất cần thiết, đặc biệt là DHA, Choline, Sắt, Canxi."
    },
    {
        id: 9,
        name: "Whey Protein Optimum Nutrition Gold Standard (2lbs)",
        brand: "Optimum",
        category: "Sữa Gym",
        price: 1250000,
        oldPrice: 1400000,
        badge: "hot",
        image: "./images/protein-optimum.jpg",
    },
    {
        id: 10,
        name: "Sữa bột Nestlé Milo 3in1 dạng gói (18 gói)",
        brand: "Nestlé",
        category: "Sữa tươi",
        price: 145000,
        oldPrice: 165000,
        badge: "sale",
        image: "./images/Milo1.avif",
        description: "Nestlé Milo giàu canxi, vitamin D, B2, B3 và năng lượng ACTIGEN-E hỗ trợ bé năng động, vui khỏe mỗi ngày."
    },
    {
        id: 11,
        name: "Sữa Canxi Anlene Gold 3X cho người cao tuổi (800g)",
        brand: "Mead Johnson",
        category: "Sữa người cao tuổi",
        price: 475000,
        oldPrice: 520000,
        badge: "hot",
        image: "./images/anlene.jpg",
        description: "Anlene Gold 3X giàu Canxi, Vitamin D3, Collagen, Protein — chuyên biệt cho người trên 45 tuổi, bảo vệ xương khớp."
    },
    {
        id: 12,
        name: "Protein Muscle Milk Genuine (1.65kg)",
        brand: "Optimum",
        category: "Sữa Gym",
        price: 980000,
        oldPrice: null,
        badge: "new",
        image: "./images/muscle.webp",
        description: "Muscle Milk cung cấp 32g protein, EFAs và phức hợp Cytovite™ gồm 20 vitamin và khoáng chất, hỗ trợ phục hồi sau luyện tập."
    }
];

// =============================================
// SEED DEMO DATA (100% Client-Side Pure Frontend)
// =============================================
function initDemoData() {
    // Seed demo users if not exists
    if (!localStorage.getItem('milkStoreUsers')) {
        const demoUsers = [
            {
                name: "Nguyễn Văn Demo",
                email: "demo@milkstore.vn",
                password: "123456"
            }
        ];
        localStorage.setItem('milkStoreUsers', JSON.stringify(demoUsers));
    }

    // Seed demo orders if not exists
    if (!localStorage.getItem('milkStoreOrders')) {
        const demoOrders = [
            {
                id: "MS-8921",
                date: "20/08/2026",
                items: 2,
                address: "123 Nguyễn Huệ, Phường Bến Nghé, Quận 1, TP. Hồ Chí Minh",
                paymentLabel: "Thanh toán khi nhận hàng (COD)",
                total: "745.000₫"
            },
            {
                id: "MS-7412",
                date: "15/08/2026",
                items: 1,
                address: "456 Lê Duẩn, Quận Hải Châu, TP. Đà Nẵng",
                paymentLabel: "Chuyển khoản Ngân hàng (QR Code)",
                total: "360.000₫"
            }
        ];
        localStorage.setItem('milkStoreOrders', JSON.stringify(demoOrders));
    }
}
initDemoData();

function fillDemoLogin() {
    const emailInput = document.getElementById('loginEmail');
    const passInput = document.getElementById('loginPassword');
    if (emailInput && passInput) {
        emailInput.value = 'demo@milkstore.vn';
        passInput.value = '123456';
        showToast('Đã tự động điền tài khoản demo! ✨ Bấm Đăng Nhập để thử.');
    }
}

// =============================================
// STATE
// =============================================
let cart = JSON.parse(localStorage.getItem('milkStoreCart')) || [];
let currentUser = JSON.parse(localStorage.getItem('milkStoreUser')) || null;
let activeCategory = 'all';
let activeBrand = 'all';
let activeSort = 'default';
let searchKeyword = '';
let appliedVoucher = null;
let currentSlide = 0;
let sliderTimer = null;
let productModalQty = 1;
let currentProductModal = null;

// Voucher codes
const VOUCHERS = {
    'MILK10': { type: 'percent', value: 10, label: 'Giảm 10%' },
    'FREESHIP': { type: 'fixed', value: 30000, label: 'Miễn phí vận chuyển' },
    'SUMMER50': { type: 'fixed', value: 50000, label: 'Giảm 50.000đ' },
};

// =============================================
// DOM REFS
// =============================================
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
const brandFilter = document.getElementById('brandFilter');
const sortFilter = document.getElementById('sortFilter');
const authBtn = document.getElementById('authBtn');
const authLabel = document.getElementById('authLabel');
const sectionTitleProduct = document.getElementById('sectionTitleProduct');

// =============================================
// UTILITY
// =============================================
function formatVND(amount) {
    return amount.toLocaleString('vi-VN') + ' đ';
}

function showToast(msg = 'Thao tác thành công!') {
    const toast = document.getElementById('toast');
    const toastMsg = document.getElementById('toastMsg');
    toastMsg.textContent = msg;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 3000);
}

function getFilteredProducts() {
    let result = [...products];

    // Filter by category
    if (activeCategory !== 'all') {
        result = result.filter(p => p.category === activeCategory);
    }

    // Filter by brand
    if (activeBrand !== 'all') {
        result = result.filter(p => p.brand === activeBrand);
    }

    // Search
    if (searchKeyword) {
        result = result.filter(p =>
            p.name.toLowerCase().includes(searchKeyword) ||
            p.brand.toLowerCase().includes(searchKeyword) ||
            p.category.toLowerCase().includes(searchKeyword)
        );
    }

    // Sort
    if (activeSort === 'price-asc') result.sort((a, b) => a.price - b.price);
    else if (activeSort === 'price-desc') result.sort((a, b) => b.price - a.price);
    else if (activeSort === 'name-asc') result.sort((a, b) => a.name.localeCompare(b.name, 'vi'));

    return result;
}

// =============================================
// RENDER PRODUCTS
// =============================================
function renderProducts() {
    const filtered = getFilteredProducts();

    // Update section title
    if (activeCategory !== 'all') {
        sectionTitleProduct.innerHTML = `<i class="fa-solid fa-filter"></i> ${activeCategory}`;
    } else if (searchKeyword) {
        sectionTitleProduct.innerHTML = `<i class="fa-solid fa-magnifying-glass"></i> Kết quả: "${searchKeyword}"`;
    } else {
        sectionTitleProduct.innerHTML = `<i class="fa-solid fa-fire-flame-curved"></i> Sản Phẩm Nổi Bật`;
    }

    if (filtered.length === 0) {
        productGridContainer.innerHTML = `
            <div class="empty-products">
                <i class="fa-solid fa-box-open"></i>
                <p>Không tìm thấy sản phẩm phù hợp</p>
            </div>
        `;
        return;
    }

    productGridContainer.innerHTML = filtered.map(p => `
        <div class="product-card" onclick="openProductModal(${p.id})">
            <div class="product-img-wrap">
                <img src="${p.image}" alt="${p.name}" class="product-img" loading="lazy">
                <div class="product-badges">
                    ${p.badge === 'hot' ? '<span class="badge badge-hot">🔥 Hot</span>' : ''}
                    ${p.badge === 'new' ? '<span class="badge badge-new">✨ Mới</span>' : ''}
                    ${p.badge === 'sale' ? '<span class="badge badge-sale">🏷️ Sale</span>' : ''}
                </div>
            </div>
            <div class="product-info">
                <div class="product-brand">${p.brand}</div>
                <h3 class="product-name">${p.name}</h3>
                <div class="product-category-tag">${p.category}</div>
                <div class="product-price-row">
                    <span class="product-price">${formatVND(p.price)}</span>
                    ${p.oldPrice ? `<span class="product-price-old">${formatVND(p.oldPrice)}</span>` : ''}
                </div>
                <button class="add-to-cart-btn" onclick="event.stopPropagation(); addToCart(${p.id})">
                    <i class="fa-solid fa-cart-plus"></i> Thêm Vào Giỏ
                </button>
            </div>
        </div>
    `).join('');
}

// =============================================
// PRODUCT DETAIL MODAL
// =============================================
function openProductModal(productId) {
    const p = products.find(x => x.id === productId);
    if (!p) return;
    currentProductModal = p;
    productModalQty = 1;

    const modal = document.getElementById('productModal');
    document.getElementById('productModalContent').innerHTML = `
        <img src="${p.image}" alt="${p.name}" class="product-modal-img">
        <div class="product-modal-info">
            <div class="product-brand">${p.brand}</div>
            <h2>${p.name}</h2>
            <div class="modal-price">${formatVND(p.price)}</div>
            <p>${p.description}</p>
            <div class="modal-qty-row">
                <label>Số lượng:</label>
                <div class="quantity-control">
                    <button class="qty-btn" onclick="changeModalQty(-1)">−</button>
                    <span id="modalQtyDisplay">1</span>
                    <button class="qty-btn" onclick="changeModalQty(1)">+</button>
                </div>
            </div>
            <button class="modal-add-btn" onclick="addToCartFromModal()">
                <i class="fa-solid fa-cart-plus"></i> Thêm ${formatVND(p.price)} Vào Giỏ
            </button>
        </div>
    `;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeProductModal() {
    document.getElementById('productModal').classList.remove('active');
    document.body.style.overflow = '';
}

function changeModalQty(delta) {
    productModalQty = Math.max(1, productModalQty + delta);
    document.getElementById('modalQtyDisplay').textContent = productModalQty;

    // Update button price
    if (currentProductModal) {
        const btn = document.querySelector('.modal-add-btn');
        if (btn) {
            btn.innerHTML = `<i class="fa-solid fa-cart-plus"></i> Thêm ${formatVND(currentProductModal.price * productModalQty)} Vào Giỏ`;
        }
    }
}

function addToCartFromModal() {
    if (!currentProductModal) return;
    for (let i = 0; i < productModalQty; i++) {
        addToCart(currentProductModal.id, false);
    }
    showToast(`Đã thêm ${productModalQty} sản phẩm vào giỏ hàng! 🛒`);
    closeProductModal();
    openCart();
}

// =============================================
// CART
// =============================================
function addToCart(productId, openDrawer = true) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const existing = cart.find(item => item.id === productId);
    if (existing) {
        existing.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    saveAndRenderCart();
    if (openDrawer) {
        showToast(`"${product.name.substring(0, 30)}..." đã được thêm vào giỏ! 🛒`);
        // Animate badge
        const badge = document.getElementById('cartBadge');
        badge.style.transform = 'scale(1.5)';
        setTimeout(() => badge.style.transform = 'scale(1)', 300);
    }
}

function updateQuantity(productId, change) {
    const item = cart.find(i => i.id === productId);
    if (!item) return;
    item.quantity += change;
    if (item.quantity <= 0) {
        cart = cart.filter(i => i.id !== productId);
    }
    saveAndRenderCart();
}

function removeFromCart(productId) {
    cart = cart.filter(i => i.id !== productId);
    saveAndRenderCart();
    showToast('Đã xóa sản phẩm khỏi giỏ hàng');
}

function saveAndRenderCart() {
    localStorage.setItem('milkStoreCart', JSON.stringify(cart));
    renderCart();
    updateBadge();
}

function updateBadge() {
    const total = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartBadge.textContent = total;
}

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
            <img src="${item.image}" alt="${item.name}" class="cart-item-img" onerror="this.src='https://images.unsplash.com/photo-1563636619-e9143da7973b?auto=format&fit=crop&q=80&w=120'">
            <div class="cart-item-details">
                <div class="cart-item-title">${item.name}</div>
                <div class="cart-item-price">${formatVND(item.price)}</div>
                <div class="quantity-control">
                    <button class="qty-btn" onclick="updateQuantity(${item.id}, -1)">−</button>
                    <span>${item.quantity}</span>
                    <button class="qty-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                </div>
            </div>
            <button class="cart-item-remove" onclick="removeFromCart(${item.id})" title="Xóa">
                <i class="fa-solid fa-trash-can"></i>
            </button>
        </div>
    `).join('');

    updateCartTotals();
}

function updateCartTotals() {
    const subTotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    let shippingFee = subTotal > 500000 || subTotal === 0 ? 0 : 30000;
    let discount = 0;

    if (appliedVoucher) {
        if (appliedVoucher.type === 'percent') {
            discount = Math.round(subTotal * appliedVoucher.value / 100);
        } else {
            discount = appliedVoucher.value;
            if (appliedVoucher.value === 30000) shippingFee = 0; // FREESHIP
        }
        document.getElementById('promoRow').style.display = 'flex';
        document.getElementById('promoDiscount').textContent = `- ${formatVND(discount)}`;
    } else {
        document.getElementById('promoRow').style.display = 'none';
    }

    const finalTotal = subTotal + shippingFee - discount;

    subTotalEl.textContent = formatVND(subTotal);
    shippingFeeEl.textContent = shippingFee === 0 ? 'Miễn phí 🎉' : formatVND(shippingFee);
    finalTotalEl.textContent = formatVND(Math.max(0, finalTotal));
}

function openCart() {
    cartOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeCart() {
    cartOverlay.classList.remove('active');
    document.body.style.overflow = '';
}

// =============================================
// VOUCHER
// =============================================
function applyVoucher() {
    const code = document.getElementById('voucherInput').value.trim().toUpperCase();
    if (!code) { showToast('Vui lòng nhập mã giảm giá! ✏️'); return; }

    if (VOUCHERS[code]) {
        appliedVoucher = VOUCHERS[code];
        showToast(`Áp dụng thành công: ${appliedVoucher.label}! 🎉`);
        updateCartTotals();
    } else {
        showToast('Mã giảm giá không hợp lệ! ❌');
    }
}

// =============================================
// CHECKOUT MODAL
// =============================================
function openCheckoutModal() {
    if (cart.length === 0) { showToast('Giỏ hàng đang trống!'); return; }
    closeCart();

    // Reset to step 1
    goToCheckoutStep(1);

    // Pre-fill nếu đã đăng nhập
    if (currentUser) {
        const nameEl = document.getElementById('checkoutName');
        if (nameEl && !nameEl.value) nameEl.value = currentUser.name || '';
    }

    // Render cart summary
    const summaryEl = document.getElementById('checkoutSummary');
    summaryEl.innerHTML = cart.map(item => `
        <div class="checkout-sum-item">
            <span>${item.name.substring(0, 40)}... x${item.quantity}</span>
            <span>${formatVND(item.price * item.quantity)}</span>
        </div>
    `).join('');

    const subTotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const shippingFee = subTotal > 500000 ? 0 : 30000;
    let discount = 0;
    if (appliedVoucher) {
        discount = appliedVoucher.type === 'percent'
            ? Math.round(subTotal * appliedVoucher.value / 100)
            : appliedVoucher.value;
    }
    document.getElementById('checkoutTotal').textContent = formatVND(Math.max(0, subTotal + shippingFee - discount));

    document.getElementById('checkoutModal').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeCheckoutModal() {
    document.getElementById('checkoutModal').classList.remove('active');
    document.body.style.overflow = '';
    clearInterval(qrTimerInterval);
    // Reset step silently (without calling goToCheckoutStep to avoid loops)
    currentCheckoutStep = 1;
    [1, 2, 3].forEach(n => {
        const el = document.getElementById('checkoutStep' + n);
        if (el) el.classList.toggle('hidden', n !== 1);
        const ind = document.getElementById('step' + n + 'Indicator');
        if (ind) {
            ind.classList.remove('active', 'done');
            if (n === 1) ind.classList.add('active');
        }
        const line = document.getElementById('stepLine' + n);
        if (line) line.classList.remove('done');
    });
}

function backToCart() {
    closeCheckoutModal();
    openCart();
}

function confirmOrder() {
    const name = document.getElementById('checkoutName').value.trim();
    const phone = document.getElementById('checkoutPhone').value.trim();
    const address = document.getElementById('checkoutAddress').value.trim();
    const city = document.getElementById('checkoutCity').value;
    const paymentRadio = document.querySelector('input[name="paymentMethod"]:checked');
    const paymentVal = paymentRadio ? paymentRadio.value : 'cod';
    const paymentLabel = paymentLabels[paymentVal] || 'Tiền mặt (COD)';

    // Generate order
    const orderId = 'MS' + Date.now().toString().slice(-6);
    const now = new Date();
    const dateStr = `${now.getDate().toString().padStart(2,'0')}/${(now.getMonth()+1).toString().padStart(2,'0')}/${now.getFullYear()} ${now.getHours()}:${now.getMinutes().toString().padStart(2,'0')}`;
    const total = document.getElementById('checkoutTotal').textContent;

    const newOrder = {
        id: orderId,
        date: dateStr,
        items: cart.reduce((sum, i) => sum + i.quantity, 0),
        address: `${address}, ${city}`,
        paymentLabel,
        total,
        name,
        phone
    };

    // Save order
    const orders = JSON.parse(localStorage.getItem('milkStoreOrders') || '[]');
    orders.push(newOrder);
    localStorage.setItem('milkStoreOrders', JSON.stringify(orders));

    // Show success info
    document.getElementById('successOrderInfo').innerHTML = `
        <div>📋 Mã đơn: <strong>#${orderId}</strong></div>
        <div>👤 Khách hàng: <strong>${name}</strong></div>
        <div>📞 SĐT: <strong>${phone}</strong></div>
        <div>📍 Địa chỉ: <strong>${address}${city ? ', ' + city : ''}</strong></div>
        <div>💳 Thanh toán: <strong>${paymentLabel}</strong></div>
        <div>💰 Tổng thanh toán: <strong>${total}</strong></div>
    `;

    // Clear cart
    cart = [];
    appliedVoucher = null;
    saveAndRenderCart();

    // Move to step 3
    goToCheckoutStep(3);
    clearInterval(qrTimerInterval);
}

// =============================================
// AUTH MODAL — NÂNG CẤP
// =============================================
let userDropdownOpen = false;
let qrTimerInterval = null;

function getInitials(name) {
    const parts = name.trim().split(' ');
    if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

function openAuthModal() {
    if (currentUser) {
        toggleUserDropdown();
        return;
    }
    document.getElementById('authModal').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeAuthModal() {
    document.getElementById('authModal').classList.remove('active');
    document.body.style.overflow = '';
}

function toggleUserDropdown() {
    const dropdown = document.getElementById('userDropdown');
    userDropdownOpen = !userDropdownOpen;
    if (userDropdownOpen) {
        openUserDropdown();
    } else {
        closeUserDropdown();
    }
}

function openUserDropdown() {
    if (!currentUser) return;
    const dropdown = document.getElementById('userDropdown');
    const infoEl = document.getElementById('dropdownUserInfo');
    const initials = getInitials(currentUser.name);
    infoEl.innerHTML = `
        <div class="user-dropdown__avatar-lg">${initials}</div>
        <div>
            <p class="user-dropdown__name">${currentUser.name}</p>
            <p class="user-dropdown__email">${currentUser.email}</p>
        </div>
    `;
    dropdown.classList.add('is-open');
    dropdown.setAttribute('aria-hidden', 'false');
    userDropdownOpen = true;
}

function closeUserDropdown() {
    const dropdown = document.getElementById('userDropdown');
    dropdown.classList.remove('is-open');
    dropdown.setAttribute('aria-hidden', 'true');
    userDropdownOpen = false;
}

function logout() {
    currentUser = null;
    localStorage.removeItem('milkStoreUser');
    closeUserDropdown();
    updateAuthUI();
    showToast('Đã đăng xuất thành công! 👋');
}

function forgotPassword() {
    const email = document.getElementById('loginEmail').value.trim();
    if (!email || !email.includes('@')) {
        showToast('Vui lòng nhập email để đặt lại mật khẩu! ⚠️');
        return;
    }
    showToast(`📧 Đã gửi link đặt lại mật khẩu đến ${email}`);
}

function switchTab(tab) {
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    const loginTab = document.getElementById('loginTab');
    const registerTab = document.getElementById('registerTab');
    if (tab === 'login') {
        loginForm.classList.remove('hidden');
        registerForm.classList.add('hidden');
        loginTab.classList.add('active');
        registerTab.classList.remove('active');
    } else {
        registerForm.classList.remove('hidden');
        loginForm.classList.add('hidden');
        registerTab.classList.add('active');
        loginTab.classList.remove('active');
    }
}

function login() {
    const email = document.getElementById('loginEmail').value.trim();
    const password = document.getElementById('loginPassword').value;
    if (!email || !password) { showToast('Vui lòng điền đầy đủ thông tin! ⚠️'); return; }
    if (!email.includes('@')) { showToast('Email không hợp lệ! ⚠️'); return; }
    if (password.length < 6) { showToast('Mật khẩu phải ít nhất 6 ký tự! ⚠️'); return; }
    const users = JSON.parse(localStorage.getItem('milkStoreUsers') || '[]');
    const user = users.find(u => u.email === email && u.password === password);
    if (!user) { showToast('Email hoặc mật khẩu không đúng! ❌'); return; }
    currentUser = user;
    localStorage.setItem('milkStoreUser', JSON.stringify(user));
    closeAuthModal();
    updateAuthUI();
    showToast(`Chào mừng ${user.name} quay lại! 👋`);
}

function register() {
    const name = document.getElementById('regName').value.trim();
    const email = document.getElementById('regEmail').value.trim();
    const password = document.getElementById('regPassword').value;
    if (!name || !email || !password) { showToast('Vui lòng điền đầy đủ thông tin! ⚠️'); return; }
    if (!email.includes('@')) { showToast('Email không hợp lệ! ⚠️'); return; }
    if (password.length < 6) { showToast('Mật khẩu phải ít nhất 6 ký tự! ⚠️'); return; }
    const users = JSON.parse(localStorage.getItem('milkStoreUsers') || '[]');
    if (users.find(u => u.email === email)) { showToast('Email này đã được đăng ký! ⚠️'); return; }
    const newUser = { name, email, password };
    users.push(newUser);
    localStorage.setItem('milkStoreUsers', JSON.stringify(users));
    currentUser = newUser;
    localStorage.setItem('milkStoreUser', JSON.stringify(newUser));
    closeAuthModal();
    updateAuthUI();
    showToast(`Đăng ký thành công! Chào ${name} 🎉`);
}

function updateAuthUI() {
    if (currentUser) {
        const initials = getInitials(currentUser.name);
        // Replace icon with avatar circle
        authBtn.innerHTML = `<div class="user-avatar-circle">${initials}</div><span class="btn-label">${currentUser.name.split(' ').slice(-1)[0]}</span>`;
        authBtn.style.background = 'rgba(214, 51, 132, 0.08)';
        authBtn.style.color = 'var(--primary)';
    } else {
        authBtn.innerHTML = `<i class="fa-regular fa-user"></i><span class="btn-label" id="authLabel">Đăng Nhập</span>`;
        authBtn.style.background = '';
        authBtn.style.color = '';
        closeUserDropdown();
    }
}

// =============================================
// ORDER HISTORY
// =============================================
function showOrderHistory() {
    const orders = JSON.parse(localStorage.getItem('milkStoreOrders') || '[]');
    const body = document.getElementById('orderHistoryBody');
    closeUserDropdown();
    if (orders.length === 0) {
        body.innerHTML = `<div class="order-history-empty"><i class="fa-solid fa-box-open"></i><p>Bạn chưa có đơn hàng nào.</p><p>Hãy thêm sản phẩm vào giỏ và đặt hàng!</p></div>`;
    } else {
        body.innerHTML = orders.slice().reverse().map(order => `
            <div class="order-item">
                <div class="order-item__head">
                    <div>
                        <span class="order-item__id">#${order.id}</span>
                        <span class="order-item__date"> — ${order.date}</span>
                    </div>
                    <span class="order-item__status order-item__status--processing">⏳ Đang xử lý</span>
                </div>
                <div class="order-item__body">
                    <div>📦 ${order.items} sản phẩm | 📍 ${order.address || 'Chưa có địa chỉ'}</div>
                    <div>💳 ${order.paymentLabel}</div>
                    <div class="order-item__total">Tổng: ${order.total}</div>
                </div>
            </div>
        `).join('');
    }
    document.getElementById('orderHistoryModal').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeOrderHistoryModal() {
    document.getElementById('orderHistoryModal').classList.remove('active');
    document.body.style.overflow = '';
}

// =============================================
// MULTI-STEP CHECKOUT
// =============================================
let currentCheckoutStep = 1;

function goToCheckoutStep(step) {
    // Validate step 1 before proceeding
    if (step === 2) {
        const name = document.getElementById('checkoutName').value.trim();
        const phone = document.getElementById('checkoutPhone').value.trim();
        const address = document.getElementById('checkoutAddress').value.trim();
        if (!name || !phone || !address) {
            showToast('Vui lòng điền đầy đủ thông tin giao hàng! ⚠️');
            return;
        }
        // Start QR listener
        setupPaymentListeners();
    }

    // Hide all steps
    [1, 2, 3].forEach(n => {
        const el = document.getElementById('checkoutStep' + n);
        if (el) el.classList.add('hidden');
    });

    // Show target step
    const target = document.getElementById('checkoutStep' + step);
    if (target) target.classList.remove('hidden');

    // Update stepper
    [1, 2, 3].forEach(n => {
        const ind = document.getElementById('step' + n + 'Indicator');
        const line = document.getElementById('stepLine' + n);
        if (!ind) return;
        ind.classList.remove('active', 'done');
        if (n < step) ind.classList.add('done');
        else if (n === step) ind.classList.add('active');
        if (line) line.classList.toggle('done', n < step);
    });

    currentCheckoutStep = step;
}

function setupPaymentListeners() {
    document.querySelectorAll('input[name="paymentMethod"]').forEach(radio => {
        radio.addEventListener('change', onPaymentChange);
    });
    // Trigger current selection
    const checked = document.querySelector('input[name="paymentMethod"]:checked');
    if (checked) onPaymentChange.call(checked);
}

const paymentLabels = {
    cod:     'Tiền mặt (COD)',
    bank:    'Chuyển khoản ngân hàng',
    momo:    'Ví MoMo',
    zalopay: 'ZaloPay',
    vnpay:   'VNPay',
    card:    'Thẻ quốc tế (VISA/MC)'
};

const qrAccountInfo = {
    bank:    '🏦 MB Bank — 0359897209 — CAO TAN LOC',
    momo:    '📱 MoMo — 0359897209 — CAO TAN LOC',
    zalopay: '💙 ZaloPay — 0359897209 — CAO TAN LOC'
};

function copyBankAccount(text = '0359897209') {
    navigator.clipboard.writeText(text).then(() => {
        showToast('Đã sao chép STK: ' + text + ' 📋');
    }).catch(() => {
        showToast('Số tài khoản: ' + text);
    });
}

function onPaymentChange() {
    const val = document.querySelector('input[name="paymentMethod"]:checked')?.value;
    const qrPanel = document.getElementById('qrPanel');
    const qrAmount = document.getElementById('qrAmount');
    const qrAccount = document.getElementById('qrAccount');
    const qrTitle = document.getElementById('qrTitle');
    const qrImage = document.getElementById('qrImage');
    const qrSvg = document.getElementById('qrPlaceholderSvg');

    // Update active card styling
    document.querySelectorAll('.payment-option-card').forEach(card => {
        const inp = card.querySelector('input[type="radio"]');
        card.querySelector('.payment-option-inner').style.borderColor = inp && inp.checked ? 'var(--primary)' : '';
    });

    const showQR = ['bank', 'momo', 'zalopay'].includes(val);
    if (showQR) {
        qrPanel.classList.remove('hidden');
        qrTitle.textContent = `Quét mã QR ${paymentLabels[val]} để thanh toán`;
        const total = document.getElementById('checkoutTotal').textContent;
        qrAmount.textContent = total;
        qrAccount.textContent = qrAccountInfo[val] || '';

        // Calculate numeric amount for VietQR
        let subTotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        let shippingFee = subTotal >= 500000 || subTotal === 0 ? 0 : 30000;
        let discount = 0;
        if (appliedVoucher) {
            if (appliedVoucher.type === 'percent') discount = Math.round(subTotal * appliedVoucher.value / 100);
            else if (appliedVoucher.type === 'fixed') discount = appliedVoucher.value;
        }
        const numericTotal = Math.max(0, subTotal + shippingFee - discount);
        const phone = document.getElementById('checkoutPhone')?.value.trim() || 'DH';
        const transferDesc = encodeURIComponent('MilkStore ' + phone);
        const accountName = encodeURIComponent('CAO TAN LOC');

        if (qrImage) {
            qrImage.style.display = 'block';
            if (qrSvg) qrSvg.style.display = 'none';
            // Tạo mã VietQR chuẩn MB Bank: MB - 0359897209 - CAO TAN LOC
            qrImage.src = `https://img.vietqr.io/image/MB-0359897209-compact2.png?amount=${numericTotal}&addInfo=${transferDesc}&accountName=${accountName}`;
            qrImage.onerror = () => {
                qrImage.style.display = 'none';
                if (qrSvg) qrSvg.style.display = 'block';
            };
        }

        startQRCountdown();
    } else {
        qrPanel.classList.add('hidden');
        clearInterval(qrTimerInterval);
    }
}

function startQRCountdown() {
    clearInterval(qrTimerInterval);
    let secs = 300; // 5 min
    const el = document.getElementById('qrCountdown');
    if (!el) return;
    const update = () => {
        const m = Math.floor(secs / 60);
        const s = secs % 60;
        el.textContent = `${m}:${s < 10 ? '0' : ''}${s}`;
        if (secs <= 0) clearInterval(qrTimerInterval);
        secs--;
    };
    update();
    qrTimerInterval = setInterval(update, 1000);
}

// =============================================
// BRANDS FILTER
// =============================================
function filterByBrand(brandName) {
    // Update brand select dropdown
    const brandSelect = document.getElementById('brandFilter');
    if (brandSelect) {
        const opt = Array.from(brandSelect.options).find(o => o.value === brandName || o.text === brandName);
        if (opt) {
            brandSelect.value = opt.value;
            activeBrand = opt.value;
        } else {
            // If not in select, filter by keyword in product name/brand
            activeBrand = '';
            searchKeyword = brandName.toLowerCase();
            document.getElementById('searchInput').value = brandName;
        }
    }

    // Highlight active brand card
    document.querySelectorAll('.brand-card').forEach(card => {
        card.classList.toggle('brand-card--active', card.dataset.brand === brandName);
    });

    renderProducts();
    document.getElementById('productSection').scrollIntoView({ behavior: 'smooth', block: 'start' });
    showToast(`Lọc sản phẩm: ${brandName} 🏷️`);
}

// =============================================
// HERO SLIDER
// =============================================
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.slider-dot');

function goToSlide(index) {
    slides[currentSlide].classList.remove('active');
    dots[currentSlide].classList.remove('active');
    currentSlide = (index + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
}

function nextSlide() { goToSlide(currentSlide + 1); }
function prevSlide() { goToSlide(currentSlide - 1); }

function startSlider() {
    sliderTimer = setInterval(() => nextSlide(), 4500);
}

function resetSlider() {
    clearInterval(sliderTimer);
    startSlider();
}

// =============================================
// FILTERS & SEARCH
// =============================================
// Category buttons
document.getElementById('categoryBar').addEventListener('click', (e) => {
    const btn = e.target.closest('.category-btn');
    if (!btn) return;

    document.querySelectorAll('.category-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    activeCategory = btn.dataset.cat;
    renderProducts();

    // Scroll to product section
    document.getElementById('productSection').scrollIntoView({ behavior: 'smooth', block: 'start' });
});

// Search
searchInput.addEventListener('input', (e) => {
    searchKeyword = e.target.value.toLowerCase().trim();
    renderProducts();
});

// Brand filter
brandFilter.addEventListener('change', (e) => {
    activeBrand = e.target.value;
    renderProducts();
});

// Sort
sortFilter.addEventListener('change', (e) => {
    activeSort = e.target.value;
    renderProducts();
});

// =============================================
// CART EVENTS
// =============================================
openCartBtn.addEventListener('click', openCart);
closeCartBtn.addEventListener('click', closeCart);
cartOverlay.addEventListener('click', (e) => {
    if (e.target === cartOverlay) closeCart();
});

// Auth button — opens dropdown if logged in, modal if not
authBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    openAuthModal();
});

// Close user dropdown on outside click
document.addEventListener('click', (e) => {
    const dropdown = document.getElementById('userDropdown');
    if (userDropdownOpen && dropdown && !dropdown.contains(e.target) && !authBtn.contains(e.target)) {
        closeUserDropdown();
    }
});

// Close modals on overlay click
document.getElementById('authModal').addEventListener('click', (e) => {
    if (e.target === document.getElementById('authModal')) closeAuthModal();
});
document.getElementById('productModal').addEventListener('click', (e) => {
    if (e.target === document.getElementById('productModal')) closeProductModal();
});
document.getElementById('checkoutModal').addEventListener('click', (e) => {
    if (e.target === document.getElementById('checkoutModal')) closeCheckoutModal();
});
document.getElementById('orderHistoryModal').addEventListener('click', (e) => {
    if (e.target === document.getElementById('orderHistoryModal')) closeOrderHistoryModal();
});

// =============================================
// MOBILE NAV
// =============================================
document.getElementById('hamburgerBtn').addEventListener('click', () => {
    document.getElementById('mobileNavOverlay').classList.add('active');
});

document.getElementById('closeMobileNav').addEventListener('click', () => {
    document.getElementById('mobileNavOverlay').classList.remove('active');
});

function closeMobileNavFn() {
    document.getElementById('mobileNavOverlay').classList.remove('active');
}

// =============================================
// HEADER SCROLL
// =============================================
window.addEventListener('scroll', () => {
    const header = document.getElementById('mainHeader');
    if (window.scrollY > 10) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// =============================================
// NEWSLETTER
// =============================================
function subscribeNewsletter() {
    const email = document.getElementById('newsletterEmail').value.trim();
    if (!email || !email.includes('@')) {
        showToast('Vui lòng nhập email hợp lệ! ⚠️');
        return;
    }
    document.getElementById('newsletterEmail').value = '';
    showToast('Đăng ký nhận tin thành công! 🎉');
}

// =============================================
// LOAD MORE (visual only)
// =============================================
document.getElementById('loadMoreBtn').addEventListener('click', () => {
    showToast('Đã hiển thị tất cả sản phẩm! ✅');
});

// =============================================
// KEYBOARD SHORTCUTS
// =============================================
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeCart();
        closeAuthModal();
        closeProductModal();
        closeCheckoutModal();
        closeOrderHistoryModal();
        closeUserDropdown();
        closeMobileNavFn();
    }
});

// =============================================
// INIT
// =============================================
renderProducts();
renderCart();
updateBadge();
updateAuthUI();
startSlider();

// =============================================
// BACK TO TOP BUTTON
// =============================================
(function () {
    const btnBackToTop = document.getElementById('btnBackToTop');
    if (!btnBackToTop) return;

    window.addEventListener('scroll', function () {
        if (window.pageYOffset > 300) {
            btnBackToTop.classList.add('is-visible');
        } else {
            btnBackToTop.classList.remove('is-visible');
        }
    }, { passive: true });

    btnBackToTop.addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
})();