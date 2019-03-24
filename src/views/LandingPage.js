import React from 'react';
import LandingPageView from '../components/LandingPageView';
import ShopWindow from '../containers/ShopWindow';
import '../styles/LandingPage.css'
import NewArrivals from '../components/NewArrivals';

const LandingPage = (props) => {

    return (
        <>
            <LandingPageView />
            <NewArrivals />
            <ShopWindow />
        </>
    );

}

export default LandingPage;