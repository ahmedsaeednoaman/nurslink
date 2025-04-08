'use client';

import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

export default function NewCouponPage() {
  const router = useRouter();

  async function handleSubmit(formData: FormData) {
    try {
      const response = await fetch('/api/coupons', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (!response.ok) {
        toast.error(data.message || 'فشل إنشاء الكوبون');
        return;
      }

      toast.success('✅ تم إنشاء الكوبون بنجاح');
      router.push('/admin/coupons?success=تم إنشاء الكوبون');
      
    } catch (error) {
      console.error('خطأ بالشبكة أثناء إنشاء الكوبون:', error);
      toast.error('⚠️ حدث خطأ في الشبكة، حاول لاحقاً');
    }
  }

  return (
    <div className="container mx-auto max-w-2xl py-10">
      <h1 className="text-2xl font-bold mb-6">إنشاء كوبون جديد</h1>

      {/* ✏️ هنا ضع النموذج الخاص بإدخال بيانات الكوبون */}
      <form action={handleSubmit} className="space-y-4">
        {/* الحقول الخاصة بالكود ونوع الخصم والقيمة والتاريخ وخلافه */}
        <div>نموذج إنشاء كوبون هنا</div>
      </form>
    </div>
  );
}
