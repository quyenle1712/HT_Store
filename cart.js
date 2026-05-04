function getCart(){
return JSON.parse(localStorage.getItem("cart")) || [];
}

function saveCart(cart){
localStorage.setItem("cart", JSON.stringify(cart));
}

function addToCart(product){
let cart = getCart();

let existing = cart.find(item => item.id === product.id);

if(existing){
existing.qty += product.qty;
}else{
cart.push(product);
}

saveCart(cart);
alert("Đã thêm vào giỏ hàng!");
}

function removeItem(id){
let cart = getCart().filter(item => item.id !== id);
saveCart(cart);
renderCart();
}

function updateQty(id, qty){
let cart = getCart();
cart.forEach(item=>{
if(item.id === id){
item.qty = qty;
}
});
saveCart(cart);
renderCart();
}