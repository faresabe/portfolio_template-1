function toggleDropdown(id) {
    const dropdown = document.getElementById(id);
    const arrow = dropdown.previousElementSibling.querySelector('.arrow');
    
    dropdown.classList.toggle('show');
    arrow.textContent = dropdown.classList.contains('show') ? '▲' : '▼';
  }
  
  // Close dropdowns when clicking outside
  window.onclick = function(event) {
    if (!event.target.matches('.dropdown-header')) {
      const dropdowns = document.querySelectorAll('.dropdown-content');
      dropdowns.forEach(dropdown => {
        if (dropdown.classList.contains('show')) {
          dropdown.classList.remove('show');
          dropdown.previousElementSibling.querySelector('.arrow').textContent = '▼';
        }
      });
    }
  }