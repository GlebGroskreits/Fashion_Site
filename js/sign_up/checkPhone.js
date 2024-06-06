const myPhone = document.getElementById('phone');

const myPhone_input = myPhone.querySelector('input');
const myPhone_error = myPhone.querySelector('label');

myPhone_input.addEventListener('input', errorNowPhone);

function errorNowPhone() {
    var inputValue = myPhone_input.value;
    console.log( inputValue);
    myPhone_error.classList.add('active');
    myPhone_error.classList.remove('active');

    if (inputValue.trim() === '' || inputValue.indexOf(' ') !== -1) {
        myPhone_error.classList.add('active');
    }else{
        if(inputValue.startsWith('375') && inputValue.length === 12){
            myPhone_error.classList.remove('active');
        }
        else{
            if(inputValue.startsWith('80') && inputValue.length === 11){
                myPhone_error.classList.remove('active');
            }else{
                myPhone_error.classList.add('active');
            }
        }
    }
}