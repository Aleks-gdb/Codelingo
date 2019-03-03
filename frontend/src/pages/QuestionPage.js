import React, { Component } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import QuestionCard from "../Components/QuestionCard";
import Timer from "../Components/Timer";
import "../css/QuestionPage.css";
import Result from "../Components/Result";

import logo from "../images/codelingowo.png";

var j = require("../json_tests/test");

class QuestionPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selection: "",
      answerState: "undefined",
      timeout: false,
      displayResult: false
    };
  }

  handleChange(e) {
    this.setState({ selection: e.target.value });
  }

  remainingTime(e) {
    console.log(e.target.state);
  }

  submit() {
    if (
      this.state.selection === j.Question.correct_ans &&
      !this.state.timeout
    ) {
      console.log("correct");
      this.setState({ answerState: "correct" });
    } else if (!this.state.timeout) {
      console.log("incorrect");
      this.setState({ answerState: false });
    }
    this.setState({ displayResult: true });
    console.log(this.state.displayResult);
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
              <Timer time={30} onChange={this.remainingTime.bind(this)} />
            </Col>
          </Row>

          <Row>
            <Col>
              <h1 id="question">{j.Question.text}</h1>
            </Col>
          </Row>

          <Row id="qCards" fluid="true">
            <Form>
              <Form.Group onChange={this.handleChange.bind(this)}>
                {this.createCards(j.Question.answers)}
              </Form.Group>
            </Form>
          </Row>

          <Row>
            <Col md={12} align="right">
              <Button
                id="submitButton"
                variant="success"
                size="lg"
                onClick={this.submit.bind(this)}
              >
                <h2>Submit</h2>
              </Button>
            </Col>
          </Row>

          {(this.state.displayResult && this.state.answerState) ===
          "timeout" ? (
            <Result
              correctAnswer={j.Question.correct_ans}
              answerState={"timeout"}
            />
          ) : null}

          {this.state.displayResult &&
          this.state.answerState === "incorrect" ? (
            <Result
              correctAnswer={j.Question.correct_ans}
              answerState={"incorrect"}
            />
          ) : null}

          {this.state.displayResult && this.state.answerState === "correct" ? (
            <Result
              correctAnswer={j.Question.correct_ans}
              answerState={"correct"}
            />
          ) : null}
        </Container>
      </div>
    );
  }
}

export default QuestionPage;
