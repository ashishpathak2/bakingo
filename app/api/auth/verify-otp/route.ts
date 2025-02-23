import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: NextRequest) {
  const { email, otp } = await req.json();
  if (!email || !otp)
    return NextResponse.json(
      { error: "Email and OTP are required" },
      { status: 400 }
    );

  const otpRecord = await prisma.otp.findFirst({
    where: { email, otp, expiresAt: { gt: new Date() } }, // Check if OTP is valid
  });

  if (!otpRecord)
    return NextResponse.json(
      { error: "Invalid or expired OTP" },
      { status: 400 }
    );

  // Delete OTP after use
  await prisma.otp.delete({ where: { id: otpRecord.id } });

  // Find or create user in DB
  let user = await prisma.user.findUnique({ where: { email } });
  if (!user) {
    user = await prisma.user.create({ data: { email, name: "User" } });
  }

  return NextResponse.json({ message: "OTP Verified", user });
}
