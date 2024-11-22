const carousel = document.querySelector('.carousel-container');
const prevButton = document.querySelector('#prevBtn');
const nextButton = document.querySelector('#nextBtn');

// Get all carousel items
const items = Array.from(document.querySelectorAll('.carousel-item'));
const totalSlides = items.length;

// Clone first and last items for infinite scrolling
const firstClone = items[0].cloneNode(true);
const lastClone = items[totalSlides - 1].cloneNode(true);

// Append and prepend clones
carousel.appendChild(firstClone);
carousel.insertBefore(lastClone, items[0]);

// Initialize variables
let currentIndex = 1; // Start on the first real slide (after the clone)
const slideWidth = items[0].offsetWidth; // Get width of a single slide

// Position carousel to the first real slide
carousel.style.transform = `translateX(-${currentIndex * 100}%)`;

// Function to update carousel display
function updateCarousel() {
  carousel.style.transition = 'transform 0.5s ease-in-out';
  const offset = -currentIndex * 100; // Calculate the translate value
  carousel.style.transform = `translateX(${offset}%)`;

  // Handle infinite scroll loop after transition ends
  carousel.addEventListener('transitionend', () => {
    if (currentIndex === 0) {
      // Jump to the last real slide
      carousel.style.transition = 'none';
      currentIndex = totalSlides;
      carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
    } else if (currentIndex === totalSlides + 1) {
      // Jump to the first real slide
      carousel.style.transition = 'none';
      currentIndex = 1;
      carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
  }, { once: true });
}

// Event listener for "Next" button
nextButton.addEventListener('click', () => {
  currentIndex++;
  updateCarousel();
});

// Event listener for "Previous" button
prevButton.addEventListener('click', () => {
  currentIndex--;
  updateCarousel();
});