const categoriessection = document.querySelector('.categories');
const cmodal = categoriessection.querySelector('.modal');
const categoriesheader = categoriessection.querySelector('.categories-header');
const arrowimg = categoriesheader.querySelectorAll('img');
const ccloserBtn = categoriessection.querySelector('.closer');

const abody = document.querySelector('body');

arrowimg.forEach(function(button) {
    button.addEventListener('click', function() {
        cmodal.classList.toggle('show');
        disableScroll();
    });
});

ccloserBtn.addEventListener('click', () => {
    cmodal.classList.toggle('show');
    enableScroll();
});

function disableScroll() {
    abody.style.overflow = 'hidden';
}

function enableScroll() {
    abody.style.overflow = '';
}

