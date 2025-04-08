import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import ProductCard from '@/components/admin/ProductCard';
import { getProducts } from '@/lib/api/products';
import SearchBar from '@/components/admin/SearchBar';
import CategoryFilter from '@/components/admin/CategoryFilter';
import PaginationControls from '@/components/admin/PaginationControls';

export const metadata: Metadata = {
  title: 'لوحة التحكم - إدارة المنتجات',
  description: 'إدارة وعرض جميع منتجات المتجر',
};

interface AdminProductsPageProps {
  searchParams: {
    query?: string;
    category?: string;
    page?: string;
    per_page?: string;
    sort?: 'price_asc' | 'price_desc' | 'newest';
  };
}

export default async function AdminProductsPage({
  searchParams,
}: AdminProductsPageProps) {
  const query = searchParams?.query || '';
  const category = searchParams?.category || 'all';
  const page = Number(searchParams?.page) || 1;
  const perPage = Number(searchParams?.per_page) || 12;
  const sort = searchParams?.sort || 'newest';

  const { products, totalCount } = await getProducts({
    query,
    category,
    page,
    perPage,
    sort,
  });

  const totalPages = Math.ceil(totalCount / perPage);

  return (
    <div className="container mx-auto p-4 space-y-6">
      {/* رأس الصفحة */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <h1 className="text-2xl font-bold text-gray-800">إدارة المنتجات</h1>
        <Button asChild>
          <Link href="/admin/products/new">إضافة منتج جديد</Link>
        </Button>
      </div>

      {/* فلاتر البحث */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="md:col-span-2 lg:col-span-3">
          <div className="flex flex-col md:flex-row gap-4">
            <SearchBar placeholder="ابحث عن منتج..." />
            <CategoryFilter />
            <select
              defaultValue={sort}
              className="border rounded-md p-2 text-sm"
            >
              <option value="newest">الأحدث</option>
              <option value="price_asc">السعر: من الأقل للأعلى</option>
              <option value="price_desc">السعر: من الأعلى للأقل</option>
            </select>
          </div>
        </div>

        {/* شبكة عرض المنتجات */}
        {products.length > 0 ? (
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <div className="col-span-full text-center py-12">
            <p className="text-gray-500">لا توجد منتجات متاحة</p>
          </div>
        )}
      </div>

      {/* التقسيم الصفحي */}
      {totalPages > 1 && (
        <PaginationControls 
          totalPages={totalPages}
          currentPage={page}
        />
      )}

      {/* ملخص */}
      <div className="text-sm text-gray-500">
        <p>إجمالي المنتجات: <span className="font-medium">{totalCount}</span></p>
        <p>المنتجات المعروضة: <span className="font-medium">{products.length}</span></p>
      </div>
    </div>
  );
}
