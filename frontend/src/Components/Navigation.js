import React, { Component } from "react";
import { Navbar, Nav, Button, ButtonGroup } from "react-bootstrap";
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
      <Navbar style={{ backgroundColor: "#171717" }} expand="lg">
        <Navbar.Brand href="#home" className="mr-auto">
          <img src={logo} className="logo" alt="codelingo" />
        </Navbar.Brand>
        <Nav className="ml-auto">
          <ButtonGroup id="loginButtonGroup" aria-label="Basic">
            <Button
              id="loginButton"
              variant="success"
              size="lg"
              className="Rubik"
              style={{ fontSize: "18px" }}
              href="/login"
            >
              Login
            </Button>
            <Button
              id="loginButton"
              size="lg"
              className="Rubik"
              style={{ fontSize: "18px" }}
              href="/register"
            >
              Register
            </Button>
          </ButtonGroup>
        </Nav>
      </Navbar>
    );
  }
}
