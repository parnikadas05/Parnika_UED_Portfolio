
import React from 'react';
import ContactButton from '@/components/ContactButton';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="container mx-auto px-4 py-20 flex flex-col md:flex-row items-center gap-12 mt-16">
        <div className="flex-1 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <p className="text-gold text-sm mb-2">Hello, Welcome</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            I'm Parnika Das
          </h1>
          <p className="text-gray-400 mb-8 max-w-xl">
            A React Developer and UI/UX enthusiast passionate about creating beautiful, functional and user-friendly web applications. I help businesses and individuals bring their digital visions to life with modern, clean and responsive websites.
          </p>
          <ContactButton />
        </div>
        <div className="flex-1 flex justify-center md:justify-end animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <div className="w-64 h-80 bg-light-blue rounded-md relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-gold/10 to-transparent"></div>
            <img 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" 
              alt="Parnika Das" 
              className="w-full h-full object-cover" 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
