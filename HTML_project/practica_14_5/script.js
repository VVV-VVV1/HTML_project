function allowDrop(event) {
  event.preventDefault();
}

function drag(event) {
  event.dataTransfer.setData("text/plain", event.target.id);
}

function drop(event) {
  event.preventDefault();
  var itemId = event.dataTransfer.getData("text/plain");
  var item = document.getElementById(itemId);
  
  var cart = document.getElementById("cart");
  cart.appendChild(item);
  
  updateTotalPrice();
}

function updateTotalPrice() {
  var totalPrice = 0;
  var items = document.getElementById("cart").querySelectorAll("div");
  
  for (var i = 0; i < items.length; i++) {
    var price = parseInt(items[i].querySelector("p:nth-child(2)").textContent.split(":")[1]);
    var quantity = parseInt(items[i].querySelector("p:nth-child(3)").textContent.split(":")[1]);
    totalPrice += price * quantity;
  }
  
  document.getElementById("totalPrice").textContent = totalPrice;
}