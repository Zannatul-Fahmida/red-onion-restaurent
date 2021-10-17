import React from 'react';
import './Header.css';
import { Container, Image, Nav, Navbar } from 'react-bootstrap';
import logo from '../../../images/logo2.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <Navbar collapseOnSelect expand="lg">
            <Container>
                <Navbar.Brand href="#home"><Image height="40px" src={logo} /></Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Nav.Link as={Link} to="/cart" className="text-dark"><FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon></Nav.Link>
                    {user.email ?
                        <div>
                            <span className="pe-3">{user.displayName}</span>
                            <button onClick={logOut} className="common-btn px-4 py-2 text-white">logout</button>
                        </div>
                        :
                        <div className="d-flex">
                            <Nav.Link as={Link} to="/login" className="text-dark fw-bold">Login</Nav.Link>
                            <Link to="/signup">
                                <button className="common-btn px-4 py-2 text-white">Sign up</button>
                            </Link>
                        </div>
                    }
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;