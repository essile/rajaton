import { addToCart, getCartItems } from '../backend/shoppedItems.js';

exports.handler = function (event, context, callback) {

    if (event.httpMethod === "POST" || event.httpMethod === "GET") {

        if (event.httpMethod === "GET") {
            const cartItems = getCartItems();
            console.log('get received, answer', cartItems);

            return {
                statusCode: 200,
                body: cartItems
            };
        }

        if (event.httpMethod === "POST") {

            const params = JSON.parse(event.body);
            console.log('post received. item', params.item);
            
            try {
                const newShoppingCart = addToCart(params.item);
            } 
            catch(error) {
                console.log(error);
            }
            
            console.log('returning', newShoppingCart);

            return {
                statusCode: 200,
                body: newShoppingCart
            };
        }
    }

    return { statusCode: 405, body: "Method Not Allowed" };
}