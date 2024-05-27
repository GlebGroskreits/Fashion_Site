const especcialycontant = document.querySelector('.especcialy');

window.addEventListener('DOMContentLoaded', function() {
    const activeUserString = localStorage.getItem('ActiveUsser');
    const activeU = activeUserString ? JSON.parse(activeUserString) : null;

    if (activeU) {
        if(activeU.role === "admin"){
            especcialycontant.classList.add('noactive');
        }
        else{
            especcialycontant.classList.remove('noactive');
        }
    }
    else{
        especcialycontant.classList.remove('noactive');
    }
});