import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { ButtonGroup, Col, Container, Image, Row, Button } from 'react-bootstrap';
import { useParams } from 'react-router';
import fakeData from '../../../FakeData/FakeData';

const MenuDetails = () => {
    const { idMenu } = useParams();
    const [menu, setMenu] = useState({});
    useEffect(() => {
        const matchedMenu = fakeData.find(menu => menu.id.toString() === idMenu.toString());
        setMenu(matchedMenu);
    }, [idMenu]);
    const [quantity, setQuantity] = useState(0);
    return (
        <Container className="my-5">
            <Row>
                <Col className="text-start">
                    <h1>{menu.name}</h1>
                    <p>{menu.description}</p>
                    <div className="d-flex">
                        <h2>$ {menu.price}</h2>
                        <ButtonGroup className="ms-3" aria-label="Second group">
                            <Button className="bg-white border-end-0 text-secondary border-secondary" onClick={() => setQuantity(quantity === 0 ? 0 : quantity - 1)}>-</Button> 
                            <Button className="bg-white border-start-0 border-end-0 text-dark border-secondary">{quantity}</Button> 
                            <Button className="bg-white border-start-0 text-danger border-secondary" onClick={() => setQuantity(quantity + 1)}>+</Button>
                        </ButtonGroup>
                    </div>
                        <button className="common-btn px-4 py-2 text-white my-3"><FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon> Add</button><br />
                        <Image className="w-25 my-5 p-2 rounded border border-primary" src={menu.img} fluid />
                </Col>
                <Col>
                    <Image src={menu.img} fluid />
                </Col>
            </Row>
        </Container>
    );
};

export default MenuDetails;