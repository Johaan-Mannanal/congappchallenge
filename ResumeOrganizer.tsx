import React, { useState } from 'react';

interface PersonalInfo {
  name: string;
  email: string;
  phoneNumber: string;
}

interface Experience {
  company: string;
  role: string;
  duration: string;
}

interface Data {
  personalInfo: PersonalInfo;
  experience: Experience[];
  skills: string[];
  achievements: string[];
}

interface ResumeOrganizerProps {
  data: Data;
  setData: React.Dispatch<React.SetStateAction<Data>>;
  setCurrentView: React.Dispatch<React.SetStateAction<string>>;
}

const ResumeOrganizer: React.FC<ResumeOrganizerProps> = ({ data, setData, setCurrentView }) => {
  const [activeSection, setActiveSection] = useState<string>('personalInfo');

  const sections = [
    { id: 'personalInfo', label: 'Personal Info', icon: '👤' },
    { id: 'experience', label: 'Experience', icon: '💼' },
    { id: 'skills', label: 'Skills', icon: '🎯' },
    { id: 'achievements', label: 'Achievements', icon: '🏆' },
  ];

  const handleInputChange = (field: keyof PersonalInfo, value: string) => {
    setData((prev) => ({
      ...prev,
      personalInfo: {
        ...prev.personalInfo,
        [field]: value,
      },
    }));
  };

  return (
    <div className="flex bg-white rounded-lg shadow-lg">
      <div className="w-64 border-r border-gray-200 p-6">
        <nav className="space-y-2">
          {sections.map((section) => (
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
      </div>
    </div>
  );
};

export default ResumeOrganizer;
