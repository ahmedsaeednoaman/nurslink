'use client'

import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight, Edit, Trash2 } from 'lucide-react'
import Link from 'next/link'
import { ExportButton } from './export-button'
import { toast } from 'sonner'

export default function CouponsTable({
  coupons,
  loading,
  pagination,
  onPageChange,
  refreshCoupons
}: {
  coupons: any[]
  loading: boolean
  pagination: any
  onPageChange: (page: number) => void
  refreshCoupons: () => void
}) {
  async function handleDelete(id: string) {
    const toastId = toast.loading('جاري الحذف...');
    try {
      const res = await fetch(`/api/coupons/${id}`, { method: 'DELETE' });
      if (res.ok) {
        toast.success('تم حذف الكوبون بنجاح', { id: toastId });
        refreshCoupons();
      } else {
        toast.error('فشل في حذف الكوبون', { id: toastId });
      }
    } catch {
      toast.error('حدث خطأ أثناء الحذف', { id: toastId });
    }
  }

  if (loading) {
    return <div>جاري تحميل الكوبونات...</div>;
  }

  return (
    <div className="space-y-6">
      {/* زر تصدير الكوبونات */}
      <div className="flex justify-end">
        <ExportButton />
      </div>

      {/* جدول عرض الكوبونات */}
      <div className="overflow-x-auto rounded-md border">
        <table className="min-w-full divide-y divide-gray-200 text-right">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-2">الكود</th>
              <th className="px-4 py-2">النوع</th>
              <th className="px-4 py-2">القيمة</th>
              <th className="px-4 py-2">تاريخ الإنتهاء</th>
              <th className="px-4 py-2">الإجراءات</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {coupons.map((coupon) => (
              <tr key={coupon.id}>
                <td className="px-4 py-2">{coupon.code}</td>
                <td className="px-4 py-2">{coupon.discountType === 'percentage' ? 'نسبة' : 'قيمة ثابتة'}</td>
                <td className="px-4 py-2">
                  {coupon.discountValue}
                  {coupon.discountType === 'percentage' ? '%' : ' ر.س'}
                </td>
                <td className="px-4 py-2">{coupon.expiryDate ? new Date(coupon.expiryDate).toLocaleDateString('ar-EG') : 'بدون تاريخ'}</td>
                <td className="px-4 py-2 space-x-2">
                  <Link href={`/admin/coupons/${coupon.id}/edit`}>
                    <Button variant="outline" size="icon" className="text-blue-600">
                      <Edit className="h-4 w-4" />
                    </Button>
                  </Link>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => handleDelete(coupon.id)}
                    className="text-red-600"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* تحكم Pagination */}
      <div className="flex items-center justify-between mt-4">
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => onPageChange(1)}
            disabled={pagination.page === 1}
          >
            <ChevronsLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => onPageChange(pagination.page - 1)}
            disabled={pagination.page === 1}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
        </div>

        <div className="text-sm">
          صفحة {pagination.page} من {pagination.totalPages}
        </div>

        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => onPageChange(pagination.page + 1)}
            disabled={pagination.page === pagination.totalPages}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => onPageChange(pagination.totalPages)}
            disabled={pagination.page === pagination.totalPages}
          >
            <ChevronsRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}
