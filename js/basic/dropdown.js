const drop = document.querySelector('.dropdown');

const burger = document.querySelector('.burger-menu');
const burgerlog = burger.querySelector('img');

const headerfunctional = document.querySelector('.header-functional');
const imgheaderfun = document.querySelectorAll('img');
const imglogout = imgheaderfun[2];

const pdropdown = drop.querySelectorAll('p');

const actuser = localStorage.getItem('ActiveUsser');

if(actuser == '' || actuser == null){
    imglogout.addEventListener('click', sign);
    burgerlog.addEventListener('click', sign);
}else{
    imglogout.addEventListener('click', show);
    burgerlog.addEventListener('click', show);
}


pdropdown[2].addEventListener('click', sign);
pdropdown[4].addEventListener('click', show);
pdropdown[5].addEventListener('click', logoutdrop);

function show(){
    const activeUserString = localStorage.getItem('ActiveUsser');
    const activeU = activeUserString ? JSON.parse(activeUserString) : null;

    if (activeU) {
        drop.classList.toggle('active');
        pdropdown[1].textContent = activeU.nickname;
    }
    else{
       location.href = "../pages/home.html"
    }
}

function sign(){
    if(!location.href.includes("sign_up.html")){
        location.href = "../pages/sign_up.html";
    }
    else{
        location.href = "../pages/sign_in.html";
    }
}

function logoutdrop(){
    localStorage.setItem('ActiveUsser', '');
    location.reload();
}

window.addEventListener('scroll', () => {
    drop.classList.remove('active');
});