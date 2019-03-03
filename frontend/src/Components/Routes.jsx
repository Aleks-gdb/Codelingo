import React, { Component } from "react";
import { Route, BrowserRouter } from "react-router-dom";
import Register from "./Register";
import HomePage from "../pages/Home";
import Navigation from './Navigation';
import Login from "./Login";
import QuestionPage from "../pages/QuestionPage";

export default class Routes extends Component {
  render() {
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>          
        <div style={{width:"100%"}}>
        <Navigation />
          <Route exact path="/" component={HomePage} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/questions" component={QuestionPage}/>
        </div>
      </BrowserRouter>
    );
  }
}
