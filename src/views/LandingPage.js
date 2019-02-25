import React from 'react';
import LandingPageView from '../components/LandingPageView';
import ShopWindow from '../containers/ShopWindow';
import '../styles/LandingPage.css'

const LandingPage = (props) => {

    return (
        <div>
            <LandingPageView />
            <ShopWindow />
        </div>
    );

}

export default LandingPage;