import { Metadata } from 'next';
import PaymentForm from './components/PaymentForm';
import OrderSummary from './components/OrderSummary';

export const metadata: Metadata = {
  title: 'إتمام الدفع - NursLink',
  description: 'إتمام عملية الدفع الآمنة',
};

export default function PaymentPage() {
  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-2">إتمام عملية الدفع</h1>
          <p className="text-gray-600 text-center mb-8">أدخل معلومات الدفع الخاصة بك</p>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* نموذج الدفع */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-md p-6">
                <PaymentForm />
              </div>
            </div>
            
            {/* ملخص الطلب */}
            <div className="lg:col-span-1">
              <OrderSummary />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
