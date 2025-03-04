import React from 'react'
import { Card } from 'react-bootstrap';
import "./Dish.scss";

const Dish = ({ title, price, img }) => {
    return (
        <Card className='Dish'>
            <Card.Img src={img} alt={title} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{price}€</Card.Text>
            </Card.Body>
        </Card>
    );
};

export default Dish
