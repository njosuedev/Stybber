export class Modal {
  constructor(modalSelector, openBtnSelector, closeBtnSelector) {
    this.modal = document.querySelector(modalSelector);
    this.openBtn = document.querySelector(openBtnSelector);
    this.closeBtn = this.modal?.querySelector(closeBtnSelector);

    if (!this.modal || !this.openBtn || !this.closeBtn) return;

    this.init();
  }

  init() {
    this.openBtn.addEventListener('click', () => this.open());
    this.closeBtn.addEventListener('click', () => this.close());

    this.modal.addEventListener('click', e => {
      if (e.target === this.modal) this.close();
    });

    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && this.modal.classList.contains('active')) {
        this.close();
      }
    });
  }

  open() {
    this.modal.classList.add('active');
    this.modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    this.openBtn.setAttribute('aria-expanded', 'true');
    this.modal.querySelector('[tabindex]')?.focus();
  }

  close() {
    this.modal.classList.remove('active');
    this.modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    this.openBtn.setAttribute('aria-expanded', 'false');
    this.openBtn.focus();
  }
}
