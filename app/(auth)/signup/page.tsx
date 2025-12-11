"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function SignupPage() {
  const router = useRouter();
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  async function handleSignup(e) {
    e.preventDefault();

    const res = await fetch("/api/signup", {
      method: "POST",
      body: JSON.stringify(form),
    });

    if (res.ok) {
      router.push("/login");
    } else {
      alert("Signup failed");
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-black via-zinc-900 to-black px-4">
      <Card className="w-full max-w-md bg-zinc-900 border-zinc-800 shadow-xl shadow-purple-500/10">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-center text-white">
            Create Account
          </CardTitle>
        </CardHeader>

        <CardContent className="space-y-6">
          <form className="space-y-5" onSubmit={handleSignup}>
            <div>
              <label className="block text-zinc-300 mb-1 text-sm">Name</label>
              <Input
                type="text"
                placeholder="John Doe"
                className="bg-zinc-800 border-zinc-700 text-white"
                onChange={(e)=>setForm({...form, name: e.target.value})}
              />
            </div>

            <div>
              <label className="block text-zinc-300 mb-1 text-sm">Email</label>
              <Input
                type="email"
                placeholder="you@example.com"
                className="bg-zinc-800 border-zinc-700 text-white"
                onChange={(e)=>setForm({...form, email: e.target.value})}
              />
            </div>

            <div>
              <label className="block text-zinc-300 mb-1 text-sm">Password</label>
              <Input
                type="password"
                placeholder="••••••••"
                className="bg-zinc-800 border-zinc-700 text-white"
                type="password" 
                onChange={(e)=>setForm({...form, password: e.target.value})}
              />
            </div>

            <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700 text-lg py-3 rounded-xl">
              Sign Up
            </Button>

            <p className="text-center text-zinc-400 text-sm">
              Already have an account?{" "}
              <Link href="/login" className="text-purple-400 hover:underline">
                Login
              </Link>
            </p>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}


