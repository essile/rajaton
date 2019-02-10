import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';

import styles from '../styles/NavigationBar.module.css';

const NAVBAR_ITEMS = ['home', 'shop', 'about', 'contact'];

export default class NavigationBar extends Component {

    state = {
        navbarItems: NAVBAR_ITEMS,
    }

    render() {
        return (
            <Navbar style={{ position: 'absolute', zIndex: 1, marginTop: '1.5em' }} expand="md">
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className={styles.textItemBar} >
                        {this.state.navbarItems.map((item, index) => {
                            return <a key={index} className={styles.navlinkItem} href="">{item.toUpperCase()}</a>
                        })}
                        <a className={styles.navlinkItem} href=""><span>🛒</span></a>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}