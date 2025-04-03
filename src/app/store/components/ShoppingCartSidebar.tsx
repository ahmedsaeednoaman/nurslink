'use client';

import { X, ShoppingCart } from 'lucide-react';
import { useState } from 'react';

const cartItems = [
  {
    id: 1,
    name: '????? ????',
    price: 120,
    quantity: 1,
    image: '/products/stethoscope.jpg',
  },
  {
    id: 2,
    name: '?????? ????',
    price: 35,
    quantity: 2,
    image: '/products/gloves.jpg',
  },
];

export default function ShoppingCartSidebar() {
  const [isOpen, setIsOpen] = useState(true);

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className={md:w-80 bg-white shadow-lg rounded-lg h-fit }>
      <div className="p-4 border-b flex justify-between items-center">
        <h2 className="font-bold text-lg flex items-center">
          <ShoppingCart className="mr-2" size={20} />
          ??? ??????
        </h2>
        <button 
          onClick={() => setIsOpen(false)}
          className="text-gray-500 hover:text-gray-700"
        >
          <X size={20} />
        </button>
      </div>
      
      <div className="p-4 max-h-96 overflow-y-auto">
        {cartItems.length === 0 ? (
          <p className="text-gray-500 text-center py-8">????? ?????</p>
        ) : (
          <ul className="space-y-4">
            {cartItems.map((item) => (
              <li key={item.id} className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-gray-100 rounded-lg overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium text-gray-800">{item.name}</h3>
                  <p className="text-sm text-gray-600">{item.price} ?.?</p>
                  <div className="flex items-center mt-1">
                    <span className="text-sm text-gray-500">??????: {item.quantity}</span>
                  </div>
                </div>
                <button className="text-red-500 hover:text-red-700">
                  <X size={16} />
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
      
      {cartItems.length > 0 && (
        <div className="p-4 border-t">
          <div className="flex justify-between mb-2">
            <span className="text-gray-600">???????:</span>
            <span className="font-bold">{subtotal} ?.?</span>
          </div>
          <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
            ????? ??????
          </button>
        </div>
      )}
    </div>
  );
}
