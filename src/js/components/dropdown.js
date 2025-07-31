// Dropdown component: toggles dropdown menu visibility on button click
document.querySelectorAll("[data-toggle='dropdown']").forEach(btn => {
  btn.addEventListener("click", () => {
    const dropdown = btn.nextElementSibling;
    if (dropdown) dropdown.classList.toggle("hidden");
  });
});

// Optional: Close dropdown when clicking outside
document.addEventListener("click", e => {
  if (!e.target.matches("[data-toggle='dropdown']")) {
    document.querySelectorAll("[data-toggle='dropdown']").forEach(btn => {
      const dropdown = btn.nextElementSibling;
      if (dropdown && !dropdown.classList.contains("hidden")) {
        dropdown.classList.add("hidden");
      }
    });
  }
});
