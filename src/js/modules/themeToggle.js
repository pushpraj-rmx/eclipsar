// themeToggle.js
export function themeToggle() {
  document.addEventListener("DOMContentLoaded", function () {
    const themeToggleBtn = document.getElementById("themeToggleBtn");
    const themeIcon = document.getElementById("themeIcon");

    themeToggleBtn.addEventListener("click", function () {
      // Toggle the 'dark-theme' class on the body
      document.body.classList.toggle("dark-theme");
      document.body.classList.toggle("light-theme");

      // Toggle the icon between 'fa-sun' and 'fa-moon'
      if (themeIcon.classList.contains("fa-sun")) {
        themeIcon.classList.remove("fa-sun");
        themeIcon.classList.add("fa-moon");
      } else {
        themeIcon.classList.remove("fa-moon");
        themeIcon.classList.add("fa-sun");
      }
    });
  });
}
