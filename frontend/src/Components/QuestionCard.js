import React, { Component } from "react";
import { Row, Col, Button } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import "../css/QuestionCard.css";
class QuestionCard extends Component {
  constructor(props) {
    super(props);
    this.props = props;
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
