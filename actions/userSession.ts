import { auth } from "@/auth";

export async function userSession() {
    try {
        const session = await auth();
        return session?.user || null;
    } catch (error) {
        console.error("Error fetching user session:", error);
        return null;
    }
}
