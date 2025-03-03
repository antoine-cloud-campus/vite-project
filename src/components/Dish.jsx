import React from 'react'

const Dish = ({ dish }) => {
    return (
        <div className='card'>
            <h2>{dish.title}</h2>
            <p>{dish.price}€</p>
            <img src={dish.img} alt={dish.title} />
        </div>
    );
};

export default Dish
