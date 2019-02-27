import React from 'react';
import { Row, Col } from 'react-bootstrap';
import '../styles/ShopWindow.css';

const NewArrivals = () => {

    return (
        <Row className='shopWindowNewArrivals'>
            <Col md={1} className='col1Indent' ></Col>
            <Col md={5} className='newArrivalsText'>
                <h2>
                    NEW {'   '}<br />
                    ARRIVALS
                </h2>
                <div className='newArrivalsP'>
                    <span style={{ fontWeight: "bolder" }}>100% natural and fresh</span> <br />
                    for you mr. road chill<br />
                    <button className='greyButton'>SHOP NOW</button>
                </div>
            </Col>
            <Col md={6} className='newArrivalsImgCol'>
                <img
                    className='newArrivalsImage'
                    src={window.location.origin + '/savu_mainos_W_transparent_short.png'}
                    alt='rajaton-foggy-landscape'
                />
            </Col>
        </Row>
    );

}

export default NewArrivals;