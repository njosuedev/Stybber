export class Accordion {
  constructor(selector) {
    this.accordions = document.querySelectorAll(selector);
    if (this.accordions.length === 0) return;
    this.init();
  }

  init() {
    this.accordions.forEach(acc => {
      const headers = acc.querySelectorAll('.accordion-header');
      headers.forEach(header => {
        header.setAttribute('tabindex', '0');
        header.setAttribute('role', 'button');
        header.setAttribute('aria-expanded', 'false');

        header.addEventListener('click', () => this.toggleItem(header));
        header.addEventListener('keydown', e => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            this.toggleItem(header);
          }
        });
      });
    });
  }

  toggleItem(header) {
    const item = header.parentElement;
    const content = item.querySelector('.accordion-content');
    const isActive = item.classList.contains('active');

    if (isActive) {
      item.classList.remove('active');
      header.setAttribute('aria-expanded', 'false');
      if (content) content.hidden = true;
    } else {
      item.classList.add('active');
      header.setAttribute('aria-expanded', 'true');
      if (content) content.hidden = false;
    }
  }
}
