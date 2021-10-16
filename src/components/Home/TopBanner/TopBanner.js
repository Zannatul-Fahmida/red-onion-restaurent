import React from 'react';
import { FormControl, InputGroup } from 'react-bootstrap';
import './TopBanner.css';

const TopBanner = () => {
    return (
        <div className="top-banner d-flex flex-column align-items-center justify-content-center">
            <h1 className="mb-4">Best food waiting for your belly</h1>
            <InputGroup className="w-50">
                <FormControl placeholder="Search food items" className="border-0 rounded-pill rounded-end" />
                <button className="common-btn text-white px-4 py-2">Search</button>
            </InputGroup>
        </div>
    );
};

export default TopBanner;