import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  const { email } = await req.json();
  if (!email)
    return NextResponse.json({ error: "Email is required" }, { status: 400 });

  const otp = Math.floor(1000 + Math.random() * 9000).toString(); // Generates a 4-digit OTP
  const expiresAt = new Date(Date.now() + 10 * 60 * 1000); // Expires in 10 minutes
                                                                                                                                                                                                                                
  await prisma.otp.create({ data: { email, otp, expiresAt } });

  // Send OTP via email
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "pathak1420@gmail.com",
      pass: "tetauhjxxwexwpih",
    },
  });

  await transporter.sendMail({
    from: "pathak1420@gmail.com",
    to: email,
    subject: "Your OTP Code",
    text: `Your OTP is ${otp}. It expires in 10 minutes.`,
  });

  return NextResponse.json({ message: "OTP sent" });
}
