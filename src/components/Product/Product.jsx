
import React from 'react';
import './Product.css'
const Product = (prop) => {
    const { img, name, seller, price } = prop.product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <h6>{name}</h6>

        </div>
    );
};

export default Product;

