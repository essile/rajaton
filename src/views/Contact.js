import React from 'react';
import '../styles/LandingPage.css'
import NavigationBar from '../containers/NavigationBar';
import ContactForm from '../containers/ContactForm';

const LandingPage = (props) => {

    return (
        <div>
            <NavigationBar />
            <ContactForm />
        </div>
    );

}

export default LandingPage;