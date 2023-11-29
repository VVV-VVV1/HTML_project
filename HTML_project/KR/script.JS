function addToCart(itemName) {
  var cartItems = document.getElementById("cartItems");
  
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(itemName));
  cartItems.appendChild(li);
}

// Функция для удаления всех товаров из корзины
function clearCart() {
  var cartItems = document.getElementById("cartItems");
  cartItems.innerHTML = "";
}