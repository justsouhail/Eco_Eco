import React from 'react';
import photo from '../photos/photosp.jpeg';




// function Data() {
//   return ( 
    
const data = {
    products: [
        {
            name: 'Nike Slim shirt',

            category: 'Shirts',
            image: photo,
            price: 120,
            countInStock: 10,
            brand: 'Nike',
            rating: 4.5,
            description: 'high quality shirt',
        },
        {
            name: 'Adidas Fit Shirt',
            category: 'Shirts',
            image: photo,
            price: 250,
            countInStock: 20,
            brand: 'Adidas',
            rating: 4.0,
            description: 'high quality product',
        },
        {
            name: 'Nike Slim Pant',
            category: 'Pants',
            image: photo,
            price: 25,
            countInStock: 15,
            brand: 'Nike',
            rating: 4.5,
            description: 'high quality product',
        },
        {
            name: 'Adidas Fit Pant',
            category: 'Pants',
            image: photo,
            price: 65,
            countInStock: 5,
            brand: 'Puma',
            rating: 4.5,
            description: 'high quality product',
        },
    ],
};
export default data;