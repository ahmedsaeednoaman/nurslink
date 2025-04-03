'use client';

import { useState } from 'react';

export default function Certifications() {
  const [certificates, setCertificates] = useState([
    { id: 1, name: '????? ????? ?????', institution: '????? ???????', year: '2020' },
    { id: 2, name: '????? ?? ??? ????????', institution: '?????? ?????? ???????', year: '2019' },
  ]);
  const [newCert, setNewCert] = useState({ name: '', institution: '', year: '' });

  const handleAddCert = () => {
    if (newCert.name && newCert.institution && newCert.year) {
      setCertificates([...certificates, { ...newCert, id: Date.now() }]);
      setNewCert({ name: '', institution: '', year: '' });
    }
  };

  const handleRemoveCert = (id) => {
    setCertificates(certificates.filter(cert => cert.id !== id));
  };

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      <div className="p-6">
        <h2 className="text-xl font-bold text-gray-800 mb-6">???????? ????????</h2>
        <div className="space-y-4">
          {certificates.map((cert) => (
            <div key={cert.id} className="flex justify-between items-start p-4 border rounded-lg">
              <div>
                <h3 className="font-medium text-gray-800">{cert.name}</h3>
                <p className="text-sm text-gray-600">{cert.institution} - {cert.year}</p>
              </div>
              <button onClick={() => handleRemoveCert(cert.id)} className="text-red-500 hover:text-red-700">???</button>
            </div>
          ))}
        </div>
        <div className="mt-6 border-t pt-6">
          <h3 className="font-medium text-gray-800 mb-4">????? ????? ?????</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm text-gray-700 mb-1">??? ???????</label>
              <input type="text" value={newCert.name} onChange={(e) => setNewCert({...newCert, name: e.target.value})} className="w-full px-4 py-2 border rounded-lg" placeholder="????: ????? ?????" />
            </div>
            <div>
              <label className="block text-sm text-gray-700 mb-1">???????</label>
              <input type="text" value={newCert.institution} onChange={(e) => setNewCert({...newCert, institution: e.target.value})} className="w-full px-4 py-2 border rounded-lg" placeholder="????: ????? ???????" />
            </div>
            <div>
              <label className="block text-sm text-gray-700 mb-1">??? ??????</label>
              <input type="text" value={newCert.year} onChange={(e) => setNewCert({...newCert, year: e.target.value})} className="w-full px-4 py-2 border rounded-lg" placeholder="????: 2020" />
            </div>
          </div>
          <button onClick={handleAddCert} className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">????? ?????</button>
        </div>
      </div>
    </div>
  );
}
