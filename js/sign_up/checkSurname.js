const mySurname = document.getElementById('surname');

const mySurname_input = mySurname.querySelector('input');
const mySurname_error = mySurname.querySelector('label');

mySurname_input.addEventListener('input', errorNowSurName);

function errorNowSurName() {
    var inputValue = mySurname_input.value;

    if (inputValue.length > 20 || inputValue.length < 2 || inputValue.trim() === '' || inputValue.indexOf(' ') !== -1) {
        mySurname_error.classList.add('active');
    }else{
        mySurname_error.classList.remove('active');
    }
}