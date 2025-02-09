
import { useState } from "react";
import { Link } from "react-router-dom";
import Background from "../components/Background";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add authentication logic here
    console.log("Login attempt:", { email, password });
  };

  return (
    <>
      <Background />
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="w-full max-w-md p-8 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-gray-200 animate-slide-up">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Login</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-primary text-white rounded-lg hover:bg-accent transition-colors"
            >
              Login
            </button>
          </form>
          <p className="mt-4 text-center text-gray-600">
            Don't have an account?{" "}
            <Link to="/signup" className="text-primary hover:text-accent">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
