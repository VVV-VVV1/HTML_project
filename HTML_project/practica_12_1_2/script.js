let counter = 0;
let intervalId;

function showNotification() {
  const notification = document.createElement('div');
  notification.classList.add('notification');
  notification.textContent = `Уведомление ${counter + 1}`;

  document.body.appendChild(notification);

  setTimeout(() => {
    notification.remove();
  }, 1500);

  counter++;
  document.getElementById('counter').textContent = counter;
}

function startNotifications() {
  intervalId = setInterval(showNotification, 3000);
}

function stopNotifications() {
  clearInterval(intervalId);
}

document.getElementById('notificationBtn').addEventListener('click', () => {
  stopNotifications();
  setTimeout(startNotifications, 10000);
});

startNotifications();