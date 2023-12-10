window.addEventListener('scroll', function() {
  var scrollPosition = window.scrollY;
  var windowHeight = window.innerHeight;
  var documentHeight = document.documentElement.scrollHeight;
  
  if (scrollPosition + windowHeight >= documentHeight) {
    // Ваш код для загрузки нового контента или выполнения других действий при достижении конца страницы
  }
});
