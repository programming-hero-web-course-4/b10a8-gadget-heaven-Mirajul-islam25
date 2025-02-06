import React from 'react';
import bannerImg from '../../assets/images/banner.jpg'
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className=' mx-auto text-white rounded-b-xl flex flex-col items-center justify-center'>
            <div className='w-11/12 mx-auto pt-10 flex flex-col px-5 pb-40 md:pb-72 bg-purple-500 rounded-b-lg items-center justify-center gap-6'>
                <h2 className='text-2xl font-bold md:text-6xl text-center'>
                    Upgrade Your Tech Accessorize with Gadget Heaven Accessories
                </h2>
                <p className='text-sm md:text-base md:font-semibold text-center'>
                    Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
                </p>
                <Link to='Dashboard'>
                    <button className='mt-2 px-3 md:px-[30px] py-2 md:py-[15px] text-purple-500 bg-white md:text-xl font-bold rounded-3xl hover:bg-purple-500 hover:border-2 hover:border-white hover:text-white hover:duration-500'>
                        Shop Now
                    </button>
                </Link>
            </div>
            <div className=' flex items-center justify-center p-4 border-2 backdrop-opacity-10 backdrop-invert bg-white/10 rounded-2xl -translate-y-32 md:-translate-y-60 -mb-24 md:-mb-52'>
                <div>
                    <div className='h-60 w-72 md:w-fit md:h-[420px]'>
                        <img className='h-full w-full rounded-xl' src={bannerImg} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;