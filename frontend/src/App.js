import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./logo.svg";
import Navigation from "./Components/Navigation";
import Home from "./pages/Home";
import Routes from "./Components/Routes";
import { Provider } from "react-redux";
import store from "./store";
import "./App.css";

import QuestionPage from "./pages/QuestionPage";
import Navigation from "./Components/Navigation";
import HomePage from "./pages/Home";
import "./App.css";
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <Home />
            <Routes />
          </header>
        </div>
      </Provider>
    );
  }
}

export default App;
