const el_2 = document.querySelector('.title_2');

let elWidth_2 = el_2.offsetWidth;
let windowWidth_2 = window.innerWidth;

let mouseX_2 = 0;
let prevMouseX_2 = 0;

let skewTarget_2 = 0;
let translateTarget_2 = 0;

let skewWithEasing_2 = 0;
let translateWithEasing_2 = 0;

let skewEasingFactor_2 = 0.05;
let translateEasingFactor_2 = 0.01;

window.addEventListener("mousemove", handleMouseMove_2);
window.addEventListener("resize", handleWindowResize_2);

function handleMouseMove_2(e) {
    mouseX_2 = e.pageX;
}

function handleWindowResize_2(e) {
    elWidth_2 = el_2.offsetWidth;
    windowWidth_2 = window.innerWidth;
}


function lerp_2(start, end, factor) {
    return (1 - factor) * start + factor * end;
}

function animateMe_2() {
    skewTarget_2 = mouseX_2 - prevMouseX_2;
    prevMouseX_2 = mouseX_2;

    translateTarget_2 = (elWidth_2 - windowWidth_2) / windowWidth_2 * mouseX_2 * -1;

    skewWithEasing_2 = lerp_2(skewWithEasing_2, skewTarget_2, skewEasingFactor_2);

    skewWithEasing_2 = Math.min(Math.max(parseInt(skewWithEasing_2), -75), 75);

    translateWithEasing_2 = lerp_2(
        translateWithEasing_2,
        translateTarget_2,
        translateEasingFactor_2);


    el_2.style.transform = `
      translateX(${translateWithEasing_2}px)
      skewX(${skewWithEasing_2}deg)
    `;

    window.requestAnimationFrame(animateMe_2);
}


window.requestAnimationFrame(animateMe_2);