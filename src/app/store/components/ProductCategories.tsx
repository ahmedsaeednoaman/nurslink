'use client';

import { useState } from 'react';

export default function ProductCategories() {
  const [categories] = useState([
    '????',
    '????? ???????',
    '????? ??????',
    '????????',
    '?????',
    '?????',
    '?????',
  ]);

  const [selectedCategory, setSelectedCategory] = useState('????');

  return (
    <div className="mb-8">
      <h2 className="text-lg font-semibold mb-4 text-gray-800">??????</h2>
      <ul className="space-y-2">
        {categories.map((category) => (
          <li key={category}>
            <button
              onClick={() => setSelectedCategory(category)}
              className={w-full text-right px-4 py-2 rounded-lg }
            >
              {category}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
