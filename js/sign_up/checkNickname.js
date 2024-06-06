const myNickname = document.getElementById('nickname');

const myNickname_input = myNickname.querySelector('input');
const myNickname_error = myNickname.querySelector('label');

var button_nickname = myNickname.querySelector('button');

myNickname_input.addEventListener('input', errorNowNickname);
button_nickname.addEventListener('click', randomNickname);

function errorNowNickname() {
    var inputValue = myNickname_input.value;

    if (inputValue.length > 20 || inputValue.length < 2 || inputValue.trim() === '' || inputValue.indexOf(' ') !== -1) {
        myNickname_error.classList.add('active');
    }else{
        myNickname_error.classList.remove('active');
    }
}

function randomNickname(event) {
    event.preventDefault();

    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var nickname = '';
  
    for (var i = 0; i < 16; i++) {
      var randomIndex = Math.floor(Math.random() * characters.length);
      nickname += characters.charAt(randomIndex);
    }

    myNickname_input.value = ' ';
    setTimeout(() => {
        myNickname_input.value = nickname;

        if (nickname.length > 20 || nickname.length < 2 || nickname.trim() === '' || nickname.indexOf(' ') !== -1) {
            myNickname_error.classList.add('active');
        }else{
            myNickname_error.classList.remove('active');
        }
    }, 250);
}