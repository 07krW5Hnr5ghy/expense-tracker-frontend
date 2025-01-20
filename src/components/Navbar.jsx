// src/components/Navbar.jsx
import { Link } from "react-router-dom";
import {useAuth} from "../context/AuthContext";
import LogoutButton from "./LogoutButton";

const Navbar = () => {
  const {isAuthenticated} = useAuth();
  return (
    <nav className="bg-blue-600 text-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center w-full">
        <div className="text-lg font-bold">
          <Link to="/" className="hover:text-gray-300">
            Expense Tracker
          </Link>
        </div>
        <div className="space-x-4">
        {isAuthenticated ? (
          <>
            <Link to="/expenses" className="hover:underline">
              Expenses
            </Link>
            <LogoutButton />
          </>
        ) : (
          <>
            <Link to="/login" className="hover:underline">
              Login
            </Link>
            <Link to="/register" className="hover:underline">
              Register
            </Link>
          </>
        )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
