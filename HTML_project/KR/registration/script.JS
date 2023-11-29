const registrationForm = document.getElementById('registrationForm');
    
    registrationForm.addEventListener('submit', function(event) {
      event.preventDefault();
      
      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;
      
      // Проверяем, поддерживает ли браузер localStorage
      if (typeof(Storage) !== 'undefined') {
        // Проверяем, есть ли уже сохраненные пользователи
        let users = localStorage.getItem('users');
        
        if (!users) {
          users = [];
        } else {
          users = JSON.parse(users);
        }
        
        // Добавляем нового пользователя
        users.push({ username, password });
        
        // Сохраняем обновленный список пользователей
        localStorage.setItem('users', JSON.stringify(users));
        
        // Очищаем поля формы
        document.getElementById('username').value = '';
        document.getElementById('password').value = '';
        
        alert('Регистрация успешна!');
      } else {
        alert('Ваш браузер не поддерживает localStorage, регистрация невозможна.');
      }
    });