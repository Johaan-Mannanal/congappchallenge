import React, { useState } from 'react';
import { Save, User, Briefcase, Award, Clock, Layers, FileText, Pen, Shield, File, ChevronRight } from 'lucide-react';

const ResumeOrganizer = () => {
  const [activeSection, setActiveSection] = useState('personalInfo');

  const sections = [
    { id: 'start', icon: <Layers size={18} />, label: 'Start' },
    { id: 'personalInfo', icon: <User size={18} />, label: 'Personal Info' },
    { id: 'experience', icon: <Briefcase size={18} />, label: 'Experience' },
    { id: 'achievements', icon: <Award size={18} />, label: 'Achievements' },
    { id: 'skills', icon: <Clock size={18} />, label: 'Skills' },
  ];

  const projects = [
    { id: 'summary', icon: <FileText size={18} />, label: 'Summary' },
    { id: 'design', icon: <Pen size={18} />, label: 'Design' },
    { id: 'security', icon: <Shield size={18} />, label: 'Security' },
    { id: 'template', icon: <File size={18} />, label: 'Template' },
  ];

  return (
    <div className="flex h-screen bg-gray-100 text-gray-800">
      {/* Sidebar */}
      <div className="w-72 bg-white shadow-lg p-6">
        <h2 className="text-2xl font-bold mb-8 text-blue-600">Resume Creation</h2>
        <nav className="space-y-1">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => setActiveSection(section.id)}
              className={`flex items-center w-full p-3 rounded-lg transition-colors ${
                activeSection === section.id 
                  ? 'bg-blue-50 text-blue-600' 
                  : 'hover:bg-gray-50'
              }`}
            >
              {section.icon}
              <span className="ml-3">{section.label}</span>
              {activeSection === section.id && <ChevronRight className="ml-auto" size={18} />}
            </button>
          ))}
          <div className="border-t border-gray-200 my-4"></div>
          <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">Projects</h3>
          {projects.map((project) => (
            <button
              key={project.id}
              onClick={() => setActiveSection(project.id)}
              className={`flex items-center w-full p-3 rounded-lg transition-colors ${
                activeSection === project.id 
                  ? 'bg-blue-50 text-blue-600' 
                  : 'hover:bg-gray-50'
              }`}
            >
              {project.icon}
              <span className="ml-3">{project.label}</span>
              {activeSection === project.id && <ChevronRight className="ml-auto" size={18} />}
            </button>
          ))}
        </nav>
      </div>

      {/* Main content */}
      <div className="flex-1 p-10 overflow-auto">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">AI Resume Organizer</h1>
        <div className="bg-white rounded-xl shadow-sm p-8">
          {activeSection === 'personalInfo' && (
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <input className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="John Doe" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                <input className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="john@example.com" type="email" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                <input className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="(123) 456-7890" type="tel" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">LinkedIn Profile</label>
                <input className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="linkedin.com/in/johndoe" />
              </div>
            </form>
          )}
          {activeSection === 'experience' && (
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Company Name</label>
                <input className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="Acme Inc." />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Job Title</label>
                <input className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="Senior Developer" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Duration</label>
                <input className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="Jan 2020 - Present" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Job Description</label>
                <textarea className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="Describe your role and achievements..." rows="4"></textarea>
              </div>
            </form>
          )}
          {activeSection === 'skills' && (
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Skill 1</label>
                <input className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="e.g., JavaScript" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Skill 2</label>
                <input className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="e.g., React" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Skill 3</label>
                <input className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="e.g., Node.js" />
              </div>
            </form>
          )}
        </div>
        <button className="mt-8 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
          Proceed to Template Selection
        </button>
      </div>
    </div>
  );
};

export default ResumeOrganizer;
