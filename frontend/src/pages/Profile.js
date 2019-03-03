import React, { Component } from "react";
import { Row, Col, Image, Button, ProgressBar } from "react-bootstrap";


class Profile extends Component {
    render() {
        return (
            <div>
                <ProgressBar striped variant="success" now={40} />
            </div>
        );
    }
}

export default Profile;