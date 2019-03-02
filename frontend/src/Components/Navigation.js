import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

export default class Navigation extends Component {
	constructor(props) {
		super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
          isOpen: false
        };
    }
      toggle() {
        this.setState({
          isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
            <div>
                <Navbar fixed="top" bg="dark" expand="lg" >
                <Navbar.Brand href="#home">Codelingo</Navbar.Brand>
                <Navbar.Collapse>
                    <Nav pullRight>
                        <NavItem eventKey={1} href="#login">Login</NavItem>
                    </Nav>
                </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}