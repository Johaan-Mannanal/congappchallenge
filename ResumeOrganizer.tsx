import { useState } from 'react';

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

interface ResumeData {
  personalInfo: PersonalInfo;
  experience: Experience[];
  skills: string[];
  achievements: string[];
}

interface Section {
  id: 'personalInfo' | 'experience' | 'skills' | 'achievements';
  label: string;
  icon: string;
}

interface ResumeOrganizerProps {
  data: ResumeData;
  setData: React.Dispatch<React.SetStateAction<ResumeData>>;
  setCurrentView: (view: string) => void;
}

const ResumeOrganizer: React.FC<ResumeOrganizerProps> = ({ data, setData, setCurrentView }) => {
  const [activeSection, setActiveSection] = useState<Section['id']>('personalInfo');

  const sections: Section[] = [
    { id: 'personalInfo', label: 'Personal Info', icon: '👤' },
    { id: 'experience', label: 'Experience', icon: '💼' },
    { id: 'skills', label: 'Skills', icon: '🎯' },
    { id: 'achievements', label: 'Achievements', icon: '🏆' }
  ];

  const handleInputChange = (field: keyof PersonalInfo, value: string) => {
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

  const addItem = (section: 'skills' | 'achievements', value: string) => {
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
                {/* Experience fields */}
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
                onKeyPress={(e: React.KeyboardEvent<HTMLInputElement>) => {
                  if (e.key === 'Enter') {
                    addItem(activeSection, (e.target as HTMLInputElement).value);
                    (e.target as HTMLInputElement).value = '';
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

export default ResumeOrganizer;
