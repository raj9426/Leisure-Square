const navSlide = ()=>{
    const burger =  document.querySelector('.ham-burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', ()=>{
        nav.classList.toggle('nav-active');
        burger.classList.toggle('toggle');

        navLinks.forEach((link, index) => {
            if(link.style.animation){
                link.style.animation = '';
            }
            else{
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7}s`;
            }
        });
    });
}


navSlide();

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

const xmark = document.querySelector(".fa-xmark");
const container = document.querySelector(".contact-container")
const contact = document.querySelector(".contact");
const body = document.querySelector("body")
const foot_contact = document.querySelector(".foot-contact")
contact.addEventListener('click', ()=>{
    container.classList.toggle("open-contact")
    container.classList.remove("close-contact")
    body.classList.toggle("body")
})
foot_contact.addEventListener('click', ()=>{
    container.classList.toggle("open-contact")
    container.classList.remove("close-contact")
    body.classList.toggle("body")
})
xmark.addEventListener('click', ()=>{
    container.classList.toggle("close-contact");
    container.classList.remove("open-contact");
    body.classList.remove("body");

})

