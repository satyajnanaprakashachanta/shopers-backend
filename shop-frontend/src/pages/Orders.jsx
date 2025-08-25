import { useState, useEffect } from 'react';
import axios from 'axios';
import { API_ENDPOINTS } from '../config/api';

export default function Orders() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      setLoading(true);
      const token = localStorage.getItem('token');
      if (!token) {
        setError('Please log in to view your orders');
        setLoading(false);
        return;
      }

      const response = await axios.get(`${API_ENDPOINTS.ORDERS}/my`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setOrders(response.data);
    } catch (err) {
      console.error('Error fetching orders:', err);
      setError('Failed to load orders');
      // Show sample data for demo
      setOrders([
        {
          id: 1,
          total: 79.98,
          createdAt: '2025-08-25T10:30:00',
          lines: [
            {
              productId: 1,
              productName: 'Classic Tee',
              quantity: 2,
              priceEach: 19.99,
              lineTotal: 39.98
            },
            {
              productId: 4,
              productName: 'Wireless Mouse',
              quantity: 1,
              priceEach: 14.99,
              lineTotal: 14.99
            }
          ]
        },
        {
          id: 2,
          total: 129.98,
          createdAt: '2025-08-24T15:45:00',
          lines: [
            {
              productId: 3,
              productName: 'Running Shoes',
              quantity: 1,
              priceEach: 59.99,
              lineTotal: 59.99
            },
            {
              productId: 5,
              productName: 'Mechanical Keyboard',
              quantity: 1,
              priceEach: 69.99,
              lineTotal: 69.99
            }
          ]
        }
      ]);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 pt-20">
        <div className="max-w-4xl mx-auto p-6">
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 pt-20">
      <div className="max-w-4xl mx-auto p-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">My Orders</h1>
          <p className="text-gray-600">Track your purchase history and order details</p>
          {error && (
            <div className="mt-4 p-4 bg-yellow-100 border border-yellow-400 text-yellow-700 rounded">
              {error} - Showing sample orders for demo
            </div>
          )}
        </div>

        {orders.length === 0 ? (
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <div className="text-gray-500 text-lg mb-4">No orders found</div>
            <p className="text-gray-400">You haven't placed any orders yet.</p>
          </div>
        ) : (
          <div className="space-y-6">
            {orders.map(order => (
              <div key={order.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="px-6 py-4 bg-gray-50 border-b">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800">
                        Order #{order.id}
                      </h3>
                      <p className="text-sm text-gray-600">
                        Placed on {formatDate(order.createdAt)}
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-blue-600">
                        ${order.total?.toFixed(2)}
                      </div>
                      <div className="text-sm text-gray-500">
                        {order.lines?.length || 0} item{(order.lines?.length || 0) !== 1 ? 's' : ''}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="px-6 py-4">
                  <h4 className="font-medium text-gray-800 mb-3">Order Items:</h4>
                  <div className="space-y-2">
                    {order.lines?.map((line, index) => (
                      <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                        <div className="flex-1">
                          <div className="font-medium text-gray-800">
                            {line.productName}
                          </div>
                          <div className="text-sm text-gray-600">
                            Quantity: {line.quantity} × ${line.priceEach?.toFixed(2)}
                          </div>
                        </div>
                        <div className="font-semibold text-gray-800">
                          ${line.lineTotal?.toFixed(2)}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
