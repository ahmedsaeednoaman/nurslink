'use client';

import { toast } from 'sonner';

export function ExportButton() {
  const handleExport = async () => {
    try {
      const res = await fetch('/api/coupons/export');
      
      if (!res.ok) {
        throw new Error('فشل في تصدير الكوبونات');
      }

      const blob = await res.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'coupons.csv';
      a.click();

      toast.success('تم تصدير الكوبونات بنجاح 🎉');

    } catch (error) {
      console.error('فشل في تصدير الكوبونات:', error);
      toast.error('حدث خطأ أثناء تصدير الكوبونات');
    }
  };

  return (
    <button
      onClick={handleExport}
      className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors duration-300"
    >
      تصدير الكوبونات إلى CSV
    </button>
  );
}
