import React, { useState } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code, User, Briefcase } from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('about');
  const [emailCopied, setEmailCopied] = useState(false);

  const projects = [
    {
      title: "MAUSAM Weather App",
      description: "A clean, responsive weather app with city search, geolocation, temperature unit switching, and modern UI. Features weather cards with smooth interactions and is built with pure frontend technologies.",
      tech: ["HTML", "CSS", "JavaScript", "OpenWeather API"],
      github: "https://github.com/umer-exe/PRODIGY_WD_05",
      live: "https://umer-exe.github.io/PRODIGY_WD_05/"
    },
    {
      title: "Tic-Tac-Toe Web App",
      description: "Interactive Tic-Tac-Toe with Human vs Human and Human vs AI modes. Features smart AI with minimax algorithm, retro arcade styling with neon colors, and responsive design for all devices.",
      tech: ["HTML", "CSS", "JavaScript", "Minimax Algorithm"],
      github: "https://github.com/umer-exe/PRODIGY_WD_03",
      live: "https://umer-exe.github.io/PRODIGY_WD_03/"
    },
    {
      title: "University DBMS GPA Dashboard",
      description: "Full-stack university coursework project computing batch-wise semester GPA from normalized PostgreSQL database. Features Express API, Alpine.js frontend, and comprehensive database design with joins and CTEs.",
      tech: ["Node.js", "Express", "PostgreSQL", "Alpine.js", "HTML/CSS"],
      github: "https://github.com/uni-course-projects/dbms-gpa-dashboard",
      live: "#"
    }
  ];

  const skills = [
    "JavaScript", "React", "Node.js", "Git", "PostgreSQL", 
    "HTML/CSS", "Java", "C++", "Express", "REST APIs", "VS Code", "Photoshop", "Illustrator"
  ];

  const experiences = [
    {
      title: "Web Developer",
      company: "Prodigy InfoTech",
      type: "Internship",
      location: "",
      dates: "Sep 2025 - Present",
      description: "Working on real-world web development projects, including interactive web apps and responsive websites. Practicing responsive design, interactivity, and API integration to enhance functionality. Documenting progress and sharing learnings on LinkedIn as part of professional growth."
    },
    {
      title: "Software Engineering Job Simulation",
      company: "Electronic Arts",
      type: "Forage",
      location: "",
      dates: "Sep 2025",
      description: "Completed industry-standard software engineering simulation, gaining exposure to professional development practices and workflows used in game development."
    },
    {
      title: "BSc Computer Science",
      company: "SZABIST University",
      type: "Karachi, Pakistan",
      location: "",
      dates: "2023 - 2027",
      description: "Merit Recognition • CGPA: 3.73 (ongoing)"
    },
    {
      title: "Pre-Engineering, Computer Science",
      company: "The American Foundation School",
      type: "A Levels",
      location: "",
      dates: "Aug 2021 - May 2023",
      description: "Foundation in engineering and computer science principles"
    }
  ];

  const copyEmailToClipboard = async () => {
    try {
      await navigator.clipboard.writeText('umermalik2004@gmail.com');
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 2000); // Hide after 2 seconds
    } catch (err) {
      console.error('Failed to copy email:', err);
    }
  };

  const NavButton = ({ section, icon: Icon, label, isActive, onClick }) => (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200 ${
        isActive 
          ? 'text-white' 
          : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
      }`}
      style={isActive ? {backgroundColor: 'var(--accent)'} : {}}
    >
      <Icon size={18} />
      <span className="hidden sm:inline">{label}</span>
    </button>
  );

  const Footer = () => (
    <footer className="border-t border-gray-200">
      <div className="max-w-4xl mx-auto px-6 py-8">
        <div className="flex justify-center gap-6">
          <a 
            href="https://github.com/umer-exe" 
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 text-gray-500 hover:scale-110 transition-all duration-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2"
            style={{'--focus-ring-color': 'var(--accent)'}}
            onMouseEnter={e => e.target.style.color = 'var(--accent)'}
            onMouseLeave={e => e.target.style.color = ''}
            onFocus={e => e.target.style.boxShadow = `0 0 0 2px var(--accent)`}
            onBlur={e => e.target.style.boxShadow = ''}
            aria-label="GitHub Profile"
          >
            <Github size={20} />
          </a>
          <a 
            href="https://www.linkedin.com/in/umer-malik28/" 
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 text-gray-500 hover:scale-110 transition-all duration-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2"
            onMouseEnter={e => e.target.style.color = 'var(--accent)'}
            onMouseLeave={e => e.target.style.color = ''}
            onFocus={e => e.target.style.boxShadow = `0 0 0 2px var(--accent)`}
            onBlur={e => e.target.style.boxShadow = ''}
            aria-label="LinkedIn Profile"
          >
            <Linkedin size={20} />
          </a>
          <button 
            onClick={copyEmailToClipboard}
            className="p-3 text-gray-500 hover:scale-110 transition-all duration-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 relative"
            onMouseEnter={e => e.target.style.color = 'var(--accent)'}
            onMouseLeave={e => e.target.style.color = ''}
            onFocus={e => e.target.style.boxShadow = `0 0 0 2px var(--accent)`}
            onBlur={e => e.target.style.boxShadow = ''}
            aria-label="Copy Email"
          >
            <Mail size={20} />
            {emailCopied && (
              <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                Copied!
              </span>
            )}
          </button>
        </div>
      </div>
    </footer>
  );

  const Pill = ({ children, variant = 'default' }) => (
    <span
      className={`px-3 py-1 text-sm rounded-full ${
        variant === 'tech' 
          ? 'text-white' 
          : 'bg-gray-100 text-gray-700'
      }`}
      style={variant === 'tech' ? {backgroundColor: 'var(--accent)'} : {}}
    >
      {children}
    </span>
  );

  return (
    <div className="min-h-screen bg-white flex flex-col" style={{'--accent': '#6C5CE7', fontFamily: 'Inter, sans-serif'}}>
      {/* Header */}
      <header className="border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <nav className="flex justify-between items-center">
            <h1 className="text-xl font-semibold text-gray-900" style={{fontFamily: 'Space Grotesk, sans-serif'}}>Umer</h1>
            <div className="flex gap-1">
              <NavButton
                section="about"
                icon={User}
                label="About"
                isActive={activeSection === 'about'}
                onClick={() => setActiveSection('about')}
              />
              <NavButton
                section="projects"
                icon={Code}
                label="Projects"
                isActive={activeSection === 'projects'}
                onClick={() => setActiveSection('projects')}
              />
              <NavButton
                section="experience"
                icon={Briefcase}
                label="Experience"
                isActive={activeSection === 'experience'}
                onClick={() => setActiveSection('experience')}
              />
            </div>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-4xl mx-auto px-6 py-12 w-full min-h-0">
        {/* About Section */}
        {activeSection === 'about' && (
          <div className="space-y-12 animate-in fade-in duration-300">
            <div className="text-center space-y-4">
              <h2 className="text-4xl font-bold text-gray-900" style={{fontFamily: 'Space Grotesk, sans-serif'}}>
                Hi, I'm <span style={{color: 'var(--accent)'}}>Umer</span>.
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Computer Science Student Passionate About Building Worlds & Smart Tools
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6" style={{fontFamily: 'Space Grotesk, sans-serif'}}>About Me</h3>
                <p className="text-gray-600 leading-relaxed">
                  I design and build intuitive, user-friendly web applications with a focus on front-end development and UI/UX design. With hands-on experience from side projects, coursework, and a current web development internship, I bring both creativity and technical skill to every project. I enjoy turning ideas into engaging digital experiences and exploring how AI and creative media can enhance design.
                </p>
              </div>
              
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6" style={{fontFamily: 'Space Grotesk, sans-serif'}}>Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, index) => (
                    <Pill key={index}>{skill}</Pill>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Projects Section */}
        {activeSection === 'projects' && (
          <div className="space-y-12 animate-in fade-in duration-300">
            <h2 className="text-4xl font-bold text-gray-900 text-center" style={{fontFamily: 'Space Grotesk, sans-serif'}}>Projects</h2>
            <div className="grid gap-8">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow"
                >
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-semibold text-gray-900" style={{fontFamily: 'Space Grotesk, sans-serif'}}>{project.title}</h3>
                    <div className="flex gap-2">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-gray-600 hover:text-white rounded transition-all duration-200"
                        onMouseEnter={e => e.target.style.backgroundColor = 'var(--accent)'}
                        onMouseLeave={e => e.target.style.backgroundColor = ''}
                        aria-label="View source code"
                      >
                        <Github size={18} />
                      </a>
                      {project.live !== '#' && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 text-gray-600 hover:text-white rounded transition-all duration-200"
                          onMouseEnter={e => e.target.style.backgroundColor = 'var(--accent)'}
                          onMouseLeave={e => e.target.style.backgroundColor = ''}
                          aria-label="View live demo"
                        >
                          <ExternalLink size={18} />
                        </a>
                      )}
                    </div>
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <Pill key={techIndex} variant="tech">{tech}</Pill>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Experience Section */}
        {activeSection === 'experience' && (
          <div className="space-y-12 animate-in fade-in duration-300">
            <h2 className="text-4xl font-bold text-gray-900 text-center" style={{fontFamily: 'Space Grotesk, sans-serif'}}>Experience</h2>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="border-l-4 pl-6" style={{borderColor: 'var(--accent)'}}>
                  {/* Title with Inline Date */}
                  <h3 className="text-2xl font-semibold text-gray-900 leading-tight mb-3" style={{fontFamily: 'Space Grotesk, sans-serif'}}>
                    {exp.title}
                    <span className="text-lg text-gray-500 font-normal ml-3">
                      · {exp.dates}
                    </span>
                  </h3>
                  
                  {/* Meta Line */}
                  <div className="text-gray-700 font-medium mb-4">
                    {exp.company}
                    {exp.type && ` · ${exp.type}`}
                    {exp.location && ` · ${exp.location}`}
                  </div>
                  
                  {/* Description */}
                  <div className="text-gray-600 leading-relaxed">
                    {exp.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Portfolio;