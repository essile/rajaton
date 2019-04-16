import React, { Component } from 'react';
import { Row, Form, Col } from 'react-bootstrap';
import Axios from 'axios';
import '../styles/FormStyles.css';
import '../styles/ShopWindow.css';

const CONTACT_TEXT = 'We would be happy to hear from you! Please contact us trough this form or via email and we\'ll get back to you as soon as possible.'
const CONTACT_EMAIL = 'email: rajatonproducts (a) gmail.com'

class ContactForm extends Component {

    state = {
        formDetails: {
            formName: '',
            formEmail: '',
            formSubject: '',
            formMessage: '',
        }
    }

    handleChange = (event) => {
        let formDetails = { ...this.state.formDetails };
        const changingField = event.target.id;
        const value = event.target.value;
        formDetails[changingField] = value;

        this.setState({ formDetails });
    }

    sendEmail = (event) => {
        event.preventDefault();
        Axios.post(`${document.location.origin}/.netlify/functions/email`, this.state.formDetails)
            .then(response => {
                console.log(response);
            })
    }

    render() {
        return (
            <Row className='contactRow'>
                <Col xs={{ span: 12, order: 3 }} lg={{ span: 2, order: 1 }} />
                <Col xs={{ span: 12, order: 2 }} lg={{ span: 4, order: 1 }}>
                    <Form onSubmit={this.sendEmail} className='rajatonForm'>
                        <Form.Group controlId="formName">
                            <Form.Control type="text" placeholder="Name" value={this.state.formName} onChange={this.handleChange} />
                        </Form.Group>
                        <Form.Group controlId="formEmail">
                            <Form.Control type="email" placeholder="Email" value={this.state.formEmail} onChange={this.handleChange} />
                        </Form.Group>
                        <Form.Group controlId="formSubject">
                            <Form.Control type="text" placeholder="Subject" value={this.state.formSubject} onChange={this.handleChange} />
                        </Form.Group>
                        <Form.Group controlId="formMessage">
                            <Form.Control as="textarea" rows="5" placeholder="Message" value={this.state.formMessage} onChange={this.handleChange} />
                        </Form.Group>
                        <button className="greyButton" type="submit" style={{ width: '100%' }}>
                            Send
                        </button>
                    </Form>
                </Col>
                <Col xs={{ span: 12, order: 1 }} lg={{ span: 4, order: 2 }} className='contactText'>
                    <h2 style={{ letterSpacing: '10px', color: '#6E6E6E', fontWeight: 'lighter' }}>CONTACT</h2>
                    <div style={{ color: '#848484' }}>
                        <p>{CONTACT_TEXT}</p>
                        <p>{CONTACT_EMAIL}</p>
                    </div>
                </Col>
                <Col xs={{ span: 12, order: 4 }} lg={{ span: 2, order: 4 }} />
            </Row >
        );
    }
}

export default ContactForm;