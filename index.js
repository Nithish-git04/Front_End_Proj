const hamburger = document.getElementById('hamburger_menu');
const insideNav = document.getElementById('inside_nav');
const closeBtn = insideNav.querySelector('.close-btn');
const menuBtn = document.querySelector(".menu_btn");
const overlay = document.getElementById("overlay");
const navLinks = document.querySelectorAll('#inside_nav a');
const getintouch = document.getElementById('get_in_touch_1');

// Open menu on hamburger click
hamburger.addEventListener('click', () => {
  insideNav.classList.add('show');
});

// Close menu on cross click
closeBtn.addEventListener('click', () => {
  insideNav.classList.remove('show');
});

//close the menu on clicking the link inside the nav bar
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    overlay.classList.remove("show");
    insideNav.classList.remove("show");
  });
});

//activating the overlay div to blur the rest of the window when the nav bar is opened.
menuBtn.addEventListener("click", () => {
    insideNav.classList.add("show");
    overlay.classList.add("show");
});

closeBtn.addEventListener("click", () => {
    insideNav.classList.remove("show");
    overlay.classList.remove("show");
});


// when we scroll past the "get in touch" button, the new one appears in the nav bar

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 900) { 
        getintouch.classList.add('show');
    } else {
        getintouch.classList.remove('show');
    }
});

//making the catalogue image rollover
let currentPage = 0;

function moveSlider(direction) {
  const track = document.getElementById('imageTrack');
  const pages = track.querySelectorAll('.image-page');
  const totalPages = pages.length;

  console.log(totalPages);

  currentPage += direction;

  if (currentPage < 0) currentPage = 0;
  if (currentPage >= totalPages) currentPage = totalPages - 1;

  track.style.transform = `translateX(-${currentPage * 900}px)`;

  const leftBtn = document.getElementById('left_btn');
  const rightBtn = document.getElementById('right_btn');

  if (currentPage === 0) {
    leftBtn.classList.add('disabled');
  } else {
    leftBtn.classList.remove('disabled');
  }

  if (currentPage === totalPages - 1) {
    rightBtn.classList.add('disabled');
  } else {
    rightBtn.classList.remove('disabled');
  }
}
