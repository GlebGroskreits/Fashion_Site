const theme = document.getElementById('theme');

const burger_menu_theme = document.querySelectorAll('.burger-menu-double');
const text_theme = burger_menu_theme[1].querySelectorAll('p');
const icon_theme = document.querySelector('.header-functional');
const icon_themeBtn = icon_theme.querySelectorAll('img');

text_theme[0].addEventListener('click', setDark);
text_theme[1].addEventListener('click', setLight);
icon_themeBtn[1].addEventListener('click', changeTheme);

window.addEventListener('DOMContentLoaded', function() {
  const savedTheme = localStorage.getItem('Theme');
  if (savedTheme && (savedTheme === "dark" || savedTheme === "light")) {

    var lastIndex = theme.href.lastIndexOf("/");
    var newTheme = theme.href.substring(0, lastIndex + 1) + savedTheme + "Theme" + theme.href.substring(theme.href.lastIndexOf("."));

    theme.href = newTheme;
  } 
  else {
    theme.href = theme.href.replace("dark", "light");
    localStorage.setItem('Theme', "light");
  }
});

function setDark(){
    localStorage.setItem('Theme', "dark");
    theme.href = theme.href.replace("light", "dark");

    location.reload();
}

function setLight(){
    localStorage.setItem('Theme', "light");
    theme.href = theme.href.replace("dark", "light");

    location.reload();
}

function changeTheme(){
    const savedTheme = localStorage.getItem('Theme');

    if(savedTheme == 'dark'){
        localStorage.setItem('Theme', "light");
        theme.href = theme.href.replace("dark", "light");
    }else{
        localStorage.setItem('Theme', "dark");
        theme.href = theme.href.replace("light", "dark");
    }

    location.reload();
}