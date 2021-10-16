import React from 'react';
import './Header.css';
import { Container, Image, Nav, Navbar } from 'react-bootstrap';
import logo from '../../../images/logo2.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg">
            <Container>
                <Navbar.Brand href="#home"><Image height="40px" src={logo} /></Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Nav.Link as={Link} to="/cart" className="text-dark"><FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon></Nav.Link>
                    <Nav.Link as={Link} to="/login" className="text-dark fw-bold">Login</Nav.Link>
                    <button className="common-btn px-4 py-2 text-white">Sign up</button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;