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
      <!-- Shop Pay sign-in button (loads via Shopify CDN) -->
      <shop-login-button client-id="" version="1" features="follow,sign-up" class="shop-login-button-header"></shop-login-button>
      <a href="https://acrclothing-2.myshopify.com/account" class="icon-btn account-link" aria-label="Sign in" target="_blank" rel="noopener" title="Sign in to your account">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6">
          <circle cx="12" cy="8" r="4"/>
          <path d="M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8"/>
        </svg>
      </a>
      <button class="icon-btn theme-toggle" aria-label="Toggle dark mode" data-theme-toggle>
        <svg class="theme-icon-light" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6">
          <circle cx="12" cy="12" r="4"/>
          <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/>
        </svg>
        <svg class="theme-icon-dark" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" style="display:none;">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
        </svg>
      </button>
      <a href="product.html" class="icon-btn cart-trigger" aria-label="Cart">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4zM3 6h18M16 10a4 4 0 0 1-8 0"/>
        </svg>
        <span class="badge" data-cart-count style="display:none;">0</span>
      </a>
    </div>
  </div>

  <nav class="primary-nav">
    <div class="container primary-nav-inner">
      <a href="shop.html" class="nav-item" data-nav="tees">Shop</a>
      <a href="product.html" class="nav-item" data-nav="product">The Tee</a>
      <a href="about.html" class="nav-item" data-nav="about">About</a>
      <a href="faq.html" class="nav-item" data-nav="faq">FAQ</a>
      <a href="mailto:hello@acrclothing.shop" class="nav-item" data-nav="contact">Contact</a>
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
          <a href="https://www.tiktok.com/@acrclothing" target="_blank" rel="noopener" aria-label="TikTok"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5.8 20.1a6.34 6.34 0 0 0 10.86-4.43V8.85a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.28Z"/></svg></a>
          <a href="#" aria-label="Instagram"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/></svg></a>
          <a href="mailto:hello@acrclothing.shop" aria-label="Email"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg></a>
        </div>
      </div>
      <div class="footer-col">
        <h4>Shop</h4>
        <ul>
          <li><a href="shop.html">All Tees</a></li>
          <li><a href="product.html">ACR Classic Tee</a></li>
          <li><a href="faq.html#size-guide">Size Guide</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Help</h4>
        <ul>
          <li><a href="faq.html">FAQ</a></li>
          <li><a href="shipping.html">Shipping</a></li>
          <li><a href="refund.html">Returns &amp; Refunds</a></li>
          <li><a href="mailto:hello@acrclothing.shop">Contact Us</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Brand</h4>
        <ul>
          <li><a href="about.html">Our Story</a></li>
          <li><a href="https://www.tiktok.com/@acrclothing" target="_blank" rel="noopener">TikTok</a></li>
          <li><a href="mailto:hello@acrclothing.shop">hello@acrclothing.shop</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <span>© 2026 ACR Clothing. All rights reserved.</span>
      <div class="footer-legal">
        <a href="privacy.html">Privacy Policy</a>
        <a href="terms.html">Terms of Service</a>
        <a href="refund.html">Refunds</a>
        <a href="shipping.html">Shipping</a>
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
    <a href="product.html" class="btn btn-primary btn-block">Checkout</a>
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

  // ---- Klaviyo (popup signup + tracking) ----
  (function() {
    var s = document.createElement('script');
    s.src = 'https://static.klaviyo.com/onsite/js/X9z4X5/klaviyo.js';
    s.async = true;
    s.type = 'application/javascript';
    document.head.appendChild(s);
  })();

  // ---- Shop Pay (sign in with Shop button) ----
  (function() {
    var s = document.createElement('script');
    s.src = 'https://shop.app/checkout-link/web-components.js';
    s.async = true;
    s.type = 'module';
    document.head.appendChild(s);
  })();

  // ---- Chatbase AI chat widget ----
  (function(){
    if(!window.chatbase||window.chatbase("getState")!=="initialized"){
      window.chatbase=(...arguments)=>{
        if(!window.chatbase.q){window.chatbase.q=[]}
        window.chatbase.q.push(arguments)
      };
      window.chatbase=new Proxy(window.chatbase,{
        get(target,prop){
          if(prop==="q"){return target.q}
          return(...args)=>target(prop,...args)
        }
      })
    }
    const onLoad=function(){
      const script=document.createElement("script");
      script.src="https://www.chatbase.co/embed.min.js";
      script.id="3ekVxGBHh5OY7YqXXmra0";
      script.domain="www.chatbase.co";
      document.body.appendChild(script)
    };
    if(document.readyState==="complete"){onLoad()}
    else{window.addEventListener("load",onLoad)}
  })();

  // ---- Dark mode init from localStorage ----
  try {
    const saved = localStorage.getItem('acr-theme');
    if (saved === 'dark') document.documentElement.classList.add('dark');
  } catch(e) {}
});
