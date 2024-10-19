import React from 'react';

interface Props {
  setCurrentView: (view: string) => void;
}

const templates = [
  { name: 'Modern', image: '/api/placeholder/300/200' },
  { name: 'Creative', image: '/api/placeholder/300/200' },
  { name: 'Professional', image: '/api/placeholder/300/200' },
  { name: 'Elegant', image: '/api/placeholder/300/200' },
  { name: 'Simple', image: '/api/placeholder/300/200' },
  { name: 'Bold', image: '/api/placeholder/300/200' },
];

const TemplateCard: React.FC<{ name: string; image: string }> = ({ name, image }) => (
  <div className="bg-white rounded-xl shadow-md overflow-hidden">
    <img src={image} alt={`${name} template`} className="w-full h-48 object-cover" />
    <div className="p-4">
      <h3 className="font-semibold text-lg mb-2">{name}</h3>
      <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
        Preview
      </button>
    </div>
  </div>
);

const ResumeTemplateSelection: React.FC<Props> = ({ setCurrentView }) => {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">ResumeGenius</h1>
        </div>
      </header>
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Select Your Resume Template</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {templates.map((template) => (
              <TemplateCard key={template.name} {...template} />
            ))}
          </div>
        </div>
        <div className="flex justify-center mt-8">
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors" onClick={() => setCurrentView('preview')}>
            Preview Selected Template
          </button>
        </div>
      </main>
    </div>
  );
};

export default ResumeTemplateSelection;
