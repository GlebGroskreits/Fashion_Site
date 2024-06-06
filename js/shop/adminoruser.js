const hellotwocontant = document.querySelector('.hello-two');

window.addEventListener('DOMContentLoaded', function() {
    const activeUserString = localStorage.getItem('ActiveUsser');
    const activeU = activeUserString ? JSON.parse(activeUserString) : null;

    if (activeU) {
        if(activeU.role === "admin"){
            hellotwocontant.classList.add('noactive');
        }
        else{
            hellotwocontant.classList.remove('noactive');
        }
    }
    else{
        hellotwocontant.classList.remove('noactive');
    }
});