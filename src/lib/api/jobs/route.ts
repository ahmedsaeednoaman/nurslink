import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import type { Job } from '@prisma/client'; // ❗ نكتب type فقط علشان نستورد النوع بدون مشاكل

// GET /api/jobs
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const where: Partial<Job> = {
    status: 'OPEN',
  };

  if (searchParams.get('type')) {
    where.type = searchParams.get('type') as Job['type'];
  }

  if (searchParams.get('specialty')) {
    where.specialty = searchParams.get('specialty') || undefined;
  }

  if (searchParams.get('location')) {
    where.location = { contains: searchParams.get('location')! };
  }

  const jobs = await prisma.job.findMany({
    where,
    orderBy: { createdAt: 'desc' },
  });

  return NextResponse.json(jobs);
}

// POST /api/jobs
export async function POST(request: Request) {
  try {
    const body = await request.json();

    const job = await prisma.job.create({
      data: {
        title: body.title,
        description: body.description,
        salary: body.salary,
        location: body.location,
        type: body.type,
        specialty: body.specialty,
        employerId: body.employerId,
        status: 'OPEN', // ✅
      },
    });

    return NextResponse.json(job, { status: 201 });
  } catch (_error) { 
    // ✅ استخدم _error عشان تتفادى تحذير "error is defined but never used"
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
