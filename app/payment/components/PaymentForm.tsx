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
    
    // محاكاة عملية الدفع
    setTimeout(() => {
      setIsProcessing(false);
      toast.success('تمت عملية الدفع بنجاح!');
      router.push('/payment/success');
    }, 2000);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="text-xl font-semibold mb-6 text-gray-800">معلومات الدفع</h2>
      ...
    </form>
  );
}
