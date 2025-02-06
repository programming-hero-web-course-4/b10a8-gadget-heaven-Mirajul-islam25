import React, { useContext } from 'react';
import { IoMdClose } from "react-icons/io";
import { BsCurrencyDollar } from "react-icons/bs";
import { RemoveWish } from '../Root/Root';

const WishItem = ({product}) => {
    const remove=useContext(RemoveWish)
    const { name, img, price, description } = product;
    return (
        <div className='w-10/12 mx-auto pr-5 mb-4 flex justify-between items-start bg-white rounded-xl'>
            <div className='flex gap-8  bg-white p-8 rounded-xl flex-grow'>
                <div className='h-[150px] w-[200px] rounded-xl shadow-md'>
                    <img className='h-full w-full rounded-xl' src={img} alt="" />
                </div>
                <div className='flex flex-col gap-3'>
                    <div className=''>
                        <h3 className='text-2xl font-semibold'>{name}</h3>
                        
                    </div>
                    <p className='flex items-center text-lg font-semibold'><p>Description : </p><p className='text-sm font-normal text-zinc-400'> {description}</p></p>
                    <h3 className='text-[20px] font-semibold flex items-center'>Price : <p><BsCurrencyDollar /> </p> {price} USD</h3>
                </div>
                
            </div>
            <button onClick={()=>remove(product)} className='text-3xl font-bold border-2 border-purple-500 text-purple-500 mt-5 rounded-full'><IoMdClose /></button>
        </div>
    );
};

export default WishItem;