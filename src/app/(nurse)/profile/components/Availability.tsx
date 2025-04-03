'use client';

import { useState } from 'react';

const daysOfWeek = ['?????', '???????', '????????', '????????', '??????', '??????', '?????'];

export default function Availability() {
  const [availability, setAvailability] = useState(
    daysOfWeek.map(day => ({
      day,
      available: day !== '??????',
      startTime: '08:00',
      endTime: '16:00',
    }))
  );

  const toggleDay = (day) => {
    setAvailability(availability.map(item =>
      item.day === day ? { ...item, available: !item.available } : item
    ));
  };

  const handleTimeChange = (day, field, value) => {
    setAvailability(availability.map(item =>
      item.day === day ? { ...item, [field]: value } : item
    ));
  };

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      <div className="p-6">
        <h2 className="text-xl font-bold text-gray-800 mb-6">????? ?????</h2>
        <div className="space-y-4">
          {availability.map((day) => (
            <div key={day.day} className="flex items-center justify-between p-4 border rounded-lg">
              <div className="flex items-center">
                <input type="checkbox" checked={day.available} onChange={() => toggleDay(day.day)} className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                <label className="mr-2 text-gray-700">{day.day}</label>
              </div>
              {day.available ? (
                <div className="flex items-center space-x-2">
                  <input type="time" value={day.startTime} onChange={(e) => handleTimeChange(day.day, 'startTime', e.target.value)} className="px-3 py-2 border rounded-lg" />
                  <span>???</span>
                  <input type="time" value={day.endTime} onChange={(e) => handleTimeChange(day.day, 'endTime', e.target.value)} className="px-3 py-2 border rounded-lg" />
                </div>
              ) : (
                <span className="text-gray-500">??? ????</span>
              )}
            </div>
          ))}
        </div>
        <div className="mt-6 pt-6 border-t">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">??? ???????</button>
        </div>
      </div>
    </div>
  );
}
