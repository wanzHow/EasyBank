const modal = document.getElementById("modal");
const closeBtn = document.getElementById("close-icon");
const hamburgerBtn = document.getElementById("hamburger-icon");
const navBarToggler = document.querySelector('.navbar-toggler')


function hamburgerHandler() {
  modal.classList.add("show");
  closeBtn.classList.add('show')
  hamburgerBtn.classList.remove('show')
  closeBtn.classList.add('show')
}
hamburgerBtn.addEventListener("click", hamburgerHandler);

function modalClose() {
  modal.classList.remove("show");
  closeBtn.classList.remove('show')
  hamburgerBtn.classList.add('show')
}

closeBtn.addEventListener("click", modalClose);

const faders = document.querySelectorAll('.fade-in');
const sliders = document.querySelectorAll('.slide-in');

const appearOptions = {
  threshold: .2,
  rootMargin: '50px 10px -50px -10px' 
}

const appearOnScroll = new IntersectionObserver((entry, appearOnScroll) => {
  entry.forEach(entry=>{
    if(!entry.isIntersecting){
      return;
    } else {
      entry.target.classList.add('appear');
      appearOnScroll.unobserve(entry.target);
    }
  })
}, appearOptions);

faders.forEach(fader =>{
  appearOnScroll.observe(fader);
});


sliders.forEach(slider =>{
  appearOnScroll.observe(slider);
})