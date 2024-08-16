import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from 'react-redux';

const Navbar = () => {
    const cartItems = useSelector(state => state.cart.cart);

    return (
        <nav className="flex justify-between items-center p-4 bg-[#2e2d4e] text-white shadow-md px-[80px]">
            <div className="text-lg font-bold">
                MyApp
            </div>
            <div className="hidden md:flex space-x-6">
                <Link to="/" className="hover:text-gray-200 font-bold transition-colors duration-300">Home</Link>

                <Link to="/cart" className="relative flex items-center space-x-2 hover:text-gray-200 transition-colors duration-300">
                    <FaShoppingCart className="text-xl z-10" />
                    {cartItems.length > 0 && (
                        <span className="absolute -top-2 -right-3 bg-red-600 text-white text-xs font-bold rounded-full px-2 py-0.5">
                            {cartItems.length}
                        </span>
                    )}
                    {cartItems.length === 0 && (<Link to="/Cart" className="hover:text-gray-200 font-bold transition-colors duration-300">Cart</Link>)}
                </Link>

            </div>
            <div className="md:hidden flex items-center space-x-4">
                <Link to="/" className="hover:text-gray-200 font-bold transition-colors duration-300">Home</Link>
                <Link to="/cart" className="relative text-xl flex items-center">
                    <FaShoppingCart />
                    {cartItems.length > 0 && (
                        <span className="absolute -top-2 -right-3 bg-red-600 text-white text-xs font-bold rounded-full px-2 py-0.5">
                            {cartItems.length}
                        </span>
                    )}
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
