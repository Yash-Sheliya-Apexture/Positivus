let currentIndex = 0;
let slidesToShow = 3; // Default to 3 slides for desktop

function showSlides(index) {
  const slides = document.querySelectorAll(".case-study-slide");
  const wrapper = document.querySelector(".slider-wrapper");
  const totalSlides = slides.length;

  // Infinite loop logic
  currentIndex = (index + totalSlides) % totalSlides;

  // Determine slide width based on screen size
  const isMobile = window.innerWidth <= 768;
  const gap = isMobile ? 19 : 50;
  const slideWidth = isMobile ? 100 : 100 / slidesToShow; // Full width on mobile

  // Move wrapper to show the current slide, considering the gap
  const translateX = currentIndex * (slideWidth + (gap / 100) * slideWidth);
  wrapper.style.transform = `translateX(-${translateX}%)`;

  // Update pagination
  updatePagination();

  // Update navigation arrows (change image for left and right arrows)
  updateNavigationButtons(totalSlides);
}

function nextSlide() {
  showSlides(currentIndex + 1); // Move to next slide
}

function prevSlide() {
  showSlides(currentIndex - 1); // Move to previous slide
}

function updatePagination() {
  const dots = document.querySelectorAll(".dot");
  dots.forEach((dot, idx) => {
    const img = dot.querySelector("img");
    img.src =
      idx === currentIndex
        ? "assets/Images/greenDot.png"
        : "assets/Images/whiteDot.png";
  });
}

// This function is called when a dot is clicked
function goToSlide(index) {
  showSlides(index);
}

// Adjust the number of slides to show based on screen size
function adjustSliderForMobile() {
  slidesToShow = window.innerWidth <= 768 ? 1 : 3; // Show 1 slide on mobile, 3 on desktop
  showSlides(currentIndex); // Re-adjust display
}

// Update the navigation buttons (arrows)
function updateNavigationButtons(totalSlides) {
  const prevButton = document.getElementById("prev");
  const nextButton = document.getElementById("next");

  const prevArrowImage = prevButton.querySelector("img");
  const nextArrowImage = nextButton.querySelector("img");

    // Handle the left arrow (previous button)
    if (currentIndex === 0) {
        // Disable left arrow and change to gray
        prevButton.classList.add("disabled");
        prevArrowImage.src = "assets/Images/Arrow-left.png";  // Disabled gray left arrow image
        prevButton.style.pointerEvents = "none";  // Disable click event
    } else {
        // Active left arrow: white arrow
        prevButton.classList.remove("disabled");
        prevArrowImage.src = "assets/Images/arrow-icon-direction-icon-left.png";  // White left arrow image
        prevButton.style.pointerEvents = "auto";  // Enable click event
    }

    // Handle the right arrow (next button)
    if (currentIndex === totalSlides - 1) {
        // Disable right arrow and change to gray
        nextButton.classList.add("disabled");
        nextArrowImage.src = "assets/Images/arrow-thin-right-icon.png";  // Disabled gray right arrow image
        nextButton.style.pointerEvents = "none";  // Disable click event
    } else {
        // Active right arrow: white arrow
        nextButton.classList.remove("disabled");    
        nextArrowImage.src = "assets/Images/Arrow-right.png";  // White right arrow image
        nextButton.style.pointerEvents = "auto";  // Enable click event
    }
}

window.addEventListener("load", () => {
  adjustSliderForMobile(); // Adjust based on screen size
  showSlides(currentIndex); // Initialize slider
});

// Initialize the slider
showSlides(currentIndex);
// ===================Rudra Menubar js start==================

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
// ===================Rudra Menubar js end==================

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
        
        <label for="phone">Phone Number*</label>
        <input type="tel" id="phone" name="phone" placeholder="+91  ">

        <label for="quote-details">Quote Details*</label>
        <textarea id="quote-details" name="quote-details" placeholder="Describe your project..."></textarea>

        <label for="file-upload">Upload File</label>
        <input type="file" id="file-upload" name="file-upload" accept=".pdf, .docx, .jpg, .png">

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
