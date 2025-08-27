import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../services/api";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      console.log("Attempting registration with:", { email }); // Debug log
      const res = await api.post("/auth/register", {
        email,
        password,
      });
      console.log("Registration response:", res.data); // Debug log
      alert("Registered successfully!");
      navigate("/login");
    } catch (err) {
      console.error("Registration error:", err); // Debug log
      if (err.response) {
        // Server responded with error status
        alert(`Registration failed: ${err.response.data || err.response.status}`);
      } else if (err.request) {
        // Request was made but no response received
        alert("Registration failed: Cannot connect to server. Please check if backend is running.");
      } else {
        // Something else happened
        alert(`Registration failed: ${err.message}`);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100 pt-16">
      <form
        onSubmit={handleRegister}
        className="bg-white shadow-lg rounded-lg p-8 w-96"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full p-3 border rounded mb-4 focus:outline-none focus:ring-2 focus:ring-green-400"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="w-full p-3 border rounded mb-6 focus:outline-none focus:ring-2 focus:ring-green-400"
        />
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-green-500 text-white py-3 rounded hover:bg-green-600 transition disabled:opacity-50"
        >
          {loading ? "Registering..." : "Register"}
        </button>
        <p className="text-center mt-4 text-gray-600">
          Already have an account?{" "}
          <Link to="/login" className="text-green-500 hover:text-green-600">
            Login here
          </Link>
        </p>
      </form>
    </div>
  );
}
