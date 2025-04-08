import { NextResponse } from 'next/server';
import { createOrder, updateOrderStatus, getOrders } from '@/lib/db/orders';

// إنشاء طلب جديد
export async function POST(request: Request) {
  const data = await request.json();
  const result = await createOrder(data);

  if (!result.success) {
    return NextResponse.json({ error: result.message }, { status: 400 });
  }

  return NextResponse.json(result.order, { status: 201 });
}

// جلب جميع الطلبات (للمسؤولين)
export async function GET() {
  const orders = await getOrders();
  return NextResponse.json(orders);
}

// تعديل حالة طلب
export async function PATCH(request: Request) {
  const { id, status } = await request.json();
  const updatedOrder = await updateOrderStatus(id, status);
  return NextResponse.json(updatedOrder);
}
