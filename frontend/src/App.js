import React, { Component } from "react";

import QuestionPage from "./pages/QuestionPage";
import Navigation from "./Components/Navigation";
import HomePage from "./pages/Home";
import "./App.css";
class App extends Component {
  render() {
    return (
      <div>
        <HomePage />
      </div>
    );
  }
}

export default App;
