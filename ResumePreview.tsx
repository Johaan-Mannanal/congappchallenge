import React from 'react';
import { Layers, User, Briefcase, Award, Clock, FileText, Pen, Shield, File } from 'lucide-react';

const Sidebar = ({ activeSection }) => {
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
    <div className="w-64 bg-gray-900 text-white p-6">
      <h2 className="text-2xl font-bold mb-8">Resume Creation</h2>
      <nav className="space-y-1">
        {sections.map((section) => (
          <button
            key={section.id}
            className={`flex items-center w-full p-3 rounded-lg transition-colors ${
              activeSection === section.id 
                ? 'bg-blue-600 text-white' 
                : 'text-gray-300 hover:bg-gray-800'
            }`}
          >
            {section.icon}
            <span className="ml-3">{section.label}</span>
          </button>
        ))}
        <div className="border-t border-gray-700 my-4"></div>
        <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">Projects</h3>
        {projects.map((project) => (
          <button
            key={project.id}
            className={`flex items-center w-full p-3 rounded-lg transition-colors ${
              activeSection === project.id 
                ? 'bg-blue-600 text-white' 
                : 'text-gray-300 hover:bg-gray-800'
            }`}
          >
            {project.icon}
            <span className="ml-3">{project.label}</span>
          </button>
        ))}
      </nav>
    </div>
  );
};

const ResumePreview = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar activeSection="template" />
      <main className="flex-1 p-8 overflow-auto">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">Resume Preview</h1>
        <div className="bg-white rounded-xl shadow-lg p-8 mb-6">
          <div className="aspect-[210/297] w-full max-w-3xl mx-auto bg-gray-200 rounded-lg overflow-hidden">
            <img 
              src="/api/placeholder/800/1131" 
              alt="Resume Preview" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="flex justify-center space-x-4">
          <button className="bg-gray-200 text-gray-800 px-6 py-2 rounded-lg hover:bg-gray-300 transition-colors">
            Regenerate
          </button>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
            Continue
          </button>
        </div>
      </main>
    </div>
  );
};

export default ResumePreview;