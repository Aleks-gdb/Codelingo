import React, { Component } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink} from 'reactstrap';

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
                <Navbar color = "dark" dark expand="md">
                    <NavbarBrand href ="/">Codelingo</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="/Login"></NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        )
    }
}