/* Shared layout partials - injected into each page */

const HEADER_HTML = `
<div class="announcement">
  <div class="announcement-track">
    <span class="announcement-item">Free shipping on orders over $75</span>
    <span class="announcement-item">New cotton tees dropping soon</span>
    <span class="announcement-item">Easy 30-day returns</span>
    <span class="announcement-item">Free shipping on orders over $75</span>
    <span class="announcement-item">New cotton tees dropping soon</span>
    <span class="announcement-item">Easy 30-day returns</span>
  </div>
</div>
<header class="site-header">
  <div class="container header-inner">
    <button class="menu-toggle icon-btn" aria-label="Menu">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
        <path d="M3 6h18M3 12h18M3 18h18"/>
      </svg>
    </button>

    <a href="index.html" class="logo">
      ACR<span class="logo-mark"></span>
    </a>

    <form class="search" role="search" onsubmit="event.preventDefault(); toast('Searching…');">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
        <circle cx="11" cy="11" r="7"/>
        <path d="m20 20-3.5-3.5"/>
      </svg>
      <input type="search" placeholder="Search for tees, colors, fits…" />
      <kbd style="font-family: var(--font-mono); font-size: 10px; color: var(--ink-40); border: 1px solid var(--ink-10); border-radius: 4px; padding: 2px 6px;">⌘K</kbd>
    </form>

    <div class="header-actions">
      <a href="#" class="icon-btn" aria-label="Account">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <circle cx="12" cy="8" r="4"/>
          <path d="M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8"/>
        </svg>
      </a>
      <a href="#" class="icon-btn" aria-label="Wishlist">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
        </svg>
        <span class="badge" data-wishlist-count style="display:none;">0</span>
      </a>
      <a href="cart.html" class="icon-btn cart-trigger" aria-label="Cart">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4zM3 6h18M16 10a4 4 0 0 1-8 0"/>
        </svg>
        <span class="badge" data-cart-count style="display:none;">0</span>
      </a>
    </div>
  </div>

  <nav class="primary-nav">
    <div class="container primary-nav-inner">
      <a href="shop.html" class="nav-item" data-nav="new">New Arrivals</a>
      <div class="has-mega" style="position: relative;">
        <a href="shop.html" class="nav-item" data-nav="tees">T-Shirts</a>
        <div class="mega-menu">
          <div class="container mega-grid">
            <div class="mega-col">
              <h4>Shop by Product</h4>
              <ul>
                <li><a href="shop.html">Cotton Tees</a></li>
                <li><a href="shop.html">Oversized Tees</a></li>
                <li><a href="shop.html">Graphic Tees</a></li>
                <li><a href="shop.html">Plain Tees</a></li>
              </ul>
            </div>
            <div class="mega-col">
              <h4>Shop by Color</h4>
              <ul>
                <li><a href="shop.html">Black</a></li>
                <li><a href="shop.html">White</a></li>
                <li><a href="shop.html">Gray</a></li>
                <li><a href="shop.html">Cream</a></li>
              </ul>
            </div>
            <div class="mega-col">
              <h4>Shop by Fit</h4>
              <ul>
                <li><a href="shop.html">Regular Fit</a></li>
                <li><a href="shop.html">Oversized Fit</a></li>
                <li><a href="shop.html">Relaxed Fit</a></li>
              </ul>
            </div>
            <div class="mega-col">
              <a href="shop.html" class="mega-tile" style="background: linear-gradient(135deg,#1a1a1a,#0a0a0a) center/cover; background-image: url('assets/mega-tile.svg');">
                <span>The New Drop →</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <a href="shop.html" class="nav-item" data-nav="best">Best Sellers</a>
      <a href="shop.html" class="nav-item" data-nav="collections">Collections</a>
      <a href="about.html" class="nav-item" data-nav="about">About ACR</a>
      <a href="#" class="nav-item" data-nav="contact">Contact</a>
    </div>
  </nav>
</header>
`;

