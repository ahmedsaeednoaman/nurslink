// src/lib/api/orders.ts

export async function updateOrderStatus(orderId: string, newStatus: string) {
    const res = await fetch(`/api/orders/${orderId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ status: newStatus }),
    });
  
    if (!res.ok) {
      throw new Error('فشل في تحديث حالة الطلب');
    }
  
    return res.json();
  }
  