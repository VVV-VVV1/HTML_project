document.addEventListener('DOMContentLoaded', function() {
  var myList = document.getElementById('myList');
  var items = myList.getElementsByTagName('li');

  for (var i = 0; i < items.length; i++) {
    items[i].addEventListener('click', function(event) {
      event.preventDefault();
      
      var ctrlKey = event.ctrlKey || event.metaKey; // Проверяем, нажата ли клавиша Ctrl или Cmd (для Mac)
      
      if (ctrlKey) {
        this.classList.toggle('selected');
      } else {
        for (var j = 0; j < items.length; j++) {
          items[j].classList.remove('selected');
        }
        
        this.classList.add('selected');
      }
    });
  }
});