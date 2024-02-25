window.onload = function () {
    window.location.href = '#body';
}
/*---------------
scroll progress bar
------------------ */
document.addEventListener('DOMContentLoaded', function () {
    let progressBarInner = document.querySelector('.progress-bar-inner');
    let boxProgressBar = document.querySelector('.box-progress-bar');
    let boxNumber = document.querySelector('.box-number');

    boxProgressBar.addEventListener('scroll', function () {

        let st = boxProgressBar.scrollTop;
        let stintero = parseInt(st);
        console.log(stintero);
        let sh = boxProgressBar.scrollHeight;
        console.log(st);

        let percent = st / (sh - boxProgressBar.clientHeight) * 100;
        let roundedPercent = Math.round(percent);

        progressBarInner.style.width = percent + '%';
        boxNumber.innerText = roundedPercent + '%';

        if (stintero >= 1220) {
            document.querySelector('.scompari').classList.add('hidden-bar');
            document.querySelector('#navbar').style.zIndex = 9999999999;
        }
    });
});
/*
function gestisciScroll() {
    var scompari = document.querySelector('.scompari');

    if (window.scrollY > 700) {
        
        scompari.classList.add('hidden-bar');
    }
}
window.addEventListener('scroll', gestisciScroll);


/*----------
Movimento pagina quando scrollo
---------- */


var elemnts_to_watch = document.querySelectorAll('.watch2');

var callback = function (items) {
    items.forEach((item) => {
        if (item.isIntersecting) {
            item.target.classList.add('in-page');
        }
    });
};

var observer = new IntersectionObserver(callback, { threshold: 0.5 });

elemnts_to_watch.forEach((element) => {
    observer.observe(element)
});

/*-----------
GESTIONE MENU
--------------*/
window.addEventListener('scroll', function () {
    var header = this.document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
})
/*-------------
PARALLAX
-------*/
var elemnts_to_watch = document.querySelectorAll('.watch');

var callback = function (items) {
    items.forEach((item) => {
        if (item.isIntersecting) {
            item.target.classList.add('in-page');
        } else {
            item.target.classList.remove('in-page');
        }
    });
};

var observer = new IntersectionObserver(callback, { threshold: 0.8 });

elemnts_to_watch.forEach((element) => {
    observer.observe(element)
});

/*-----------------
CURSORE
-------------------- */
let cursor = document.querySelector('.cursor');
let outline = document.querySelector('.outline');
let links = document.querySelectorAll('a');


document.addEventListener('mousemove', function (e) {
    let x = e.clientX;
    let y = e.clientY;

    outline.style.transform = `translate( calc(${x}px - 50%), calc(${y}px - 50%))`;
    cursor.style.transform = `translate( calc(${x}px - 50%), calc(${y}px - 50%))`;
});

links.forEach((link) => {
    link.addEventListener('mouseover', function () {
        outline.classList.add('hover');
        cursor.classList.add('hover');
    });
    link.addEventListener('mouseleave', function () {
        outline.classList.remove('hover');
        cursor.classList.remove('hover');
    });
});

/*---------
SECONDA PARTE
------*/
const boxes = document.querySelectorAll('.box-animate');
window.addEventListener('scroll', checkBoxes);
checkBoxes();

function checkBoxes() {
    const triggerBottom = window.innerHeight / 5 * 4;

    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top

        if (boxTop < triggerBottom) {
            box.classList.add('show');
        } else {
            box.classList.remove('show');
        }
    })
}
