import React, { Component, Button } from "react";
import { Container, Row, Col } from "react-bootstrap";
import QuestionCard from "../Components/QuestionCard";
import Timer from "../Components/Timer";
import "../css/QuestionPage.css";

var j = require("../json_tests/test");

class QuestionPage extends Component {
  constructor(props) {
    super(props);
    this.state = { current: "neutral", question: 1 };
  }

  render() {
    return (
      <div className="questionPage">
        <Container>
          <Row>
            <Col>
              <h1>{j.Question.text}</h1>
            </Col>
          </Row>

          <Row>
            <Col>
              <Timer />
            </Col>
          </Row>

          <Row id="qCards" fluid>
            <Col md={4}>
              <QuestionCard answer={j.Question.answers[0]} />
            </Col>
            <Col md={4}>
              <QuestionCard answer={j.Question.answers[1]} />
            </Col>
            <Col md={4}>
              <QuestionCard answer={j.Question.answers[2]} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default QuestionPage;
