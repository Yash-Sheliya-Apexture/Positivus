// ===================Rudra js start==================

// JavaScript for toggling sidebar
const hamburger = document.getElementById("hamburger");
const sidebar = document.getElementById("sidebar");
const closeBtn = document.getElementById("closeBtn");
const overlay = document.getElementById("overlay");

// Function to open the sidebar
function openSidebar() {
  sidebar.style.transform = "translateX(0)";
  overlay.style.display = "block";
}

// Function to close the sidebar
function closeSidebar() {
  sidebar.style.transform = "translateX(100%)";
  overlay.style.display = "none";
}

// Event Listeners
hamburger.addEventListener("click", openSidebar);
closeBtn.addEventListener("click", closeSidebar);
// ===================Rudra  js end==================

// ===================jenali Cline-section js start==================
// const copy = document.querySelector(".logos-slide").cloneNode(true);
// document.querySelector(".logos").appendChild(copy);

// JavaScript to duplicate logos four times for extended scrolling
const logoContainer = document.getElementById("logoContainer");
const logos = logoContainer.innerHTML;

// Duplicate the logos content four times
for (let i = 0; i < 5; i++) {
  logoContainer.innerHTML += logos;
}
// ===================jenali Cline-section js end==================

// ===================Rudra Working-section js Start==================

function toggleAccordion(element) {
  const content = element.nextElementSibling;
  const isActive = element.classList.contains("active");

  // Close all other items
  document.querySelectorAll(".accordion-header").forEach((header) => {
    header.classList.remove("active");
    header.querySelector(".icon").textContent = "+";
    header.nextElementSibling.style.maxHeight = null;
    header.nextElementSibling.style.padding = "0 20px";
  });

  // Toggle current item
  if (!isActive) {
    element.classList.add("active");
    element.querySelector(".icon").textContent = "-";
    content.style.maxHeight = content.scrollHeight + "px";
    content.style.padding = "10px 20px";
  }
}

// Open the first section by default
document.addEventListener("DOMContentLoaded", () => {
  const firstHeader = document.querySelector(".accordion-header");
  const firstContent = firstHeader.nextElementSibling;

  // Make the first section active by default
  firstHeader.classList.add("active");
  firstHeader.querySelector(".icon").textContent = "-";
  firstContent.style.maxHeight = firstContent.scrollHeight + "px";
  firstContent.style.padding = "10px 20px";
});
// ===================Rudra Working-section js End==================


