var tl = gsap.timeline();
tl.from('#name_top_left', {
    y: 150
}, 1);

tl.from('.slash', {
    x: -100,
    stagger: 0.3

}, 2);

tl.to('.second_slash', {
    x: '38vw',
    duration: 1.4,
    stagger: 0.4
}, 3);


tl.from('.inner_title', {
    x: '-50vw',
    duration: 1.4,
    stagger: 0.8
}, 3);

tl.to('.second_slash', {
    delay: 1.4,
    x: -10
}, 4);

tl.from('.h3_top_left', {
    x: '-38vw',
    duration: 1.4
})

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