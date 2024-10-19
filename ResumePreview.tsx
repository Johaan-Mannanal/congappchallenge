import React from 'react';

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

interface ResumePreviewProps {
  data: Data;
  setCurrentView: (view: string) => void;
}

const ResumePreview: React.FC<ResumePreviewProps> = ({ data, setCurrentView }) => {
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

export default ResumePreview;
