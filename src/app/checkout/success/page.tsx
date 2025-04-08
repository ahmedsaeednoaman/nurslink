import Link from 'next/link';
import { FaCheckCircle } from 'react-icons/fa';
import { Metadata } from 'next';

// بيانات وصفية للصفحة لتحسين السيو
export const metadata: Metadata = {
  title: 'تمت العملية بنجاح - طلبك قيد المعالجة',
  description: 'شكراً لطلبك، تم استلام طلبك بنجاح وسنتواصل معك قريباً',
};

export default function OrderSuccessPage({ 
  searchParams 
}: { 
  searchParams: { 
    orderId: string;
    total?: string;
    items?: string;
  } 
}) {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full mx-auto bg-white rounded-xl shadow-md overflow-hidden p-6 space-y-6">
        <div className="text-center">
          <FaCheckCircle className="mx-auto h-16 w-16 text-green-500" />
          <h1 className="mt-4 text-2xl font-bold text-gray-900">
            شكراً لطلبك!
          </h1>
          <p className="mt-2 text-gray-600">
            تم استلام طلبك بنجاح وسنتواصل معك قريباً لتأكيد التفاصيل
          </p>
        </div>

        <div className="border-t border-gray-200 pt-4">
          {searchParams.orderId && (
            <div className="flex justify-between py-2">
              <span className="text-gray-600">رقم الطلب:</span>
              <span className="font-medium">{searchParams.orderId}</span>
            </div>
          )}
          
          {searchParams.total && (
            <div className="flex justify-between py-2">
              <span className="text-gray-600">المبلغ الإجمالي:</span>
              <span className="font-medium">{searchParams.total} جنيه</span>
            </div>
          )}
          
          {searchParams.items && (
            <div className="flex justify-between py-2">
              <span className="text-gray-600">عدد المنتجات:</span>
              <span className="font-medium">{searchParams.items}</span>
            </div>
          )}
        </div>

        <div className="flex flex-col space-y-3">
          <Link
            href="/store"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            العودة للمتجر
          </Link>
          <Link
            href="/account/orders"
            className="w-full flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            تتبع طلباتي
          </Link>
        </div>

        <div className="text-center text-sm text-gray-500">
          <p>لأي استفسار، لا تتردد في الاتصال بنا على:</p>
          <a href="tel:+20123456789" className="text-blue-600 hover:text-blue-500">
            +20 123 456 789
          </a>
        </div>
      </div>
    </div>
  );
}
