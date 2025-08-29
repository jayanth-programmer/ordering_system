import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';
import { placeOrder } from '../services/api';

const Cart = () => {
  const { items, removeFromCart, updateQuantity, calculateTotal, clearCart } = useCart();
  const navigate = useNavigate();
  const [isCheckingOut, setIsCheckingOut] = useState(false);

  const handleQuantityChange = (menuItemId, newQty) => {
    if (newQty >= 1) {
      updateQuantity(menuItemId, newQty);
    }
  };

  const handleCheckout = async () => {
    if (items.length === 0) return;

    try {
      setIsCheckingOut(true);
      await placeOrder(items);
      clearCart();
      navigate('/confirmation');
    } catch (error) {
      console.error('Checkout error:', error);
      alert('Failed to place order. Please try again.');
    } finally {
      setIsCheckingOut(false);
    }
  };

  const formatCurrency = (amount) => {
    return `₹${parseFloat(amount).toFixed(0)}`;
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-yellow-50 flex items-center justify-center py-12">
        <div className="text-center max-w-md mx-auto px-4">
          <div className="text-gray-400 text-8xl mb-6 animate-bounce">🛒</div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Your Cart is Empty</h2>
          <p className="text-gray-600 mb-8 text-lg">
            Looks like you haven't added any delicious Indian dishes yet!
          </p>
          <button
            onClick={() => navigate('/')}
            className="px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold text-lg rounded-full hover:from-orange-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Browse Our Menu
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-yellow-50 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-600 via-red-600 to-yellow-600 bg-clip-text text-transparent mb-4">
            Your Shopping Cart
          </h1>
          <p className="text-xl text-gray-600">
            Review your order before checkout
          </p>
        </div>

        {/* Cart Items */}
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden mb-8">
          <div className="p-6 md:p-8">
            <div className="space-y-6">
              {items.map((item, index) => (
                <div 
                  key={item.menuItemId} 
                  className={`flex items-center py-6 border-b border-gray-100 last:border-b-0 transition-all duration-300 ${
                    index === items.length - 1 ? '' : 'hover:bg-gray-50'
                  }`}
                >
                  {/* Item Image */}
                  <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-xl overflow-hidden mr-6 flex-shrink-0">
                    <img 
                      src={item.imageURL} 
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>
                  
                  {/* Item Details */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2 overflow-hidden text-ellipsis whitespace-nowrap">
                      {item.name}
                    </h3>
                    {item.description && (
                      <p className="text-gray-600 text-sm mb-2 overflow-hidden text-ellipsis whitespace-nowrap">
                        {item.description}
                      </p>
                    )}
                    <div className="text-2xl font-bold text-orange-600">
                      {formatCurrency(item.price)}
                    </div>
                  </div>

                  {/* Quantity Controls */}
                  <div className="flex items-center space-x-3 mr-6">
                    <button
                      onClick={() => handleQuantityChange(item.menuItemId, item.qty - 1)}
                      className="w-10 h-10 rounded-full bg-gray-100 hover:bg-orange-100 flex items-center justify-center transition-all duration-200 hover:scale-110 group"
                    >
                      <svg className="w-5 h-5 text-gray-600 group-hover:text-orange-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                      </svg>
                    </button>
                    
                    <span className="w-12 text-center font-bold text-lg text-gray-800">
                      {item.qty}
                    </span>
                    
                    <button
                      onClick={() => handleQuantityChange(item.menuItemId, item.qty + 1)}
                      className="w-10 h-10 rounded-full bg-gray-100 hover:bg-orange-100 flex items-center justify-center transition-all duration-200 hover:scale-110 group"
                    >
                      <svg className="w-5 h-5 text-gray-600 group-hover:text-orange-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                      </svg>
                    </button>
                  </div>

                  {/* Subtotal */}
                  <div className="text-right mr-6 min-w-0">
                    <div className="text-xl font-bold text-gray-800">
                      {formatCurrency(item.price * item.qty)}
                    </div>
                    <div className="text-sm text-gray-500">
                      {item.qty} × {formatCurrency(item.price)}
                    </div>
                  </div>

                  {/* Remove Button */}
                  <button
                    onClick={() => removeFromCart(item.menuItemId)}
                    className="text-red-500 hover:text-red-700 transition-colors duration-200 p-2 hover:bg-red-50 rounded-full group"
                  >
                    <svg className="w-6 h-6 group-hover:scale-110 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Cart Summary */}
          <div className="bg-gradient-to-r from-orange-50 to-red-50 p-6 md:p-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              {/* Cart Stats */}
              <div className="flex items-center space-x-6 text-gray-600">
                <div className="flex items-center space-x-2">
                  <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
                  </svg>
                  <span>{items.length} {items.length === 1 ? 'item' : 'items'}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>30 min delivery</span>
                </div>
              </div>

              {/* Total */}
              <div className="text-right">
                <div className="text-2xl font-bold text-gray-800 mb-1">
                  Total: {formatCurrency(calculateTotal())}
                </div>
                <div className="text-sm text-gray-600">
                  Including all taxes and delivery charges
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <button
                onClick={clearCart}
                className="flex-1 px-6 py-3 bg-white text-orange-600 font-semibold rounded-xl hover:bg-orange-50 transition-all duration-300 border-2 border-orange-200 hover:border-orange-300 transform hover:scale-105"
              >
                Clear Cart
              </button>
              <button
                onClick={handleCheckout}
                disabled={isCheckingOut}
                className="flex-1 px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold text-lg rounded-xl hover:from-orange-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isCheckingOut ? (
                  <div className="flex items-center justify-center space-x-2">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    <span>Processing...</span>
                  </div>
                ) : (
                  <div className="flex items-center justify-center space-x-2">
                    <span>Proceed to Checkout</span>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Continue Shopping */}
        <div className="text-center">
          <button
            onClick={() => navigate('/')}
            className="px-6 py-3 text-orange-600 hover:text-orange-700 font-medium transition-colors duration-200 hover:underline"
          >
            ← Continue Shopping
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
