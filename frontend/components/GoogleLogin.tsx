"use client";

import { useRouter } from "next/navigation";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "@/lib/firebase";

export default function GoogleLogin() {
  const router = useRouter();
  const handleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);

      console.log("User:", result.user);

      router.push("/dashboard");
    } catch (error) {
      console.error(error);
      alert("Login failed");
    }
  };

  return (
    <button
      onClick={handleLogin}
      className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
    >
      Continue with Google
    </button>
  );
}