var languageArray;

window.addEventListener('DOMContentLoaded', function() {
    const savedLanguage = localStorage.getItem('Language');
    const currentLanguage = window.location.hash.substring(1);
    
    if (savedLanguage) {
      if (currentLanguage !== savedLanguage) {
        location.href = window.location.pathname + '#' + savedLanguage;
        location.reload();
      }
    }
});

const AllLanguage = ['ru', 'en'];

const icon_language = document.querySelector('.header-functional');
const icon_languageBtn = icon_language.querySelectorAll('img');

const russianBtn = document.querySelector('.lng-russian');
const englishBtn = document.querySelector('.lng-english');

russianBtn.addEventListener('click', changeLanguage);
englishBtn.addEventListener('click', changeLanguage);
icon_languageBtn[0].addEventListener('click', changeThemeIcon)


function changeLanguage(event) {
  let lang = event.target.getAttribute('data-value');

  localStorage.setItem('Language', lang);

  location.href = window.location.pathname + '#' + lang;

  location.reload();
}

function loadLanguage() {
  let hash = window.location.hash;
  hash = hash.substring(1);

  if (!AllLanguage.includes(hash)) {
    location.href = window.location.pathname + '#en';
    location.reload();
  }

  for (let key in languageArray) {
    console.log('.lng-' + key)
    document.querySelector('.lng-' + key).innerHTML = languageArray[key][hash];
  }
}

function changeThemeIcon(){
    const savedLanguge = localStorage.getItem('Language');

    if(savedLanguge === 'en'){
        localStorage.setItem('Language', 'ru');
        location.reload();
    }
    else{
        localStorage.setItem('Language', 'en');
        location.reload();
    }
}
