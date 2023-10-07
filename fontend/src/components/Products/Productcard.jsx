import './index.css';
import book01 from '../../assets/books/01.jpg';
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const ProductCard = () =>{
    return (
        <>
            <div className="xl:columns-4 md:columns-3 sm:columns-2">
                <div className="card-height items-stretch flex">
                    <div className="p-0 flex row-auto">
                        <div className="w-2/4 relative image-overlap-before"><img src={book01} alt="book img" /></div>
                        <div className="w-2/4 p-2">                            
                            <div >
                                <div className="block">Title book</div>
                                <div className="block">Author name</div>
                                <div className="flex items-center">
                                    <div className="old-price line-through">79$</div>
                                    <div>70$</div>
                                </div>
                                <span className="stars block">
                                <FontAwesomeIcon icon="fa-solid fa-star" />
                                <FontAwesomeIcon icon="fa-solid fa-star" />
                                <FontAwesomeIcon icon="fa-solid fa-star" />
                                <FontAwesomeIcon icon="fa-solid fa-star" />
                                <FontAwesomeIcon icon="fa-solid fa-star" />
                                </span>
                            </div>
                            <div className="flex">
                                <a href="buyClick" ><i>Buy</i></a>
                                <a href="likeClick" className='ml-2'><i>Like</i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default ProductCard;