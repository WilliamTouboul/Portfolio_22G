var tl = gsap.timeline();
tl.from('#name_top_left', {
    y: 150
});

tl.from('.h_top_left', {
    x: '-50vw',
    stagger: 0.5,
    duration: 1.4
});

tl.from('#square_portfolio', {
    x: '25vw',
    ease: "power4.out",
    duration: 2.5
});

tl.from('#main_pf_title', {
    x: '-45vw',
    ease: "power4.out",
});

tl.from('#square_portfolio', {
    height: 70,
    width: 70,
    ease: "power4.out",
});

tl.from('#main_nav', {
    y: 48
});