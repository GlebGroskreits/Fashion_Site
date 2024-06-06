const eventscard = document.querySelectorAll('.events-card');

var card_images = [];

eventscard.forEach(card => {
    const images_one = card.querySelector('img');
    card_images.push(images_one);
});

function seticonshop(){
    const theme = localStorage.getItem('Theme');

    if(theme === 'dark'){
        card_images[0].src = "../image/blog/cart_black.svg";
        card_images[1].src = "../image/blog/money_black.svg";
        card_images[2].src = "../image/blog/packet_black.svg";
    }else{
        card_images[0].src = "../image/blog/bonuscard.svg";
        card_images[1].src = "../image/blog/money.svg";
        card_images[2].src = "../image/blog/shoppaket.svg";
    }
}

seticonshop();