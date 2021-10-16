import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo.png'

const Footer = () => {
    return (
        <div className="bg-dark">
            <Container>
                <Row className="py-5">
                    <Col>
                        <Image className="float-start w-25" src={logo} />
                    </Col>
                    <Col md="3" className="text-start">
                        <Link className="text-white text-decoration-none">About online food</Link><br />
                        <Link className="text-white text-decoration-none">Read our blog</Link><br />
                        <Link className="text-white text-decoration-none">Sign up to deliver</Link><br />
                        <Link className="text-white text-decoration-none">Add your restaurant</Link>
                    </Col>
                    <Col xs lg="3" className="text-start">
                        <Link className="text-white text-decoration-none">Get help</Link><br />
                        <Link className="text-white text-decoration-none">Read FAQs</Link><br />
                        <Link className="text-white text-decoration-none">View all cities</Link><br />
                        <Link className="text-white text-decoration-none">Restaurants near me</Link>
                    </Col>
                </Row>
                <Row className="py-5">
                    <Col>
                        <p className="text-secondary text-start"><small>Copyright &copy; 2021 online food</small></p>
                    </Col>
                    <Col md="2" className="text-start">
                        <Link className="text-white text-decoration-none">Privacy Policy.</Link>
                    </Col>
                    <Col xs lg="2" className="text-start">
                        <Link className="text-white text-decoration-none">Terms of Use</Link>
                    </Col>
                    <Col xs lg="2" className="text-start">
                        <Link className="text-white text-decoration-none">Pricing</Link>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;