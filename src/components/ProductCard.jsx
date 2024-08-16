import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addtoCart } from '../redux/CartSlice';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.cart);
  const [isAdded, setIsAdded] = useState(cartItems.some(item => item.id === product.id));

  const handleAddToCart = () => {
    dispatch(addtoCart({
      id: product.id,
      image: product.image,
      name: product.name,
      description: product.description,
      price: product.price
    }));
    setIsAdded(true);
    toast.success(`${product.name} added to cart!`);
  };

  const formattedPrice = `₹${product.price.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`;

  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden w-full max-w-xs">
      <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
      <div className="p-4 flex flex-col items-start">
        <h2 className="text-sm font-semibold text-gray-800 mb-1">{product.name}</h2>
        <p className="text-sm font-medium text-gray-800 mb-2">{product.description}</p>
        <span className="text-xl font-bold text-gray-900 mb-4">{formattedPrice}</span>
        <button
          className={`w-full px-4 py-2 ${isAdded ? 'bg-gray-400' : 'bg-gray-600'} text-white rounded-lg ${!isAdded && 'hover:bg-gray-700'} transition-colors duration-300`}
          onClick={handleAddToCart}
          disabled={isAdded}
        >
          {isAdded ? 'Added' : 'Add to Cart'}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;