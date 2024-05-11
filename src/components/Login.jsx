import { useState,useEffect  } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { MdLock } from "react-icons/md";
import PropTypes from 'prop-types';


function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/landing"); // Redirect to landing page if token exists
    }
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const response = await fetch("http://localhost:5000/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to login");
      }

      const data = await response.json();
      localStorage.setItem("token", data.token); // Store token in localStorage
      onLogin();
      navigate("/landing"); // Redirect to "/landing" after successful login
    } catch (error) {
      setError("Invalid username or password");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="login-container w-auto">
      {" "}
      {/* Set background color for container */}
      <div className="login-card relative flex items-center justify-center h-screen w-auto">
        <img
          src="../public/bg.jpg"
          alt="Login background"
          className="absolute inset-0 object-cover w-full h-full z-0 "
        />{" "}
        {/* Background image styles */}
        <div className="login-form backdrop-blur-sm px-8 py-6 rounded-lg shadow-md z-10 bg-gradient-to-r from-slate-500">
          {" "}
          {/* Login card styles */}
          <h2 className="login-heading  text-center mb-6 text-2xl font-bold text-white">
            Login
          </h2>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="form-group relative">
              <input
                type="text"
                id="username"
                className="form-input border border-gray-300 rounded-xl px-3 py-2 pl-10 focus:outline-none focus:ring-1 focus:ring-black"
                value={username}
                placeholder="Username"
                onChange={(e) => setUsername(e.target.value)}
              />
              <FaUser className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400" />
            </div>

            <div className="form-group relative">
              <input
                type="password"
                id="password"
                className="form-input border border-gray-300 rounded-xl px-3 py-2 pl-10 focus:outline-none focus:ring-1 focus:ring-black"
                value={password}
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <MdLock
                size={20}
                className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400"
              />
            </div>

            <button
              type="submit"
              className="login-btn bg-gray-600 text-white py-2 px-4 rounded-lg hover:bg-gray-700 disabled:opacity-50"
              disabled={isLoading}
            >
              {isLoading ? "Logging in..." : "Login"}
            </button>
          </form>
          {error && (
            <p className="error-msg text-red-500 text-center">{error}</p>
          )}
          <p className="register-link text-center text-gray-700 mt-4">
            New User?{" "}
            <Link to="/register" className="text-white underline">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
  
}

Login.propTypes = {
  onLogin: PropTypes.func.isRequired,
};

export default Login;
