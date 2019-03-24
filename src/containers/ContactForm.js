import React, { Component } from 'react';
import { Row, Form, Container, Col } from 'react-bootstrap';
import Axios from 'axios';
import '../styles/FormStyles.css';
import '../styles/ShopWindow.css';

const API_ADDRESS = 'http://localhost:1234';
const CONTACT_TEXT = 'We would be happy to hear from you! Please contact us trough this form and we\'ll get back to you as soon as possible.'

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
        Axios.post(API_ADDRESS + '/api/new-email', this.state.formDetails)
            .then(response => {
                console.log(response);
            })
    }

    render() {
        return (
            <Row className='contactRow'>
                <Col md='2' style={{ height: '0px' }}></Col>
                <Col sm='6' md='4'>
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
                        <button className="greyButton" type="submit">
                            Send
                    </button>
                    </Form>
                </Col>
                <Col sm='6' md='4' className='contactText'>
                    <Container>
                        <h2>CONTACT</h2>
                        <p>{CONTACT_TEXT}</p>
                    </Container>
                </Col>
                <Col md='2'></Col>
            </Row>
        );
    }
}

export default ContactForm;