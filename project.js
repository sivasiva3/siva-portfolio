document.querySelectorAll(".image-slider").forEach((slider) => {
  const slides = slider.querySelectorAll(".slide.projectsample");
  const prevBtn = slider.querySelector(".prev");
  const nextBtn = slider.querySelector(".next");
  let currentIndex = 0;
  let autoSlide;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle("active", i === index);
    });
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
  }

  function startAutoSlide() {
    autoSlide = setInterval(nextSlide, 1500);
  }

  function stopAutoSlide() {
    clearInterval(autoSlide);
  }

  nextBtn.addEventListener("click", () => {
    stopAutoSlide();
    nextSlide();
    startAutoSlide();
  });

  prevBtn.addEventListener("click", () => {
    stopAutoSlide();
    prevSlide();
    startAutoSlide();
  });

  showSlide(currentIndex);
  startAutoSlide();
});
