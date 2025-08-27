import { useState, useEffect } from 'react';
import api from '../services/api';
import { useCart } from '../context/CartContext';

export default function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { addToCart } = useCart();

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await api.get("/products");
      setProducts(response.data);
      setError(null);
    } catch (err) {
      console.error('Error fetching products:', err);
      setError('Failed to load products. Please make sure the backend is running on http://localhost:8080');
    } finally {
      setLoading(false);
    }
  };
        {
          id: 5,
          name: "Phone Case",
          price: 24.99,
          image: "https://images.unsplash.com/photo-1556656793-08538906a9f8?w=300&h=300&fit=crop"
        },
        {
          id: 6,
          name: "Wireless Mouse",
          price: 39.99,
          image: "https://images.unsplash.com/photo-1527814050087-3793815479db?w=300&h=300&fit=crop"
        }
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleAddToCart = (product) => {
    addToCart(product);
    // Show success feedback
    const button = document.getElementById(`add-btn-${product.id}`);
    const originalText = button.textContent;
    button.textContent = 'Added!';
    button.classList.add('bg-green-500');
    
    setTimeout(() => {
      button.textContent = originalText;
      button.classList.remove('bg-green-500');
    }, 1000);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 pt-20">
        <div className="max-w-6xl mx-auto p-6">
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 pt-20">
      <div className="max-w-6xl mx-auto p-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Our Products</h1>
          <p className="text-gray-600">Discover our amazing collection of products</p>
          {error && (
            <div className="mt-4 p-4 bg-yellow-100 border border-yellow-400 text-yellow-700 rounded">
              {error} - Showing sample products for demo
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map(product => (
            <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <img 
                src={product.imageUrl || product.image || `https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=300&h=200&fit=crop`}
                alt={product.name}
                className="w-full h-48 object-cover"
                onError={(e) => {
                  e.target.src = `https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=300&h=200&fit=crop`;
                }}
              />
              
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {product.name}
                </h3>
                
                {product.description && (
                  <p className="text-gray-600 text-sm mb-3">
                    {product.description}
                  </p>
                )}
                
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-blue-600">
                    ${product.price?.toFixed(2) || '0.00'}
                  </span>
                  
                  <button
                    id={`add-btn-${product.id}`}
                    onClick={() => handleAddToCart(product)}
                    className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors duration-200 font-medium"
                  >
                    Add to Cart
                  </button>
                </div>
                
                {product.stock !== undefined && (
                  <div className="mt-2 text-sm text-gray-500">
                    {product.stock > 0 ? `${product.stock} in stock` : 'Out of stock'}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {products.length === 0 && !loading && (
          <div className="text-center py-12">
            <div className="text-gray-500 text-lg">No products available</div>
          </div>
        )}
      </div>
    </div>
  );
}
