import React, { useContext } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { FaDollarSign } from "react-icons/fa6";
import { TiStarOutline } from "react-icons/ti";
import { IoCartSharp } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { AddCartContext, AddWishContext } from '../Root/Root';
import { Helmet } from 'react-helmet-async';

const Details = () => {
    const addCartFunction=useContext(AddCartContext)
    const products = useLoaderData()
    // console.log(products.length)
    const { id } = useParams()
    // console.log(id)
    const product = products.find(product => product.product_id === id);
    const { name, img, price, availability, description, Specification, rating } = product;
    const addWishFunction=useContext(AddWishContext);
    // console.log(Specification)
    return (
        <div className='flex flex-col bg-purple-500 w-full items-center  mb-96'>
            <Helmet><title>Details</title></Helmet>
            <div className=' text-center text-white pt-6'>
                <h3 className='md:text-[32px] md:font-bold mb-4'>Product Details</h3>
                <p>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
            </div>
            <div className='translate-y-11 flex items-center justify-center p-8 border-2 gap-8 bg-base-100 rounded-2xl  -mb-24 md:-mb-72'>
                <div className='h-60 w-72 md:w-fit md:h-[420px] shadow-md rounded-xl'>
                    <img className='h-full w-full rounded-xl' src={img} alt="" />
                </div>
                <div >
                    <div className='flex flex-col gap-6 justify-start'>
                        <h3 className='font-semibold text-3xl'>{name}</h3>
                        <p className='flex-grow flex items-center text-xl font-semibold '>Price :<FaDollarSign /> {price} USD</p>

                        {
                            availability === true ? (<button className='w-fit px-[14px] py-[7px] bg-green-50 border-2 text-sm font-medium text-green-500 border-green-500 rounded-3xl'>In Stock</button>) : (<button className='w-fit px-[14px] py-[7px] bg-red-50 border-2 text-sm font-medium text-red-500 border-red-500 rounded-3xl'>Out Of Stock</button>)
                        }
                        <p className='text-zinc-400'>{description}</p>
                        <h3 className='font-bold text-lg'>Specification:</h3>
                        <div>
                            {
                                Specification.map((spec, idx) => <p className='text-lg text-zinc-400' key={idx}>{idx + 1}. {spec}</p>)
                            }
                        </div>
                        <h3 className='flex items-center gap-2'>
                            <p className='text-lg font-bold'>Rating </p><TiStarOutline className='text-purple-500 font-bold text-xl' />
                        </h3>
                        <div className='flex gap-3 items-center'>
                            <div className="rating">
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-purple-500" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-purple-500" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-purple-500" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-purple-500" defaultChecked />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-purple-500" />
                            </div>
                            <p className='font-medium px-2 py-1 rounded-2xl bg-zinc-200'>{rating}</p>
                        </div>
                        <div className='flex gap-6'>
                            <div className='flex rounded-3xl items-center gap-5 px-5 py-2 text-white bg-purple-500'>
                                <button onClick={()=>addCartFunction(product)} className='text-lg font-bold'>Add To Cart</button> <IoCartSharp className='text-lg font-bold' />
                            </div>
                            <button onClick={()=>addWishFunction(product)} className='rounded-full bg-white  p-3 border-2 border-purple-500'>
                                <FaRegHeart className='text-xl font-bold text-purple-500'/>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;