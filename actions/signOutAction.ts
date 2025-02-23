"use server";
import { signOut} from "@/auth";



export async function userLogout() {
  await signOut();
}

