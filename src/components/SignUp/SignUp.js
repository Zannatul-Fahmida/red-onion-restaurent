import React from 'react';
import { Button, Container, Form, Image } from 'react-bootstrap';
import './SignUp.css';
import logo from '../../images/logo2.png';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const SignUp = () => {
    const { handleEmail, handlePassword, handleSignUp, error, handleName, handleConfirmPassword } = useAuth();
    return (
        <div className="sign-up-bg">
            <Container>
                <Form>
                    <Image className="w-25 my-5" src={logo} fluid />
                    <div className="d-flex flex-column align-items-center">
                        <Form.Floating onBlur={handleName} className="mb-3 w-50">
                            <Form.Control
                                id="floatingInputCustom2"
                                type="text"
                                placeholder="name"
                            />
                            <label htmlFor="floatingInputCustom2">Name</label>
                        </Form.Floating>
                        <Form.Floating onBlur={handleEmail} className="mb-3 w-50">
                            <Form.Control
                                id="floatingInputCustom3"
                                type="email"
                                placeholder="name@example.com"
                            />
                            <label htmlFor="floatingInputCustom3">Email address</label>
                        </Form.Floating>
                        <Form.Floating onBlur={handlePassword} className="mb-3 w-50">
                            <Form.Control
                                id="floatingPasswordCustom2"
                                type="password"
                                placeholder="Password"
                            />
                            <label htmlFor="floatingPasswordCustom2">Password</label>
                        </Form.Floating>
                        <Form.Floating onBlur={handleConfirmPassword} className="mb-3 w-50">
                            <Form.Control
                                id="floatingPasswordCustom3"
                                type="password"
                                placeholder="Confirm Password"
                            />
                            <label htmlFor="floatingPasswordCustom3">Confirm Password</label>
                        </Form.Floating>
                    </div>
                    <Button className="w-50 py-3 sign-up-btn border-0" onClick={handleSignUp}>Sign in</Button>
                    <p className="text-danger">{error}</p>
                    <p className="mt-3">Already have an account??
                        <Link to="/login" className="text-decoration-none account-text fw-bold">Login</Link></p>
                </Form>
            </Container>
        </div>
    );
};

export default SignUp;