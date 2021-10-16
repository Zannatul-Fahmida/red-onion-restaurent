import React from 'react';
import { Col, Card } from 'react-bootstrap';

const Menu = (props) => {
    const { name, shortDescription, price, img, category } = props.menu;
    return (
        <Col>
            <Card className="h-100 border-0">
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>{shortDescription}</Card.Text>
                    <h3>$ {price}</h3>
                </Card.Body>
            </Card>
        </Col> 
    );
};

export default Menu;