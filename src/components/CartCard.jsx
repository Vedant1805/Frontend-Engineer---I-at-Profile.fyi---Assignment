import React from 'react';
import { useDispatch } from 'react-redux';
import { removeFromCart, updateQuantity } from '../redux/CartSlice';

const CartCard = ({ product }) => {
  const dispatch = useDispatch();
  const [count, setCount] = React.useState(product.quantity || 1);

  const increaseCount = () => {
    const newCount = count + 1;
    setCount(newCount);
    dispatch(updateQuantity({ id: product.id, quantity: newCount }));
  };

  const decreaseCount = () => {
    if (count > 1) {
      const newCount = count - 1;
      setCount(newCount);
      dispatch(updateQuantity({ id: product.id, quantity: newCount }));
    } else if (count === 1) {
      dispatch(removeFromCart(product.id));
    }
  };

  React.useEffect(() => {
    if (count === 0) {
      dispatch(removeFromCart(product.id));
    }
  }, [count, dispatch, product.id]);

  const priceInINR = (product.price * count).toFixed(2);
  const formattedPrice = `₹${priceInINR.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`;

  return (
    <div className="flex flex-col md:flex-row items-center p-4 border border-gray-200 rounded-md shadow-sm mb-4 w-full">
      <img
        src={product.image}
        alt={product.name}
        className="w-32 h-32 object-cover rounded-md"
      />
      <div className="ml-4 flex-1">
        <h2 className="text-lg font-semibold truncate">{product.name}</h2>
        <p className="text-gray-600 text-sm truncate">{product.description}</p>
        <p className="text-xl font-bold">{formattedPrice}</p>
      </div>
      <div className="flex flex-col md:flex-row items-center mt-4 md:mt-0 space-y-2 md:space-y-0 md:space-x-4">
        <div className="flex items-center space-x-2">
          <button
            onClick={decreaseCount}
            className="bg-gray-200 px-3 py-1 rounded-md text-gray-700 hover:bg-gray-300 transition-colors duration-300"
          >
            -
          </button>
          <span className="text-lg">{count}</span>
          <button
            onClick={increaseCount}
            className="bg-gray-200 px-3 py-1 rounded-md text-gray-700 hover:bg-gray-300 transition-colors duration-300"
          >
            +
          </button>
        </div>
        <button
          onClick={() => dispatch(removeFromCart(product.id))}
          className="bg-[#2e2d4e] text-white px-4 py-2 rounded-md hover:bg-[#1f1e3d] transition-colors duration-300"
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartCard;
