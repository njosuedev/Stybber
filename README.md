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

```

## 📫 Stay Connected

**Stybber CSS Framework** — A modern, lightweight, and responsive UI toolkit designed for simplicity, accessibility, and developer productivity.

Have questions, suggestions, or feedback? We’d love to hear from you.  
📬 Reach out: [contact@njosuedev.com](mailto:contact@njosuedev.com)

🔗 **Useful Links**  
- [🌐 Explore on GitHub »](https://github.com/njosuedev/stybber)  
- [🐞 Report an Issue »](https://github.com/njosuedev/stybber/issues)  
- [🤝 Contribute »](https://github.com/njosuedev/stybber/blob/main/CONTRIBUTING.md)

---

© 2025 **NIYOMWUNGERI Josue**. All rights reserved.  
Made with ❤️, curiosity, and a deep love for clean, maintainable code.










