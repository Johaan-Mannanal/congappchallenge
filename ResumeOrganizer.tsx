import React, { useState } from 'react';
import Sidebar from './sidebar';

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

interface Props {
  data: Data;
  setCurrentView: (view: string) => void;
}

const ResumeOrganizer: React.FC<Props> = ({ data, setCurrentView }) => {
  const [activeSection, setActiveSection] = useState('personalInfo');

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} />
      <div className="flex-1 p-10 overflow-auto">
        {/* ... Content for each section as shown in the HTML ... */}
      </div>
    </div>
  );
};

export default ResumeOrganizer;
