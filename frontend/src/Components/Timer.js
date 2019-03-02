import React, { Component } from "react";
import { ProgressBar } from "react-bootstrap";
import "../css/Timer.css";
class Timer extends Component {
  render() {
    return <ProgressBar className="Timer" animated now={90} />;
  }
}

export default Timer;
