import React, { Component } from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import Navigation from "../Components/Navigation";
import space from "../images/Space_background.jpg";
class HomePage extends Component {
  render() {
    return (
      <Container className="homePage fullscreen">
        <Navigation />
        <Row id="space">
          <Col md={12}>
            <Image src={space} width="auto" height="auto" fluid />
            <Row id="registrationText">
              <Col md={4} align="center">
                <h2>Make your coding skills out of this world</h2>
              </Col>
            </Row>
            <Row id="registrationButton">
              <Col>
                <Button variant="success" size="lg">
                  <Col md={5}>Register</Col>
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default HomePage;
