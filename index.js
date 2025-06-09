const hamburger = document.getElementById('hamburger_menu');
const insideNav = document.getElementById('inside_nav');
const closeBtn = insideNav.querySelector('.close-btn');

// Open menu on hamburger click
hamburger.addEventListener('click', () => {
  insideNav.classList.add('show');
});

// Close menu on cross click
closeBtn.addEventListener('click', () => {
  insideNav.classList.remove('show');
});

// when we scroll past the "get in touch" button, the new one appears in the nav bar
const getintouch = document.getElementById('get_in_touch_1'); // Get the button.

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 10) { 
        getintouch.classList.add('show');
    } else {
        getintouch.classList.remove('show');
    }
});
