const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');
const slides = document.querySelectorAll(".slide-item");
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const letschat = document.querySelector('.letschat');


//menu bar
burger.addEventListener('click', () => {
navLinks.classList.toggle('nav-active');
});

//nav bar pin
window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar');
    if (window.scrollY > 0) {
        navbar.classList.add('scrolled');
        letschat.classList.add('scrolled-button');
    
    } else {
        navbar.classList.remove('scrolled');
        letschat.classList.remove('scrolled-button');
    }
});

var counter = 0;

slides.forEach(
    (slide,index) => {
        slide.style.left = `${index * 100}%`
    }
)

//slide buttons
const goNext = () =>{
    counter++
    if (counter === slides.length) {
        counter = 0;
    }
    slideImage() 
}
const goPrev = () =>{
    counter--
    if (counter < 0) {
        counter = slides.length - 1;
    }
    slideImage() 
}

//image slide
const slideImage = () => {
    slides.forEach(
        (slide) => {
            slide.style.transform = `translateX(-${counter * 100}%)`
        }
    )
}

//slide intervel
const intervalId = setInterval(() => {
    counter++;
    if (counter === slides.length) {
        counter = 0;
    }
    slideImage();
}, 6000);

prevBtn.addEventListener('click', () => {
    clearInterval(intervalId);
});
nextBtn.addEventListener('click', () => {
    clearInterval(intervalId);
});





