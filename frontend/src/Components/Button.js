import React, { Component } from "react";
import { Image } from "reactstrap";
class Button extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <a
        id={this.props.id}
        href={this.props.href}
        style={{ textDecoration: "none" }}
      >
        <h1>{this.props.title}</h1>
      </a>
    );
  }
}

export default Button;
