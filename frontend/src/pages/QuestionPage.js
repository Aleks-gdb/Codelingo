import React, { Component } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import QuestionCard from "../Components/QuestionCard";
import Timer from "../Components/Timer";
import "../css/QuestionPage.css";

import logo from "../images/codelingowo.png";

var j = require("../json_tests/test");

class QuestionPage extends Component {
  constructor(props) {
    super(props);
    this.state = { selection: " ", timeUp: false };
  }

  createCards(answers) {
    let size = 12 / answers.length;

    return answers.map(element => (
      <Col md={size} align="center">
        <QuestionCard answer={element} />
      </Col>
    ));
  }

  render() {
    return (
      <div className="questionPage">
        <Container>
          <Row id="questionPageLogo">
            <Col md={12}>
              <a href="#home">
                <img src={logo} className="qPagelogo" alt="" />
              </a>
            </Col>
          </Row>

          <Row className="countdown">
            <Col>
              <Timer time={30} />
            </Col>
          </Row>

          <Row>
            <Col>
              <h1 id="question">{j.Question.text}</h1>
            </Col>
          </Row>

          <Row id="qCards" fluid>
            {this.createCards(j.Question.answers)}
          </Row>

          <Row>
            <Col md={12} align="right">
              <Button id="submitButton" variant="success" size="lg">
                Submit
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default QuestionPage;
