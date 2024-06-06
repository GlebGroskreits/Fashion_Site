const myCheck = document.getElementById('checkbox');

const myCheck_input = myCheck.querySelector('input');
const myCheck_error = myCheck.querySelector('label');

myCheck_input.addEventListener('input', errorNowCheck);

function errorNowCheck() {
    if (myCheck_input.checked) {
        myCheck_error.classList.remove('active');
    } else {
        myCheck_error.classList.add('active');
    }
}