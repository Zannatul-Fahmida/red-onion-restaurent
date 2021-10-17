import React from 'react';
import { Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Menu = (props) => {
    const { id, name, shortDescription, price, img } = props.menu;
    return (
        <Col>
            <Link className="text-decoration-none text-dark" to={"/details/" + id}>
                <Card className="hover-effect h-100 border-0">
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>{shortDescription}</Card.Text>
                        <h3>$ {price}</h3>
                    </Card.Body>
                </Card>
            </Link>
        </Col>
    );
};

export default Menu;