import React from 'react';

interface Props {
  setCurrentView: (view: string) => void;
}

const ResumeTemplateSelection: React.FC<Props> = ({ setCurrentView }) => {
  return (
    <div className="p-10">
      <h1>Select a Template</h1>
      {/* Template Options */}
      <button onClick={() => setCurrentView('preview')}>Preview Selected Template</button>
    </div>
  );
};

export default ResumeTemplateSelection;
