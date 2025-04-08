import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const code = searchParams.get('code');

    // تحقق من وجود الكود
    if (!code) {
      return NextResponse.json(
        { success: false, message: 'يرجى إدخال كود الخصم' },
        { status: 400 }
      );
    }

    // البحث عن الكوبون باستخدام الكود
    const coupon = await prisma.coupon.findUnique({
      where: { code },
    });

    // تحقق إذا كان الكوبون موجود
    if (!coupon) {
      return NextResponse.json(
        { success: false, message: 'كود الخصم غير صحيح أو غير موجود' },
        { status: 404 }
      );
    }

    // ✅ تحقق إضافي (اختياري) - صلاحية الكوبون
    if (!coupon.isActive || (coupon.expiryDate && coupon.expiryDate < new Date())) {
      return NextResponse.json(
        { success: false, message: 'هذا الكوبون غير فعال أو منتهي الصلاحية' },
        { status: 400 }
      );
    }

    // إرجاع بيانات الكوبون
    return NextResponse.json({
      success: true,
      coupon: {
        id: coupon.id,
        code: coupon.code,
        discountType: coupon.discountType,
        discountValue: coupon.discountValue,
      },
    });

  } catch (error) {
    console.error('❌ خطأ أثناء التحقق من الكوبون:', error);
    return NextResponse.json(
      { success: false, message: 'حدث خطأ في الخادم. حاول لاحقاً.' },
      { status: 500 }
    );
  }
}
