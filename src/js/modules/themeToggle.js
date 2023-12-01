// themeToggle.js
export function initializeThemeToggle() {
    document.addEventListener("DOMContentLoaded", function () {
      const themeToggleBtn = document.getElementById("themeToggleBtn");
  
      themeToggleBtn.addEventListener("click", function () {
        document.body.classList.toggle("dark-theme");
        document.body.classList.toggle("light-theme");
      });
    });
  }
  