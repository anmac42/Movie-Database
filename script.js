//const genre = document.getElementsByClassName("genre");

const drama = document.getElementById("drama");
const action = document.getElementById("action");
const comedy = document.getElementById("comedy");
const thriller = document.getElementById("thriller");
const horror = document.getElementById("horror");
const fantasy = document.getElementById("fantasy");
const dystopian = document.getElementById("dystopian");
const romance = document.getElementById("romance");
const documentary = document.getElementById("documentary");
const adventure = document.getElementById("adventure");
const allGenres = document.getElementById("all");

const movies = document.getElementsByClassName('movie');


// Genre buttons
drama.addEventListener("click", function() {
  for (let i = 0; i < movies.length; i++) {
    if(movies[i].dataset.genre == "drama") {
      movies[i].style.display = '';
    }
    else {
      movies[i].style.display = 'none';
    }
  }
});
action.addEventListener("click", function() {
  for (let i = 0; i < movies.length; i++) {
    if(movies[i].dataset.genre == "action") {
      movies[i].style.display = '';
    }
    else {
      movies[i].style.display = 'none';
    }
  }
});
comedy.addEventListener("click", function() {
  for (let i = 0; i < movies.length; i++) {
    if(movies[i].dataset.genre == "comedy") {
      movies[i].style.display = '';
    }
    else {
      movies[i].style.display = 'none';
    }
  }
});
thriller.addEventListener("click", function() {
  for (let i = 0; i < movies.length; i++) {
    if(movies[i].dataset.genre == "thriller") {
      movies[i].style.display = '';
    }
    else {
      movies[i].style.display = 'none';
    }
  }
});
horror.addEventListener("click", function() {
  for (let i = 0; i < movies.length; i++) {
    if(movies[i].dataset.genre == "horror") {
      movies[i].style.display = '';
    }
    else {
      movies[i].style.display = 'none';
    }
  }
});
fantasy.addEventListener("click", function() {
  for (let i = 0; i < movies.length; i++) {
    if(movies[i].dataset.genre == "drama") {
      movies[i].style.display = '';
    }
    else {
      movies[i].style.display = 'none';
    }
  }
});
dystopian.addEventListener("click", function() {
  for (let i = 0; i < movies.length; i++) {
    if(movies[i].dataset.genre == "dystopian") {
      movies[i].style.display = '';
    }
    else {
      movies[i].style.display = 'none';
    }
  }
});
romance.addEventListener("click", function() {
  for (let i = 0; i < movies.length; i++) {
    if(movies[i].dataset.genre == "romance") {
      movies[i].style.display = '';
    }
    else {
      movies[i].style.display = 'none';
    }
  }
});
documentary.addEventListener("click", function() {
  for (let i = 0; i < movies.length; i++) {
    if(movies[i].dataset.genre == "documentary") {
      movies[i].style.display = '';
    }
    else {
      movies[i].style.display = 'none';
    }
  }
});
adventure.addEventListener("click", function() {
  for (let i = 0; i < movies.length; i++) {
    if(movies[i].dataset.genre == "adventure") {
      movies[i].style.display = '';
    }
    else {
      movies[i].style.display = 'none';
    }
  }
});

allGenres.addEventListener("click", function() {
  for (let i = 0; i < movies.length; i++) {
    movies[i].style.display = '';
  }
});

const search = document.getElementById("mname");
const searchButton = document.getElementById("searchButton");
// Search bar
searchButton.addEventListener('click', function() {
  const lowercaseSearch = search.value.toLowerCase();
  for(let i = 0; i<movies.length; i++) {
    if(movies[i].dataset.title.includes(lowercaseSearch)) {
      movies[i].style.display = ''
    }
    else {
      movies[i].style.display = 'none'
    }
  }
})

const movie1 = document.getElementById("1");
const movie2 = document.getElementById("2");
const movie3 = document.getElementById("3");
const movie4 = document.getElementById("4");
const movie5 = document.getElementById("5");
const movie6 = document.getElementById("6");
const movie7 = document.getElementById("7");
const movie8 = document.getElementById("8");
const movie9 = document.getElementById("9");
const movie10 = document.getElementById("10");

movie1.addEventListener('click', function() {
  localStorage.setItem("movieID", 1);
  window.location.href = "movie.html";
})
movie2.addEventListener('click', function() {
  localStorage.setItem("movieID", 2);
  window.location.href = "movie.html";
})
movie3.addEventListener('click', function() {
  localStorage.setItem("movieID", 3);
  window.location.href = "movie.html";
})
movie4.addEventListener('click', function() {
  localStorage.setItem("movieID", 4);
  window.location.href = "movie.html";
})
movie5.addEventListener('click', function() {
  localStorage.setItem("movieID", 5);
  window.location.href = "movie.html";
})
movie6.addEventListener('click', function() {
  localStorage.setItem("movieID", 6);
  window.location.href = "movie.html";
})
movie7.addEventListener('click', function() {
  localStorage.setItem("movieID", 7);
  window.location.href = "movie.html";
})
movie8.addEventListener('click', function() {
  localStorage.setItem("movieID", 8);
  window.location.href = "movie.html";
})
movie9.addEventListener('click', function() {
  localStorage.setItem("movieID", 9);
  window.location.href = "movie.html";
})
movie10.addEventListener('click', function() {
  localStorage.setItem("movieID", 10);
  window.location.href = "movie.html";
})











// const carousel = document.querySelector('.carousel-container');
// const prevButton = document.querySelector('#prevBtn');
// const nextButton = document.querySelector('#nextBtn');

// // Get all carousel items
// const items = Array.from(document.querySelectorAll('.carousel-item'));
// const totalSlides = items.length;

// // Clone first and last items for infinite scrolling
// const firstClone = items[0].cloneNode(true);
// const lastClone = items[totalSlides - 1].cloneNode(true);

// // Append and prepend clones
// carousel.appendChild(firstClone);
// carousel.insertBefore(lastClone, items[0]);

// // Initialize variables
// let currentIndex = 1; // Start on the first real slide (after the clone)
// const slideWidth = items[0].offsetWidth; // Get width of a single slide

// // Position carousel to the first real slide
// carousel.style.transform = `translateX(-${currentIndex * 100}%)`;

// // Function to update carousel display
// function updateCarousel() {
//   carousel.style.transition = 'transform 0.5s ease-in-out';
//   const offset = -currentIndex * 100; // Calculate the translate value
//   carousel.style.transform = `translateX(${offset}%)`;

//   // Handle infinite scroll loop after transition ends
//   carousel.addEventListener('transitionend', () => {
//     if (currentIndex === 0) {
//       // Jump to the last real slide
//       carousel.style.transition = 'none';
//       currentIndex = totalSlides;
//       carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
//     } else if (currentIndex === totalSlides + 1) {
//       // Jump to the first real slide
//       carousel.style.transition = 'none';
//       currentIndex = 1;
//       carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
//     }
//   }, { once: true });
// }

// // Event listener for "Next" button
// nextButton.addEventListener('click', () => {
//   currentIndex++;
//   updateCarousel();
// });

// // Event listener for "Previous" button
// prevButton.addEventListener('click', () => {
//   currentIndex--;
//   updateCarousel();
// });
