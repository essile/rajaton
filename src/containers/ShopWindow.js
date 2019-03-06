import React, { Component } from 'react';
import Axios from 'axios';
import { Row, Col } from 'react-bootstrap';
import '../styles/ShopWindow.css'

const BUTTON_TEXT_ADD = 'Add to cart';
const BUTTON_TEXT_ADDED = 'Added to cart';
const formatter = new Intl.NumberFormat('fi-EN', {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: 2
})

class ShopWindow extends Component {

    state = {
        stockProducts: [],
        buttonTexts: []
    };

    componentDidMount() {
        Axios.get('https://affectionate-minsky-27b653.netlify.com/.netlify/functions/products')
            .then(response => {
                const buttonTexts = [];
                for (let i = 0; i < response.data.length; i++) {
                    buttonTexts[i] = BUTTON_TEXT_ADD;
                }
                this.setState({ stockProducts: response.data, buttonTexts });
                console.log(this.state.stockProducts);
            })
            .catch(error => {
                alert(error)
            })
    }

    handleClick = (product, index) => {
        if (this.state.buttonTexts[index] === BUTTON_TEXT_ADD) {
            this.addToCart(product);
            let copyOfButtonTexts = { ...this.state.buttonTexts };
            copyOfButtonTexts[index] = BUTTON_TEXT_ADDED;
            this.setState({ buttonTexts: copyOfButtonTexts });
        } else {
            this.removeFromCart(product);
            let copyOfButtonTexts = { ...this.state.buttonTexts };
            copyOfButtonTexts[index] = BUTTON_TEXT_ADD;
            this.setState({ buttonTexts: copyOfButtonTexts });
        }
    }

    addToCart = (product) => {
        console.log('adding to cart', product);
        // request to backend
    }

    removeFromCart = (product) => {
        console.log('removing from cart', product);
        // request to backend
    }

    render() {
        return (
            <Row className='shopWindow' id='shop-window'>
                {this.state.stockProducts.map((product, index) => {
                    return <Col md={6} lg={4} key={index} style={{ padding: 0 }}>
                        <div className='centeredImage'>
                            <img
                                className='productIconSmall'
                                alt={`${product.name} ${product.category}`}
                                src={window.location.origin + '/' + product.image_url}
                            />
                        </div>
                        <div className='centeredImage'>
                            <span className='productNameText'>
                                {product.name.toLowerCase()}
                            </span>
                            <br />
                            <span className='categoryText'>
                                {product.category.toLowerCase()}
                            </span>
                        </div>
                        <div className='productPrice'>
                            {formatter.format(product.price)}
                        </div>
                        <div style={{ textAlign: 'center' }}>
                            <button
                                className='addToCartButton'
                                id={`button${index}`}
                                onClick={() => this.handleClick(product, index)}
                            >
                                {this.state.buttonTexts[index].toUpperCase()}
                            </button>
                        </div>
                    </Col>
                })}
            </Row>
        );
    }
}

export default ShopWindow;