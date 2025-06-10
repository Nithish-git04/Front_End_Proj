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

//activating the thankyou menu when the submit is pressed
const submit_btn = document.getElementById('confirm');
const close_btn = document.getElementById('close');

function checkfunction() {

  const check1 = document.getElementById('input1').value.trim();
  const check2 = document.getElementById('input2').value.trim();

  if(check1 === '' || check2 === '') {
    alert("Please fill the required details!!");
    return;
  }
  
  if(!(isNaN(Number(check1)))) {
    alert("Please fill valid details!!");
    return;
  }

  if(isNaN(Number(check2))) {
    alert("Please fill valid details!!");
    return;
  }

  thankyou_page.classList.add("show");
  blur_rest.classList.add("show");

close_btn.addEventListener("click", () => {
    thankyou_page.classList.remove("show");
    blur_rest.classList.remove("show");
})}