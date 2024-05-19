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

  seticontheme();

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

const footer = document.querySelector('.footer-left-container-link');
const icon_footer = footer.querySelectorAll('img');

function seticontheme(){
  const theme = localStorage.getItem('Theme');

  if(theme === 'dark'){
    icon_themeBtn[0].src = "../image/basic/language_black.svg";
    icon_themeBtn[1].src = "../image/basic/theme_black.svg";
    icon_themeBtn[2].src = "../image/basic/logout_black.svg";

    icon_footer[0].src = "../image/basic/telephone_black.svg"
    icon_footer[1].src = "../image/basic/github_black.svg"
    icon_footer[2].src = "../image/basic/pochta_black.svg"
  }else{
    icon_themeBtn[0].src = "../image/basic/languageh.svg";
    icon_themeBtn[1].src = "../image/basic/themeh.svg";
    icon_themeBtn[2].src = "../image/basic/logout.svg";

    icon_footer[0].src = "../image/basic/ftelephone.svg";
    icon_footer[1].src = "../image/basic/fgtihub.svg";
    icon_footer[2].src = "../image/basic/fpochta.svg";
  }
}