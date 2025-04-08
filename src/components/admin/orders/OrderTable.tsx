'use client';

import { updateOrderStatus } from '@/lib/api/orders';

export default function OrderTable({ orders }: { orders: any[] }) {
  const handleStatusChange = async (orderId: string, newStatus: string) => {
    try {
      await updateOrderStatus(orderId, newStatus);
      window.location.reload();
    } catch (error) {
      console.error('فشل تحديث حالة الطلب:', error);
    }
  };

  return (
    <table className="min-w-full divide-y divide-gray-200">
      <thead className="bg-gray-50">
        <tr>
          <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">رقم الطلب</th>
          <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">العميل</th>
          <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">الإجمالي</th>
          <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">الحالة</th>
          <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">التاريخ</th>
          <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">إجراءات</th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {orders.map(order => (
          <tr key={order.id}>
            <td className="px-6 py-4 whitespace-nowrap">#{order.id.slice(0, 8)}</td>
            <td className="px-6 py-4 whitespace-nowrap">
              <p>{order.fullName}</p>
              <p className="text-sm text-gray-500">{order.phone}</p>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">{order.total.toFixed(2)} جنيه</td>
            <td className="px-6 py-4 whitespace-nowrap">
              <select
                value={order.status}
                onChange={(e) => handleStatusChange(order.id, e.target.value)}
                className={`px-2 py-1 rounded text-sm ${
                  order.status === 'PENDING' ? 'bg-yellow-100 text-yellow-800' :
                  order.status === 'PROCESSING' ? 'bg-blue-100 text-blue-800' :
                  order.status === 'DELIVERED' ? 'bg-green-100 text-green-800' :
                  'bg-red-100 text-red-800'
                }`}
              >
                <option value="PENDING">قيد الانتظار</option>
                <option value="PROCESSING">قيد التجهيز</option>
                <option value="SHIPPED">تم الشحن</option>
                <option value="DELIVERED">تم التسليم</option>
                <option value="CANCELLED">ملغى</option>
              </select>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              {new Date(order.createdAt).toLocaleDateString('ar-EG')}
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <button className="text-blue-600 hover:underline">
                التفاصيل
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
