document.addEventListener('click', (e) => {
  if (e.target.hasAttribute('data-toast-target')) {
    const toastSelector = e.target.getAttribute('data-toast-target');
    const toast = document.querySelector(toastSelector);
    if (toast) {
      toast.classList.remove('hidden');
      // Auto hide toast after 3 seconds
      setTimeout(() => {
        toast.classList.add('hidden');
      }, 3000);
    }
  }
});
