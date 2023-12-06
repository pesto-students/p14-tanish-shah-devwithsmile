let productViews = new WeakMap();
let cartItems = new WeakSet();

function incrementProductViews(productId) {
  if (!productViews.has(productId)) {
    // Product not present in the WeakMap, add it with an initial value of 1
    productViews.set(productId, 1);
  } else {
    // Product already present, increment the view count by 1
    productViews.set(productId, productViews.get(productId) + 1);
  }
}

function addToCart(productId) {
  if (cartItems.has(productId)) {
    // Product already in the cart
    return "Product already in cart";
  } else {
    // Product not in the cart, add it to the WeakSet
    cartItems.add(productId);
    return "Product added to cart";
  }
}

// Example usage:
incrementProductViews(123);
console.log(productViews.get(123)); // Output: 1

incrementProductViews(123);
console.log(productViews.get(123)); // Output: 2

console.log(addToCart(123)); // Output: "Product added to cart"
console.log(addToCart(123)); // Output: "Product already in cart"
