import React, { useState } from 'react';
import ResumeOrganizer from './components/ResumeOrganizer';
import ResumePreview from './components/ResumePreview';
import ResumeTemplateSelection from './components/ResumeTemplateSelection';

const App = () => {
  const [currentView, setCurrentView] = useState('organizer');
  const [data, setData] = useState({
    personalInfo: { name: '', email: '', phoneNumber: '' },
    experience: [],
    skills: [],
    achievements: []
  });

  const renderComponent = () => {
    switch (currentView) {
      case 'organizer':
        return <ResumeOrganizer data={data} setData={setData} setCurrentView={setCurrentView} />;
      case 'preview':
        return <ResumePreview data={data} setCurrentView={setCurrentView} />;
      case 'template':
        return <ResumeTemplateSelection setCurrentView={setCurrentView} />;
      default:
        return <ResumeOrganizer data={data} setData={setData} setCurrentView={setCurrentView} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow-sm mb-8">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold">📝 Resume Builder</h1>
            <div className="flex gap-4">
              <button
                onClick={() => setCurrentView('organizer')}
                className={`px-4 py-2 rounded ${currentView === 'organizer' ? 'bg-blue-100 text-blue-600' : ''}`}
              >
                ✏️ Editor
              </button>
              <button
                onClick={() => setCurrentView('preview')}
                className={`px-4 py-2 rounded ${currentView === 'preview' ? 'bg-blue-100 text-blue-600' : ''}`}
              >
                👀 Preview
              </button>
              <button
                onClick={() => setCurrentView('template')}
                className={`px-4 py-2 rounded ${currentView === 'template' ? 'bg-blue-100 text-blue-600' : ''}`}
              >
                🎨 Templates
              </button>
            </div>
          </div>
        </div>
      </nav>
      <main className="max-w-7xl mx-auto px-4">
        {renderComponent()}
      </main>
    </div>
  );
};

export default App;
