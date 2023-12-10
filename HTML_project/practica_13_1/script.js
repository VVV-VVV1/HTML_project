document.addEventListener('DOMContentLoaded', function() {
  var container = document.getElementById('container');
  var image = document.getElementById('image');

  document.addEventListener('click', function(event) {
    var xPos = event.clientX - container.offsetLeft;
    var yPos = event.clientY - container.offsetTop;
    console.log('Координаты клика: X=' + xPos + ', Y=' + yPos);
  });
});