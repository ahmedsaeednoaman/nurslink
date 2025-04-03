import LoginForm from './Form';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'تسجيل الدخول - NursLink',
  description: 'سجل دخولك إلى منصة NursLink للوصول إلى خدمات التمريض المتكاملة',
};

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-blue-600">مرحباً بعودتك!</h1>
            <p className="mt-2 text-gray-600">
              سجل دخولك للوصول إلى لوحة التحكم الخاصة بك
            </p>
          </div>
          
          <LoginForm />
          
          <div className="mt-6 text-center">
            <p className="text-gray-500">
              ليس لديك حساب؟{' '}
              <a 
                href="/register" 
                className="text-blue-600 hover:underline font-medium"
              >
                سجل الآن
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}