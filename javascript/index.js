// JavaScript to duplicate logos four times for extended scrolling
const logoContainer = document.getElementById("logoContainer");
const logos = logoContainer.innerHTML;

// Duplicate the logos content four times
for (let i = 0; i < 5; i++) {
logoContainer.innerHTML += logos;
}




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



