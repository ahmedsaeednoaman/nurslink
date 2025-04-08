// src/components/admin/orders/StatusBadge.tsx
"use client";

import { OrderStatus } from "@prisma/client";

export default function StatusBadge({ status }: { status: OrderStatus }) {
  let colorClass = "";

  switch (status) {
    case "PENDING":
      colorClass = "bg-yellow-100 text-yellow-800";
      break;
    case "PROCESSING":
      colorClass = "bg-blue-100 text-blue-800";
      break;
    case "DELIVERED":
      colorClass = "bg-green-100 text-green-800";
      break;
    case "CANCELLED":
      colorClass = "bg-red-100 text-red-800";
      break;
    default:
      colorClass = "bg-gray-100 text-gray-800";
  }

  return (
    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${colorClass}`}>
      {status === "PENDING" && "قيد الانتظار"}
      {status === "PROCESSING" && "جاري التجهيز"}
      {status === "DELIVERED" && "تم التسليم"}
      {status === "CANCELLED" && "ملغي"}
    </span>
  );
}
