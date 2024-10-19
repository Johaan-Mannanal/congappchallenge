import React from 'react';

interface Experience {
  name: string;
  role: string;
  city: string;
  state: string;
  yearStarted: string;
  yearEnded: string;
  description: string;
}

interface PersonalInfo {
  name: string;
  email: string;
  phoneNumber: string;
  grade: string;
  unweightedGPA: string;
  school: string;
  schoolCity: string;
  schoolState: string;
}

interface Skills {
  section: string;
  skills: string[];
}

interface Data {
  personalInfo: PersonalInfo;
  professionalExperience: Experience[];
  volunteerExperience: Experience[];
  extracurriculars: { name: string; yearStarted: string; yearEnded: string }[];
  relevantCoursework: { name: string; yearStarted: string; yearEnded: string }[];
  skills: Skills[];
}

interface Props {
  data: Data;
  setCurrentView: (view: string) => void;
}

const ResumePreview: React.FC<Props> = ({ data, setCurrentView }) => {
  return (
    <div className="flex h-screen bg-gray-100">
      <main className="flex-1 p-8 overflow-auto">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">Resume Preview</h1>
        <div className="bg-white rounded-xl shadow-lg p-8 mb-6">
          <h2 className="text-xl font-bold">Personal Information</h2>
          <p>{data.personalInfo.name}</p>
          <p>{data.personalInfo.email}</p>
          <p>{data.personalInfo.phoneNumber}</p>
          <h2 className="text-xl font-bold mt-6">Professional Experience</h2>
          {data.professionalExperience.map((job, index) => (
            <div key={index}>
              <p>{job.role} at {job.name}, {job.city}, {job.state}</p>
              <p>{job.description}</p>
            </div>
          ))}
        </div>
        <div className="flex justify-center space-x-4">
          <button className="bg-gray-200 text-gray-800 px-6 py-2 rounded-lg hover:bg-gray-300 transition-colors" onClick={() => setCurrentView('organizer')}>
            Go Back
          </button>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors" onClick={() => setCurrentView('template')}>
            Continue
          </button>
        </div>
      </main>
    </div>
  );
};

export default ResumePreview;
