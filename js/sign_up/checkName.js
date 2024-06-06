const myName = document.getElementById('name');

const myName_input = myName.querySelector('input');
const myName_error = myName.querySelector('label');

myName_input.addEventListener('input', errorNowName);

function errorNowName() {
    var inputValue = myName_input.value;
    console.log(myName_error);
    if (inputValue.length > 20 || inputValue.length < 2 || inputValue.trim() === '' || inputValue.indexOf(' ') !== -1) {
        myName_error.classList.add('active');
    }else{
        myName_error.classList.remove('active');
    }
}