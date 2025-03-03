import React from 'react'

const Dish = ({ title, price, img }) => {
    return (
        <div className='card'>
            <h2>{title}</h2>
            <p>{price}€</p>
            <img src={img} alt={title} />
        </div>
    );
};

export default Dish
