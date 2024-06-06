function loadMap() {
    var mapContainer = document.getElementById('map');
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.charset = 'utf-8';
    script.async = true;
    script.src = 'https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3Ac8200fba34a6af1a7f9f9c163fe9156ded62e41176a4fc03e9486e38f4f6624d&amp;width=100%25&amp;height=500&amp;lang=ru_RU&amp;scroll=true';
  
    mapContainer.appendChild(script);
  }
  
  loadMap();