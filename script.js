console.log("JavaScript is connected!");

// Header Effects Start
const header = document.querySelector('.main-header');
let lastScrollY = window.scrollY;

window.addEventListener('scroll', () => {
  const currentScrollY = window.scrollY;

  // 1. Scrolling Down & past the header height -> Hide it
  if (currentScrollY > lastScrollY && currentScrollY > 70) {
    header.classList.add('header-hidden');
  } 
  // 2. Scrolling Up -> Show it
  else if (currentScrollY < lastScrollY) {
    header.classList.remove('header-hidden');
  }

  // Update the last scroll position
  lastScrollY = currentScrollY;
});
// Header Effects End


// Experimental Hero Slider Content Start
const slides = document.querySelectorAll(".slide");
const prevBtn = document.querySelector(".prev-btn");

const nextBtn = document.querySelector(".next-btn");
const dotsContainer = document.querySelector(".slide-dots");

const progress = document.querySelector(".progress");

const slider = document.querySelector(".hero-slider");

let currentSlide = 0;
let autoPlayTimer;
let progressTimer;

// Create Dot Indicators
slides.forEach((_, index) => {
  const dot = document.createElement("div");
  dot.classList.add("dot");
  if(index===0) dot.classList.add("active");
  dot.onClick = () => goToSlide (index);
  dotsContainer.appendChild(dot);
});

//Change Slide!!
function goToSlide (index){
  //remove all active classes
  slides.forEach((slide) => slide. classList.remove("active", "previous"));

  document.querySelectorAll(".dot").forEach((dot)=> dot.classList.remove("active"))

  // add active class to current slide and dot

  slides[currentSlide].classList.add("previous");
  slides[index].classList.add("active");
  dotsContainer.children[index].classList.add("active");

  // update current slide
  currentSlide = index;

  //reset and start progress bar
}

// navigation function
function nextSlide() {
  const next = (currentSlide + 1) % slides.length;
  goToSlide(next);
}

function prevSlide() {
  const prev = (currentSlide - 1 + slides.length) % slides.length;
  goToSlide(prev);
}

// progress bar
function resetProgress(){
  // clear existing progress
  clearInterval(progressTimer);
  progress.style.width = "0%";

  // start new progress
  let width = 0;
  progressTimer = setInterval(() => {
    width += 0.1;
    progress.style.width = width + "%";

    if(width >= 100) {
      width = 0;
      nextSlide();
    }
  }, 50);
}

// autoplay control
function startAutoPlay() {
  resetProgress();
  clearInterval(autoPlayTimer);
  autoPlayTimer = setIntervel(nextSlide, 5000);
}

function stopAutoPlay() {
  clearInterval(autoPlayTimer);
  clearInterval(progressTimer);
  progress.style.width = "0%";
}

// event listener
prevBtn.onclick = ()=>{
  prevSlide();
  startAutoPlay();
};

nextBtn.onclick = ()=>{
  nextSlide();
  startAutoPlay();
};
// Experimental Hero Slider Content End


// Interaction Section Start
function getCordinate(event) {
  let cursor = document.querySelector('.cursor');
  cursor.style.left = event.clientX+'px';
  cursor.style.top = event.clientY+'px';
}

const section = document.querySelector("#cursor-hover");
section.addEventListener("mousemove", getCordinate);

// split section due to different code

const cursor = document.querySelector('.cursor');

// Show custom cursor when entering the section
section.addEventListener('mouseenter', () => {
  cursor.style.opacity = '1';
});

// Hide custom cursor when leaving the section
section.addEventListener('mouseleave', () => {
  cursor.style.opacity = '0';
});

// Track mouse coordinates only while inside the section
section.addEventListener('mousemove', (e) => {
  cursor.style.left = `${e.clientX}px`;
  cursor.style.top = `${e.clientY}px`;
});
// Interaction Section End
