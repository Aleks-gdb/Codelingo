import React, { Component } from "react";
import { Row, Col, Image, Button, ProgressBar } from "react-bootstrap";
import "../css/Profile.css";
import UserNav from "../Components/UserNav";

class Profile extends Component {
  render() {
    return (
      <div id="background">
      <UserNav/>
        <br />
        <p>Welcome, Aleks!</p>
        <div id="bars">
        <center>
          <h2>Python</h2>
          <ProgressBar
            striped
            variant="success"
            now={80}
            style={{ maxWidth: 500, minHeight: 20 }}
          />
          <h2>Java</h2>
          <ProgressBar
            striped
            variant="warning"
            now={40}
            style={{ maxWidth: 500, minHeight: 20 }}
          />
          <h2>Data Structures and Algorithms</h2>
          <ProgressBar
            striped
            variant="info"
            now={65}
            style={{ maxWidth: 500, minHeight: 20 }}
          />
        </center>
        </div>
      </div>
    );
  }
}

export default Profile;
