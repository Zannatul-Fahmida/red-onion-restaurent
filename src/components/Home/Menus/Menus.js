import React, { useContext, useState } from 'react';
import './Menus.css';
import { Button, Container, Row } from 'react-bootstrap';
import useMenus from '../../../hooks/useMenus';
import Menu from '../Menu/Menu';
import { MenuContext } from '../../../App';

const Menus = () => {
    const [menus] = useMenus();
    const {food, setFood} = useContext(MenuContext);
    const selectedMenus =  menus.filter(menu => menu.category === food);

    return (
        <Container>
            <ul className="d-flex justify-content-center my-5 nav">
                <li to="/home#breakfast" onClick={() => setFood("breakfast")} className="nav-item"><span className={selectedMenus === "breakfast" ?  "active nav-link" : "nav-link"}>Breakfast</span></li>
                <li to="/home#lunch" onClick={() => setFood("lunch")} className="nav-item"><span className={selectedMenus === "lunch" ?  "active nav-link" : "nav-link"}>Lunch</span></li>
                <li to="/home#dinner" onClick={() => setFood("dinner")} className="nav-item"><span className={selectedMenus === "dinner" ?  "active nav-link" : "nav-link"}>Dinner</span></li>
            </ul>
            <Row xs={1} md={3} className="g-4">
                {selectedMenus.map(menu => <Menu key={menu.id} menu={menu}></Menu>)}
            </Row>
            <Button variant="secondary" className="px-5 my-2">Checkout Your Food</Button>
        </Container>
    );
};

export default Menus;