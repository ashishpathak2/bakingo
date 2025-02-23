// components/GoogleAuthSignin.jsx or .tsx
import { signInWithGoogle } from "@/actions/signInAction";
import { GoogleIcon } from '@/components/Icons';

export default function SignIn() {
  return (
    <form action={signInWithGoogle}>
      <button type="submit" className="flex items-center justify-center gap-2 text-black hover:bg-gray-700/25 bg-white font-medium px-4 py-2 rounded-lg shadow-md text-xs xs:text-sm">
        <GoogleIcon className="w-4 h-4 xs:w-5 xs:h-5" />
        Google
      </button>
    </form>
  );
}
