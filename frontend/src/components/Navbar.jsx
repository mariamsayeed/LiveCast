import React from 'react';

const Navbar = () =>{
  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div className="text-white text-2xl font-bold">Live Cast</div>
          <ul className="flex space-x-4">
            <li>
              <a
                href="#"
                className="text-white hover:text-gray-300 transition duration-300"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-white hover:text-gray-300 transition duration-300"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-white hover:text-gray-300 transition duration-300"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-white hover:text-gray-300 transition duration-300"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
