import React, { useEffect, useState } from 'react';
import Deal from '../Deal/Deal';

const BestDeals = () => {
    const [pProducts, setProducts] = useState([]);

    useEffect(() => {
        fetch('Data.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    const products=(pProducts.filter(p=>p.rating>=4.8))
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 w-11/12 md:w-9/12 mx-auto'>
            {
                products.map(product => <Deal key={product.product_id} product={product}></Deal>)
            }
        </div>
    );
};

export default BestDeals;