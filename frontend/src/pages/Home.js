import React, { Component } from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import Navigation from "../Components/Navigation";
import laptop from "../images/laptop.png";

import "../css/HomePage.css";
class HomePage extends Component {
  render() {
    return (
      <Container className="homePage fullscreen" fluid>
        <div id="space">
          <Row>
            <Col md={6}>
              <div className="registration">
                <h2 className="registrationText">
                  Make your coding skills out of this world
                </h2>
                <Button id="registrationButton" variant="success" className="mr-auto" size="lg">
                  <h3>Register</h3>
                </Button>
              </div>
            </Col>
          </Row>
        </div>
        <div className="container-fluid" id="appDescription">
          <Row id="appDescriptionElements">
            <Col sm={6} align="center">
              <Image id="laptop" src={laptop} width="250" height="250" fluid />
            </Col>
            <Col sm={6}>
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
        </div>
      </Container>
    );
  }
}

/*

<Image src={space} width="auto" height="auto" fluid />

*/
export default HomePage;
