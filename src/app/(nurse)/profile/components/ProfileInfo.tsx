'use client';

import { useState } from 'react';

export default function ProfileInfo() {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: '???? ????',
    email: 'ahmed@example.com',
    phone: '+201234567890',
    address: '???????? ???',
    bio: '???? ????? ????? 5 ????? ?? ???????? ??????? ??????? ????? ?? ????? ?? ??? ???????? ????????.',
  });

  const handleSave = () => {
    setIsEditing(false);
  };

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-gray-800">????????? ???????</h2>
          {isEditing ? (
            <div className="space-x-2">
              <button onClick={() => setIsEditing(false)} className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50">?????</button>
              <button onClick={handleSave} className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">??? ?????????</button>
            </div>
          ) : (
            <button onClick={() => setIsEditing(true)} className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">????? ?????????</button>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">????? ??????</label>
            {isEditing ? (
              <input type="text" value={profile.name} onChange={(e) => setProfile({...profile, name: e.target.value})} className="w-full px-4 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500" />
            ) : (
              <p className="px-4 py-2 bg-gray-50 rounded-lg">{profile.name}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">?????? ??????????</label>
            {isEditing ? (
              <input type="email" value={profile.email} onChange={(e) => setProfile({...profile, email: e.target.value})} className="w-full px-4 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500" />
            ) : (
              <p className="px-4 py-2 bg-gray-50 rounded-lg">{profile.email}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">??? ??????</label>
            {isEditing ? (
              <input type="tel" value={profile.phone} onChange={(e) => setProfile({...profile, phone: e.target.value})} className="w-full px-4 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500" />
            ) : (
              <p className="px-4 py-2 bg-gray-50 rounded-lg">{profile.phone}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">???????</label>
            {isEditing ? (
              <input type="text" value={profile.address} onChange={(e) => setProfile({...profile, address: e.target.value})} className="w-full px-4 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500" />
            ) : (
              <p className="px-4 py-2 bg-gray-50 rounded-lg">{profile.address}</p>
            )}
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">???? ???</label>
            {isEditing ? (
              <textarea value={profile.bio} onChange={(e) => setProfile({...profile, bio: e.target.value})} rows={4} className="w-full px-4 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500" />
            ) : (
              <p className="px-4 py-2 bg-gray-50 rounded-lg whitespace-pre-line">{profile.bio}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
