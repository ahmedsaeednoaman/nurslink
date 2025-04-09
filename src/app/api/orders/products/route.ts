import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

// نوع مخصص للمنتج بشكل مبدئي
interface ProductWithReviews {
  id: string;
  name: string;
  price: number;
  images: string[];
  category: string;
  createdAt: Date;
  reviews: { rating: number }[];
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const where: { [key: string]: any } = {};

  if (searchParams.get('category')) {
    where.category = searchParams.get('category') || undefined;
  }

  if (searchParams.get('minPrice')) {
    where.price = { gte: parseFloat(searchParams.get('minPrice')!) };
  }

  if (searchParams.get('maxPrice')) {
    where.price = {
      ...(where.price || {}),
      lte: parseFloat(searchParams.get('maxPrice')!)
    };
  }

  if (searchParams.get('search')) {
    where.name = {
      contains: searchParams.get('search') || undefined,
      mode: 'insensitive'
    };
  }

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

  const productsWithRating = products.map((product) => ({
    ...product,
    rating: product.reviews.length > 0
      ? product.reviews.reduce((sum: number, review: { rating: number }) => sum + review.rating, 0) / product.reviews.length
      : null
  }));

  return NextResponse.json(productsWithRating);
}

// إنشاء منتج جديد (للمسؤولين)
export async function POST(request: Request) {
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
