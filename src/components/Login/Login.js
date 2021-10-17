import React from 'react';
import './Login.css';
import { Button, Container, Form, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const { signInUsingGoogle } = useAuth();
    return (
        <div className="login-bg">
            <Container>
                <Form>
                    <div className="d-flex flex-column align-items-end">
                        <div className="text-center w-50">
                            <Image className="w-50 my-5" src={logo} fluid />
                        </div>
                        <Form.Floating className="mb-3 w-50">
                            <Form.Control
                                id="floatingInputCustom1"
                                type="email"
                                placeholder="name@example.com"
                            />
                            <label htmlFor="floatingInputCustom1">Email address</label>
                        </Form.Floating>
                        <Form.Floating className="mb-3 w-50">
                            <Form.Control
                                id="floatingPasswordCustom1"
                                type="password"
                                placeholder="Password"
                            />
                            <label htmlFor="floatingPasswordCustom1">Password</label>
                        </Form.Floating>
                        <Button className="w-50 py-3 sign-up-btn border-0">Log in</Button>
                        <div className="text-center w-50 mt-4">
                            <p className="text-white">Don't have an account?? <Link to="/signup" className="text-decoration-none account-text fw-bold">Sign Up</Link></p>
                            <Button variant="primary" onClick={signInUsingGoogle}><i className="fab fa-google"></i> Sign in with google</Button>
                        </div>
                    </div>
                </Form>
            </Container>
        </div>
    );
};

export default Login;