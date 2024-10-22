import React from 'react';

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

export default ResumeTemplateSelection;
