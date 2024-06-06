var myName = document.getElementById('nickname');
var myPassword = document.getElementById('password');

var myName_input = myName.querySelector('input');
var myPassword_input = myPassword.querySelector('input');

var myName_error = myName.querySelector('label');
var myPassword_error = myPassword.querySelector('label');

var signBtnIn = document.querySelector('.lng-sign-in');

signBtnIn.addEventListener('click', checkuser);

const storedData = localStorage.getItem('Usser');
user = JSON.parse(storedData);

var id = 0;

function checkuser(){
    var namevalue = myName_input.value;
    var passwordvalue = myPassword_input.value;

    var bnickname = false;
    var bpassword = false;

    if(namevalue === ''){
        myName_input.classList.add('active');
    }
    if(passwordvalue === ''){
        myPassword_input.classList.add('active');
    }

    for(let i = 0; i < user.length; i++){

        if(user[i].nickname == namevalue){
            bnickname = true;
            if(user[i].password == passwordvalue){
                bpassword = true;
                id = i;
                i = user.length;
            }
            else{
                bnickname = false;
                bpassword = false;
            }
        }
    }
    console.log('1');
    if(bnickname == true && bpassword == true){
        console.log('2');
        var ActiveUser = user[id];
        const actuser = JSON.stringify(ActiveUser);
        localStorage.setItem('ActiveUsser', actuser);
        window.location.href = "../pages/home.html"
    }
    else{
        console.log('3');
        myName_error.classList.add('active');
        myPassword_error.classList.add('active');
    }
}