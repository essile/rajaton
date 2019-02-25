import React from 'react';
import sumu_maisema_mainos_tuunattu_W from '../assets/sumu_maisema_mainos_tuunattu_W.png';

const LandingPageMainImage = () => {

    return (
        <img
            className='landingPageImage'
            style={{ position: 'absolute', zIndex: 0, width: '100%' }}
            src={sumu_maisema_mainos_tuunattu_W}
            alt='rajaton-foggy-landscape'
        />
    );

}

export default LandingPageMainImage;