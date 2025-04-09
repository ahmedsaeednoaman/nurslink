import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
// لو عندك نظام مستخدمين، تفعل الاستيراد ده
// import { getCurrentUser } from '@/lib/auth'; 

// تعريف نوع المنتج مع التقييمات
interface ProductWithReviews {
  id: string;
  name: string;
  price: number;
  images: string[];
  category: string;
  createdAt: Date;
  reviews: { rating: number }[];
}

// جلب المنتجات (GET)
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const where: any = {
    ...(searchParams.get('category') && { category: searchParams.get('category') }),
    ...(searchParams.get('minPrice') && { price: { gte: parseFloat(searchParams.get('minPrice')!) } }),
    ...(searchParams.get('maxPrice') && { price: { ...(where?.price || {}), lte: parseFloat(searchParams.get('maxPrice')!) } }),
    ...(searchParams.get('search') && { 
      name: { 
        contains: searchParams.get('search')!, 
        mode: 'insensitive' 
      } 
    }),
  };

  const products: ProductWithReviews[] = await prisma.product.findMany({
    where,
    include: {
      reviews: {
        select: { rating: true }
      }
    },
    orderBy: {
      createdAt: 'desc'
    }
  });

  // حساب متوسط التقييم
  const productsWithRating = products.map((product) => ({
    ...product,
    rating: product.reviews.length > 0
      ? product.reviews.reduce((sum: number, review: { rating: number }) => sum + review.rating, 0) / product.reviews.length
      : null
  }));

  return NextResponse.json(productsWithRating);
}

// إنشاء منتج جديد (POST)
export async function POST(request: Request) {
  // ✅ حماية إضافية لو عندك نظام مستخدمين
  // const user = await getCurrentUser();
  // if (!user || user.role !== 'admin') {
  //   return new NextResponse('Unauthorized', { status: 401 });
  // }

  const body = await request.json();

  const product = await prisma.product.create({
    data: {
      name: body.name,
      description: body.description || '',
      longDescription: body.longDescription || '',
      price: body.price,
      images: body.images,
      category: body.category,
      stock: body.stock
    }
  });

  return NextResponse.json(product);
}
