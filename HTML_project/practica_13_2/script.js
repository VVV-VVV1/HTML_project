// Получаем контейнер для уведомлений
var notificationContainer = document.getElementById("notificationContainer");

// Добавляем обработчик события на контейнер
notificationContainer.addEventListener("click", function(event) {
  // Проверяем, что была нажата кнопка закрытия
  if (event.target.classList.contains("closeButton")) {
    // Получаем родительский элемент у кнопки закрытия
    var notification = event.target.parentNode;
    // Удаляем уведомление
    notificationContainer.removeChild(notification);
  }
});

// Функция для создания уведомлений
function createNotification(message) {
  // Создаем элемент уведомления
  var notification = document.createElement("div");
  notification.className = "notification";
  
  // Создаем кнопку закрытия
  var closeButton = document.createElement("span");
  closeButton.className = "closeButton";
  closeButton.textContent = "x";
  
  // Добавляем кнопку закрытия к уведомлению
  notification.appendChild(closeButton);
  
  // Добавляем сообщение к уведомлению
  var messageElement = document.createElement("span");
  messageElement.textContent = message;
  notification.appendChild(messageElement);
  
  // Добавляем уведомление к контейнеру
  notificationContainer.appendChild(notification);
}

// Пример использования
createNotification("Уведомление 1");
createNotification("Уведомление 2");