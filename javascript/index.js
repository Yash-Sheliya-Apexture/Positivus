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

// ===================Rudra Contact-section js Start==================

// JavaScript to handle radio button change
const radioButtons = document.querySelectorAll('input[name="option"]');
const formFieldsContainer = document.getElementById("form-fields-container");

// Function to update the form fields
function updateFormFields(selectedOption) {
  if (selectedOption === "say-hi") {
    formFieldsContainer.innerHTML = `
        <label for="name">Name</label>
        <input type="text" id="name" name="name" placeholder="Name">

        <label for="email">Email*</label>
        <input type="email" id="email" name="email" placeholder="Email">

        <label for="message">Message*</label>
        <textarea id="message" name="message" placeholder="Message"></textarea>
      `;
  } else if (selectedOption === "get-quote") {
    formFieldsContainer.innerHTML = `
        <label for="name">UserName</label>
        <input type="text" id="UserName" name="UserName" placeholder="UserName">

        <label for="email">Password*</label>
        <input type="email" id="Password" name="Password" placeholder="Password">

        <label for="phone">Phone Number*</label>
        <input type="tel" id="phone" name="phone" placeholder="+91  ">

        <label for="quote-details">Quote Details*</label>
        <textarea id="quote-details" name="quote-details" placeholder="Describe your project..."></textarea>
      `;
  }
}

// Add event listener to radio buttons
radioButtons.forEach((radio) => {
  radio.addEventListener("change", (event) => {
    updateFormFields(event.target.value);
  });
});

/* Contact-Form Validation */
const form = document.getElementById("contactForm");

form.addEventListener("submit", function (event) {
  // Prevent form submission
  event.preventDefault();

  let isValid = true;

  // Validate Name
  const name = document.getElementById("name");
  const nameError = document.getElementById("nameError");
  if (name.value.trim() === "") {
    nameError.style.display = "block";
    isValid = false;
  } else {
    nameError.style.display = "none";
  }

  // Validate Email
  const email = document.getElementById("email");
  const emailError = document.getElementById("emailError");
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Simple email regex
  if (!emailRegex.test(email.value.trim())) {
    emailError.style.display = "block";
    isValid = false;
  } else {
    emailError.style.display = "none";
  }

  // Validate Message
  const message = document.getElementById("message");
  const messageError = document.getElementById("messageError");
  if (message.value.trim() === "") {
    messageError.style.display = "block";
    isValid = false;
  } else {
    messageError.style.display = "none";
  }

  // If the form is valid, submit it (placeholder functionality)
  if (isValid) {
    alert("Form submitted successfully!");
    form.reset();
  }
});

// ===================Rudra Contact-section js End==================
