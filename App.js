import React, { useState } from 'react';

const ResumeOrganizer = ({ data, setData, setCurrentView }) => {
  const [activeSection, setActiveSection] = useState('personalInfo');

  const sections = [
    { id: 'personalInfo', label: 'Personal Info', icon: '👤' },
    { id: 'experience', label: 'Experience', icon: '💼' },
    { id: 'skills', label: 'Skills', icon: '🎯' },
    { id: 'achievements', label: 'Achievements', icon: '🏆' }
  ];

  const handleInputChange = (field, value) => {
    setData(prev => ({
      ...prev,
      personalInfo: {
        ...prev.personalInfo,
        [field]: value
      }
    }));
  };

  const addExperience = () => {
    setData(prev => ({
      ...prev,
      experience: [...prev.experience, { company: '', role: '', duration: '' }]
    }));
  };

  const addItem = (section, value) => {
    if (value && !data[section].includes(value)) {
      setData(prev => ({
        ...prev,
        [section]: [...prev[section], value]
      }));
    }
  };

  return (
    <div className="flex bg-white rounded-lg shadow-lg">
      {/* Sidebar */}
      <div className="w-64 border-r border-gray-200 p-6">
        <nav className="space-y-2">
          {sections.map(section => (
            <button
              key={section.id}
              onClick={() => setActiveSection(section.id)}
              className={`flex items-center w-full p-3 rounded-lg ${
                activeSection === section.id ? 'bg-blue-50 text-blue-600' : 'hover:bg-gray-50'
              }`}
            >
              <span className="mr-2">{section.icon}</span>
              {section.label}
            </button>
          ))}
        </nav>
      </div>

      {/* Content Area */}
      <div className="flex-1 p-6">
        {activeSection === 'personalInfo' && (
          <div className="space-y-4">
            <h2 className="text-xl font-bold">Personal Information</h2>
            <input
              type="text"
              placeholder="Name"
              value={data.personalInfo.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
              className="w-full p-2 border rounded"
            />
            <input
              type="email"
              placeholder="Email"
              value={data.personalInfo.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              className="w-full p-2 border rounded"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              value={data.personalInfo.phoneNumber}
              onChange={(e) => handleInputChange('phoneNumber', e.target.value)}
              className="w-full p-2 border rounded"
            />
          </div>
        )}

        {activeSection === 'experience' && (
          <div className="space-y-4">
            <h2 className="text-xl font-bold">Experience</h2>
            {data.experience.map((exp, index) => (
              <div key={index} className="p-4 border rounded">
                <input
                  type="text"
                  placeholder="Company"
                  value={exp.company}
                  onChange={(e) => {
                    const newExperience = [...data.experience];
                    newExperience[index].company = e.target.value;
                    setData(prev => ({ ...prev, experience: newExperience }));
                  }}
                  className="w-full p-2 border rounded mb-2"
                />
                <input
                  type="text"
                  placeholder="Role"
                  value={exp.role}
                  onChange={(e) => {
                    const newExperience = [...data.experience];
                    newExperience[index].role = e.target.value;
                    setData(prev => ({ ...prev, experience: newExperience }));
                  }}
                  className="w-full p-2 border rounded mb-2"
                />
                <input
                  type="text"
                  placeholder="Duration"
                  value={exp.duration}
                  onChange={(e) => {
                    const newExperience = [...data.experience];
                    newExperience[index].duration = e.target.value;
                    setData(prev => ({ ...prev, experience: newExperience }));
                  }}
                  className="w-full p-2 border rounded"
                />
              </div>
            ))}
            <button
              onClick={addExperience}
              className="w-full p-2 border-2 border-dashed rounded hover:border-blue-500"
            >
              + Add Experience
            </button>
          </div>
        )}

        {(activeSection === 'skills' || activeSection === 'achievements') && (
          <div className="space-y-4">
            <h2 className="text-xl font-bold">{activeSection === 'skills' ? 'Skills' : 'Achievements'}</h2>
            <div className="space-y-2">
              {data[activeSection].map((item, index) => (
                <div key={index} className="p-2 bg-gray-50 rounded">{item}</div>
              ))}
              <input
                type="text"
                placeholder={`Add new ${activeSection === 'skills' ? 'skill' : 'achievement'}`}
                onKeyPress={(e) => {
                  if (e.key === 'Enter') {
                    addItem(activeSection, e.target.value);
                    e.target.value = '';
                  }
                }}
                className="w-full p-2 border rounded"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const ResumePreview = ({ data, setCurrentView }) => {
  return (
    <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
      {/* Personal Info */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold">{data.personalInfo.name}</h1>
        <p className="text-gray-600">{data.personalInfo.email}</p>
        <p className="text-gray-600">{data.personalInfo.phoneNumber}</p>
      </div>
      {/* Experience */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Experience</h2>
        {data.experience.map((exp, index) => (
          <div key={index} className="mb-4">
            <h3 className="font-bold">{exp.company}</h3>
            <p className="text-gray-800">{exp.role}</p>
            <p className="text-gray-600">{exp.duration}</p>
          </div>
        ))}
      </div>
      {/* Skills */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Skills</h2>
        <div className="flex flex-wrap gap-2">
          {data.skills.map((skill, index) => (
            <span key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded">
              {skill}
            </span>
          ))}
        </div>
      </div>
      {/* Achievements */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Achievements</h2>
        <ul className="list-disc pl-5">
          {data.achievements.map((achievement, index) => (
            <li key={index} className="mb-2">{achievement}</li>
          ))}
        </ul>
      </div>
      <button
        onClick={() => setCurrentView('template')}
        className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
      >
        Choose Template 🎨
      </button>
    </div>
  );
};

const ResumeTemplateSelection = ({ setCurrentView }) => {
  const templates = [
    { id: 'modern', name: 'Modern', icon: '🎨' },
    { id: 'classic', name: 'Classic', icon: '📄' },
    { id: 'minimal', name: 'Minimal', icon: '✨' }
  ];
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8">Choose Your Template</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {templates.map((template) => (
          <div
            key={template.id}
            className="border rounded-lg p-6 hover:border-blue-500 cursor-pointer transition-colors"
            onClick={() => setCurrentView('preview')}
          >
            <div className="text-4xl mb-4">{template.icon}</div>
            <h3 className="text-xl font-bold mb-2">{template.name}</h3>
            <p className="text-gray-600">Professional and clean design</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const App = () => {
  const [currentView, setCurrentView] = useState('organizer');
  const [data, setData] = useState({
    personalInfo: { name: '', email: '', phoneNumber: '' },
    experience: [],
    skills: [],
    achievements: []
  });

  const renderComponent = () => {
    switch (currentView) {
      case 'organizer':
        return <ResumeOrganizer data={data} setData={setData} setCurrentView={setCurrentView} />;
      case 'preview':
        return <ResumePreview data={data} setCurrentView={setCurrentView} />;
      case 'template':
        return <ResumeTemplateSelection setCurrentView={setCurrentView} />;
      default:
        return <ResumeOrganizer data={data} setData={setData} setCurrentView={setCurrentView} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow-sm mb-8">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold">📝 Resume Builder</h1>
            <div className="flex gap-4">
              <button
                onClick={() => setCurrentView('organizer')}
                className={`px-4 py-2 rounded ${currentView === 'organizer' ? 'bg-blue-100 text-blue-600' : ''}`}
              >
                ✏️ Editor
              </button>
              <button
                onClick={() => setCurrentView('preview')}
                className={`px-4 py-2 rounded ${currentView === 'preview' ? 'bg-blue-100 text-blue-600' : ''}`}
              >
                👀 Preview
              </button>
              <button
                onClick={() => setCurrentView('template')}
                className={`px-4 py-2 rounded ${currentView === 'template' ? 'bg-blue-100 text-blue-600' : ''}`}
              >
                🎨 Templates
              </button>
            </div>
          </div>
        </div>
      </nav>
      <main className="max-w-7xl mx-auto px-4">
        {renderComponent()}
      </main>
    </div>
  );
};

export default App;
