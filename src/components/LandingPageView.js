import React from 'react';
import NavigationBar from '../containers/NavigationBar';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import '../styles/LandingPage.css';
import thumbnail_rajaton_logo_harmaa from '../assets/thumbnail_rajaton_logo_harmaa.png';

const NAVBAR_WIDTH = '100%';
const NAVBAR_FLOAT = 'left';

const SmoothScroll = () => (
    <div style={{ textAlign: "center" }}>
        <AnchorLink href='#shop-window'>
            <button className='shopNowButton svg'>
                SHOP NOW <br />
                <svg
                    width="35"
                    height="35"
                    viewBox="0 0 40 42"
                    version="1.1"
                >
                    <g>
                        <path
                            d="M 0 20 L 20 40 L 40 20  "
                            id="triangle" />
                    </g>
                </svg>
            </button>
        </AnchorLink>
    </div>
)

const LandingPageView = (props) => {

    return (
        <div className='landingPage'>
            <NavigationBar width={NAVBAR_WIDTH} float={NAVBAR_FLOAT} />
            <img
                className='landingPageImage'
                src={thumbnail_rajaton_logo_harmaa}
                alt='rajaton-foggy-landscape'
            />
            <SmoothScroll />
        </div>
    );

}

export default LandingPageView;