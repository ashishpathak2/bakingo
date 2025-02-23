// actions/signInAction.ts
"use server";
import { signIn ,auth} from "@/auth";



export async function signInWithGoogle() {
  await signIn("google");
}

