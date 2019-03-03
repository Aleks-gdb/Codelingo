import React, { Component } from "react";
import "../css/Result.css";
import UserNav from "./UserNav";

class Result extends Component {
  constructor(props) {
    super(props);
    this.correctAnswer = props.correctAnswer;
    this.answerState = props.answerState;
  }

  correct() {
    return (
      <div className="result bg-success" id="correct">
      <UserNav/>
        <h1>Correct !</h1>
        <h2>The correct answer is:</h2>
        <div id="answer">
          <h3>{this.correctAnswer}</h3>
        </div>
      </div>
    );
  }

  incorrect() {
    return (
      <div className="result" id="incorrect">
        <h1>Inorrect !</h1>
        <h2>The correct answer was:</h2>
        <div id="answer">
          <h3>{this.correctAnswer}</h3>
        </div>
      </div>
    );
  }

  timeout() {
    return (
      <div className="result" id="timeout">
        <h1>Time's Up !</h1>
        <h2>The correct answer was:</h2>
        <div id="answer">
          <h3>{this.correctAnswer}</h3>
        </div>
      </div>
    );
  }

  render() {
    if (this.answerState === "correct") {
      return this.correct();
    } else if (this.answerState === "incorrect") {
      return this.incorrect();
    } else {
      return this.timeout();
    }
  }
}

export default Result;
