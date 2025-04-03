'use client';

import { useState } from 'react';

export default function ProfileTabs() {
  const [activeTab, setActiveTab] = useState('info');

  const tabs = [
    { id: 'info', name: '????????? ???????' },
    { id: 'certificates', name: '????????' },
    { id: 'availability', name: '????? ?????' },
    { id: 'reviews', name: '?????????' },
  ];

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      <div className="border-b border-gray-200">
        <nav className="flex -mb-px">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={whitespace-nowrap py-4 px-6 border-b-2 font-medium text-sm }
            >
              {tab.name}
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
}
