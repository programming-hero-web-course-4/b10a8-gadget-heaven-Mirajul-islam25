import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import CategoryButton from '../CategoryButton/CategoryButton';

const Products = () => {
    const [products, setProducts] = useState([]);
    const [selectedCat, setSelectedCat] = useState('All-Products')

    useEffect(() => {
        fetch('Data.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    const categories = ['All-Products', ...new Set(products.map(product => product.category)), 'TWS'];

    const filteredProducts = selectedCat === 'All-Products'
        ? products : selectedCat === 'TWS' ? []
            : products.filter(product => product.category === selectedCat);



    return (
        <div className='w-9/12 mx-auto flex flex-col md:grid md:grid-cols-5 items-center md:items-start gap-5 mb-20'>
            <div className='flex flex-col md:col-span-1 gap-y-6 bg-white rounded-xl p-6 justify-start'>
                {
                    categories.map((category, idx) => (
                        <CategoryButton
                            key={idx}
                            category={category}
                            onClick={() => setSelectedCat(category)}
                        />
                    ))
                }

            </div>

            <div className='flex flex-col md:grid grid-cols-3 gap-5  col-span-4'>
                {selectedCat === 'TWS' ? (
                    <div className="text-lg font-bold text-center  col-span-3">
                        <h3 className='bg-white  py-5 shadow-lg rounded-xl'>
                            OOPS!! No Items Available At This Moment.
                        </h3>

                    </div>
                ) : (
                    filteredProducts.map(product => (
                        <Product key={product.product_id} product={product} />
                    ))
                )}
            </div>

        </div>
    );
};

export default Products;