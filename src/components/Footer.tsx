
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark-blue py-8 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center gap-4">
          <div className="text-center mb-4">
            <p className="font-bold text-lg">
              <span className="text-gold">P.</span>Das
            </p>
            <p className="text-gray-400 text-sm mt-1">
              Building solutions that stand design, code, and purpose.<br />
              Let's create something remarkable together.
            </p>
          </div>
          
          <div className="flex gap-4">
            <a href="#" className="text-gray-400 hover:text-gold">
              <div className="h-8 w-8 border border-gray-700 flex items-center justify-center rounded-full">
                <span className="text-sm">fb</span>
              </div>
            </a>
            <a href="#" className="text-gray-400 hover:text-gold">
              <div className="h-8 w-8 border border-gray-700 flex items-center justify-center rounded-full">
                <span className="text-sm">in</span>
              </div>
            </a>
            <a href="#" className="text-gray-400 hover:text-gold">
              <div className="h-8 w-8 border border-gray-700 flex items-center justify-center rounded-full">
                <span className="text-sm">ig</span>
              </div>
            </a>
            <a href="#" className="text-gray-400 hover:text-gold">
              <div className="h-8 w-8 border border-gray-700 flex items-center justify-center rounded-full">
                <span className="text-sm">tw</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
