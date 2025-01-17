const menu = document.querySelector(".nav-list");
const openMenuBtn = document.querySelector(".abrir_menu");
const closeMenuBtn = document.querySelector(".cerrar_menu");

function toggleMenu() {
    menu.classList.toggle("menu_opened");
}
openMenuBtn.addEventListener("click", toggleMenu);
closeMenuBtn.addEventListener("click", toggleMenu);


const menuLinks = document.querySelectorAll('.nav-list a[href^="#"]');

const observer = new IntersectionObserver(
(entries) => {
    entries.forEach((entry) => {
    const id = entry.target.getAttribute("id");
    const menuLink = document.querySelector(`.nav-list a[href="#${id}"]`);

    if (entry.isIntersecting) {
        document.querySelector(".nav-list a.selected").classList.remove("selected");
        menuLink.classList.add("selected");
    }
    });
},
{ rootMargin: "-30% 0px -70% 0px" }
);

menuLinks.forEach((menuLink) => {
menuLink.addEventListener("click", function () {
    menu.classList.remove("menu_opened");
});

const hash = menuLink.getAttribute("href");
const target = document.querySelector(hash);
if (target) {
    observer.observe(target);
}
});

// funcion para ocultar tabla

function showhide(){
    var container = document.getElementsByClassName("plans-table")[0];

    if(container.style.display == "none"){
        container.style.display = "grid";
    }else{
        container.style.display = "none";
    }
}

// funcion slider

    var slideIndex = 0;
    carousel();

    function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > x.length) {slideIndex = 1}
    x[slideIndex-1].style.display = "block";
    setTimeout(carousel, 5000); 
}