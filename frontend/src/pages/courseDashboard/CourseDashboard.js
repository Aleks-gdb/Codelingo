import React, {Component} from "react";
import {Row,Col,Image, Button} from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import Navigation from "../../Components/Navigation";
import happyPlanet from "../../images/Happy Planet.png";
import sadPlanet from "../../images/Sad Planet.png";
import "../../css/CourseDashboard.css";

export default class CourseDashboard extends Component{
    render() {
        return(
            <Container className="courseDashboard">
            <div>
                <Row>
                    <Col>
                    <img src={sadPlanet} className="planet" alt="module"/>
                    </Col>
                    <Col></Col>
                    <Col></Col>
                    <Col>
                    <img src={sadPlanet} className="planet" alt="module"/>
                    </Col>
                    <Col></Col>
                    <Col></Col>
                    <Col>
                    <img src={sadPlanet} className="planet" alt="module"/>
                    </Col>
                </Row>
                <Row>
                    <Col md={3}></Col>
                    <Col md={3}></Col>
                    <Col md={3}></Col>
                    <Col md={3}></Col>
                    <Col md={3}></Col>
                    <Col md={3}></Col>
                    <Col md={3}></Col>
                </Row>
                <Row>
                    <Col></Col>
                    <Col></Col>
                    <Col>
                    <img src={sadPlanet} className="planet" alt="module"/>
                    </Col>
                    <Col></Col>
                    <Col></Col>
                    <Col>
                    <img src={sadPlanet} className="planet" alt="module"/>
                    </Col>
                    <Col></Col>
                </Row>
            </div>
            </Container>
        )
    }
}