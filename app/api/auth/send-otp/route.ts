import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();

    // Validate email
    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    // Generate OTP and expiration time
    const otp = Math.floor(1000 + Math.random() * 9000).toString(); // Generates a 4-digit OTP
    const expiresAt = new Date(Date.now() + 10 * 60 * 1000); // Expires in 10 minutes

    // Save OTP to the database
    await prisma.otp.create({
      data: { email, otp, expiresAt },
    });

    // Configure Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER, // Use environment variable
        pass: process.env.GMAIL_PASSWORD, // Use environment variable
      },
    });

    // Send OTP via email
    await transporter.sendMail({
      from: process.env.GMAIL_USER, // Use environment variable
      to: email,
      subject: "Your OTP Code",
      text: `Your OTP is ${otp}. It expires in 10 minutes.`,
    });

    return NextResponse.json({ message: "OTP sent" });
  } catch (error) {
    console.error("Error in /api/auth/send-otp:", error);
    return NextResponse.json(
      { error: "Failed to send OTP. Please try again later." },
      { status: 500 }
    );
  }
}