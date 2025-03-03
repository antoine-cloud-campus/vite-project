import React from 'react'
import Dish from './Dish';

const DishList = ({ dishes }) => {
    return (
        <div>
            {dishes.map((dish, index) => (
                <Dish key={index} title={dish.title} price={dish.price} img={dish.img} />
            ))}
        </div>
    );
};

export default DishList