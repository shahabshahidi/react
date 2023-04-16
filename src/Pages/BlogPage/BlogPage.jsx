import React from 'react';
import Layouts from "../../Components/Layouts";

import './blogPage.scss';
import {Col, Container, Row} from "react-bootstrap";
import Posts from "../HomePage/Posts";

const BlogPage = () => {
    return (
        <Layouts>
            <Container>
                <Row>
                    <Col xs={12}>
                        <h1 className="title--page">blogs page</h1>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>

                    </Col>
                </Row>
            </Container>

            <Posts/>
        </Layouts>
    );
};

export default BlogPage;