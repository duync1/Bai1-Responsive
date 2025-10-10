// Hamburger Menu Toggle
document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".hamburger-menu");
  const linksList = document.querySelector(".links-list");

  hamburger.addEventListener("click", function () {
    hamburger.classList.toggle("active");
    linksList.classList.toggle("active");
  });

  // Mobile dropdown handling
  const menuItemsWithDropdown = document.querySelectorAll(
    ".links-list > li:has(ul)"
  );

  menuItemsWithDropdown.forEach((item) => {
    item.addEventListener("click", function (e) {
      e.stopPropagation(); // Prevent menu from closing

      // Hide all other dropdowns first
      menuItemsWithDropdown.forEach((otherItem) => {
        if (otherItem !== item) {
          otherItem.classList.remove("active-dropdown");
        }
      });

      // Toggle current dropdown
      item.classList.toggle("active-dropdown");
    });
  });

  // Close menu when clicking on a regular menu item (without dropdown)
  const regularMenuItems = document.querySelectorAll(
    ".links-list > li:not(:has(ul))"
  );
  regularMenuItems.forEach((item) => {
    item.addEventListener("click", function () {
      hamburger.classList.remove("active");
      linksList.classList.remove("active");
    });
  });

  // Close dropdown when clicking outside
  document.addEventListener("click", function () {
    menuItemsWithDropdown.forEach((item) => {
      item.classList.remove("active-dropdown");
    });
  });
});
