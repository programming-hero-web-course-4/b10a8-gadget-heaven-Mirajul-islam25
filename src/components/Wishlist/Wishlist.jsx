import React, { useContext } from 'react';
import { GetWishDetailContext } from '../Root/Root';
import WishItem from '../WishItem/WishItem';

const Wishlist = () => {
    const products = useContext(GetWishDetailContext);
    return (
        <div className='mb-8'>
            <div className='w-10/12 mx-auto mb-8'>
                <h3 className='text-2xl font-bold'>Wishlist</h3>
            </div>
            <div>
                {
                    products.map((product,idx)=><WishItem key={idx} product={product}></WishItem>)
                }
            </div>
        </div>
    );
};

export default Wishlist;