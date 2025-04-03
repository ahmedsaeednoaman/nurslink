'use client';

import { useState } from 'react';
import ProductCard from './ProductCard';

const products = [
  { id: 1, name: '????? ????', price: 120, image: '/products/stethoscope.jpg', category: '????? ???????', rating: 4.5 },
  { id: 2, name: '???? ???? ??? ????', price: 250, image: '/products/blood-pressure.jpg', category: '????? ??????', rating: 4.8 },
  { id: 3, name: '?????? ???? (100 ????)', price: 35, image: '/products/gloves.jpg', category: '????????', rating: 4.2 },
  { id: 4, name: '????? N95 (50 ????)', price: 80, image: '/products/mask.jpg', category: '?????', rating: 4.7 },
  { id: 5, name: '????? ?????', price: 180, image: '/products/bag.jpg', category: '?????', rating: 4.3 },
  { id: 6, name: '????? ????? ????', price: 65, image: '/products/thermometer.jpg', category: '????? ??????', rating: 4.6 },
];

export default function ProductGrid() {
  const [selectedCategory, setSelectedCategory] = useState('????');
  const categories = ['????', '????? ???????', '????? ??????', '????????', '?????'];

  return (
    <div>
      <div className="flex space-x-2 mb-6 overflow-x-auto pb-2">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={px-4 py-2 rounded-full whitespace-nowrap }
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products
          .filter((product) => selectedCategory === '????' || product.category === selectedCategory)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
}
