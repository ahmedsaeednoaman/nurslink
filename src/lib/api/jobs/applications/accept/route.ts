import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

// POST /api/jobs/applications/accept
export async function POST(request: Request) {
  const { applicationId } = await request.json();

  const updatedApplication = await prisma.jobApplication.update({
    where: { id: applicationId },
    data: { status: 'ACCEPTED' }
  });

  await prisma.job.update({
    where: { id: updatedApplication.jobId },
    data: { status: 'CLOSED' }
  });

  return NextResponse.json({ success: true });
}
