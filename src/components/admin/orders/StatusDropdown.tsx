"use client";

import { updateOrderStatus } from "@/lib/api/orders"; // نعدل المسار لو API
import { OrderStatus } from "@prisma/client";
import { useRouter } from "next/navigation"; // ✅ نستخدم useRouter

export default function StatusDropdown({ orderId, currentStatus }: { orderId: string; currentStatus: OrderStatus }) {
  const router = useRouter();

  const handleStatusChange = async (newStatus: OrderStatus) => {
    await updateOrderStatus(orderId, newStatus);
    router.refresh(); // ✅ أفضل من window.location.reload()
  };

  return (
    <select
      defaultValue={currentStatus}
      onChange={(e) => handleStatusChange(e.target.value as OrderStatus)}
      className="p-2 border rounded"
    >
      <option value="PENDING">قيد الانتظار</option>
      <option value="PROCESSING">جاري التجهيز</option>
      <option value="DELIVERED">تم التسليم</option>
      <option value="CANCELLED">ملغى</option>
    </select>
  );
}
