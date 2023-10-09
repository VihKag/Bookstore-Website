import React from 'react';
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Footer = () =>{
    return(
        <>
            <div className="flat-iconbox mx-auto container border-tb mt-6 bg-white">
                <div>
                    <div className="flex flex-wrap justify-around align-middle">
                        <div className="sm:w-1/2 md:w-1/4 max-sm:w-full justify-center flex p-4">
                            <a href="/#">
                                <div className='justify-center flex text-3xl p-3 hover:text-orange-300 transition-colors'><FontAwesomeIcon icon="fa-solid fa-credit-card" /></div>                               
                                <div className='min-w-max'>Payment</div>
                            </a>
                        </div>
                        <div className="sm:w-1/2 md:w-1/4 max-sm:w-full justify-center flex p-4">
                            <a href="/#">
                                <div className='justify-center flex text-3xl p-3 hover:text-orange-300 transition-colors'><FontAwesomeIcon icon="fa-solid fa-headphones-simple" /></div>
                               
                                <div className='min-w-max'>Online Service</div>
                            </a>
                        </div>
                        <div className="sm:w-1/2 md:w-1/4 max-sm:w-full justify-center flex p-4">
                            <a href="/#">
                                <div className='justify-center flex text-3xl p-3 hover:text-orange-300 transition-colors'><FontAwesomeIcon icon="fa-solid fa-rotate-left" /></div>
                                <div className='min-w-max'>Return 7 days</div>
                            </a>
                        </div>
                        <div className="sm:w-1/2 md:w-1/4 max-sm:w-full justify-center flex p-4">
                            <a href="/#">
                                <div className='justify-center flex text-3xl p-3 hover:text-orange-300 transition-colors'><FontAwesomeIcon icon="fa-solid fa-truck-fast" /></div> 
                                <div className='min-w-max'>Worldwide Shipping</div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flat-infors">
                <div className="container"></div>
            </div>
        </>
    );
}
export default Footer;