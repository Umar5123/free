function myFunction() {
    let element = document.querySelector("nav");
    element.classList.toggle("nav-show");

    let element2 = document.querySelector(".toggle-btn");
    element2.classList.toggle("toggle-open");
}

document.querySelector(".toggle-btn").addEventListener("click", myFunction)

$('.banner').slick({
    dots: false,
    infinite: true,
    speed: 500,
    fade: false,
    prevArrow: `<button type="button" class="next-slick"><i class="fa-solid fa-chevron-left"></i></button>`,
    nextArrow: `<button type="button" class="prev-slick"><i class="fa-solid fa-chevron-right"></i></button>`,
});



