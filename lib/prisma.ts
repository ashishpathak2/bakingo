// lib/prisma.ts
import { PrismaClient } from "@prisma/client";

const globalForPrisma = global as unknown as { prisma?: PrismaClient };

// Use an existing instance if available, otherwise create a new one
export const prisma = globalForPrisma.prisma ?? new PrismaClient();

// Prevent multiple instances in development mode (Next.js Hot Reload)
if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
