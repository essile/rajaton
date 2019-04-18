const shoppingCart = { test: 'hello' }

export function addToCart(product) {
    
    if (shoppingCart.lenght === 0) {
        shoppingCart = [];
    }

    shoppingCart[product.name] = product.count;

    return shoppingCart;
}

export function getCartItems() {
    
    return shoppingCart;
}