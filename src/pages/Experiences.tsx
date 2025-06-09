
import React from 'react';

const Experiences = () => {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-20 mt-16">
        <div className="text-center mb-12 animate-fade-in" style={{ animationDelay: '0.1s' }}>
          <h2 className="text-3xl font-bold mb-4">My <span className="text-gold">Experiences</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Experience in developing, front-end applications and designing user-centric interfaces that deliver seamless user experiences.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Experience 1 */}
          <div className="experience-card animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="bg-dark p-4 rounded mb-4">
              <p className="text-xs text-gray-400">June 2022 - Present</p>
              <h3 className="text-xl font-semibold text-gold">UX/UI Designer</h3>
              <p className="text-sm text-gray-400">Dribbble, Inc.</p>
            </div>
            <p className="text-gray-300 text-sm mb-4">
              Creating intuitive and user-friendly interfaces for web and mobile applications. Responsible for designing wireframes, mockups, and interactive prototypes.
            </p>
            <div className="mt-auto">
              <p className="text-xs text-gray-400">Skills: User Research, Wireframing, Prototyping, UI Design, User Testing, Responsive Design</p>
            </div>
          </div>
          
          {/* Experience 2 */}
          <div className="experience-card animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="bg-dark p-4 rounded mb-4">
              <p className="text-xs text-gray-400">January 2020 - Present</p>
              <h3 className="text-xl font-semibold text-gold">Teacher Assistant</h3>
              <p className="text-sm text-gray-400">Design Fund, University of Helsinki | Finland</p>
            </div>
            <p className="text-gray-300 text-sm mb-4">
              Assisting with UI/UX courses, providing feedback to students, and organizing workshops. Supporting professors in curriculum development.
            </p>
            <div className="mt-auto">
              <p className="text-xs text-gray-400">Skills: Teaching, Mentoring, Curriculum Design, Student Evaluation</p>
            </div>
          </div>
          
          {/* Experience 3 */}
          <div className="experience-card animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="bg-dark p-4 rounded mb-4">
              <p className="text-xs text-gray-400">June 2018 - July 2021</p>
              <h3 className="text-xl font-semibold text-gold">Training Intern</h3>
              <p className="text-sm text-gray-400">Massive Planet Companies, Pvt. Ltd.</p>
            </div>
            <p className="text-gray-300 text-sm mb-4">
              Assisting senior developers in building web applications. Learned about agile development processes and collaborated in cross-functional teams.
            </p>
            <div className="mt-auto">
              <p className="text-xs text-gray-400">Skills: HTML, CSS, JavaScript, Git, Agile Development</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experiences;
