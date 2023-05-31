const slider = document.querySelector('input');
const bar = document.querySelector('.progress_bar');
const thumb = document.querySelector('.thumb');
const slideIcon = document.querySelector('.slideIcon');

slider.oninput = function() {
    let value = slider.value;
    thumb.style.left = value + '%';
    bar.style.width = value + '%';

    if(value < 20) {
        slideIcon.style.marginTop = '0px';
    }
    if(value > 20) {
        slideIcon.style.marginTop = "-160px";
    }
    if(value > 40) {
        slideIcon.style.marginTop = "-312px";
    }
    if(value > 60) {
        slideIcon.style.marginTop = "-470px";
    }
    if(value > 80) {
        slideIcon.style.marginTop = "-620px";
    }
}