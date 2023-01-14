import React from 'react';
import {Card } from 'react-bootstrap';
import './DishBox.scss';

const DishBox = ({ dish }) => {

    return (
        <Card>
            <Card.Img variant="top" src={dish.img} />
            <Card.Body>
                <Card.Title>{dish.dish_name}</Card.Title>
            </Card.Body>
        </Card>
    );
};

export default DishBox;