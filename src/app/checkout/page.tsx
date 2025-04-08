'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';

export default function CheckoutPage() {
  const [couponCode, setCouponCode] = useState('');
  const [appliedCoupon, setAppliedCoupon] = useState<null | {
    id: string;
    code: string;
    discountType: string;
    discountValue: number;
  }>(null);
  const [loading, setLoading] = useState(false);

  // دالة تطبيق الكوبون
  const handleApplyCoupon = async () => {
    if (!couponCode.trim()) {
      toast.error('يرجى إدخال كود الخصم');
      return;
    }

    setLoading(true);
    try {
      const response = await fetch(`/api/coupons/validate?code=${couponCode}`);
      const data = await response.json();

      if (data.success) {
        setAppliedCoupon(data.coupon);
        toast.success('تم تطبيق الكوبون بنجاح');
      } else {
        toast.error(data.message || 'كود الخصم غير صحيح');
      }
    } catch (error) {
      console.error('خطأ أثناء تطبيق الكوبون:', error);
      toast.error('حدث خطأ أثناء التحقق من الكوبون');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto max-w-md py-8 space-y-6">
      <h1 className="text-2xl font-bold text-center mb-4">إتمام الطلب</h1>

      {/* حقل إدخال الكوبون */}
      <div className="flex gap-2">
        <Input
          value={couponCode}
          onChange={(e) => setCouponCode(e.target.value)}
          placeholder="أدخل كود الخصم هنا"
          disabled={loading || !!appliedCoupon}
        />
        <Button
          onClick={handleApplyCoupon}
          disabled={loading || !couponCode.trim() || !!appliedCoupon}
        >
          {loading ? 'جار التحقق...' : 'تطبيق'}
        </Button>
      </div>

      {/* عرض الكوبون إذا تم تطبيقه */}
      {appliedCoupon && (
        <div className="bg-green-100 border border-green-400 text-green-700 p-4 rounded text-center">
          <p>✅ تم تطبيق الكوبون:</p>
          <p className="font-semibold">{appliedCoupon.code}</p>
        </div>
      )}
    </div>
  );
}
