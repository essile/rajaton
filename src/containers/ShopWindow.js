import React, { Component } from 'react';
import Axios from 'axios';
import { Row, Col, Modal, Button } from 'react-bootstrap';
import '../styles/ShopWindow.css'
import ShoppingCart from './ShoppingCart';

const BUTTON_TEXT_ADD = 'Add to cart';
const formatter = new Intl.NumberFormat('fi-EN', {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: 2
})

class ShopWindow extends Component {

    state = {
        stockProducts: [],
        buttonTexts: [],
        showModal: false,
    };

    componentDidMount() {
        Axios.get(`${document.location.origin}/.netlify/functions/products`)
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
        this.setState({ showModal: true });
    }

    handleClose = () => {
        this.setState({ showModal: false });
    }

    render() {
        return (
            <>
                <Row className='shopWindow' id='shop-window'>
                    {this.state.stockProducts.map((product, index) => {
                        return <Col md={6} lg={4} key={index} style={{ padding: '2px' }}>
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
                <Modal show={this.state.showModal} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Shopping cart</Modal.Title>
                    </Modal.Header>
                    <Modal.Body><ShoppingCart /></Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={this.handleClose}>
                            Save Changes
                    </Button>
                    </Modal.Footer>
                </Modal>
            </>
        );
    }
}

export default ShopWindow;