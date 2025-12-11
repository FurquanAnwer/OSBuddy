"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";


export default function LoginPage() {

  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleLogin(e) {
    e.preventDefault();
    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (!res?.error) {
      router.push("/dashboard");
    } else {
      alert("Invalid credentials");
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-black via-zinc-900 to-black px-4">
      <Card className="w-full max-w-md bg-zinc-900 border-zinc-800 shadow-xl shadow-purple-500/10">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-center text-white">
            Welcome Back
          </CardTitle>
        </CardHeader>

        <CardContent className="space-y-6">
          <form className="space-y-5" onSubmit={handleLogin}>
            <div>
              <label className="block text-zinc-300 mb-1 text-sm">Email</label>
              <Input
                type="email"
                placeholder="you@example.com"
                value={email} 
                onChange={(e)=>setEmail(e.target.value)}
                className="bg-zinc-800 border-zinc-700 text-white"
              />
            </div>

            <div>
              <label className="block text-zinc-300 mb-1 text-sm">Password</label>
              <Input
                type="password"
                placeholder="••••••••"
                value={password} 
                onChange={(e)=>setPassword(e.target.value)}
                className="bg-zinc-800 border-zinc-700 text-white"
              />
            </div>

            <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700 text-lg py-3 rounded-xl">
              Login
            </Button>

            <p className="text-center text-zinc-400 text-sm">
              Don't have an account?{" "}
              <Link href="/signup" className="text-purple-400 hover:underline">
                Sign up
              </Link>
            </p>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}




