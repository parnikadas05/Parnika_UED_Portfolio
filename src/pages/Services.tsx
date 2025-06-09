
import React from 'react';

const Services = () => {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-20 mt-16">
        <div className="text-center mb-12 animate-fade-in" style={{ animationDelay: '0.1s' }}>
          <h2 className="text-3xl font-bold mb-4">My <span className="text-gold">Services</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            I design modern web interfaces, develop full-stack applications, and provide technical consulting services, helping you bring your digital visions to life with the latest tech stack and best practices.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Service 1 */}
          <div className="custom-card animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="mb-4 text-gold">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Full-Stack<br />Web Development</h3>
            <p className="text-gray-400 text-sm">
              Creating scalable and responsive websites and applications using modern technologies like React, Node.js, and Next.js. I specialize in building solutions that are maintainable and scalable.
            </p>
          </div>
          
          {/* Service 2 */}
          <div className="custom-card animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="mb-4 text-gold">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">UI/UX Design<br />& Prototyping</h3>
            <p className="text-gray-400 text-sm">
              Creating visually appealing and user-friendly interfaces that enhance the user experience. I use tools like Figma to design mockups and prototypes before the development process begins.
            </p>
          </div>
          
          {/* Service 3 */}
          <div className="custom-card animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="mb-4 text-gold">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Technical Mentorship<br />& Code Review</h3>
            <p className="text-gray-400 text-sm">
              With years of experience in development, I provide guidance to new developers through code reviews and best practices. I can help improve your code quality and development processes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
