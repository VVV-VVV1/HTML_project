var contents = document.getElementById('contents');
  
  contents.addEventListener('click', function(event) {
    var target = event.target;
    
    // Проверяем, что клик был произведен на ссылке
    if (target.tagName === 'A') {
      // Выводим диалоговое окно с вопросом
      var confirmLeave = confirm('Вы действительно хотите покинуть страницу?');
      
      // Если пользователь не хочет покидать страницу, прерываем переход по ссылке
      if (!confirmLeave) {
        event.preventDefault();
      }
    }
  });