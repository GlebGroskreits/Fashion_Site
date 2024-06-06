var myPassword= document.getElementById('password');
var myPasswordRepeat = document.getElementById('passwordRepead');

var myPassword_input = myPassword.querySelector('input');
var myPasswordRepeat_input = myPasswordRepeat.querySelector('input');

var myPassword_error = myPassword.querySelector('label');
var myPasswordRepeat_error = myPasswordRepeat.querySelector('label');

var button_password = myPassword.querySelector('button');

myPassword_input.addEventListener('input', errorNowPassword);
myPasswordRepeat_input.addEventListener('input', errorNowPasswordRepead);

button_password.addEventListener('click', autonpassword);

function errorNowPassword() {
    var inputValue = myPassword_input.value;

    var regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!"#$%&*+,\-()./:;<=>?@[\]^_{|}~])/;

    if(regex.test(inputValue) && inputValue.length > 7 && inputValue.length < 21){
        myPassword_error.classList.remove('active');
    }else{
        myPassword_error.classList.add('active');
    }

    errorNowPasswordRepead();
}

function errorNowPasswordRepead(){
    var inputValue = myPasswordRepeat_input.value;
    
    if(myPasswordRepeat_input.value === myPassword_input.value){
        myPasswordRepeat_error.classList.remove('active');
    }else{
        myPasswordRepeat_error.classList.add('active');
    }
}

function autonpassword(event) {
    event.preventDefault();

    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!"#$%&*+,-.()/:;<=>?@[\]^_{|}~';
    var password = '';
  
    for (var i = 0; i < 16; i++) {
      var randomIndex = Math.floor(Math.random() * characters.length);
      password += characters.charAt(randomIndex);
    }
  
    myPassword_input.value = ' ';
    myPasswordRepeat_input.value = ' ';
    setTimeout(() => {
        myPassword_input.value = password;
        myPasswordRepeat_input.value = password;

        errorNowPassword();
        errorNowPasswordRepead();
    }, 250);

}
  