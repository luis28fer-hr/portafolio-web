
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }else{
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));


/*  Barra de navegacion activa segun el scroll */

const menuLinks = document.querySelectorAll('.navegacion-links a[href^="#"]')

const observer2 = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        const id = entry.target.getAttribute("id");
        const menuLink = document.querySelector(`.navegacion-link a[href="#${id}"]`)
        if (entry.isIntersecting){
            menuLink.classList.add("link-active")

        }else{
            menuLink.classList.remove("link-active")
        }
    });
}, {rootMargin: "-40% 0px -60% 0px"});


menuLinks.forEach(menulink => {
    
    const hash = menulink.getAttribute("href");
    const target = document.querySelector(hash);
    if(target){
        observer2.observe(target);
    }

});

