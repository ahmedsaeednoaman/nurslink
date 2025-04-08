"use client";

import { useState } from "react";
import OrderRow from "./OrderRow";
import { Order } from "@/types";
import { OrderStatus } from "@prisma/client";

export default function OrdersTable({ orders }: { orders: Order[] }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<OrderStatus | "ALL">("ALL");

  const filteredOrders = orders.filter((order) => {
    const matchesSearch = 
      order.fullName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      order.id.includes(searchQuery);

    const matchesStatus =
      statusFilter === "ALL" || order.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  return (
    <div className="space-y-6">
      {/* أدوات البحث والفلترة */}
      <div className="flex flex-col md:flex-row gap-4 mb-4">
        <input
          type="text"
          placeholder="بحث بالاسم أو رقم الطلب..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="p-2 border rounded flex-1"
        />

        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value as OrderStatus | "ALL")}
          className="p-2 border rounded w-full md:w-48"
        >
          <option value="ALL">كل الحالات</option>
          <option value="PENDING">قيد الانتظار</option>
          <option value="PROCESSING">جاري التجهيز</option>
          <option value="DELIVERED">تم التسليم</option>
          <option value="CANCELLED">ملغى</option>
        </select>
      </div>

      {/* جدول الطلبات */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">رقم الطلب</th>
              <th className="py-2 px-4 border-b">العميل</th>
              <th className="py-2 px-4 border-b">الإجمالي</th>
              <th className="py-2 px-4 border-b">الحالة</th>
              <th className="py-2 px-4 border-b">التاريخ</th>
              <th className="py-2 px-4 border-b">إجراءات</th>
            </tr>
          </thead>
          <tbody>
            {filteredOrders.length > 0 ? (
              filteredOrders.map((order) => (
                <OrderRow key={order.id} order={order} />
              ))
            ) : (
              <tr>
                <td colSpan={6} className="text-center py-8">
                  لا توجد طلبات مطابقة للبحث أو الفلترة.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
