"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "@/lib/firebase";

export default function GoogleLogin() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (loading) return;

    setLoading(true);

    try {
      const result = await signInWithPopup(auth, provider);

      console.log(result.user);

      router.push("/mission");
    } catch (err) {
      console.error(err);
      alert("Google Sign-In failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      disabled={loading}
      onClick={handleLogin}
      className="px-6 py-3 rounded-lg bg-blue-600 text-white disabled:opacity-50"
    >
      {loading ? "Signing in..." : "Continue with Google"}
    </button>
  );
}