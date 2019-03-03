import React, { Component } from "react";
import { Navbar, Nav, Button, ButtonGroup } from "react-bootstrap";
import "../css/Navigation.css";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../actions/authentication";
import { withRouter } from "react-router-dom";
import logo from "../images/codelingowo.png";

class Navigation extends Component {
  onLogout(e) {
    e.preventDefault();
    this.props.logoutUser(this.props.history);
  }

  render() {
    const { isAuthenticated, user } = this.props.auth;
    const authLink = (
      <ButtonGroup id="loginButtonGroup" aria-label="Basic">
        <Button
          id="loginButton"
          variant="success"
          size="lg"
          className="Rubik"
          style={{ fontSize: "18px" }}
          href="#"
          onClick={this.onLogout.bind(this)}
        >
          Logout
        </Button>
      </ButtonGroup>
    );
    const guestLinks = (
      <ButtonGroup id="loginButtonGroup" aria-label="Basic">
        <Button
          id="loginButton"
          variant="success"
          size="lg"
          className="Rubik"
          style={{ fontSize: "18px" }}
          href="/login"
        >
          Login
        </Button>
        <Button
          id="loginButton"
          size="lg"
          className="Rubik"
          style={{ fontSize: "18px" }}
          href="/register"
        >
          Register
        </Button>
      </ButtonGroup>
    );
    return (
      <Navbar
        style={{ backgroundColor: "#171717" }}
        expand="lg"
        className="fixed-top"
      >
        <Navbar.Brand href="/" className="mr-auto">
          <img src={logo} className="logo" alt="codelingo" />
        </Navbar.Brand>
        <Nav className="ml-auto">{isAuthenticated ? authLink : guestLinks}</Nav>
      </Navbar>
    );
  }
}

Navigation.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(withRouter(Navigation));
