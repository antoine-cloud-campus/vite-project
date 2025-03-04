import React from 'react'
import { Card, Badge } from 'react-bootstrap';
import "./Dish.scss";

const Dish = ({ title, price, img, isNew }) => {
    return (
        <Card className='Dish'>
            {isNew && <Badge className='badge' bg="primary">Nouveau</Badge>}
            <Card.Img src={img} alt={title} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{price}€</Card.Text>
            </Card.Body>
        </Card>
    );
};

export default Dish
