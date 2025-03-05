import React from 'react'
import { Card, Badge, Button } from 'react-bootstrap';
import "./Dish.scss";
import { CartContext } from '../../context/cartContext';
import { useContext } from 'react';

const Dish = ({ title, price, img, isNew }) => {

    const { dispatch } = useContext(CartContext);

    return (
        <Card>
            {isNew && <Badge bg="primary">Nouveau</Badge>}

            <Card.Img src={img} alt={title} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{price}€</Card.Text>
                <Button onClick={() => dispatch({ type: "increment" })} variant="primary">Ajouter au panier</Button>
                <Button onClick={() => dispatch({ type: "decrement" })} variant="primary">Retirer du panier</Button>
            </Card.Body>

        </Card>
    );
};

export default Dish
