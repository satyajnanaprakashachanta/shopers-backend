import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

function Navbar() {
  const token = localStorage.getItem('token');
  const { getCartItemsCount } = useCart();

  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.href = '/login';
  };

  return (
    <nav className="bg-gray-800 text-white p-4 fixed top-0 left-0 right-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">
          Shop
        </Link>
        
        <div className="flex items-center space-x-4">
          {/* Always show Products and Cart */}
          <Link
            to="/products"
            className="hover:text-gray-300 transition duration-200"
          >
            Products
          </Link>
          
          <Link
            to="/cart"
            className="hover:text-gray-300 transition duration-200 relative"
          >
            Cart
            {getCartItemsCount() > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {getCartItemsCount()}
              </span>
            )}
          </Link>

          {token ? (
            <>
              <Link
                to="/orders"
                className="hover:text-gray-300 transition duration-200"
              >
                My Orders
              </Link>
              <Link
                to="/dashboard"
                className="hover:text-gray-300 transition duration-200"
              >
                Dashboard
              </Link>
              <button
                onClick={handleLogout}
                className="hover:text-gray-300 transition duration-200"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="hover:text-gray-300 transition duration-200"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="hover:text-gray-300 transition duration-200"
              >
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
