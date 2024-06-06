fetch('../js/home/en-ru.json')
  .then(response => {
    if (!response.ok) {
      throw new Error('ошибка в fetch: ' + response.statusText);
    }
    return response.json();
  })
.then(jsonData => {
    languageArray = jsonData; 
    loadLanguage();
})
.catch(error => console.error('Ошибка', error));