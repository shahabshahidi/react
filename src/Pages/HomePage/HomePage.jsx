import React from 'react';
import Layouts from "../../Components/Layouts";

import './homePage.scss';
import {Col, Container, Row} from "react-bootstrap";
import Posts from "./Posts";


const HomePage = () => {
    return (
        <Layouts>
            <Container>
                <Row>
                    <Col xs={12}>
                        <h1 className="title--page">Home page</h1>
                    </Col>
                </Row>
            </Container>

            <Posts/>

        </Layouts>
    );
};

export default HomePage;