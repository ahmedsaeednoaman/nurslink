import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { NextResponse } from "next/server";
import type { AuthOptions } from "next-auth"; // ✅ نستورد النوع الصحيح

export async function withAuthProtection() {
  const session = await getServerSession(authOptions as AuthOptions); // ✅ استخدمنا النوع الحقيقي بدل any
  
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  return null; // معناها يكمل طبيعي
}
