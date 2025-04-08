import { getUserOrders } from '@/lib/api/orders';
import { Card, CardHeader, CardContent, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'طلباتي - NursLink',
  description: 'عرض جميع طلباتك السابقة.',
};

export default async function OrdersPage() {
  const orders = await getUserOrders();

  return (
    <main className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">طلباتي</h1>

      {orders.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-gray-500 mb-4">لم تقم بأي طلبات حتى الآن.</p>
          <Button asChild>
            <Link href="/store">تسوق الآن</Link>
          </Button>
        </div>
      ) : (
        <div className="grid gap-6">
          {orders.map((order) => (
            <Card key={order.id}>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle>طلب رقم: {order.id}</CardTitle>
                    <CardDescription>
                      بتاريخ {new Date(order.createdAt).toLocaleDateString('ar-EG')}
                    </CardDescription>
                  </div>
                  <Badge variant={getStatusVariant(order.status)}>
                    {getStatusText(order.status)}
                  </Badge>
                </div>
              </CardHeader>

              <CardContent className="flex justify-between items-center">
                <div>
                  <p>الإجمالي: <strong>{order.total.toFixed(2)} جنيه</strong></p>
                  {order.trackingNumber && (
                    <p className="text-sm text-gray-500 mt-1">
                      رقم التتبع: {order.trackingNumber}
                    </p>
                  )}
                </div>

                <Button asChild variant="outline" size="sm">
                  <Link href={`/account/orders/${order.id}`}>عرض التفاصيل</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </main>
  );
}

// مساعدة لتحديد لون الشارة حسب الحالة
function getStatusVariant(status: string) {
  switch (status) {
    case 'pending':
      return 'secondary';
    case 'shipped':
      return 'info';
    case 'delivered':
      return 'success';
    case 'cancelled':
      return 'destructive';
    default:
      return 'secondary';
  }
}

// مساعدة لتحويل الكود النصي لحالة مقروءة
function getStatusText(status: string) {
  switch (status) {
    case 'pending':
      return 'قيد المعالجة';
    case 'shipped':
      return 'تم الشحن';
    case 'delivered':
      return 'تم التوصيل';
    case 'cancelled':
      return 'تم الإلغاء';
    default:
      return status;
  }
}
