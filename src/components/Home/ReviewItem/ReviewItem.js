import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './ReviewItem.css';
import { Button, Card, Col, Image } from 'react-bootstrap';

const ReviewItem = (props) => {
    const { title, description, icon, img } = props.review;
    return (
        <Col>
            <Card className="hover-effect h-100 border-0">
                <Card.Img variant="top" src={img} />
                <Card.Body className="d-flex">
                    <div>
                        <Image src={icon} />
                    </div>
                    <div className="text-start ps-2">
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>{description}</Card.Text>
                        <Button className="bg-light border-0 text-primary">See more <FontAwesomeIcon className="text-success" icon={faArrowCircleRight}></FontAwesomeIcon></Button>
                    </div>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default ReviewItem;