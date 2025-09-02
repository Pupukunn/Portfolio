import React from 'react';
import NavigationBar from './Homepage/NavigationBar';

const Skill = () => {
  const skills = [
    { name: "HTML", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/512px-HTML5_logo_and_wordmark.svg.png" },
    { name: "CSS", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/512px-CSS3_logo_and_wordmark.svg.png" },
    { name: "JS", icon: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" },
    { name: "React", icon: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" },
    { name: "Tailwind", icon: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" },
    { name: "MUI", icon: "https://mui.com/static/logo.png" },
  
    { name: "Python", icon: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg" },
    { name: "C", icon: "https://upload.wikimedia.org/wikipedia/commons/1/18/C_Programming_Language.svg" },
    
    { name: "MySQL", icon: "https://upload.wikimedia.org/wikipedia/commons/0/0a/MySQL_textlogo.svg" },
    { name: "Node.js", icon: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" },
    { name: "PostgreSQL", icon: "https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg" },
  ];

  return (
    <div className="min-h-screen bg-[#1C1C22] text-white flex flex-col">
      <NavigationBar />
      <h1 className="text-3xl sm:text-4xl font-bold text-green-400 my-8 sm:my-12 w-full text-center">My Skills</h1>
      <div className="flex w-full justify-center max-w-5xl mx-auto px-4">
        <div className="hidden md:flex items-center justify-center">
          <div className="relative">
            <div className="absolute top-1/2 right-0 w-2 h-24 md:h-32 rounded-3xl bg-green-500 transform -translate-y-1/2"></div>
            <h1 className="text-white text-xl md:text-2xl font-bold -rotate-90 whitespace-nowrap">SKILLS</h1>
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6 p-4 justify-items-center w-full">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 bg-gray-700 rounded-lg flex items-center justify-center flex-col text-center shadow-lg hover:bg-gray-600 transition-colors duration-300"
            >
              <div className="flex flex-col items-center justify-center h-full">
                {skill.icon && (
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 object-contain mb-1 sm:mb-2"
                  />
                )}
                <span className="text-sm sm:text-base md:text-lg">{skill.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skill;