import React from 'react';
import NavigationBar from '../containers/NavigationBar';
import '../styles/LandingPage.css'
import thumbnail_rajaton_logo_harmaa from '../assets/thumbnail_rajaton_logo_harmaa.png';

const LandingPageView = (props) => {

    return (
        <div className='landingPage'>
            <NavigationBar />
            <img
                className='landingPageImage'
                // style={{ zIndex: 0, height: '225px', margin: 'auto', marginTop: '2em', display: 'block' }}
                src={thumbnail_rajaton_logo_harmaa}
                alt='rajaton-foggy-landscape'
            />
        </div>
    );

}

export default LandingPageView;