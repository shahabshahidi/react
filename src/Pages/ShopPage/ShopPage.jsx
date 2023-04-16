import React from 'react';
import Layouts from "../../Components/Layouts";

import './shopPage.scss';
import {Col, Container, Row} from "react-bootstrap";

const ShopPage = () => {
    return (
        <Layouts>
            <Container>
                <Row>
                    <Col xs={12}>
            <h1 className="title--page">shop page</h1>
                    </Col>
                </Row>
            </Container>
        </Layouts>
    );
};

export default ShopPage;