
const titleOptions = {
    rootMargin: "0% 0px 50% 0px",
    
}
const heroPadOptions = {
    rootMargin: "0% 0px -70% 0px",
    
}
const mobileSectionOptions = {
    rootMargin: "0% 0px -70% 0px",
    
}
// MAIN SECTION INTERSECTION OBSERVER
const main = document.getElementById("main");
const mainOptions = {
    rootMargin: "0px 0px -30% 0px",
    
}
const mainObserver = new IntersectionObserver(
    function(
        entries, mainObserver
    ){
        entries.forEach(entry => {
            if(!entry.isIntersecting) {
                console.log("main IS NOT intersecting");
                // topBtn.classList.remove("active-btn");
                footerNav.classList.remove('active-footer');
            } else {
                console.log("main IS intersecting");
                // topBtn.classList.add("active-btn");
                footerNav.classList.add('active-footer');
            }
        })
    }, mainOptions
);
mainObserver.observe(main);




// ABOUT IMG INTERSECTION OBSERVER
const aboutImg = document.querySelector('.IO-img');
const aboutImgOptions = {
    rootMargin: "0% 0px -40% 0px"
};
console.log(aboutImg);
const aboutImgObserver = new IntersectionObserver(
    function(entries, aboutImgObserver) {
        entries.forEach(entry => {
            if(!entry.isIntersecting) {
                console.log("Img NOT intersecting");
                aboutImg.classList.remove("active");
            } else {
                console.log("Img IS intersecting");
                aboutImg.classList.add("active");

            }
        });
    }, aboutImgOptions
);
aboutImgObserver.observe(aboutImg);



// MOBILE HERO IO
const mobileHero = document.querySelector('.mobile-hero-pad');
console.log(mobileHero); 
const heroPadObserver = new IntersectionObserver(
    function(entries, heroObserver) {
        entries.forEach(entry => {
            if(!entry.isIntersecting) {
                console.log("heroPAd NOT Inter");
                heroTitle.classList.remove("active-title");
            } else {
                console.log("heroPAd IS Inter");
                heroTitle.classList.add("active-title");
            }
        })
    }, heroPadOptions
);
heroPadObserver.observe(mobileHero);

// MOBILE SECTION PAD IO
const mobileSectionPad = document.querySelector('.mobile-section-pad');
const sectionPadContent = document.querySelector('.section-pad-content');
console.log(mobileSectionPad); 
const mobileSectionObserver = new IntersectionObserver(
    function(entries, mobileSectionObserver) {
        entries.forEach(entry => {
            if(!entry.isIntersecting) {
                console.log("mobileSection NOT Inter");
                sectionPadContent.classList.remove("active-pad-title");
            } else {
                console.log("mobileSection IS Inter");
                sectionPadContent.classList.add("active-pad-title");
            }
        })
    }, mobileSectionOptions
);
mobileSectionObserver.observe(mobileSectionPad);


