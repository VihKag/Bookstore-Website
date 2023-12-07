import React, { useState } from "react";
import Header from '../components/Header/Header';
const WishlistPage = () =>{
    const [cartItemCount] = useState(0);

    return(
        <div>
            <Header cartItemCount={cartItemCount} />
        <div className='text-2xl text-center font-bold mt-20'>No items</div>
        </div>
        )
}
export default WishlistPage;