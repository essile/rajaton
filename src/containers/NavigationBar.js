import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap'

const NAVBAR_ITEMS = ['home', 'shop', 'about', 'contact'];

export default class NavigationBar extends Component {

    state = {
        navbarItems: NAVBAR_ITEMS,
    }

    render() {
        return (
            <Navbar id="main-navbar" collapseOnSelect expand="md">
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        {this.state.navbarItems.map((item, index) => {
                            return <Nav.Link key={index} href="">{item.toUpperCase()}</Nav.Link>
                        })}
                        {/* <Nav.Link href="#features">{navbarItems[0]}</Nav.Link> */}
                        {/* <Nav.Link href="#pricing">{navbarItems[1]}</Nav.Link> */}
                        {/* <Nav.Link href="#deets">More deets</Nav.Link> */}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}