import { CartItem } from '@/types';

export default function OrderSummary({ items }: { items: CartItem[] }) {
  const total = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <div className="bg-gray-50 p-6 rounded-lg">
      <h2 className="text-xl font-bold mb-4">ملخص الطلب</h2>
      
      <div className="space-y-4">
        {items.map((item) => (
          <div key={item.id} className="flex justify-between border-b pb-2">
            <span>
              {item.name} × {item.quantity}
            </span>
            <span>{item.price * item.quantity} ج.م</span>
          </div>
        ))}
      </div>

      <div className="mt-6 pt-4 border-t">
        <div className="flex justify-between font-bold text-lg">
          <span>الإجمالي:</span>
          <span>{total} ج.م</span>
        </div>
      </div>
    </div>
  );
}
