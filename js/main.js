const press = document.querySelector('.playButton');
const radio = document.querySelector('#audio');
var a = 1;
press.addEventListener('click', (el) => {
    a++;
    el.preventDefault();
    if (a % 2 === 0) {
        radio.play();
    }
    else {
        radio.pause();
    }
});