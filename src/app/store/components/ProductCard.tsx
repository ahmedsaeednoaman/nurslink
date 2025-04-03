'use client';

import { useState } from 'react';
import { ShoppingCart } from 'lucide-react';

export default function ProductCard({ product }: { product: any }) {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="h-48 bg-gray-100 flex items-center justify-center">
        <img 
          src={product.image} 
          alt={product.name}
          className="h-full object-cover"
        />
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start">
          <h3 className="font-bold text-lg text-gray-800">{product.name}</h3>
          <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
            {product.category}
          </span>
        </div>
        
        <div className="mt-2 flex items-center">
          {[...Array(5)].map((_, i) => (
            <span 
              key={i} 
              className={	ext-lg }
            >
              ?
            </span>
          ))}
          <span className="text-sm text-gray-500 mr-1">({product.rating})</span>
        </div>
        
        <div className="mt-4 flex justify-between items-center">
          <span className="text-xl font-bold text-blue-600">{product.price} ?.?</span>
          
          <div className="flex items-center space-x-2">
            <div className="flex items-center border rounded-lg">
              <button 
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="px-2 py-1 text-gray-600 hover:bg-gray-100"
              >
                -
              </button>
              <span className="px-2">{quantity}</span>
              <button 
                onClick={() => setQuantity(quantity + 1)}
                className="px-2 py-1 text-gray-600 hover:bg-gray-100"
              >
                +
              </button>
            </div>
            
            <button className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              <ShoppingCart size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
