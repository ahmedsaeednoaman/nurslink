import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

export async function PATCH(req: Request, { params }: { params: { couponId: string } }) {
  const data = await req.json()
  const updatedCoupon = await prisma.coupon.update({
    where: { id: params.couponId },
    data
  })
  return NextResponse.json(updatedCoupon)
}

export async function DELETE(req: Request, { params }: { params: { couponId: string } }) {
  await prisma.coupon.delete({
    where: { id: params.couponId }
  })
  return NextResponse.json({ success: true })
}
