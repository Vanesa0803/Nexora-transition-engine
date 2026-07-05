"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AuthPage() {
  const router = useRouter();

  const [isLogin, setIsLogin] = useState(true);

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    localStorage.setItem(
      "currentUser",
      JSON.stringify({
        username: username || "Explorer",
        email,
      })
    );

    router.push("/mission");
  };

  return (
    <main className="min-h-screen bg-black flex items-center justify-center px-6">

      <div className="w-full max-w-md rounded-3xl border border-zinc-800 bg-zinc-900 p-10 shadow-2xl">

        <h1 className="text-4xl font-bold text-white">
          {isLogin ? "Welcome Back 👋" : "Create Account"}
        </h1>

        <p className="mt-3 text-zinc-400">
          {isLogin
            ? "Continue your next life transition."
            : "Start your journey with NEXORA."}
        </p>

        <div className="mt-8 space-y-5">

          {!isLogin && (
            <input
              placeholder="Your Name"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full rounded-xl bg-zinc-800 p-4 text-white outline-none"
            />
          )}

          <input
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-xl bg-zinc-800 p-4 text-white outline-none"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded-xl bg-zinc-800 p-4 text-white outline-none"
          />

          <button
            onClick={handleSubmit}
            className="w-full rounded-xl bg-blue-600 p-4 font-semibold hover:bg-blue-700 transition"
          >
            {isLogin ? "Sign In" : "Create Account"}
          </button>

        </div>

        <button
          onClick={() => setIsLogin(!isLogin)}
          className="mt-8 text-sm text-blue-400 hover:text-blue-300"
        >
          {isLogin
            ? "New here? Create an account"
            : "Already have an account? Sign In"}
        </button>

      </div>

    </main>
  );
}