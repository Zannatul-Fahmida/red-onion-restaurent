import React from 'react';
import { Container, Row } from 'react-bootstrap';
import useReviews from '../../../hooks/useReviews';
import ReviewItem from '../ReviewItem/ReviewItem';

const Reviews = () => {
    const [reviews] = useReviews();
    return (
        <Container className="my-4">
            <div className="text-start w-50">
                <h3 className="mb-4">Why you choose us</h3>
                <p className="mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, quae dicta. Sapiente modi aperiam eaque? Corporis iusto repellat accusantium quaerat.</p>
            </div>
            <Row xs={1} md={3} className="g-4">
                {reviews.map(review => <ReviewItem review={review}></ReviewItem>)}
            </Row>
        </Container>
    );
};

export default Reviews;