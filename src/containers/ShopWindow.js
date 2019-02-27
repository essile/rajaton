import React, { Component } from 'react';
import Axios from 'axios';
import { Row, Col } from 'react-bootstrap';
import '../styles/ShopWindow.css'

const API_ADDRESS = 'http://localhost:1234';
const BUTTON_TEXT = 'Add to cart';
const formatter = new Intl.NumberFormat('fi-EN', {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: 2
})

class ShopWindow extends Component {

    state = {
        stockProducts: [],
    };

    componentDidMount() {
        Axios.get(API_ADDRESS + '/api/shop-window-products')
            .then(response => {
                this.setState({ stockProducts: response.data });
                console.log(this.state.stockProducts);
            })
            .catch(error => {
                alert(error)
            })
    }

    render() {
        return (
            <Row className='shopWindow' id='shop-window'>
                {this.state.stockProducts.map((product, index) => {
                    return <Col md={6} lg={4} key={index} style={{ padding: 0 }}>
                        <div className='centeredImage'>
                            <img
                                className='productIconSmall'
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
                            >
                                {BUTTON_TEXT.toUpperCase()}
                            </button>
                        </div>
                    </Col>
                })}
            </Row>
        );
    }
}

export default ShopWindow;