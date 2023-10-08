import './index.css';
import book01 from '../../assets/books/01.jpg';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ProductCard = () => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <div className="lg:w-1/4 md:w-1/3 sm:w-1/2">
            <div className="card-height pb-6" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <div className="p-0 flex row-auto items-stretch">
                    <div className="w-2/4 relative image-overlap-before">
                        <img className='rounded-sm' src={book01} alt="book img" />
                        {isHovered && (
                            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                                <a href="detailsLink" className="block text-white text-lg">Xem chi tiết</a>
                            </div>
                        )}
                    </div>
                    <div className="w-2/4 px-2 box-border">
                        <div>
                            <div>
                                <div className="block font-bold box-border limit-text lg:text-xl">Title for book</div>
                                <div className="block text-slate-600 text-sm lg:text-base">Author name</div>
                                <span className="stars block text-xs lg:mb-2">
                                    <FontAwesomeIcon icon="fa-solid fa-star" style={{ color: "#eeff00" }} />
                                    <FontAwesomeIcon icon="fa-solid fa-star" style={{ color: "#eeff00" }} />
                                    <FontAwesomeIcon icon="fa-solid fa-star" style={{ color: "#eeff00" }} />
                                    <FontAwesomeIcon icon="fa-solid fa-star" style={{ color: "#eeff00" }} />
                                    <FontAwesomeIcon icon="fa-solid fa-star" style={{ color: "#eeff00" }} />
                                </span>
                            </div>
                            <div className="flex items-center">
                                <div className="old-price line-through text-slate-600">79$</div>
                                <div className='font-bold ml-2'>70$</div>
                            </div>
                        </div>
                        <div className="flex text-lg lg:text-xl">
                            <a href="buyClick" ><FontAwesomeIcon icon="fa-solid fa-cart-shopping" style={{color: "#0091ff",}} /></a>
                            <a href="likeClick" className='ml-4'><FontAwesomeIcon icon="fa-solid fa-heart" style={{color: "#ff6bc9",}} /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductCard;
