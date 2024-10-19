import React, { useState } from 'react';
import Sidebar from './Sidebar';

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

const ResumeOrganizer: React.FC<Props> = ({ data, setCurrentView }) => {
  const [activeSection, setActiveSection] = useState<string>('personalInfo');

  const sections = [
    { id: 'personalInfo', label: 'Personal Info' },
    { id: 'professionalExperience', label: 'Professional Experience' },
    { id: 'volunteerExperience', label: 'Volunteer Experience' },
    { id: 'extracurriculars', label: 'Extracurriculars' },
    { id: 'relevantCoursework', label: 'Relevant Coursework' },
    { id: 'skills', label: 'Skills' }
  ];

  return (
    <div className="flex h-screen bg-gray-100 text-gray-800">
      <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} />

      <div className="flex-1 p-10 overflow-auto">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">AI Resume Organizer</h1>
        <div className="bg-white rounded-xl shadow-sm p-8">
          {activeSection === 'personalInfo' && (
            <div>
              <h2 className="text-xl font-bold">Personal Information</h2>
              <p>Name: {data.personalInfo.name}</p>
              <p>Email: {data.personalInfo.email}</p>
              <p>Phone: {data.personalInfo.phoneNumber}</p>
              <p>Grade: {data.personalInfo.grade}</p>
              <p>GPA: {data.personalInfo.unweightedGPA}</p>
              <p>School: {data.personalInfo.school}, {data.personalInfo.schoolCity}, {data.personalInfo.schoolState}</p>
            </div>
          )}
          {activeSection === 'professionalExperience' && (
            <div>
              <h2 className="text-xl font-bold">Professional Experience</h2>
              {data.professionalExperience.map((job, index) => (
                <div key={index}>
                  <p>Company: {job.name}</p>
                  <p>Role: {job.role}</p>
                  <p>Location: {job.city}, {job.state}</p>
                  <p>Duration: {job.yearStarted} - {job.yearEnded}</p>
                  <p>Description: {job.description}</p>
                </div>
              ))}
            </div>
          )}
          {/* Add similar sections for other categories like volunteerExperience, extracurriculars, relevantCoursework, and skills */}
        </div>
        <button
          className="mt-8 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          onClick={() => setCurrentView('template')}
        >
          Proceed to Template Selection
        </button>
      </div>
    </div>
  );
};

export default ResumeOrganizer;
