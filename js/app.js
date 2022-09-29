const indexHeader = document.querySelector(".index-header");
const header = document.getElementById("header");
const logo = document.querySelector('.logo');
const container = document.getElementById("container");
const hamburger = document.querySelector(".hamburger");
const topBtn = document.querySelector(".index-top-btn");
const sidebar = document.querySelector(".mobile-links");
const footerNav = document.querySelector(".footer-nav");
const navLinks = document.querySelectorAll(".mobile-links ul li");
console.log(topBtn);
// INTERSECTION OBSERVER VARIABLES
const hero = document.querySelector(".hero");
const section = document.querySelectorAll(".section");
console.log(hero)
const brand = document.querySelector('.logo');

// 
// document.addEventListener("scroll", () => {
//     const scroll_position = window.scrollY;
//     if (scroll_position < 60) {
//         header.classList.remove("scroll");
//     } else {
//         header.classList.add("scroll");
//     }
// });

hamburger.addEventListener("click", () => {
    sidebar.classList.toggle("active");
    hamburger.classList.toggle("active");
    header.classList.toggle("active");
    container.classList.toggle("active-overlay");
    if(!logo.classList.contains("active-logo")){
        logo.classList.remove("active-logo");
    } else {
        logo.classList.toggle("active-logo");
    }
})

brand.addEventListener("click", () => {
    if (sidebar.classList.contains("active")) {
        sidebar.classList.remove("active");
        hamburger.classList.remove("active");
        header.classList.remove("active");
        container.classList.remove("active-overlay");
    }
});

// DYNAMIC DATE
const date = document.querySelector('.date');
date.innerHTML = new Date().getFullYear();

// PRODUCTS BOX IO
const box = document.querySelectorAll(".box");
const boxOptions = {
    rootMargin: "0% 0px -30% 0px",
}
box.forEach(box => {
    const boxObserver = new IntersectionObserver(
        function(entries, boxObserver) {
            entries.forEach(entry => {
                if(!entry.isIntersecting){
                    console.log("NO BOX");
                    box.classList.remove("active-box")
                } else {
                    console.log("BOX BOX BOX");
                    box.classList.add("active-box");
                }
            })
        }, boxOptions
    )
    boxObserver.observe(box); 
});

// ABOUT SECTION IO
// const aboutSection = document.querySelector(".about");
// const aboutSectionOptions = {
//     rootMargin: "0px 0px -20% 0px",   
// }
// aboutSectionObserver = new IntersectionObserver(
//     function(entries, aboutSectionObserver) {
//         entries.forEach(entry => {
//             if(!entry.isIntersecting) {
//                 console.log("about section NOT intersect");
//                 aboutSection.classList.remove("active-about");
//             } else {
//                 console.log("about section IS intersecting");
//                 aboutSection.classList.add("active-about");
//             }
//         })
//     }, aboutSectionOptions
// );
// aboutSectionObserver.observe(aboutSection);

// HERO INTERSECTION OBSERVER
const heroTitle = document.querySelector('.hero-title');
const heroOptions = {
    rootMargin: "-90% 0px 0px 0px"
};
const heroObserver = new IntersectionObserver(
    function(entries, heroObserver) {
        entries.forEach(entry => {
            if(!entry.isIntersecting) {
                console.log('HERO NOT intersecting');
                header.classList.add("scroll");
                logo.classList.remove("active-logo");
                footerNav.classList.add("active-footer");
                // header.style.backgroundColor = "yellow";
            } else {
                console.log('HERO intersecting')
                header.classList.remove("scroll");
                // heroTitle.classList.remove("active-title");
                logo.classList.add("active-logo");
                footerNav.classList.remove("active-footer");

                // header.style.backgroundColor = "green";
            }
        });
    }, heroOptions
);
heroObserver.observe(hero);

