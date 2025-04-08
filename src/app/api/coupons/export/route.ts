import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET() {
  try {
    const coupons = await prisma.coupon.findMany();

    // إعداد رؤوس CSV
    const headers = 'الكود,النوع,القيمة,تاريخ الإنتهاء\n';

    // تجهيز صفوف CSV
    const rows = coupons.map((coupon) => {
      const expiry = coupon.expiryDate ? new Date(coupon.expiryDate).toLocaleDateString('ar-EG') : 'بدون تاريخ';
      return `${coupon.code},${coupon.discountType},${coupon.discountValue},${expiry}`;
    }).join('\n');

    const csvContent = headers + rows;

    // إرسال الملف كاستجابة تحميل
    return new Response(csvContent, {
      headers: {
        'Content-Type': 'text/csv; charset=UTF-8',
        'Content-Disposition': 'attachment; filename="coupons.csv"',
      },
    });

  } catch (error) {
    console.error('فشل تصدير الكوبونات:', error);
    return NextResponse.json(
      { success: false, message: 'حدث خطأ أثناء تصدير الكوبونات' },
      { status: 500 }
    );
  }
}
