export function dropdown() {
  document.addEventListener("DOMContentLoaded", function () {
    const dropdownBtn = document.querySelector(".dropbtn");
    const dropdownContent = document.querySelector(".dropdown-content");

    // Function to show the dropdown content
    function showDropdown() {
      dropdownContent.classList.add("show");
    }

    // Function to hide the dropdown content
    function hideDropdown() {
      dropdownContent.classList.remove("show");
    }

    // Event listeners for hover events
    dropdownBtn.addEventListener("mouseover", showDropdown);
    dropdownBtn.addEventListener("mouseout", hideDropdown);
    dropdownContent.addEventListener("mouseout", hideDropdown);
  });
}
