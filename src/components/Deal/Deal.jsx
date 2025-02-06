import React from 'react';
import { Link } from 'react-router-dom';
import { FaDollarSign } from "react-icons/fa6";

const Deal = ({ product }) => {
    const { img, name, price, product_id } = product;
    
    return (
        <div className='bg-zinc-50 p-5 rounded-2xl flex flex-col gap-3'>
            <div className='h-[262px] object-cover shadow-md rounded-3xl'>
                <img className='h-full w-full rounded-3xl' src={img} alt="" />
            </div>
            <div className='flex flex-col gap-3'>
                <div>
                    <h3 className='font-semibold text-2xl'>{name}</h3>
                </div>
                <p className='flex-grow flex items-center text-xl font-medium text-zinc-400'>Price :<FaDollarSign /> {price} USD</p>
                <div className=''>
                    <Link to={`Product-Details/${product_id}`}>
                        <button className='border-2 border-purple-500 text-purple-500 bg-white hover:bg-purple-500 hover:text-white hover:duration-500 hover:border-0 px-3 py-2 rounded-3xl'>View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Deal;