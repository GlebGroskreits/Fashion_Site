const myEmail = document.getElementById('email');

const myEmail_input = myEmail.querySelector('input');
const myEmail_error = myEmail.querySelector('label');

myEmail_input.addEventListener('input', errorNowEmail);

function errorNowEmail() {
    var inputValue = myEmail_input.value;

    if (inputValue.trim() === '' || inputValue.indexOf(' ') !== -1 || inputValue.indexOf('@') === -1 || inputValue.lastIndexOf('.') <  inputValue.indexOf('@')){
        myEmail_error.classList.add('active');
    }else{
        myEmail_error.classList.remove('active');
    }
}