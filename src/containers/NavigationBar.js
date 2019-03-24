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
            <Navbar className={styles.naviBar} style={{ zIndex: 1, paddingTop: '3em', float: this.props.float, width: this.props.width }} expand="md">
                <Navbar.Toggle className={styles.naviToggle} />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className={styles.textItemBar} >
                        {this.state.navbarItems.map((item, index) => {
                            return <a key={index} className={styles.navlinkItem} href={item}>{item.toUpperCase()}</a>
                        })}
                        <a className={styles.navlinkItem} href='shopping-cart'><span>🛒</span></a>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}