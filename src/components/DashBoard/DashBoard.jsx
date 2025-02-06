import React, { useState } from 'react';
import Cart from '../Card/Card';
import Wishlist from '../Wishlist/Wishlist';
import { Helmet } from 'react-helmet-async';

const Dashboard = () => {
    const[isVisible,setIsVisible]=useState(true);

    return (
        <div>
            <Helmet><title>Dashboard</title></Helmet>
            <div className='bg-purple-500 mb-6 pb-8'>
                <div className=' text-center text-white pt-6'>
                    <h3 className='md:text-[32px] md:font-bold mb-4'>Dashboard</h3>
                    <p className='mb-4'>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                    <div className='flex items-center gap-3 justify-center'>
                        <button onClick={()=>setIsVisible(true)} className='rounded-3xl px-10 bg-white text-purple-500 text-lg font-bold py-1'>Cart</button>
                        <button onClick={()=>setIsVisible(false)}  className=' rounded-3xl px-10 bg-white text-purple-500 text-lg font-bold py-1'>Wishlist</button>
                    </div>
                </div>
            </div>
            <div>
                {
                    isVisible?<Cart></Cart>:<Wishlist></Wishlist>
                    
                }
            </div>
        </div>

    );
};

export default Dashboard;