import React from 'react';
import Layouts from "../../Components/Layouts";
import {Col, Container, Row} from "react-bootstrap";

const About = () => {
    return (
        <Layouts>
            <Container>
                <Row>
                    <Col xs={12}>
                        <h1 className="title--page">About page</h1>
                    </Col>
                </Row>
            </Container>
        </Layouts>
    );
};

export default About;