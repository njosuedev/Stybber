# Stybber CSS Framework

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)  
[![Version](https://img.shields.io/badge/version-1.0.0-blue)]()

**Stybber** is a sleek, lightweight, and highly customizable CSS framework crafted for developers and designers who want to build modern, accessible, and responsive web interfaces — quickly, efficiently, and without bloat.

---

## 🚀 Features

- **Clean, reusable Buttons** — primary and secondary styles designed for clarity and interaction  
- **Elegant Cards** — polished components with subtle hover animations for better UX  
- **Accessible & Animated Modals** — keyboard and screen reader friendly dialogs  
- **Expandable Accordions** — smooth toggling with full keyboard support  
- **Informative Alerts** — styled for info, success, warning, and danger states  
- **Versatile Badges** — highlight labels or statuses with distinct colors  
- **Styled Forms** — inputs, textareas, and selects with consistent and modern UI  
- **Responsive Tables** — adaptive layouts with hover highlights for better readability  
- **Loading Spinners** — simple, performant indicators for async actions  
- **Smooth Tooltips** — subtle fade effects providing contextual help  

---

## 🛠 Installation

Get started effortlessly by cloning or downloading the repo. Then, simply link the CSS and JavaScript files in your project:

```html
<link rel="stylesheet" href="css/main.css" />
<script src="js/main.js" type="module" defer></script>

<!-- Button -->

<button class="btn btn-primary">Primary Button</button>
<button class="btn btn-secondary">Secondary Button</button>

<!-- Card -->

<div class="card">
  <h2>Card Title</h2>
  <p>This is a card component, perfect for content blocks.</p>
</div>
<!-- Modal -->

<button id="openModalBtn" class="btn btn-primary">Open Modal</button>

<div id="myModal" class="modal" role="dialog" aria-modal="true" aria-hidden="true" tabindex="-1">
  <div class="modal-content">
    <button id="closeModalBtn" class="close-btn" aria-label="Close modal">&times;</button>
    <h2>Modal Title</h2>
    <p>Modal content goes here.</p>
  </div>
</div>

<!-- Accordion -->

 <div class="accordion" role="region">
  <div class="accordion-item">
    <div class="accordion-header" tabindex="0" aria-expanded="false">Section 1</div>
    <div class="accordion-content" hidden>
      <p>Content for section 1...</p>
    </div>
  </div>
  <div class="accordion-item">
    <div class="accordion-header" tabindex="0" aria-expanded="false">Section 2</div>
    <div class="accordion-content" hidden>
      <p>Content for section 2...</p>
    </div>
  </div>
</div>

<script>
    import { Modal } from './components/modal.js';
    import { Accordion } from './components/accordion.js';

    document.addEventListener('DOMContentLoaded', () => {
    new Modal('#myModal', '#openModalBtn', '#closeModalBtn');
    new Accordion('.accordion');
    });
</script>

<footer class="footer bg-primary text-white p-6 mt-12" style="text-align: center; font-size: 0.9rem;">
  <div class="container" style="max-width: 960px; margin: 0 auto; display: flex; flex-wrap: wrap; justify-content: space-between; align-items: center;">
    
    <div class="footer-info" style="flex: 1 1 300px; margin-bottom: 1rem;">
      <strong>Stybber CSS Framework</strong><br />
      Lightweight, responsive & accessible UI toolkit.<br />
      <a href="mailto:contact@njosuedev.com" style="color: #ffd700; text-decoration: underline;">contact@njosuedev.com</a>
    </div>
    
    <nav class="footer-links" style="flex: 1 1 200px; margin-bottom: 1rem;">
      <a href="#features" style="color: white; margin: 0 0.75rem;">Features</a>
      <a href="#installation" style="color: white; margin: 0 0.75rem;">Installation</a>
      <a href="#usage-examples" style="color: white; margin: 0 0.75rem;">Usage</a>
      <a href="https://github.com/njosuedev/stybber" target="_blank" style="color: white; margin: 0 0.75rem;">GitHub</a>
    </nav>

    <div class="footer-social" style="flex: 1 1 200px;">
      <!-- Replace # with your actual social links -->
      <a href="#" aria-label="Twitter" style="color: white; margin: 0 0.5rem; font-size: 1.2rem;">🐦</a>
      <a href="#" aria-label="GitHub" style="color: white; margin: 0 0.5rem; font-size: 1.2rem;">🐙</a>
      <a href="#" aria-label="LinkedIn" style="color: white; margin: 0 0.5rem; font-size: 1.2rem;">🔗</a>
    </div>
  </div>

  <div class="footer-copy" style="margin-top: 1rem; font-size: 0.8rem; color: #ddd;">
    &copy; 2025 N Josue Dev. All rights reserved.
  </div>
</footer>

