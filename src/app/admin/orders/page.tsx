import { getOrders } from '@/lib/api/orders';
import OrderTable from '@/components/admin/OrderTable';
import { Metadata } from 'next';
import SearchBar from '@/components/admin/SearchBar';
import StatusFilter from '@/components/admin/StatusFilter';
import PaginationControls from '@/components/admin/PaginationControls';

export const metadata: Metadata = {
  title: 'لوحة التحكم - إدارة الطلبات',
  description: 'إدارة وعرض جميع طلبات العملاء في النظام',
};

interface AdminOrdersPageProps {
  searchParams: {
    query?: string;
    status?: string;
    page?: string;
    per_page?: string;
  }
}

export default async function AdminOrdersPage({
  searchParams
}: AdminOrdersPageProps) {
  const query = searchParams?.query || '';
  const status = searchParams?.status || 'all';
  const page = Number(searchParams?.page) || 1;
  const perPage = Number(searchParams?.per_page) || 10;

  const { orders, totalCount } = await getOrders({
    query,
    status,
    page,
    perPage
  });

  const totalPages = Math.ceil(totalCount / perPage);

  return (
    <div className="container mx-auto p-4 space-y-6">
      {/* رأس الصفحة */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <h1 className="text-2xl font-bold text-gray-800">إدارة الطلبات</h1>
        <div className="flex items-center space-x-4">
          <SearchBar placeholder="ابحث عن طلب..." />
          <StatusFilter />
        </div>
      </div>

      {/* جدول الطلبات */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <OrderTable orders={orders} />
      </div>

      {/* التقسيم الصفحي */}
      {totalPages > 1 && (
        <PaginationControls 
          totalPages={totalPages}
          currentPage={page}
        />
      )}

      {/* ملخص الطلبات */}
      <div className="text-sm text-gray-500 mt-4">
        <p>إجمالي الطلبات: <span className="font-medium">{totalCount}</span></p>
        <p>الطلبات المعروضة: <span className="font-medium">{orders.length}</span></p>
      </div>
    </div>
  );
}
