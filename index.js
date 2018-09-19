var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var add = {
   itemName: item, 
   itemPrice: Math.floor((Math.random() * 100) + 1), 
 };
  cart.push(add);
 return (`${item} has been added to your cart.`)
}

function viewCart() {
 if (cart.length === 0) {
    return 'Your shopping cart is empty.';
  }
  var yourCart = 'In your cart, you have ';
  for (let i = 0; i < cart.length; i++) {
    yourCart += `${cart[i].itemName} at $${cart[i].itemPrice}`;
    if (i === cart.length - 2) {
      yourCart += ', and ';
    } else if (i < cart.length - 2) {
      yourCart += ', '
    } else {
      yourCart += '.';
    }
  }
  return yourCart;
}

function total() {
  // write your code here
  var cartTotal = 0;
  for (let i = 0; i < cart.length; i++) {
    cartTotal += cart[i].itemPrice;
  }
  return cartTotal;
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
