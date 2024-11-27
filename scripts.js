
let slideIndex = 0;
    showSlides();

    function showSlides() {
        let slides = document.querySelectorAll(".slide");
        let dots = document.querySelectorAll(".dot");

        slides.forEach((slide, index) => {
            slide.style.display = "none";
        });

        slideIndex++;
        if (slideIndex > slides.length) slideIndex = 1;

        dots.forEach((dot) => dot.classList.remove("active"));
        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].classList.add("active");

        setTimeout(showSlides, 3000); // Change slide every 3 seconds
    }

    // Navigation Controls
    document.querySelector(".prev").addEventListener("click", () => changeSlide(-1));
    document.querySelector(".next").addEventListener("click", () => changeSlide(1));

    function changeSlide(n) {
        slideIndex += n;
        if (slideIndex > document.querySelectorAll(".slide").length) slideIndex = 1;
        if (slideIndex < 1) slideIndex = document.querySelectorAll(".slide").length;

        showSlides();
    }

    // Dot Indicators
    document.querySelectorAll(".dot").forEach((dot, index) => {
        dot.addEventListener("click", () => {
            slideIndex = index + 1;
            showSlides();
        });
    });