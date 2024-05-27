const advantagescontant = document.querySelector('.advantages');

window.addEventListener('DOMContentLoaded', function() {
    const activeUserString = localStorage.getItem('ActiveUsser');
    const activeU = activeUserString ? JSON.parse(activeUserString) : null;

    if (activeU) {
        if(activeU.role === "admin"){
            advantagescontant.classList.add('noactive');
        }
        else{
            advantagescontant.classList.remove('noactive');
        }
    }
    else{
        advantagescontant.classList.remove('noactive');
    }
});