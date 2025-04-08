import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

// GET /api/jobs
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const where: any = {
    status: 'OPEN'
  };

  if (searchParams.get('type')) {
    where.type = searchParams.get('type');
  }
  if (searchParams.get('specialty')) {
    where.specialty = searchParams.get('specialty');
  }
  if (searchParams.get('location')) {
    where.location = { contains: searchParams.get('location') };
  }

  const jobs = await prisma.job.findMany({
    where,
    orderBy: { createdAt: 'desc' }
  });

  return NextResponse.json(jobs);
}

// POST /api/jobs
export async function POST(request: Request) {
  const body = await request.json();
  const job = await prisma.job.create({
    data: {
      title: body.title,
      description: body.description,
      salary: body.salary,
      location: body.location,
      type: body.type,
      specialty: body.specialty,
      employerId: body.employerId
    }
  });
  return NextResponse.json(job);
}
