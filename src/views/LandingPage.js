import React from 'react';
import NavigationBar from '../containers/NavigationBar';
import LandingPageMainImage from '../components/LandingPageMainImage';

const LandingPage = (props) => {

    return (
        <div>
            <NavigationBar />
            <LandingPageMainImage />
        </div>
    );

}

export default LandingPage;