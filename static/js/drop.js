document.addEventListener("DOMContentLoaded", function(){
  // Handle submenu toggle
  document.querySelectorAll('.dropdown-submenu .dropdown-toggle').forEach(function(el){
    el.addEventListener('click', function(e){
      e.preventDefault();
      e.stopPropagation();
      const nextEl = this.nextElementSibling;
      if(nextEl && nextEl.classList.contains('dropdown-menu')){
        nextEl.classList.toggle('show');
      }
    });
  });

  // Close all submenus when parent dropdown closes
  document.querySelectorAll('.dropdown').forEach(function(dropdown){
    dropdown.addEventListener('hidden.bs.dropdown', function () {
      this.querySelectorAll('.dropdown-menu.show').forEach(function(submenu){
        submenu.classList.remove('show');
      });
    });
  });
});
