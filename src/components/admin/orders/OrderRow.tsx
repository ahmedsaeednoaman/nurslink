import Link from "next/link";
import StatusBadge from "./StatusBadge"; // لازم تنشئه لو عايز شكل الحالة
import { Order } from "@/types";

export default function OrderRow({ order }: { order: Order }) {
  return (
    <tr className="hover:bg-gray-50">
      <td className="py-2 px-4 border-b">#{order.id}</td>
      <td className="py-2 px-4 border-b">{order.fullName}</td> {/* ✅ بدل customerName */}
      <td className="py-2 px-4 border-b">{order.total} ج.م</td>
      <td className="py-2 px-4 border-b">
        <StatusBadge status={order.status} />
      </td>
      <td className="py-2 px-4 border-b">
        {new Date(order.createdAt).toLocaleDateString()}
      </td>
      <td className="py-2 px-4 border-b">
        <Link href={`/admin/orders/${order.id}`} className="text-blue-500">
          التفاصيل
        </Link>
      </td>
    </tr>
  );
}
