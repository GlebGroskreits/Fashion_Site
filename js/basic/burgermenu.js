const iconBtn = document.querySelector('.burger-menu-icon');

const menuBurger = document.querySelector('.burger-menu');
console.log('dfd');

iconBtn.addEventListener('click', () => {
    menuBurger.classList.toggle('active');
    iconBtn.classList.toggle('active');
    console.log('dfd');
    
}
);

window.addEventListener('scroll', () => {
    if(iconBtn.classList.contains('active')){
        iconBtn.classList.remove('active');
        menuBurger.classList.remove('active');
    }
});