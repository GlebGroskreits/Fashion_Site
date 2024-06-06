const point = document.querySelectorAll('.point-card-text');

var images = [];

point.forEach(points => {
    const images_one = points.querySelector('img');
    images.push(images_one);
});

function seticonshop(){
    const theme = localStorage.getItem('Theme');

    if(theme === 'dark'){
        images[0].src = "../image/FAQ/point1_black.svg";
        images[1].src = "../image/FAQ/point2_black.svg";
        images[2].src = "../image/FAQ/point3_black.svg";
    }else{
        images[0].src = "../image/FAQ/point1.svg";
        images[1].src = "../image/FAQ/point2.svg";
        images[2].src = "../image/FAQ/point3.svg";
    }
}

seticonshop();