'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'react-hot-toast';

export default function PaymentForm() {
  const router = useRouter();
  const [paymentMethod, setPaymentMethod] = useState('credit');
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    setTimeout(() => {
      setIsProcessing(false);
      toast.success('??? ????? ????? ?????!');
      router.push('/payment/success');
    }, 2000);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="text-xl font-semibold mb-6 text-gray-800">??????? ?????</h2>
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-3">????? ?????</label>
        <div className="grid grid-cols-2 gap-4">
          <button type="button" onClick={() => setPaymentMethod('credit')}
            className={py-3 px-4 border rounded-lg flex items-center justify-center }>
            <span className="mr-2">??</span>
            <span>????? ??????</span>
          </button>
          <button type="button" onClick={() => setPaymentMethod('vodafone')}
            className={py-3 px-4 border rounded-lg flex items-center justify-center }>
            <span className="mr-2">??</span>
            <span>??????? ???</span>
          </button>
        </div>
      </div>

      {paymentMethod === 'credit' ? (
        <>
          <div className="mb-4">
            <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700 mb-1">??? ???????</label>
            <input id="cardNumber" type="text" placeholder="1234 5678 9012 3456"
              className="w-full px-4 py-3 border rounded-lg focus:ring-blue-500 focus:border-blue-500" required />
          </div>

          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label htmlFor="expiry" className="block text-sm font-medium text-gray-700 mb-1">????? ????????</label>
              <input id="expiry" type="text" placeholder="MM/YY"
                className="w-full px-4 py-3 border rounded-lg focus:ring-blue-500 focus:border-blue-500" required />
            </div>
            <div>
              <label htmlFor="cvv" className="block text-sm font-medium text-gray-700 mb-1">CVV</label>
              <input id="cvv" type="text" placeholder="123"
                className="w-full px-4 py-3 border rounded-lg focus:ring-blue-500 focus:border-blue-500" required />
            </div>
          </div>

          <div className="mb-6">
            <label htmlFor="cardName" className="block text-sm font-medium text-gray-700 mb-1">??? ???? ???????</label>
            <input id="cardName" type="text" placeholder="???? ??? ?? ???? ??? ???????"
              className="w-full px-4 py-3 border rounded-lg focus:ring-blue-500 focus:border-blue-500" required />
          </div>
        </>
      ) : (
        <div className="mb-6">
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">??? ???? ??????? ???</label>
          <input id="phone" type="tel" placeholder="01XXXXXXXX"
            className="w-full px-4 py-3 border rounded-lg focus:ring-blue-500 focus:border-blue-500" required />
          <p className="mt-2 text-sm text-gray-500">????? ????? ????? ??? ??? ????? ?????? ?????</p>
        </div>
      )}

      <div className="mb-6">
        <div className="flex items-center">
          <input id="saveCard" type="checkbox"
            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
          <label htmlFor="saveCard" className="mr-2 block text-sm text-gray-700">??? ??????? ????? ????? ???????</label>
        </div>
      </div>

      <button type="submit" disabled={isProcessing}
        className={w-full py-3 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 }>
        {isProcessing ? '???? ?????? ?????...' : '????? ?????'}
      </button>
    </form>
  );
}
