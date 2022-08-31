/* -------------------------------------------------------------------------- */
/*                           Animation onload header                          */
/* -------------------------------------------------------------------------- */

// BLOCK SCREEN 
function removing_lock() {
    var element = document.querySelector('.scroll_locked');
    element.classList.remove('scroll_locked')
}

window.onload = function () {
    setTimeout(() => {
        removing_lock();
    }, "7500")
}

/* -------------------------------------------------------------------------- */
var tl = gsap.timeline();
tl.from('#name_top_left', {
    y: 150
});

tl.from('.h_top_left', {
    x: '-50vw',
    stagger: 0.8,
    duration: 1.8
});

tl.from('#square_portfolio', {
    x: '25vw',
    ease: "power4.out",
    duration: 2.5
});

tl.from('#main_pf_title', {
    x: '-45vw',
    ease: "power4.out",
    duration: 1.2
});

tl.from('#square_portfolio', {
    height: 70,
    width: 70,
    ease: "power4.out",
});

tl.from('#main_nav', {
    y: 48
});



let project_array = document.querySelectorAll('.list_element');
let img = document.querySelector('.project_img');

document.addEventListener('mousemove', function (e) {
    let position = e.pageY;
    document.querySelector('.project_img').style.top = position + 'px';
});

project_array.forEach((item, index) => {
    item.addEventListener('mouseover', function () {
        document.querySelector('.project_img').style.left = '0px';
        document.querySelector('.project_img').src = item.getAttribute('image-path');
    });
    item.addEventListener('mouseout', function () {
        document.querySelector('.project_img').style.left = '-20%';

    })
});