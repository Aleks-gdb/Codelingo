import React, { Component } from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import "../css/Navigation.css";
import logo from "../images/codelingowo.png";
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
      <Navbar bg="dark" expand="lg">
        <Navbar.Brand href="#home" className="mr-auto">
          <img src={logo} className="logo" alt="codelingo" />
        </Navbar.Brand>
        <Nav>
          <Button id="loginButton" variant="success" size="lg">
            Login
          </Button>
        </Nav>
      </Navbar>
    );
  }
}
