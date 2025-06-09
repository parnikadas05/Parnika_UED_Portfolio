
import React from 'react';

const Portfolio = () => {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-20 mt-16">
        <div className="text-center mb-12 animate-fade-in" style={{ animationDelay: '0.1s' }}>
          <h2 className="text-3xl font-bold mb-4">My <span className="text-gold">Projects</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A showcase of my dedication and UI/UX expertise creating clean code and meaningful user experiences.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Project 1 */}
          <div className="project-card animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="bg-dark p-4 rounded mb-4">
              <p className="text-xs text-gray-400">June 2021 - Present</p>
              <h3 className="text-xl font-semibold text-gold">School Website Redesign</h3>
              <p className="text-sm text-gray-400">Figma</p>
            </div>
            <p className="text-gray-300 text-sm">
              Revamped the entire user interface, making the school website user-friendly and accessible. Created a streamlined site map for better information architecture.
            </p>
          </div>
          
          {/* Project 2 */}
          <div className="project-card animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="bg-dark p-4 rounded mb-4">
              <p className="text-xs text-gray-400">January 2020 - Present</p>
              <h3 className="text-xl font-semibold text-gold">DietCraft - A Personalized Meal Planner</h3>
              <p className="text-sm text-gray-400">React, Redux, Firebase | Personal</p>
            </div>
            <p className="text-gray-300 text-sm">
              Built a custom meal planning application that allows users to create personalized meal plans based on dietary preferences and nutritional goals.
            </p>
          </div>
          
          {/* Project 3 */}
          <div className="project-card animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="bg-dark p-4 rounded mb-4">
              <p className="text-xs text-gray-400">June 2019 - July 2021</p>
              <h3 className="text-xl font-semibold text-gold">Syntax Highlighter for Customized Languages</h3>
              <p className="text-sm text-gray-400">React, TypeScript | Personal</p>
            </div>
            <p className="text-gray-300 text-sm">
              Created a syntax highlighting tool specifically designed for custom programming languages. Helps developers visualize code structure effectively.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
