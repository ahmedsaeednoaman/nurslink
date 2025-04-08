'use client';

import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/Button';
import { useCart } from '@/contexts/CartContext';

type FormData = {
  fullName: string;
  phone: string;
  address: string;
  notes?: string;
};

export default function CheckoutForm() {
  const router = useRouter();
  const { register, handleSubmit } = useForm<FormData>();
  const { cartItems, clearCart } = useCart();

  const onSubmit = async (data: FormData) => {
    await fetch('/api/orders', {
      method: 'POST',
      body: JSON.stringify({
        ...data,
        items: cartItems
      })
    });

    clearCart();
    router.push('/checkout/success');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      {/* إدخال الاسم */}
      <div>
        <label className="block mb-1">الاسم بالكامل</label>
        <input
          {...register('fullName', { required: true })}
          className="w-full p-2 border rounded"
        />
      </div>

      {/* إدخال الهاتف */}
      <div>
        <label className="block mb-1">رقم الهاتف</label>
        <input
          {...register('phone', { required: true })}
          className="w-full p-2 border rounded"
          type="tel"
        />
      </div>

      {/* إدخال العنوان */}
      <div>
        <label className="block mb-1">عنوان التوصيل</label>
        <textarea
          {...register('address', { required: true })}
          className="w-full p-2 border rounded"
          rows={3}
        />
      </div>

      {/* ملاحظات إضافية */}
      <div>
        <label className="block mb-1">ملاحظات (اختياري)</label>
        <textarea
          {...register('notes')}
          className="w-full p-2 border rounded"
          rows={2}
        />
      </div>

      <Button type="submit" className="w-full py-6">
        تأكيد الطلب
      </Button>
    </form>
  );
}
