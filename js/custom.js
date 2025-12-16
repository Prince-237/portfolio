
  (function ($) {
  
  "use strict";

    // PRE LOADER
    $(window).load(function(){
      $('.preloader').fadeOut(1000); // set duration in brackets    
    });

    // CUSTOM LINK
    $('.custom-link').click(function(){
    var el = $(this).attr('href');
    var elWrapped = $(el);
    var header_height = $('.navbar').height() + 10;

    scrollToDiv(elWrapped,header_height);
    return false;

    function scrollToDiv(element,navheight){
      var offset = element.offset();
      var offsetTop = offset.top;
      var totalScroll = offsetTop-navheight;

      $('body,html').animate({
      scrollTop: totalScroll
      }, 300);
  }
});
    
  })(window.jQuery);

  

  // Scroll Spy
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('nav ul li a');

  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      const sectionHeight = section.clientHeight;
      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === '#' + current) {
        link.classList.add('active');
      }
    });
  });
  

  const scrollUp = () =>{
      const scrollUp = document.getElementById('scroll-up')
      this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                          : scrollUp.classList.remove('show-scroll')
  }
  window.addEventListener('scroll', scrollUp)


  const blurHeader = () =>{
    const header = document.getElementById('header')
    this.scrollY >= 50 ? header.classList.add('blur-header')
                        : header.classList.remove('blur-header')
}
window.addEventListener('scroll',blurHeader)



document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const inputs = this.querySelectorAll("input, textarea");
  let message = " Hello Prince %0A%0A";
  let hasEmptyField = false;
  let emptyFields = [];

  inputs.forEach(input => {
    if (input.value.trim() === "") {
      hasEmptyField = true;
      emptyFields.push(input.placeholder);
    } else {
      message += `${input.placeholder} : ${input.value}%0A`;
    }
  });

  // ❌ Si un champ est vide
  if (hasEmptyField) {
    alert(
      "Please fill in all required fields.\n\nMissing fields:\n- " +
      emptyFields.join("\n- ")
    );
    return;
  }

  // ✅ Si tout est rempli
  const phoneNumber = "23790744225"; // format international sans +
  const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;

  window.open(whatsappURL, "_blank");

  this.reset();

});

