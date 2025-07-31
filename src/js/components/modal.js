document.addEventListener('click', (e) => {
  // Open modal
  if (e.target.matches('[data-toggle="modal"]')) {
    const targetSelector = e.target.getAttribute('data-target');
    const modal = document.querySelector(targetSelector);
    if (modal) {
      modal.classList.remove('hidden');
    }
  }

  // Close modal
  if (e.target.matches('[data-dismiss="modal"]')) {
    const modal = e.target.closest('.modal');
    if (modal) {
      modal.classList.add('hidden');
    }
  }
});
