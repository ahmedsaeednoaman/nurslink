import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { auth } from '@clerk/nextjs';

// ======== [ GET Coupons with Pagination and Search ] ========
export async function GET(request: Request) {
  try {
    const { userId } = auth();
    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '10');
    const search = searchParams.get('search') || '';

    const where = search
      ? {
          OR: [
            { code: { contains: search, mode: 'insensitive' } },
            { discountType: { contains: search, mode: 'insensitive' } },
          ],
        }
      : {};

    const [coupons, total] = await Promise.all([
      prisma.coupon.findMany({
        where,
        skip: (page - 1) * limit,
        take: limit,
        orderBy: { createdAt: 'desc' },
      }),
      prisma.coupon.count({ where }),
    ]);

    return NextResponse.json({
      success: true,
      data: coupons,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
      },
    });
  } catch (error) {
    console.error('فشل في جلب الكوبونات:', error);
    return NextResponse.json(
      { success: false, message: 'فشل في جلب الكوبونات' },
      { status: 500 }
    );
  }
}

// ======== [ POST Create a New Coupon ] ========
export async function POST(request: Request) {
  try {
    const { userId } = auth();
    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { code, type, value, description, expiryDate } = await request.json();

    if (!code || !type || !value) {
      return NextResponse.json(
        { error: 'جميع الحقول مطلوبة (كود، نوع، قيمة)' },
        { status: 400 }
      );
    }

    const existingCoupon = await prisma.coupon.findUnique({
      where: { code },
    });

    if (existingCoupon) {
      return NextResponse.json(
        { error: 'كود الكوبون موجود بالفعل' },
        { status: 409 }
      );
    }

    const coupon = await prisma.coupon.create({
      data: {
        code,
        discountType: type,
        discountValue: parseFloat(value),
        description: description || '',
        expiryDate: expiryDate ? new Date(expiryDate) : null,
      },
    });

    return NextResponse.json(coupon, { status: 201 });
  } catch (error) {
    console.error('فشل إنشاء الكوبون:', error);
    return NextResponse.json(
      { error: 'حدث خطأ أثناء إنشاء الكوبون' },
      { status: 500 }
    );
  }
}
