document.addEventListener('click', (e) => {
  if (e.target.matches('[data-toggle="collapse"]')) {
    const targetSelector = e.target.getAttribute('data-target');
    const collapseEl = document.querySelector(targetSelector);
    if (collapseEl) {
      collapseEl.classList.toggle('hidden');
    }
  }
});
