var slider = document.getElementById('slider');
var handle = document.createElement('div');
var dragging = false;

handle.className = 'handle';
slider.appendChild(handle);

slider.addEventListener('mousedown', function(event) {
  dragging = true;
});

document.addEventListener('mousemove', function(event) {
  if (dragging) {
    var handlePosition = event.clientX - slider.getBoundingClientRect().left;
    handlePosition = Math.max(0, Math.min(handlePosition, slider.offsetWidth));
    handle.style.left = handlePosition + 'px';
  }
});

document.addEventListener('mouseup', function(event) {
  dragging = false;
});