// src/components/Navbar.jsx
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center w-full">
        <div className="text-lg font-bold">
          <Link to="/" className="hover:text-gray-300">
            Expense Tracker
          </Link>
        </div>
        <div className="space-x-4">
          <Link
            to="/"
            className="hover:bg-blue-700 px-3 py-2 rounded-md transition-all"
          >
            Home
          </Link>
          <Link
            to="/expenses"
            className="hover:bg-blue-700 px-3 py-2 rounded-md transition-all"
          >
            Expenses
          </Link>
          <Link
            to="/login"
            className="hover:bg-blue-700 px-3 py-2 rounded-md transition-all"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="hover:bg-blue-700 px-3 py-2 rounded-md transition-all"
          >
            Register
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
