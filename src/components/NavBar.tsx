import React from 'react';
import './css/style.css'
import { Button, Col, Container, Form, Nav, Navbar, NavDropdown, Offcanvas, Row } from 'react-bootstrap';

function NavBar() {

    return (
        <Navbar className='navbar-custom' expand="lg">
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto navbar-menu" style={{justifyContent:"center",width:"100%"}}>
                        <Nav.Link className='mx-3' href=" " style={{ color: '#F01C21' }}>Home</Nav.Link>
                        <Nav.Link className='mx-3' href=" " style={{ color: '#ffff' }}>Deals</Nav.Link>
                        <Nav.Link className='mx-3' href=" " style={{ color: '#ffff' }}>Coupon</Nav.Link>
                        <Nav.Link className='mx-3' href=" " style={{ color: '#ffff' }}>Stores</Nav.Link>
                        <Nav.Link className='mx-3' href=" " style={{ color: '#ffff' }}>Contact us</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
export default NavBar;
