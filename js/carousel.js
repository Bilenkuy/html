const slides = `[productsJson]`; 

let currentSlide = 0;
function showCurrentSlide() {
    const slideTarget = document.querySelector('.carousel-two"')
    slideTarget.src = slides[currentSlide];
}

function nextSlide() {
    currentSlide++;
    if (currentSlide>= slides.length) currentSlide=0;
    showCurrentSlide();
}

function prevSlide() {
    currentSlide--;
    if (currentSlide<0) currentSlide=slides.length-1;
    showCurrentSlide();
}

document.querySelector('.bnext').addEventListener('click', nextSlide);
document.querySelector('.bprev').addEventListener('click', nextSlide);

showCurrentSlide();
setInterval(nextSlide, 3000);