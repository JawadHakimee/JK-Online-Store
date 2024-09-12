import React, { useEffect, useState } from 'react';
import styled from './clothes.module.css';
import Navbar from '../../components/navbar/navbar';
import Footer from '../../components/footer/footer';

const ProductList = ({ onAddToCart }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://jawadhakimee.github.io/json-file/colthes.json')
            .then(response => response.json())
            .then(data => setProducts(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div>
            <Navbar />
            <div className={styled.productList}>
            
                {products.map(product => (
                    <div key={product.id} className={styled.productItem}>
                        <img src={product.image} alt={product.name} className={styled.productImage} />
                        <h2 className={styled.productName}>{product.name}</h2>
                        <p className={styled.productPrice}>${product.price.toFixed(2)}</p>
                        <button className={styled.addToCartButton} >Add to Cart</button>
                        {/* onClick={() => onAddToCart(product)} */}
                    </div>
                ))}
            </div>
            <Footer />
        </div>
    );
};

export default ProductList;

