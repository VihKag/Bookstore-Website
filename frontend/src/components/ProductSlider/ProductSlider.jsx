import React, { useState } from 'react';
import './productslider.css';

const products = [
    { id: 1, name: 'Product 1', imageUrl: 'product1.jpg' },
    { id: 2, name: 'Product 2', imageUrl: 'product2.jpg' },
    { id: 3, name: 'Product 3', imageUrl: 'product3.jpg' },
    // Add more products as needed
];

const ProductSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        const nextIndex = (currentIndex + 1) % products.length;
        setCurrentIndex(nextIndex);
    };

    const prevSlide = () => {
        const prevIndex = (currentIndex - 1 + products.length) % products.length;
        setCurrentIndex(prevIndex);
    };

    return (
        <div className="product-slider">
            <div className="slider-wrapper" style={{ transform: `translateX(-${currentIndex * 310}px)` }}>
                {products.map(product => (
                    <div key={product.id} className="product-card">
                        <img src={product.imageUrl} alt={product.name} className="product-image" />
                        <h2 className="product-name">{product.name}</h2>
                    </div>
                ))}
            </div>
            <button className="prev-button" onClick={prevSlide}>
                Previous
            </button>
            <button className="next-button" onClick={nextSlide}>
                Next
            </button>
        </div>
    );
};

export default ProductSlider;
