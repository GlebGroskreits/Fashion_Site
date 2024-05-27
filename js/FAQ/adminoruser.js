const groupcontant = document.querySelector('.group');

window.addEventListener('DOMContentLoaded', function() {
    const activeUserString = localStorage.getItem('ActiveUsser');
    const activeU = activeUserString ? JSON.parse(activeUserString) : null;

    if (activeU) {
        if(activeU.role === "admin"){
            groupcontant.classList.add('noactive');
        }
        else{
            groupcontant.classList.remove('noactive');
        }
    }
    else{
        groupcontant.classList.remove('noactive');
    }
});