'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { Review } from '@/types';
import { Skeleton } from '@/components/ui/skeleton';
import { Button } from '@/components/ui/button';
import { Rating } from '@/components/ui/rating';
import { Icons } from '@/components/icons';
import AddReviewDialog from '@/components/store/AddReviewDialog';

export default function ProductReviewsPage() {
  const params = useParams<{ productId: string }>();
  const [reviews, setReviews] = useState<Review[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const res = await fetch(`/api/products/${params.productId}/reviews`);
        if (!res.ok) {
          throw new Error('فشل في تحميل المراجعات');
        }
        const data = await res.json();
        setReviews(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'حدث خطأ غير متوقع');
      } finally {
        setIsLoading(false);
      }
    };

    fetchReviews();
  }, [params.productId]);

  if (isLoading) {
    return (
      <div className="container mx-auto p-4 space-y-6">
        <Skeleton className="h-8 w-1/3" />
        {[...Array(3)].map((_, idx) => (
          <Skeleton key={idx} className="h-24 w-full rounded-lg" />
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto p-4 text-center">
        <p className="text-red-500 mb-4">{error}</p>
        <Button onClick={() => window.location.reload()}>
          <Icons.refresh className="h-4 w-4 mr-2" />
          إعادة المحاولة
        </Button>
      </div>
    );
  }

  return (
    <main className="container mx-auto p-4 max-w-4xl">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">مراجعات المنتج</h1>
        <AddReviewDialog productId={params.productId} />
      </div>

      {reviews.length === 0 ? (
        <div className="text-center space-y-4 py-12">
          <Icons.review className="h-12 w-12 text-gray-400 mx-auto" />
          <p className="text-gray-500">لا توجد مراجعات لهذا المنتج بعد.</p>
          <p className="text-gray-400 text-sm">كن أول من يكتب مراجعة!</p>
        </div>
      ) : (
        <div className="space-y-6">
          {reviews.map((review) => (
            <div key={review.id} className="p-4 border rounded-lg shadow-sm hover:shadow-md transition">
              <div className="flex items-center gap-2 mb-2">
                <Rating value={review.rating} readOnly />
                <span className="text-sm text-gray-600">
                  {review.user?.name || 'مستخدم مجهول'}
                </span>
              </div>
              {review.comment && (
                <p className="text-gray-700">{review.comment}</p>
              )}
              <p className="text-xs text-gray-400 mt-2">
                {new Date(review.createdAt).toLocaleDateString('ar-EG', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </p>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}
