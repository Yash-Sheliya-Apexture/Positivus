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
    const slideWidth = isMobile ? 100 : (100 / slidesToShow);  // Full width on mobile

    // Move wrapper to show the current slide, considering the gap
    const translateX = currentIndex * (slideWidth + (gap / 100) * slideWidth);
    wrapper.style.transform = `translateX(-${translateX}%)`;

    // Update pagination
    updatePagination();

    // Update navigation arrows (change image for left and right arrows)
    updateNavigationButtons(totalSlides);
}

function nextSlide() {
    showSlides(currentIndex + 1);  // Move to next slide
}

function prevSlide() {
    showSlides(currentIndex - 1);  // Move to previous slide
}

function updatePagination() {
    const dots = document.querySelectorAll(".dot");
    dots.forEach((dot, idx) => {
        const img = dot.querySelector('img');
        img.src = idx === currentIndex ? 'assets/Images/greenDot.png' : 'assets/Images/whiteDot.png';
    });
}

// This function is called when a dot is clicked
function goToSlide(index) {
    showSlides(index);
}

// Adjust the number of slides to show based on screen size
function adjustSliderForMobile() {
    slidesToShow = window.innerWidth <= 768 ? 1 : 3;  // Show 1 slide on mobile, 3 on desktop
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
        prevArrowImage.src = "assets/Images/Arrow left.png";  // Disabled gray left arrow image
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
        nextArrowImage.src = "assets/Images/Arrow right.png";  // White right arrow image
        nextButton.style.pointerEvents = "auto";  // Enable click event
    }
}

window.addEventListener('load', () => {
    adjustSliderForMobile();  // Adjust based on screen size
    showSlides(currentIndex); // Initialize slider
});

// Initialize the slider
showSlides(currentIndex);
