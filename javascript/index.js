

// =========jenali TestimonialsSection js end===================
let currentIndex = 0;
let slidesToShow = 3;

function showSlides(index) {
    const slides = document.querySelectorAll(".case-study-slide");
    const wrapper = document.querySelector(".slider-wrapper");
    const totalSlides = slides.length;

    // Ensure index is within bounds
    if (index < 0) {
        currentIndex = 0;
    } else if (index > totalSlides - 1) {
        currentIndex = totalSlides - 1;
    } else {
        currentIndex = index;
    }

    // Move the slider wrapper to the current slide
    wrapper.style.transform = `translateX(-${currentIndex * 100}%)`;
    updatePagination();
}

function nextSlide() {
    const slides = document.querySelectorAll(".case-study-slide");
    if (currentIndex < slides.length - 1) {
        currentIndex++;
        showSlides(currentIndex);
    }
}

function prevSlide() {
    if (currentIndex > 0) {
        currentIndex--;
        showSlides(currentIndex);
    }
}

function goToSlide(index) {
    showSlides(index);
}

function updatePagination() {
    const dots = document.querySelectorAll(".dot");
    dots.forEach((dot, idx) => {
        const img = dot.querySelector('img');
        
        if (idx === currentIndex) {
            img.src = 'assets/Images/greenDot.png'; // Change image to active (primary)
        } else {
            img.src = 'assets/Images/whiteDot.png'; // Change image to inactive (white)
        }
    });
}

// Initialize the first slide
showSlides(currentIndex);
// Mobile View Adjustment - Adjust `slidesToShow` based on screen size
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