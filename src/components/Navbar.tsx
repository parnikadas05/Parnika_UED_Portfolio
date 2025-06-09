
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path ? 'text-gold' : '';
  };

  return (
    <nav className="bg-dark-blue py-4 px-6 flex justify-between items-center fixed w-full top-0 z-50">
      <div className="flex items-center">
        <Link to="/" className="text-2xl font-bold">
          <span className="text-gold">P</span>Das
        </Link>
      </div>
      <ul className="flex gap-8">
        <li>
          <Link to="/" className={`nav-link uppercase text-sm font-medium ${isActive('/')}`}>Home</Link>
        </li>
        <li>
          <Link to="/about" className={`nav-link uppercase text-sm font-medium ${isActive('/about')}`}>About</Link>
        </li>
        <li>
          <Link to="/services" className={`nav-link uppercase text-sm font-medium ${isActive('/services')}`}>Services</Link>
        </li>
        <li>
          <Link to="/portfolio" className={`nav-link uppercase text-sm font-medium ${isActive('/portfolio')}`}>Portfolio</Link>
        </li>
        <li>
          <Link to="/experiences" className={`nav-link uppercase text-sm font-medium ${isActive('/experiences')}`}>Experiences</Link>
        </li>
        <li>
          <Link to="/contact" className={`nav-link uppercase text-sm font-medium ${isActive('/contact')}`}>Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
