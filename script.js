let currentIndex = 0;

function changeSlide(direction) {
  const slider = document.querySelector('.slider');
  const slides = document.querySelectorAll('.slider img');
  const totalSlides = slides.length;

  currentIndex = (currentIndex + direction + totalSlides) % totalSlides;

  const translateValue = -currentIndex * 100 + '%';
  slider.style.transform = 'translateX(' + translateValue + ')';
}