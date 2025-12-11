"use client";

import Link from "next/link";

export default function Landing() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-zinc-900 to-black text-white flex flex-col">
      {/* Nav */}
      <nav className="flex items-center justify-between px-8 py-6">
        <div className="text-2xl font-bold tracking-tight">OS<span className="text-purple-500">Buddy</span></div>
        <div className="flex gap-6 text-lg">
          <Link href="/login" className="hover:text-purple-400 transition">Login</Link>
          <Link href="/signup" className="px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-700 transition">Sign Up</Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center text-center mt-20 px-6">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent drop-shadow-xl">
          Your Open‑Source <br /> Contribution Companion
        </h1>
        <p className="text-xl md:text-2xl text-zinc-300 max-w-2xl leading-relaxed">
          OSBuddy filters GitHub issues intelligently, alerts you only for tasks <span className="text-purple-400 font-semibold">you can solve</span>,
          and keeps you updated without overwhelming your inbox.
        </p>
        <Link
          href="/signup"
          className="mt-10 px-8 py-4 text-xl rounded-2xl bg-purple-600 hover:bg-purple-700 transition shadow-lg shadow-purple-500/20"
        >
          Get Started
        </Link>
      </section>

      {/* Features */}
      <section className="mt-32 px-6 flex flex-col items-center">
        <h2 className="text-4xl font-bold mb-12">Why OSBuddy?</h2>
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl">
          <FeatureCard title="Smart Issue Filtering" desc="AI analyzes every issue and highlights only the ones matching your skills." />
          <FeatureCard title="WhatsApp Alerts" desc="Get instant updates only when relevant issues appear in your tracked repos." />
          <FeatureCard title="Repo Activity Insights" desc="Stay aware of repo activity levels without manually checking every day." />
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-32 py-10 text-center text-zinc-500">
        © {new Date().getFullYear()} OSBuddy. Built for devs, by devs.
      </footer>
    </div>
  );
}

function FeatureCard({ title, desc }) {
  return (
    <div className="p-6 rounded-2xl bg-zinc-800 border border-zinc-700 hover:border-purple-500 transition shadow-lg shadow-black/30">
      <h3 className="text-2xl font-semibold mb-4 text-purple-400">{title}</h3>
      <p className="text-zinc-300 text-lg">{desc}</p>
    </div>
  );
}
