import React from 'react';
import ShopWindow from '../containers/ShopWindow';
import NavigationBar from '../containers/NavigationBar';
import '../styles/LandingPage.css'

const LandingPage = (props) => {

    return (
        <>
            <NavigationBar />
            <br/>
            <br/>
            <br/>
            <ShopWindow />
        </>
    );

}

export default LandingPage;