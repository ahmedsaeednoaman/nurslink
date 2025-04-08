import dynamic from 'next/dynamic';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { Skeleton } from '@/components/ui/skeleton';
import { getProductById } from '@/lib/api/products';

// تحميل تفاصيل المنتج ديناميكياً لتحسين الأداء
const ProductDetails = dynamic(() => import('@/components/store/ProductDetails'), {
  loading: () => (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row gap-8">
        <Skeleton className="h-96 w-full md:w-1/2 rounded-lg" />
        <div className="space-y-4 w-full md:w-1/2">
          <Skeleton className="h-10 w-3/4" />
          <Skeleton className="h-6 w-1/2" />
          <Skeleton className="h-20 w-full" />
          <Skeleton className="h-12 w-32" />
        </div>
      </div>
      <Skeleton className="h-64 w-full" />
    </div>
  ),
  ssr: false,
});

export async function generateMetadata({ params }: { params: { productId: string } }): Promise<Metadata> {
  const product = await getProductById(params.productId);

  return {
    title: product?.name || 'المنتج غير موجود',
    description: product?.description || 'تفاصيل المنتج',
    openGraph: {
      images: product?.images ? [product.images[0]] : [],
    },
  };
}

export default async function ProductPage({ params }: { params: { productId: string } }) {
  const product = await getProductById(params.productId);

  if (!product) {
    notFound();
  }

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <ProductDetails product={product} />
      </div>
    </main>
  );
}
