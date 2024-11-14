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

window.addEventListener('load', () => {
    adjustSliderForMobile();  // Adjust based on screen size
    showSlides(currentIndex); // Initialize slider
});

// Initialize the slider
showSlides(currentIndex);
