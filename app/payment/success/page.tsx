import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'تمت العملية بنجاح - NursLink',
};

export default function PaymentSuccess() {
  return (
    <div className="bg-gray-50 min-h-screen flex items-center justify-center">
      <div className="bg-white rounded-xl shadow-md p-8 max-w-md w-full text-center">
        <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-4">
          <span className="text-green-600 text-2xl">✓</span>
        </div>
        <h1 className="text-2xl font-bold text-gray-800 mb-2">تمت عملية الدفع بنجاح!</h1>
        <p className="text-gray-600 mb-6">
          شكراً لشرائك من متجر NursLink. سيتم إرسال تفاصيل الطلب إلى بريدك الإلكتروني.
        </p>
        <div className="space-y-3">
          <Link
            href="/orders"
            className="block w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            عرض تفاصيل الطلب
          </Link>
          <Link
            href="/store"
            className="block w-full px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
          >
            العودة إلى المتجر
          </Link>
        </div>
      </div>
    </div>
  );
}
