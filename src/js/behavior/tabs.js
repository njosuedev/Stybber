document.addEventListener('click', (e) => {
  if (e.target.matches('[data-toggle="tab"]')) {
    const group = e.target.getAttribute('data-group');
    const targetSelector = e.target.getAttribute('data-target');

    // Deactivate all tabs & hide their content
    document.querySelectorAll(`[data-toggle="tab"][data-group="${group}"]`).forEach(tab => {
      tab.classList.remove('active');
    });
    document.querySelectorAll(`[data-tab-content="${group}"]`).forEach(content => {
      content.classList.add('hidden');
    });

    // Activate clicked tab & show content
    e.target.classList.add('active');
    const activeContent = document.querySelector(targetSelector);
    if (activeContent) {
      activeContent.classList.remove('hidden');
    }
  }
});
