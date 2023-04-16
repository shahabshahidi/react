import React from 'react';
import Navigation from "../Navigation";
import {Col, Container, Row} from "react-bootstrap";
import MenuIcon from '@mui/icons-material/Menu';

import './header.scss';
import Logo from "../Logo";
import {useStateContext} from "../../Contexts/ContextProvider";

const Header = () => {


    return (
        <header className="header">
            <Container>
                <Row className="align-items-center justify-content-between">
                    <Col xs={2} lg={8}>
                        <div className="w-100 d-flex align-items-center">
                            <Navigation/>
                        </div>
                    </Col>
                    <Col xs={6} lg={2}>
                        <div className="w-100 d-flex justify-content-end">
                            <Logo/>
                        </div>
                    </Col>
                </Row>
            </Container>

        </header>
    );
};

export default Header;