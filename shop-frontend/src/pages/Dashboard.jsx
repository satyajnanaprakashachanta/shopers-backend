import { useEffect, useState } from 'react';

function Dashboard() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // You can decode the JWT token here to get user info
    const token = localStorage.getItem('token');
    if (token) {
      // For now, just show that we're authenticated
      setUser({ email: 'user@example.com' }); // Replace with actual token decoding
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 pt-20">
      <div className="max-w-6xl mx-auto p-6">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">
            Welcome to Dashboard! 🎉
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h2 className="text-xl font-semibold text-blue-800 mb-2">
                Orders
              </h2>
              <p className="text-blue-600">Manage your orders</p>
            </div>
            
            <div className="bg-green-50 p-6 rounded-lg">
              <h2 className="text-xl font-semibold text-green-800 mb-2">
                Products
              </h2>
              <p className="text-green-600">Browse our catalog</p>
            </div>
            
            <div className="bg-purple-50 p-6 rounded-lg">
              <h2 className="text-xl font-semibold text-purple-800 mb-2">
                Profile
              </h2>
              <p className="text-purple-600">Update your information</p>
            </div>
          </div>

          <div className="mt-8 p-4 bg-gray-50 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Authentication Status</h3>
            <p className="text-green-600">✅ You are successfully logged in!</p>
            <p className="text-sm text-gray-600 mt-1">
              JWT Token is stored in localStorage
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
