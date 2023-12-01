function showNotification() {
  var notification = document.getElementById("notification");
  notification.style.display = "block";
  setTimeout(function(){
    notification.style.display = "none";
    setTimeout(function(){
      showNotification();
    }, 1500);
  }, 1500);
}

showNotification();