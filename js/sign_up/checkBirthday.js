const myBirthday = document.getElementById('birthday');

const myBirthday_input = myBirthday.querySelector('input');
const myBirthday_error = myBirthday.querySelector('label');

myBirthday_input.addEventListener('input', function() {
    // Получаем значение даты
    const selectedDate = new Date(this.value);
  
    // Извлекаем отдельные компоненты даты
    const year = selectedDate.getFullYear();
    const month = selectedDate.getMonth() + 1; // Месяцы в JavaScript нумеруются от 0 до 11
    const day = selectedDate.getDate();
  
    if(year > 2008){
        myBirthday_error.classList.add('active');
    }else{
        myBirthday_error.classList.remove('active');
    }
  });