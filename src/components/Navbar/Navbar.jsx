import React from 'react';
import logoImg from './../../assets/images/shopping-cart 1.png'
import { Link, NavLink, useLocation } from 'react-router-dom';
import { IoCartSharp } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";


const links = <>
    <li><NavLink to="/">Home</NavLink></li>
    <li><NavLink to="Dashboard">Dashboard</NavLink></li>
    <li><NavLink to="Best-Deals">Best Deals</NavLink></li>

</>
const Navbar = () => {
    const location=useLocation();
    const isHome=location.pathname==='/';
    const navBg=isHome?'bg-purple-500 rounded-t-xl': 'bg-base-300';
    return (
        <div className='pt-7 bg-base-300'>
            <div className={`navbar  ${navBg} w-11/12 mx-auto`}>
                <img className='h-5 w-5 md:h-11 rounded-full mr-2 md:w-11' src={logoImg} alt="" />
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <Link to='/'>
                        <p className="px-2 py-1 md:px-4 md:py-[10px]  rounded-3xl bg-purple-500 text-white hover:text-purple-500 hover:border-purple-600 hover:border-2 hover:bg-white text-sm md:text-xl hover:duration-500">Gadgets Heaven</p>
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end flex items-center gap-3">
                    <Link to='/Dashboard' ><IoCartSharp className='font-bold p-3 rounded-full bg-white w-full h-full text-purple-500  text-xl' /></Link>
                    <Link to='/Dashboard'><FaRegHeart className='font-bold   p-3 rounded-full bg-white w-full h-full text-purple-500 text-xl'/></Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;