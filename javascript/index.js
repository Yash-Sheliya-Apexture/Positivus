

// =========jenali TestimonialsSection js end===================
let currentIndex = 0;
let slidesToShow = 3;

function showSlides(index) {
    const slides = document.querySelectorAll(".case-study-slide");
    const wrapper = document.querySelector(".slider-wrapper");
    const totalSlides = slides.length;

    // Ensure index is within bounds and loops infinitely
    if (index < 0) {
        currentIndex = totalSlides - 1;  // Loop to the last slide when going backward
    } else if (index >= totalSlides) {
        currentIndex = 0;  // Loop to the first slide when going forward
    } else {
        currentIndex = index;
    }

    // For mobile, slide should take up 100% width
    const slideWidth = (window.innerWidth <= 768) ? 100 : (100 / slidesToShow);  // 100% for mobile, otherwise divide by slidesToShow for larger screens

    // Move the slider wrapper to the current slide based on calculated width
    wrapper.style.transform = `translateX(-${(currentIndex * slideWidth)}%)`;
    updatePagination();
}

function nextSlide() {
    const slides = document.querySelectorAll(".case-study-slide");
    if (currentIndex < slides.length - 1) {
        currentIndex++;
    } else {
        currentIndex = 0; // Loop to the first slide when at the last one
    }
    showSlides(currentIndex);
}

function prevSlide() {
    const slides = document.querySelectorAll(".case-study-slide");
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = slides.length - 1; // Loop to the last slide when at the first one
    }
    showSlides(currentIndex);
}

function goToSlide(index) {
    showSlides(index);
}

function updatePagination() {
    const dots = document.querySelectorAll(".dot");
    dots.forEach((dot, idx) => {
        const img = dot.querySelector('img');
        
        if (idx === currentIndex) {
            img.src = 'assets/Images/greenDot.png'; // Active dot
        } else {
            img.src = 'assets/Images/whiteDot.png'; // Inactive dot
        }
    });
}

// Initialize the first slide
showSlides(currentIndex);

// Mobile View Adjustment
function adjustSliderForMobile() {
    if (window.innerWidth <= 768) {
        slidesToShow = 1;  // Show 1 slide on mobile
    } else {
        slidesToShow = 3;  // Default to 3 slides for larger screens
    }
    showSlides(currentIndex);  // Re-adjust slide display based on screen size
}

// Adjust slider on initial load and on window resize
window.addEventListener('load', adjustSliderForMobile);
window.addEventListener('resize', adjustSliderForMobile);


// =========jenali TestimonialsSection js end===================