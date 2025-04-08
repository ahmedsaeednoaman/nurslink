import OrderDetailsCard from "@/components/admin/orders/OrderDetailsCard";
import { getOrderById } from "@/lib/db/orders";

export default async function OrderDetailsPage({ params }: { params: { orderId: string } }) {
  const order = await getOrderById(params.orderId);
  
  if (!order) return <div>الطلب غير موجود</div>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">تفاصيل الطلب #{order.id}</h1>
      <OrderDetailsCard order={order} />
    </div>
  );
}
