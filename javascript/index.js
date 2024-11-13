// ===================jenali Testimonials Section js start==================
let currentIndex = 0;

function showSlides(index) {
    const slides = document.querySelectorAll(".testimonial-slide");
    const wrapper = document.querySelector(".testimonial-wrapper");
    const totalSlides = slides.length;

    // Ensure index is within bounds
    if (index < 0) {
        currentIndex = 0;
    } else if (index > totalSlides - 3) { // Only show 3 slides at a time
        currentIndex = totalSlides - 3;
    } else {
        currentIndex = index;
    }

    // Calculate transform amount
    wrapper.style.transform = `translateX(-${currentIndex * (100 / 3)}%)`;
    updatePagination();
}

function nextSlide() {
    const slides = document.querySelectorAll(".testimonial-slide");
    if (currentIndex < slides.length - 3) {
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
        dot.classList.toggle("active", idx === currentIndex);
    });
}

// Initialize and show first set of slides
showSlides(currentIndex);


// ===================jenali Testimonials Section js end==================
