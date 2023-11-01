import React from 'react'
import { Button, Col, Container, Form, Image, Row } from 'react-bootstrap';
import './css/style.css';

function Header() {
    return (
        <Container>
            <Row>
                <Col className="header">
                    <Image className='logo-image' src={require('../assets/logo.png')} />
                    <div className="search">
                        <i className="search-icon fa-solid fa-magnifying-glass"></i>
                        <input type="search" placeholder="Search For brand, category, coupon" />
                    </div>
                    <div className='login-signup'>
                        <Button className='login-signup-button' >Login/Sign Up</Button>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Header