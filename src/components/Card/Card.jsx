import React, { useContext, useState } from 'react';
import { ClearContext, GetCartDetailContext, GetTotalCost, SortContext } from '../Root/Root';
import CartItem from '../CartItem/CartItem';
import { BsCurrencyDollar } from "react-icons/bs";
import Modal from '../Modal/Modal';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
    const products = useContext(GetCartDetailContext);
    const totalCost = useContext(GetTotalCost);
    const sort = useContext(SortContext);
    const clearCart=useContext(ClearContext);
    // const [isModalOpen, setIsModalOpen] = useState(false);

    const [isModalOpen, setIsModalOpen] = useState(false)



    const handlePurchase = () => {
        if (totalCost === 0) return;

        setIsModalOpen(true);
        clearCart()

    }
    
    const navigate=useNavigate()
    const handleCloseModal = () => {
        setIsModalOpen(false);
        navigate('/');
    }
    return (
        <div>
            <div className='mb-12'>
                <div className='w-10/12 mx-auto flex justify-between mb-8'>
                    <div>
                        <h3 className='text-2xl font-bold'>Cart</h3>
                    </div>
                    <div className='flex gap-6 items-center'>
                        <h3 className='text-2xl font-bold flex items-center'>Total Cost : <BsCurrencyDollar /> {totalCost} USD</h3>
                        <button onClick={sort} className='border-2 border-purple-500 text-purple-500 rounded-3xl px-4 py-2 font-semibold text-lg'>Sort By Price</button>
                        <div>
                            <button onClick={handlePurchase} className={`py - 2 px-5 bg-purple-600 text-white rounded-3xl ${totalCost === 0 ? 'opacity-50 text-black ' : 'hover:bg-purple-800'}`}>
                            Purchase
                        </button>
                        <Modal isOpen={isModalOpen} onClose={handleCloseModal} ></Modal>
                    </div>
                </div>
            </div>
            <div>
                {
                    products.map((product, idx) => <CartItem key={idx} product={product}></CartItem>)
                }
            </div>
        </div>
        </div >
    );
};

export default Cart;