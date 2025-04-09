import { withAuthProtection } from "@/lib/middleware/auth";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const protection = await withAuthProtection();
  if (protection) return protection; // لو مفيش جلسة يرجعه Error

  const body = await request.json();

  // 🛠️ هنا تحط الكود اللي هيعالج الداتا اللي جاية من البودي
  console.log("Body:", body);

  return NextResponse.json({ message: "Post created successfully" });
}
