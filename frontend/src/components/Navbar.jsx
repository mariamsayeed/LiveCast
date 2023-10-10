// Navbar.js
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import logo2 from "../assets/logo2.png";

const Navbar = () => {
  const user = localStorage.getItem("user");
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };
  return (
    <nav className="bg-black p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img src={logo2} alt="Logo" className="h-10 w-20" />
          <Link to="/" className="text-blue-600 ml-7 text-xl font-bold">
            Live Cast
          </Link>
        </div>
        <ul className="flex space-x-10 ml-10">
          <li>
            <Link
              to="/"
              className="text-white hover:text-blue-500 transition duration-300"
            >
              What's New
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="text-white hover:text-blue-500 transition duration-300"
            >
              Contact
            </Link>
          </li>
          <li>
            {!user ? (
              <Link
                to="/login"
                className="text-white hover:text-blue-500 transition duration-300"
              >
                Login
              </Link>
            ) : (
              <button
                onClick={logout}
                className="text-white hover:text-blue-500 transition duration-300"
              >
                Logout
              </button>
            )}
          </li>
          <li>
            <Link
              to="/signup"
              className="text-white hover:text-blue-500 transition duration-300"
            >
              <button className="text-white bg-blue-500 hover:bg-blue-600 transition duration-300 px-5 py-2 rounded">
                Get Started
              </button>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
