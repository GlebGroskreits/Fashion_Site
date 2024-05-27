const footercontainer = document.querySelector('.footer-container');
const footerlog = document.querySelector('.footer-log');
const pfooterlog = footerlog.querySelectorAll('p');

window.addEventListener('DOMContentLoaded', function() {
    const activeUserString = localStorage.getItem('ActiveUsser');
    const activeU = activeUserString ? JSON.parse(activeUserString) : null;

    if (activeU) {
        if(activeU.role === "admin"){
            footercontainer.classList.add('noactive');
            pfooterlog[0].classList.add('noactive');
            pfooterlog[1].classList.add('active');
        }
        else{
            footercontainer.classList.remove('noactive');
            pfooterlog[0].classList.remove('noactive');
            pfooterlog[1].classList.remove('active');
        }
    }
    else{
        footercontainer.classList.remove('noactive');
        pfooterlog[0].classList.remove('noactive');
        pfooterlog[1].classList.remove('active');
    }
});