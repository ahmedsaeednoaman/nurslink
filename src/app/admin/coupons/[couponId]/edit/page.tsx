'use client';

import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

interface EditCouponPageProps {
  params: { couponId: string };
}

export default function EditCouponPage({ params }: EditCouponPageProps) {
  const router = useRouter();

  return (
    <div className="container mx-auto max-w-2xl py-8">
      <h1 className="text-2xl font-bold mb-6">تعديل الكوبون</h1>

      {/* 📝 نموذج تعديل الكوبون */}
      <div className="bg-white p-6 rounded-lg shadow">
        <form
          action={async (formData: FormData) => {
            try {
              const response = await fetch(`/api/coupons/${params.couponId}`, {
                method: 'PATCH',
                body: formData,
              });

              if (response.ok) {
                toast.success('تم تعديل الكوبون بنجاح');
                router.push('/admin/coupons?success=تم تعديل الكوبون بنجاح');
              } else {
                const error = await response.json();
                toast.error(error.message || 'حدث خطأ أثناء التعديل');
              }
            } catch (error) {
              console.error('خطأ أثناء تعديل الكوبون:', error);
              toast.error('حدث خطأ في الشبكة');
            }
          }}
        >
          {/* هنا الحقول اللي هتحطها لاحقاً */}
          <p className="text-gray-500 text-center">
            🛠️ نموذج تعديل الكوبون سيتم وضعه هنا.
          </p>
        </form>
      </div>
    </div>
  );
}
