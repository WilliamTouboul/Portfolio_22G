/* -------------------------------------------------------------------------- */
/*                                   Loader                                   */
/* -------------------------------------------------------------------------- */
var tl__loader = gsap.timeline();

tl__loader.to('.jauge_inner', {
    width: '100%',
    duration: 4.5,
    ease: 'steps(35)'
}, 0);

tl__loader.to('.loader', {
    delay: .5,
    duration: 1.5,
    y: '-100vh',
    ease: 'expo.inOut'
}, 4);

tl__loader.from('#name_top_left', {
    y: -120,
    opacity: 0,
    ease: 'slow(0.5,0.7,false)'
});

tl__loader.from('.h_top_left', {
    y: -120,
    opacity: 0,
    delay: .4,
    stagger: .4,
    ease: 'slow(0.5,0.7,false)'
});

tl__loader.from('#square_portfolio', {
    y: -120,
    opacity: 0,

    delay: .4,
    stagger: .4,
    ease: 'slow(0.5,0.7,false)'
});

tl__loader.from('#main_pf_title', {
    x: '-150%',
    opacity: 0,
    delay: .4,
    ease: 'slow(0.5,0.7,false)'
});

tl__loader.from('#square_portfolio', {
    height: 52,
    width: 52,
    stagger: .4,
    ease: 'slow(0.5,0.7,false)'
});

function animateValue(obj, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        obj.innerHTML = Math.floor(progress * (end - start) + start);
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

const obj = document.querySelector('#counter')
animateValue(obj, 0, 100, 4500);






/* -------------------------------------------------------------------------- */
/*                                Hover project                               */
/* -------------------------------------------------------------------------- */
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