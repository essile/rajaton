import React, { Component } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import Axios from 'axios';
import '../styles/FormStyles.css';

const API_ADDRESS = 'http://localhost:1234';

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
            <Container>
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
                    <Button variant="primary" type="submit">
                        Send
                </Button>
                </Form>
            </Container>
        );
    }
}

export default ContactForm;