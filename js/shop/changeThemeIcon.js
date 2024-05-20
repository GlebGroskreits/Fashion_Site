const categories = document.querySelector('.categories-header');
const icon_arrow = categories.querySelectorAll('img');

function seticonshop(){
    const theme = localStorage.getItem('Theme');

    if(theme === 'dark'){
        icon_arrow[0].src = "../image/shop/arrowleft_black.svg";
        icon_arrow[1].src = "../image/shop/arrowright_black.svg"
    }else{
        icon_arrow[0].src = "../image/shop/arrowleft.svg";
        icon_arrow[1].src = "../image/shop/arrorright.svg"
    }
}

seticonshop();