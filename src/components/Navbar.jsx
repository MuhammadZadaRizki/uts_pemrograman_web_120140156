// src/components/Navbar.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-red-600 text-white py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-4">
        <h1 className="text-xl font-bold">Timnas Indonesia</h1>
        <div className="space-x-4">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? 'underline font-semibold' : ''
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/squad"
            className={({ isActive }) =>
              isActive ? 'underline font-semibold' : ''
            }
          >
            Squad
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
