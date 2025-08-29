import { Link } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';

const Header = () => {
  const { getCartItemCount } = useCart();
  const cartItemCount = getCartItemCount();

  return (
    <header className="bg-white/90 backdrop-blur-sm shadow-lg sticky top-0 z-50 border-b border-orange-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <span className="text-white font-bold text-lg">🍽️</span>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-orange-600 via-red-600 to-yellow-600 bg-clip-text text-transparent group-hover:from-orange-700 group-hover:via-red-700 group-hover:to-yellow-700 transition-all duration-300">
              Ordering System
            </span>
          </Link>
          
          <nav className="flex items-center space-x-8">
            <Link 
              to="/" 
              className="text-gray-700 hover:text-orange-600 transition-colors duration-200 font-medium hover:scale-105 transform"
            >
              Home
            </Link>
            <Link 
              to="/menu" 
              className="text-gray-700 hover:text-orange-600 transition-colors duration-200 font-medium hover:scale-105 transform"
            >
              Menu
            </Link>
            <Link 
              to="/cart" 
              className="relative text-gray-700 hover:text-orange-600 transition-colors duration-200 font-medium hover:scale-105 transform group"
            >
              Cart
              {cartItemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold animate-pulse">
                  {cartItemCount}
                </span>
              )}
            </Link>
            <Link 
              to="/admin/login" 
              className="text-gray-700 hover:text-orange-600 transition-colors duration-200 font-medium hover:scale-105 transform"
            >
              Admin
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
