gsap.registerPlugin(ScrollTrigger);

gsap.to('.box', {
    scrollTrigger: '.box', 
    x: 500
});