const FOOTER_HTML = `
<section class="value-strip">
  <div class="value-row">
    <span>100% Cotton</span>
    <span>Free Shipping Over $75</span>
    <span>30-Day Returns</span>
    <span>Made to Last</span>
    <span>100% Cotton</span>
    <span>Free Shipping Over $75</span>
    <span>30-Day Returns</span>
    <span>Made to Last</span>
  </div>
</section>

<footer class="site-footer">
  <div class="container">
    <div class="footer-grid">
      <div class="footer-brand">
        <a href="index.html" class="logo">ACR<span class="logo-mark"></span></a>
        <p>Clean, comfortable cotton clothing built for everyday wear. Designed for style, comfort, and quality without overcomplicating the fit.</p>
        <div class="social">
          <a href="#" aria-label="Instagram"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/></svg></a>
          <a href="#" aria-label="TikTok"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/></svg></a>
          <a href="#" aria-label="X"><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg></a>
          <a href="#" aria-label="Pinterest"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="12" cy="12" r="10"/><path d="M9 20l3-12M11 16l1-5"/></svg></a>
        </div>
      </div>
      <div class="footer-col">
        <h4>Shop</h4>
        <ul>
          <li><a href="shop.html">New Arrivals</a></li>
          <li><a href="shop.html">Cotton Tees</a></li>
          <li><a href="shop.html">Oversized</a></li>
          <li><a href="shop.html">Graphic</a></li>
          <li><a href="shop.html">Best Sellers</a></li>
          <li><a href="shop.html">Sale</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Customer Care</h4>
        <ul>
          <li><a href="#">Help Center</a></li>
          <li><a href="#">Order Status</a></li>
          <li><a href="#">Shipping</a></li>
          <li><a href="#">Returns</a></li>
          <li><a href="#">Size Guide</a></li>
          <li><a href="#">Contact Us</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>About</h4>
        <ul>
          <li><a href="about.html">Our Story</a></li>
          <li><a href="#">Sustainability</a></li>
          <li><a href="#">Materials</a></li>
          <li><a href="#">Press</a></li>
          <li><a href="#">Careers</a></li>
          <li><a href="#">hello@acr.shop</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <span>© 2026 ACR. All rights reserved.</span>
      <div class="footer-legal">
        <a href="#">Privacy Policy</a>
        <a href="#">Terms of Service</a>
        <a href="#">Returns &amp; Shipping</a>
        <a href="#">Accessibility</a>
      </div>
    </div>
  </div>
</footer>
`;

const DRAWER_HTML = `
<div class="drawer-overlay" data-drawer-close></div>
<aside class="drawer" aria-label="Cart">
  <div class="drawer-head">
    <h3>Your Cart</h3>
    <button class="icon-btn" data-drawer-close aria-label="Close">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6">
        <path d="M6 6l12 12M18 6L6 18"/>
      </svg>
    </button>
  </div>
  <div class="drawer-body" data-cart-body></div>
  <div class="drawer-foot">
    <div class="cart-summary">
      <div class="cart-row"><span>Subtotal</span><span data-cart-subtotal>$0.00</span></div>
      <div class="cart-row" style="font-family: var(--font-mono); font-size: 11px; letter-spacing: 0.1em; text-transform: uppercase; color: var(--ink-60);">
        <span>Shipping</span><span>Calculated at checkout</span>
      </div>
    </div>
    <a href="cart.html" class="btn btn-primary btn-block">Checkout</a>
  </div>
</aside>
`;

const POPUP_HTML = `
<div class="popup-overlay">
  <div class="popup">
    <button class="popup-close" data-popup-close aria-label="Close">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
        <path d="M6 6l12 12M18 6L6 18"/>
      </svg>
    </button>
    <div class="popup-image"></div>
    <div class="popup-body">
      <div class="popup-eyebrow">— Welcome to ACR</div>
      <h3>Take 10% off your <em style="font-style: italic; font-family: var(--font-display); color: var(--accent);">first order</em>.</h3>
      <p>Sign up for early access to drops, restocks, and our occasional thoughts on cotton.</p>
      <form class="popup-form">
        <input type="email" placeholder="your@email.com" required />
        <button type="submit" class="btn btn-primary">Get my code</button>
      </form>
      <p style="margin-top: 16px; font-family: var(--font-mono); font-size: 10px; letter-spacing: 0.12em; text-transform: uppercase; color: var(--ink-40);">No spam. Unsubscribe anytime.</p>
    </div>
  </div>
</div>
`;

// Inject on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  const headerSlot = document.querySelector('[data-include="header"]');
  const footerSlot = document.querySelector('[data-include="footer"]');
  const drawerSlot = document.querySelector('[data-include="drawer"]');
  const popupSlot = document.querySelector('[data-include="popup"]');

  if (headerSlot) headerSlot.innerHTML = HEADER_HTML;
  if (footerSlot) footerSlot.innerHTML = FOOTER_HTML;
  if (drawerSlot) drawerSlot.innerHTML = DRAWER_HTML;
  if (popupSlot) popupSlot.innerHTML = POPUP_HTML;

  // Mark active nav
  const page = document.body.dataset.page;
  if (page) {
    document.querySelectorAll(`.nav-item[data-nav="${page}"]`).forEach(el => el.classList.add('active'));
  }
});
