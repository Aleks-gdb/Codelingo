import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../css/QuestionCard.css";
class QuestionCard extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {};
  }

  render() {
    return (
      <Container className="questionCard">
        <Row>
          <Col>
            <h1>{this.props.answer}</h1>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default QuestionCard;
