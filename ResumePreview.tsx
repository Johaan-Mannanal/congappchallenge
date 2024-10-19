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

interface Props {
  data: Data;
  setCurrentView: (view: string) => void;
}

const ResumePreview: React.FC<Props> = ({ data, setCurrentView }) => {
  return (
    <div className="p-10">
      <h1>Preview</h1>
      <h2>{data.personalInfo.name}</h2>
      {/* Render other information */}
      <button onClick={() => setCurrentView('template')}>Proceed to Templates</button>
    </div>
  );
};

export default ResumePreview;
