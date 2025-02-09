
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-lg border-b border-gray-200 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-primary hover:text-accent transition-colors">
            MathLectures
          </Link>
          <div className="space-x-4">
            <Link to="/login" className="px-4 py-2 rounded-lg hover:bg-primary/10 transition-colors">
              Login
            </Link>
            <Link to="/signup" className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-accent transition-colors">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
