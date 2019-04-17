import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';

import thumbnail_rajaton_logo_harmaa from '../assets/thumbnail_rajaton_logo_harmaa.png';
import styles from '../styles/NavigationBar.module.css';

const NAVBAR_ITEMS = ['home', 'shop', 'about', 'contact'];

export default class NavigationBar extends Component {

    state = {
        navbarItems: NAVBAR_ITEMS,
    }

    render() {
        return (
            <>
                {this.props.brandVisible &&
                    <img
                        style={{ height: '100px', width: '90px', position: "absolute", margin: '1em 2em 0.5em' }}
                        src={thumbnail_rajaton_logo_harmaa}
                        alt='rajaton-logo'
                    />}
                <Navbar className={styles.naviBar} style={{ zIndex: 1, paddingTop: '3em', float: this.props.float, width: this.props.width }} expand="md">
                    {this.props.brandVisible && <Navbar.Brand>
                    </Navbar.Brand>}
                    <Navbar.Toggle className={styles.naviToggle} />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className={styles.textItemBar} >
                            {this.state.navbarItems.map((item, index) => {
                                return <a key={index} className={styles.navlinkItem} href={item}>{item.toUpperCase()}</a>
                            })}
                            <a className={styles.navlinkItem} href='shopping-cart'><span role="img" aria-label="shopping cart">🛒</span></a>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar >
            </>
        );
    }
}