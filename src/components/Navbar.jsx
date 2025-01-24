import { Link } from "react-router-dom";
import {useAuth} from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const {isAuthenticated,logout,username} = useAuth();
  const navigate = useNavigate();
  const handleLogout = () => {
    logout();
    navigate('/login'); 
  };
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
            <span className="text-sm">
                <strong>{username}</strong>
            </span>
            <button
              onClick={handleLogout}
              className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
            >
              Logout
            </button>
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
