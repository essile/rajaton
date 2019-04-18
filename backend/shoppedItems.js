const shoppingCart = { test: 'hello' }

export function addToCart(product, count) {
    
    if (shoppingCart.lenght === 0) {
        shoppingCart = [];
    }

    shoppingCart[product] = count;

    return shoppingCart;
}

export function getCartItems() {
    
    return shoppingCart;
}