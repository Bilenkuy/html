(function() {

    const slides = [
      '<div><a img src="img/wash1.jpeg" alt="Car"/a></div>',
      '<div><a img src="img/wash2.jpeg" alt="Car"/a></div>',
      '<div><a img src="img/wash3.jpeg" alt="Car"/a></div>',
      '<div><a img src="img/wash4.jpeg" alt="Car"/a></div>',
      '<div><a img src="img/wash5.jpeg" alt="Car"/a></div>',
      '<div><a img src="img/wash6.jpeg" alt="Car"/a></div>',

    ];
  
    let firstSlide = 0;
    let slidesToShow = 6;
  
    function showCurrentSlide() {
      const slidesContainer = document.querySelector('.slides');
      let slideIdx = firstSlide;
      let html = '';
      for (let i = 1; i <= slidesToShow; i++) {
        html += slides[slideIdx];
        slideIdx = slideIdx + 1 >= slides.length ? 0 : slideIdx + 1;
      }
      slidesContainer.innerHTML = html;
    }
  
    function nextSlide() {
      firstSlide = firstSlide + 1 >= slides.length ? 0 : firstSlide + 1;
      showCurrentSlide();
    }
  
  
    setInterval(nextSlide, 2000);
  
    function resize() {
      console.log(window.screen.width);
      if (window.screen.width <= 400) {
        slidesToShow = 1;
      } else if (window.screen.width <= 600) {
        slidesToShow = 2;
      } else if (window.screen.width <= 800) {
        slidesToShow = 3;
    } else if (window.screen.width <= 1000) {
        slidesToShow = 4;
    } else if (window.screen.width <= 1200) {
        slidesToShow = 5;
      } else {
        slidesToShow = 6;
      }
      showCurrentSlide();
    }
   
    window.addEventListener('resize', resize);
  
  })();