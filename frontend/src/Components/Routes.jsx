import React, { Component } from "react";
import { Route, BrowserRouter } from "react-router-dom";

export default class Routes extends Component {
  render() {
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <div>
          <Route exact path="/" component={HomePage} />
        </div>
      </BrowserRouter>
    );
  }
}