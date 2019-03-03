import React, { Component } from "react";
import { Row, Col, Image, Button, ProgressBar } from "react-bootstrap";
import Navigation from "../Components/UserNav";
import "../css/Profile.css";

class Profile extends Component {
    render() {
        return (
            <div id = "background">
                <br />
                <br />
                <p>Welcome, Aleks!</p>
                <br />
                <center><h2>Python</h2>
                <ProgressBar striped variant="success" now={80} style={{ maxWidth: 500, minHeight: 20 }}/>
                <h2>Java</h2>
                <ProgressBar striped variant="warning" now={40} style={{ maxWidth: 500, minHeight: 20 }}/>
                <h2>Data Structures and Algorithms</h2>
                <ProgressBar striped variant="info" now={65} style={{ maxWidth: 500, minHeight: 20 }}/></center>
            </div>
        );
    }
}

export default Profile;