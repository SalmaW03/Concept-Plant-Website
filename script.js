const slide = document.getElementById("slide");

window.onmousemove = function(e) {
    const x = e.clientX;
    slide.style.left = x+ "px";
}

const nav = document.getElementById("nav");

function myNav() {
    let y = window.scrollY;
    if (y > 650) {
        nav.style.display = 'block';
    } else {
        nav.style.display = 'none';
    }
}

window.addEventListener('scroll', myNav);

setTimeout (function () {
    document.querySelector('.text').classList.remove('hide');
}, 3000)

const click = document.querySelector('.close');
const left = document.querySelector('.left');
const block = document.querySelector('.block');

click.addEventListener('click', function() {
    document.querySelector('.text').style.right = '-405px';
    document.querySelector('.left').style.display = 'block';
})

block.addEventListener('click', function() {
    document.querySelector('.text').style.right = '-405px';
    document.querySelector('.left').style.display = 'block';
})

left.addEventListener('click', function() {
    document.querySelector('.text').style.right = '0';
    document.querySelector('.left').style.display = 'none';
})
