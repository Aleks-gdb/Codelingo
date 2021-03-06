import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import Routes from "./Components/Routes";
import { Provider } from "react-redux";
import store from "./store";
import "./App.css";

import QuestionPage from "./pages/QuestionPage";
import Navigation from "./Components/Navigation";
import HomePage from "./pages/Home";
import Profile from "./pages/Profile";
import UserNav from "./Components/UserNav";
import axios from 'axios';
import "./App.css";


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <Routes />
          </header>
        </div>
      </Provider>
    );
  }
}

export default App;
