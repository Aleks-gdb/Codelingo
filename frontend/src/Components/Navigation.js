import React, { Component } from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
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
      <Container className="fullscreen" style={{ backgroundColor: "black" }}>
        <Row className="navBar">
          <Col md={6}>
            <Image id="logo" src={logo} width="300" height="75" />
          </Col>
          <Col md={6}>
            <Button id="loginButton" variant="success" size="lg">
              <Col md={4}>
                <h3> Login</h3>
              </Col>
            </Button>
          </Col>
        </Row>
      </Container>
    );
  }
}
