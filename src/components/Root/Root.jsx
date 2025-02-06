import React, { createContext, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';


export const AddCartContext = createContext();
export const GetCartDetailContext = createContext();
export const GetTotalCost = createContext();
export const AddWishContext = createContext();
export const GetWishDetailContext = createContext();
export const RemoveCart = createContext();
export const RemoveWish = createContext();
export const SortContext = createContext();
export const ClearContext = createContext();


const Root = () => {
    const [cart, setCart] = useState([]);
    const [cost, setCost] = useState(0);

    const [wish, setWish] = useState([]);

    // const [clicked,setClicked]=useState(false);
    const handleAddToWish = (product) => {
        if (wish.find(product => product.product_id === product.product_id)) {
            toast.error('Item Already Added To wishlist', {
                position: "top-center",
                autoClose: 2000
            })
            return;
        }
        const newWish = [...wish, product];
        setWish(newWish);
        toast.success('Added To Wishlist Successfully', {
            position: "top-center",
            autoClose: 2000
        })
    }

    const clearCart = () => {
        setCart([])
        setCost(0)
    }

    const handleAddToCart = (product) => {


        if (cart.find(p => p.product_id === product.product_id)) {
            toast.error('Item Already Added To Cart', {
                position: "top-center",
                autoClose: 2000
            })
            return;
        }
        if(product.availability===false){
            toast.error('Item Not Available.', {
                position: "top-center",
                autoClose: 2000
            })
            return;
        }
        const price = product.price;
        const newPrice = cost + price;
        setCost(newPrice);
        const newCart = [...cart, product];
        setCart(newCart);
        toast.success('Added To Cart Successfully', {
            position: "top-center",
            autoClose: 2000
        })


    }
    const handleRemoveCart = (product) => {
        const remainingCart = cart.filter(cartProduct => cartProduct.product_id !== product.product_id)
        setCart(remainingCart);
        toast.warning('Removed Item From Cart', {
            position: "top-center",
            autoClose: 2000
        })
        const remainigCost = cost - product.price;
        setCost(remainigCost);
    }
    const handleRemoveWish = (product) => {
        const remainingWish = wish.filter(wishProduct => wishProduct.product_id !== product.product_id)
        setWish(remainingWish);
        toast.warning('Removed Item From Wishlist', {
            position: "top-center",
            autoClose: 2000
        })

    }

    const handleSort = () => {
        const sortedCart = [...cart].sort((a, b) => b.price - a.price);
        setCart(sortedCart);
    }
    return (
        <div className='bg-base-300'>
            <ClearContext.Provider value={clearCart}>
                <SortContext.Provider value={handleSort}>
                    <RemoveWish.Provider value={handleRemoveWish}>
                        <RemoveCart.Provider value={handleRemoveCart}>
                            <GetWishDetailContext.Provider value={wish}>
                                <AddWishContext.Provider value={handleAddToWish}>
                                    <GetTotalCost.Provider value={cost}>
                                        <GetCartDetailContext.Provider value={cart}>
                                            <AddCartContext.Provider value={handleAddToCart}>
                                                <Navbar></Navbar>
                                                <Outlet></Outlet>
                                                <Footer></Footer>
                                                <ToastContainer></ToastContainer>
                                            </AddCartContext.Provider>
                                        </GetCartDetailContext.Provider>
                                    </GetTotalCost.Provider>
                                </AddWishContext.Provider>
                            </GetWishDetailContext.Provider>
                        </RemoveCart.Provider>
                    </RemoveWish.Provider>
                </SortContext.Provider>
            </ClearContext.Provider>
        </div>
    );
};

export default Root;