const aboutsection = document.querySelector('.about');
const amodal = aboutsection.querySelector('.modal');
const aboutBtn = aboutsection.querySelectorAll('.button-home');
const acloserBtn = aboutsection.querySelector('.closer');

const abody = document.querySelector('body');

aboutBtn.forEach(function(button) {
    button.addEventListener('click', function() {
        amodal.classList.toggle('show');
        disableScroll();
    });
});

acloserBtn.addEventListener('click', () => {
    amodal.classList.toggle('show');
    enableScroll();
});

function disableScroll() {
    abody.style.overflow = 'hidden';
}

function enableScroll() {
    abody.style.overflow = '';
}

