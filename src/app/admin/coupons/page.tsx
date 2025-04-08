'use client';

import { useState, useEffect, useCallback } from 'react';
import { useSearchParams } from 'next/navigation';
import { toast } from 'sonner';
import CouponsTable from './_components/coupons-table';

export default function CouponsPage() {
  const [coupons, setCoupons] = useState([]);
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 10,
    total: 0,
    totalPages: 1,
  });
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState('');
  const searchParams = useSearchParams();

  // 🔥 جلب الكوبونات مع البحث والصفحة
  const fetchCoupons = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `/api/coupons?page=${pagination.page}&limit=${pagination.limit}&search=${encodeURIComponent(search)}`,
        { cache: 'no-store' }
      );
      const data = await response.json();
      
      if (data.success) {
        setCoupons(data.data);
        setPagination((prev) => ({
          ...prev,
          total: data.pagination.total,
          totalPages: data.pagination.totalPages,
        }));
      } else {
        toast.error(data.message || 'فشل في جلب الكوبونات');
      }
    } catch (error) {
      console.error('خطأ أثناء جلب الكوبونات:', error);
      toast.error('حدث خطأ أثناء تحميل الكوبونات');
    } finally {
      setLoading(false);
    }
  }, [pagination.page, pagination.limit, search]);

  // 🔥 اشعارات نجاح أو خطأ بناءً على URL params
  useEffect(() => {
    if (searchParams.get('success')) {
      toast.success(searchParams.get('success') || 'عملية ناجحة');
    }
    if (searchParams.get('error')) {
      toast.error(searchParams.get('error') || 'حدث خطأ');
    }
  }, [searchParams]);

  // 🔥 تشغيل جلب البيانات أول مرة وعند تغيير البحث أو الصفحة
  useEffect(() => {
    fetchCoupons();
  }, [fetchCoupons]);

  function handlePageChange(newPage: number) {
    if (newPage >= 1 && newPage <= pagination.totalPages) {
      setPagination((prev) => ({ ...prev, page: newPage }));
    }
  }

  return (
    <div className="p-4 space-y-6">
      <h1 className="text-2xl font-bold">إدارة الكوبونات</h1>

      {/* 🔎 حقل البحث */}
      <input
        type="text"
        placeholder="ابحث بكود الخصم..."
        className="border px-3 py-2 rounded-md w-full max-w-sm"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          setPagination((prev) => ({ ...prev, page: 1 }));
        }}
      />

      {/* 📋 جدول الكوبونات */}
      <CouponsTable
        coupons={coupons}
        loading={loading}
        pagination={pagination}
        onPageChange={handlePageChange}
        refreshCoupons={fetchCoupons}
      />
    </div>
  );
}
