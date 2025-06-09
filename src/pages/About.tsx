
import React from 'react';
import ContactButton from '@/components/ContactButton';

const About = () => {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-20 flex flex-col md:flex-row gap-12 mt-16">
        <div className="flex-1 md:order-2 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <h2 className="text-3xl font-bold mb-6">About <span className="text-gold">Me</span></h2>
          
          <p className="text-gray-300 mb-4">
            My journey as a developer began with React. Since then, I've mastered the principles of clean, efficient web development and UI/UX design architecture. Each step has prepared me to exceed expectations in the projects I take on.
          </p>
          
          <p className="text-gray-300 mb-4">
            That means not only do I build web apps, but I ensure the solutions fundamentally address the needs of clients and users. I always push boundaries to deliver quality products ahead of time and on budget.
          </p>
          
          <p className="text-gray-300 mb-6">
            I believe in technology, not just as my livelier and not just because it's effective, but as a means of creating meaningful experiences. What got me to where I am today is being a quick technical and problem solver, highly adaptive to tech changes, a natural communicator, an eager learner at heart, and comfortable with uncertainty.
          </p>
          
          <ContactButton />
        </div>
        
        <div className="flex-1 md:order-1 flex justify-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <div className="w-64 h-80 bg-light-blue rounded-md relative overflow-hidden border-l-4 border-gold">
            <img 
              src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81" 
              alt="About Parnika Das" 
              className="w-full h-full object-cover" 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
