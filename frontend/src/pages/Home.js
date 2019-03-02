import React, { Component } from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import Navigation from "../Components/Navigation";
import space from "../images/Space_background.jpg";
import laptop from "../images/laptop.png";

import "../css/HomePage.css";
class HomePage extends Component {
  render() {
    return (
      <Container className="homePage fullscreen" fluid>
        <Navigation />

        <div id="space">
          <Row>
            <Col md={12}>
              <Row id="registrationText">
                <Col md={4} align="center">
                  <h2>Make your coding skills out of this world</h2>
                </Col>
              </Row>
              <Row id="registrationButton">
                <Col>
                  <Button id="registerPress" variant="success" size="lg">
                    <Col md={6}>
                      <h3>Register</h3>
                    </Col>
                  </Button>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
        <Row id="appDescription">
          <Row id="appDescriptionElements">
            <Col md={6} align="center">
              <Image id="laptop" src={laptop} width="300" height="300" fluid />
            </Col>
            <Col md={6}>
              <Row>
                <Col md={12} align="left">
                  <h2>Learn and Improve your programming skills.</h2>
                </Col>
              </Row>
              <Row>
                <Col md={10} align="left">
                  <p>
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum."
                  </p>
                </Col>
              </Row>
            </Col>
          </Row>
        </Row>
      </Container>
    );
  }
}

/*

<Image src={space} width="auto" height="auto" fluid />

*/
export default HomePage;
