var slidepag;

fetch('../js/home/slidepag.json')
  .then(response => {
    if (!response.ok) {
      throw new Error('ошибка в fetch: ' + response.statusText);
    }
    return response.json();
  })
.then(jsonData => {slidepag = jsonData;})
.catch(error => console.error('Ошибка', error));

const rewievs = document.querySelector('.rewievs');

var active_index = 0;

const image = rewievs.querySelector('.rewievs-contant-circle');
const contant_text = rewievs.querySelector('.rewievs-contant-text');
const text = contant_text.querySelectorAll('p');

const slideBtnLeft = rewievs.querySelector('.rewievs-btn-left');
const slideBrnRight = rewievs.querySelector('.rewievs-btn-right');
const paggination = rewievs.querySelectorAll('li');

paggination.forEach((item, index) => {
    item.addEventListener('click', () => activeAdd(index));
});

slideBtnLeft.addEventListener('click', slideLeft);
slideBrnRight.addEventListener('click', slideRight);

function activeAdd(index){
    active_index = index;
    setDataReview(active_index);
}

function slideLeft(){
    if(active_index === 0)
    {
        active_index = 5;
    }
    else{
        active_index--;
    }

    setDataReview(active_index);
}

function slideRight(){
    if(active_index === 5)
    {
        active_index = 0;
    }
    else{
        active_index++;
    }

    setDataReview(active_index);
}

function setDataReview(index){
    paggination.forEach(item => item.classList.remove('active'));
    paggination[index].classList.add('active');

    image.style.backgroundColor = slidepag[index].image;
    text[0].textContent = slidepag[index].p1;
    text[1].textContent = slidepag[index].p2;
}
