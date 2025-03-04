import React from 'react'
import { Card, Badge, Button } from 'react-bootstrap';
import "./Dish.scss";

const Dish = ({ title, price, img, isNew }) => {
    return (
        <Card>
            {isNew && <Badge bg="primary">Nouveau</Badge>}
            
            <Card.Img src={img} alt={title} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{price}€</Card.Text>
                <Button onClick={()=>alert(`Le plat ${title} est maintenant dans votre panier.`)} variant="primary">Ajouter au panier</Button>
            </Card.Body>

        </Card>
    );
};
    
export default Dish
