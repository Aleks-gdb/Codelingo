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
            <Image src={space} width="auto" height="auto" />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default HomePage;
