import React from 'react';

import '../styles/LandingPage.css';
import '../styles/FormStyles.css';

import NavigationBar from '../containers/NavigationBar';
import ContactForm from '../containers/ContactForm';

const LandingPage = (props) => {

    return (
        <>
            <NavigationBar />
            <ContactForm />
        </>
    );

}

export default LandingPage;