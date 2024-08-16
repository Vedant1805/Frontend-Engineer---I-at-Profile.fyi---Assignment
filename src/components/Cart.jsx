import React from 'react';
import { useSelector } from 'react-redux';
import CartCard from './CartCard';

const Cart = () => {
  const cartItems = useSelector(state => state.cart.cart);

  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * (item.quantity || 1), 0);
  const formattedTotalPrice = `₹${totalPrice.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`;

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-4xl bg-white p-6 border border-gray-200 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-6 text-gray-900">Your Cart</h1>
        {cartItems.length === 0 ? (
          <p className="text-lg text-gray-600">Your cart is empty.</p>
        ) : (
          <>
            <div className="space-y-4 mb-6">
              {cartItems.map((item) => (
                <CartCard key={item.id} product={item} />
              ))}
            </div>
            <div className="bg-gray-50 p-4 border border-gray-300 rounded-lg">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">Total Price</h2>
              <p className="text-2xl font-bold text-gray-900 mb-4">{formattedTotalPrice}</p>
              <button
                className="w-full px-4 py-2 bg-gray-600 text-white font-semibold rounded-lg hover:bg-gray-600 transition-colors duration-300"
                onClick={() => alert('Proceed to Checkout')}
              >
                Proceed to Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
