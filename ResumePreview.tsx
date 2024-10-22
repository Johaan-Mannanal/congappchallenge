import React from 'react';
import { Data } from '../types';

interface ResumePreviewProps {
  data: Data;
  setCurrentView: React.Dispatch<React.SetStateAction<string>>;
}

const ResumePreview: React.FC<ResumePreviewProps> = ({ data, setCurrentView }) => {
  return (
    <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">{data.personalInfo.name}</h1>
        <p className="text-gray-600">{data.personalInfo.email}</p>
        <p className="text-gray-600">{data.personalInfo.phoneNumber}</p>
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
