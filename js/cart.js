
const addProduct = () => {
    const productField = document.getElementById('product-name');
    const productQuantity = document.getElementById('product-quantity');
    const product  =(productField.value);
    const quantity = parseInt(productQuantity.value);
    productField.value = '';
    productQuantity.value = '';

    console.log(product,quantity);
    disPlayProduct(product,quantity);
    saveProductToLocalStorage(product,quantity);
}

const disPlayProduct = (product,quantity) => {
    const ul = document.getElementById("product-container");
    const li = document.createElement("li");
    li.innerText = `${product}: ${quantity}`;
    ul.appendChild(li);
}   
// checking weather a value in local Storage or not

const getStoredShoppingCart = () => {
    const storedCart = localStorage.getItem('cart');
    let cart = {};
    if(storedCart) {
        cart = JSON.parse(storedCart);
    }
    return cart;
}

// saving new product and it's quantity
const saveProductToLocalStorage = (product,quantity) => {
    const cart = getStoredShoppingCart();
    cart[product] = quantity ;
    const cartStringified = JSON.stringify(cart);
    localStorage.setItem('cart',cartStringified);
}

// display saved localStorage data

const disPlayProductsFromLocalStorage = () => {
    
}