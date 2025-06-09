
import React from 'react';
import { Link } from 'react-router-dom';

const ContactButton = () => {
  return (
    <Link 
      to="/contact" 
      className="inline-block bg-gold text-dark font-medium py-2 px-6 rounded hover:opacity-90 transition-opacity"
    >
      Contact Me
    </Link>
  );
};

export default ContactButton;
