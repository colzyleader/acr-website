/* ==========================================================================
   ACR — Site Scripts
   ========================================================================== */

/* ---------- Header scroll state ---------- */
const header = document.querySelector('.site-header');
let lastY = 0;
window.addEventListener('scroll', () => {
  const y = window.scrollY;
  if (header) header.classList.toggle('scrolled', y > 8);
  lastY = y;
}, { passive: true });

/* ---------- Reveal on scroll ---------- */
const io = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (e.isIntersecting) {
      e.target.classList.add('in');
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach((el) => io.observe(el));

/* ---------- Cart state (persisted in memory only — no localStorage) ---------- */
const ACR = {
  cart: [],
  wishlist: new Set(),
};

function fmt(n) { return '$' + n.toFixed(2); }

function findProduct(id) {
  return (window.PRODUCTS || []).find((p) => p.id === id);
}

function addToCart(id, opts = {}) {
  const p = findProduct(id);
  if (!p) return;
  const size = opts.size || 'M';
  const color = opts.color || (p.colors ? p.colors[0] : 'black');
  const qty = opts.qty || 1;
  const key = `${id}::${size}::${color}`;
  const existing = ACR.cart.find((i) => i.key === key);
  if (existing) existing.qty += qty;
  else ACR.cart.push({ key, id, size, color, qty });
  renderCart();
  toast(`Added ${p.name}`);
}

function removeFromCart(key) {
  ACR.cart = ACR.cart.filter((i) => i.key !== key);
  renderCart();
}

function setQty(key, delta) {
  const item = ACR.cart.find((i) => i.key === key);
  if (!item) return;
  item.qty = Math.max(1, item.qty + delta);
  renderCart();
}

function cartCount() {
  return ACR.cart.reduce((s, i) => s + i.qty, 0);
}
function cartSubtotal() {
  return ACR.cart.reduce((s, i) => {
    const p = findProduct(i.id);
    return s + (p ? p.price * i.qty : 0);
  }, 0);
}

function renderCart() {
  // Header badge
  const badges = document.querySelectorAll('[data-cart-count]');
  const count = cartCount();
  badges.forEach((b) => {
    b.textContent = count;
    b.style.display = count > 0 ? 'flex' : 'none';
  });

  // Drawer
  const body = document.querySelector('[data-cart-body]');
  const sub = document.querySelector('[data-cart-subtotal]');
  if (!body) return;

  if (ACR.cart.length === 0) {
    body.innerHTML = `
      <div class="cart-empty">
        <h4>Your cart is empty</h4>
        <p>Add some essentials to get started.</p>
      </div>`;
    if (sub) sub.textContent = fmt(0);
    return;
  }

  body.innerHTML = ACR.cart.map((i) => {
    const p = findProduct(i.id);
    if (!p) return '';
    return `
      <div class="cart-line">
        <div class="cart-line-img" style="background-image:url('assets/${p.image}')"></div>
        <div>
          <div class="cart-line-name">${p.name}</div>
          <div class="cart-line-meta">${i.size} · ${i.color}</div>
          <div class="qty">
            <button onclick="setQty('${i.key}', -1)" aria-label="Decrease">−</button>
            <span>${i.qty}</span>
            <button onclick="setQty('${i.key}', 1)" aria-label="Increase">+</button>
          </div>
          <a class="cart-remove" onclick="removeFromCart('${i.key}')">Remove</a>
        </div>
        <div>
          <div class="cart-line-price">${fmt(p.price * i.qty)}</div>
        </div>
      </div>`;
  }).join('');

  if (sub) sub.textContent = fmt(cartSubtotal());

  // Cart page
  const cartList = document.querySelector('[data-cart-list]');
  if (cartList) renderCartPage();
}

function renderCartPage() {
  const list = document.querySelector('[data-cart-list]');
  const summary = document.querySelector('[data-summary-rows]');
  const totalEl = document.querySelector('[data-summary-total]');
  if (!list) return;

  if (ACR.cart.length === 0) {
    list.innerHTML = `
      <div class="cart-empty" style="padding: 80px 0;">
        <h4>Your cart is empty</h4>
        <p>Browse our collection and find something you love.</p>
        <a href="shop.html" class="btn btn-primary" style="margin-top:24px;">Shop the collection</a>
      </div>`;
    if (summary) summary.innerHTML = '';
    if (totalEl) totalEl.textContent = fmt(0);
    return;
  }

  list.innerHTML = ACR.cart.map((i) => {
    const p = findProduct(i.id);
    if (!p) return '';
    return `
      <div class="cart-item">
        <div class="cart-item-img" style="background-image:url('assets/${p.image}')"></div>
        <div>
          <h3 class="cart-item-name">${p.name}</h3>
          <div class="cart-item-meta">
            <span>Size ${i.size}</span>
            <span>${i.color}</span>
          </div>
          <div class="cart-item-actions">
            <div class="qty">
              <button onclick="setQty('${i.key}', -1)">−</button>
              <span>${i.qty}</span>
              <button onclick="setQty('${i.key}', 1)">+</button>
            </div>
            <a class="cart-remove" onclick="removeFromCart('${i.key}')">Remove</a>
          </div>
        </div>
        <div class="cart-item-price">${fmt(p.price * i.qty)}</div>
      </div>`;
  }).join('');

  const sub = cartSubtotal();
  const ship = sub > 75 ? 0 : 8;
  const tax = sub * 0.08;
  const total = sub + ship + tax;

  if (summary) {
    summary.innerHTML = `
      <div class="summary-row"><span>Subtotal</span><span>${fmt(sub)}</span></div>
      <div class="summary-row muted"><span>Shipping</span><span>${ship === 0 ? 'Free' : fmt(ship)}</span></div>
      <div class="summary-row muted"><span>Estimated tax</span><span>${fmt(tax)}</span></div>
    `;
  }
  if (totalEl) totalEl.textContent = fmt(total);
}

/* ---------- Drawer ---------- */
function openDrawer() {
  document.querySelector('.drawer')?.classList.add('open');
  document.querySelector('.drawer-overlay')?.classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeDrawer() {
  document.querySelector('.drawer')?.classList.remove('open');
  document.querySelector('.drawer-overlay')?.classList.remove('open');
  document.body.style.overflow = '';
}

document.addEventListener('click', (e) => {
  if (e.target.closest('.cart-trigger')) {
    e.preventDefault();
    openDrawer();
  }
  if (e.target.closest('[data-drawer-close]') || e.target.classList.contains('drawer-overlay')) {
    closeDrawer();
  }
});

/* ---------- Wishlist ---------- */
function toggleWishlist(id, btn) {
  if (ACR.wishlist.has(id)) {
    ACR.wishlist.delete(id);
    btn.classList.remove('active');
    toast('Removed from wishlist');
  } else {
    ACR.wishlist.add(id);
    btn.classList.add('active');
    toast('Saved to wishlist');
  }
  document.querySelectorAll('[data-wishlist-count]').forEach(b => {
    const c = ACR.wishlist.size;
    b.textContent = c;
    b.style.display = c > 0 ? 'flex' : 'none';
  });
}

/* ---------- Toast ---------- */
let toastTimer;
function toast(msg) {
  let el = document.querySelector('.toast');
  if (!el) {
    el = document.createElement('div');
    el.className = 'toast';
    document.body.appendChild(el);
  }
  el.innerHTML = `
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
      <path d="M5 12l5 5L20 7"/>
    </svg>
    ${msg}`;
  requestAnimationFrame(() => el.classList.add('show'));
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove('show'), 2200);
}

/* ---------- Newsletter popup (DISABLED — Klaviyo handles popup now) ---------- */
function setupPopup() {
  // Old fake popup disabled — Klaviyo's real popup handles signups now.
  // The fake popup HTML is still in partials.js but we hide it via CSS.
  return;
}

/* ---------- Mobile menu (placeholder simple toggle) ---------- */
function setupMobileMenu() {
  const btn = document.querySelector('.menu-toggle');
  if (!btn) return;
  btn.addEventListener('click', () => {
    const nav = document.querySelector('.primary-nav');
    if (!nav) return;
    if (nav.style.display === 'block') {
      nav.style.display = '';
    } else {
      nav.style.display = 'block';
    }
  });
}

/* ---------- Form submits (newsletter, promo) ---------- */
document.addEventListener('submit', (e) => {
  const f = e.target;
  if (f.matches('.newsletter-form')) {
    e.preventDefault();
    const email = f.querySelector('input[type="email"]')?.value;
    if (email && window._learnq) {
      // Submit to Klaviyo (puts them on the popup's list, triggering welcome flow)
      window._learnq.push(['identify', { '$email': email }]);
      window._learnq.push(['track', 'Subscribed to Newsletter', { email: email }]);
    }
    toast('Subscribed — check your inbox for 10% off');
    f.reset();
  }
  if (f.matches('.promo')) {
    e.preventDefault();
    toast('Promo applied');
  }
});

/* ---------- Product card renderer ---------- */
function renderProductCard(p) {
  const sizeChips = (p.sizes || []).map(s =>
    `<span class="size-chip">${s}</span>`
  ).join('');
  return `
    <article class="product-card" data-product-id="${p.id}">
      <a href="product.html?id=${p.id}" class="product-media">
        <div class="product-media-img" style="background-image:url('${p.image}'); background-position:center top;"></div>
        ${p.badge ? `<span class="product-tag accent">${p.badge}</span>` : ''}
      </a>
      <div class="product-card-body">
        <a href="product.html?id=${p.id}" class="product-card-name">${p.name}</a>
        <div class="product-card-meta">
          <span class="product-price">${fmt(p.price)}</span>
          <span class="product-sizes">${sizeChips}</span>
        </div>
      </div>
    </article>
  `;
}
window.renderProductCard = renderProductCard;

function renderProductGrids() {
  const grids = document.querySelectorAll('#best-sellers, #shop-grid');
  grids.forEach(g => {
    if (window.PRODUCTS && window.PRODUCTS.length) {
      g.innerHTML = window.PRODUCTS.map(renderProductCard).join('');
    }
  });
}

/* ---------- Quick add handler ---------- */
document.addEventListener('click', (e) => {
  const qa = e.target.closest('[data-quick-add]');
  if (qa) {
    e.preventDefault();
    const id = qa.dataset.quickAdd;
    const p = findProduct(id);
    if (p) addToCart(id, { size: p.sizes ? p.sizes[0] : 'M' });
  }

  // Theme toggle
  const tt = e.target.closest('[data-theme-toggle]');
  if (tt) {
    const html = document.documentElement;
    const isDark = html.classList.toggle('dark');
    try { localStorage.setItem('acr-theme', isDark ? 'dark' : 'light'); } catch(e) {}
    syncThemeIcons();
  }
});

function syncThemeIcons() {
  const isDark = document.documentElement.classList.contains('dark');
  document.querySelectorAll('.theme-icon-light').forEach(el => el.style.display = isDark ? 'none' : 'block');
  document.querySelectorAll('.theme-icon-dark').forEach(el => el.style.display = isDark ? 'block' : 'none');
}

/* ---------- Init ---------- */
document.addEventListener('DOMContentLoaded', () => {
  renderCart();
  renderProductGrids();
  setupPopup();
  setupMobileMenu();
  // give partials.js a beat to inject header before syncing icons
  setTimeout(syncThemeIcons, 50);
});
