var signupCont = document.querySelector('.sign-up-on');

var signBtn = signupCont.querySelector('p');

signBtn.addEventListener('click', readdata);

var field = ['name', 'surname', 'patronymic','phone','email','birthday','nickname', 'password', 'passwordRepead','checkbox'];
var check = true;
var user;

function readdata(){
    if(checkdata()){
        writedata();
        location.reload(); 
    }
}

function checkdata(){
    check = true;

    var act = document.querySelectorAll('.active');

    if(act.length === 0){
        for(let i = 0; i  < field.length; i++){
            var form = document.getElementById(field[i]);
            var input_error = form.querySelector('.input__error');
            
            if(i !== 2){    
                if(i != 5 && i != 9){
                    var input = form.querySelector('input');

                    if(input.value == ''){
                        input_error.classList.add('active');
                        check = false;
                    }
                }else{
                    if(i == 5){
                        var input = form.querySelectorAll('input');

                        for(let i = 0; i < input.length; i++){
                            if(input[i].value === ''){
                                input_error.classList.add('active');
                                check = false;
                            }
                        }
                    }
                    else{
                        var input = form.querySelector('input');

                        if(!input.checked){
                            input_error.classList.add('active');
                            check = false;
                        }
                    }
                }
            }
        }
    }
    else{
        check = false;
    }

    return check;
}

async function writedata(){
    const storedData = localStorage.getItem('Usser');
    user = JSON.parse(storedData);

    var newUser = setnewUser();

    user.push(newUser);

    RewriteUser(user);
}

async function getUser(){
    try {
        const response = await fetch('../js/sign_up/users.json');
        if (!response.ok) {
          throw new Error('Ой, ошибка в fetch: ' + response.statusText);
        }
        const jsonData = await response.json();
        return jsonData;
    } catch (error) {
        console.error('Ошибка при исполнении запроса: ', error);
        return null;
    }
}

function setnewUser(){
    var data = document.querySelector('.sign-up-registration');
    var data_input = data.querySelectorAll('input');

    var newUser = {
        name: data_input[0].value,
        surname : data_input[1].value,
        patronymic: data_input[2].value,
        birth: data_input[3].value,
        phone: data_input[4].value,
        email: data_input[5].value,
        nickname: data_input[6].value,
        password: data_input[7].value,
        role: 'user'
    }

    return newUser;
}

function RewriteUser(user){
    const jsonString = JSON.stringify(user);
    localStorage.setItem('Usser', jsonString);
}

window.addEventListener('DOMContentLoaded', async function() {
    const storedData = localStorage.getItem('Usser');
    user = JSON.parse(storedData);

    if(user == null || user == ''){
        user = await getUser();

        const usersString = JSON.stringify(user);
        localStorage.setItem('Usser', usersString);
        console.log(user);
    }
});