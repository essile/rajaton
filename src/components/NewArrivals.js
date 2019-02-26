import React from 'react';
import { Row, Col } from 'react-bootstrap';
import '../styles/ShopWindow.css';

const NewArrivals = () => {

    return (
        <Row className='shopWindow'>
            <Col md={2} className='col2Indent' ></Col>
            <Col md={4} className='newArrivalsText'>
                <h2>
                    NEW {'   '}<br />
                    ARRIVALS
                </h2>
                <br /><br />
                <div>
                    100% natural and fresh <br />
                    for you mr. road chill
                    <br /><br />
                    <button className='greyButton'>SHOP NOW</button>
                </div>
            </Col>
            <Col md={6} className='newArrivalsImgCol'>
                <img
                    className='newArrivalsImage'
                    src={window.location.origin + '/savu_mainos_W_transparent.png'}
                    alt='rajaton-foggy-landscape'
                />
            </Col>
        </Row>
    );

}

export default NewArrivals;