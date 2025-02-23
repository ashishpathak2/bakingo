import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { prisma } from "@/lib/prisma";

// No need to explicitly type authOptions in v4
export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile }: any) {
      if (!profile?.email) return false; // ❌ Reject if no email

      let existingUser = await prisma.user.findUnique({
        where: { email: profile.email },
      });

      if (!existingUser) {
        existingUser = await prisma.user.create({
          data: {
            email: profile.email,
            name: profile.name || "User",
            image: (profile as any)?.picture || null,
          },
        });
      }
      return true; // ✅ Allow sign-in
    },
  },
};

export const { handlers, signIn, signOut, auth } = NextAuth(authOptions);