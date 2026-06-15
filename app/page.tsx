"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [odds, setOdds] = useState("");

  const decimalOdds = Number(odds);
  const impliedProbability =
    decimalOdds > 0 ? ((1 / decimalOdds) * 100).toFixed(2) : null;

  const insights = [
    "Netherlands vs Japan: Is Japan Undervalued?",
    "Why 95% of Bettors Lose Long-Term",
    "The Difference Between Odds and Probability",
  ];

  const tools = [
    "Implied Probability Calculator",
    "Expected Value Calculator",
    "Odds Converter",
    "Kelly Calculator",
  ];

  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_top_left,rgba(163,230,53,0.16),transparent_35%)]" />

      <nav className="sticky top-0 z-50 border-b border-white/10 bg-black/80 px-8 py-3 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/images/TransparrentLogo.png"
              alt="Footiaura Logo"
              width={68}
              height={68}
              priority
            />

            <span className="text-2xl font-bold tracking-widest">
              FOOTI<span className="text-lime-400">AURA</span>
            </span>
          </Link>

          <div className="hidden gap-8 text-sm text-white/60 md:flex">
            <Link href="/insights" className="transition hover:text-lime-400">
              Insights
            </Link>

            <Link href="/tools" className="transition hover:text-lime-400">
              Tools
            </Link>

            <Link href="#analytics" className="transition hover:text-lime-400">
              Analytics
            </Link>

            <Link href="#about" className="transition hover:text-lime-400">
              About
            </Link>
          </div>

          <Link
            href="#about"
            className="rounded-full bg-lime-400 px-5 py-2 font-semibold text-black transition hover:bg-lime-300"
          >
            Join Waitlist
          </Link>
        </div>
      </nav>

      <section
        id="analytics"
        className="relative mx-auto grid max-w-7xl gap-16 px-8 py-24 md:grid-cols-2 md:items-center"
      >
        <div>
          <p className="mb-4 text-sm font-semibold tracking-widest text-lime-400">
            FOOTBALL INTELLIGENCE
          </p>

          <h1 className="text-5xl font-black leading-tight md:text-7xl">
            WE ANALYSE.
            <br />
            YOU THINK.
            <br />
            <span className="text-lime-400 drop-shadow-[0_0_20px_rgba(163,230,53,0.6)]">
              THE MARKET
            </span>{" "}
            REACTS.
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-white/70">
            Football Intelligence for modern fans. Learn probability, understand
            markets and think sharper before the game starts.
          </p>

          <div className="mt-8 flex gap-4">
            <Link
              href="/insights"
              className="rounded-full bg-lime-400 px-6 py-3 font-semibold text-black transition hover:bg-lime-300"
            >
              Latest Insights
            </Link>

            <Link
              href="/tools"
              className="rounded-full border border-white/20 px-6 py-3 transition hover:border-lime-400 hover:text-lime-400"
            >
              Explore Tools
            </Link>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-2xl backdrop-blur">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <p className="text-sm text-white/50">Free Tool</p>
              <h2 className="text-2xl font-bold">Implied Probability</h2>
            </div>

            <span className="rounded-full bg-lime-400/10 px-3 py-1 text-sm text-lime-400">
              Live
            </span>
          </div>

          <p className="mb-6 text-sm text-white/60">
            Enter decimal odds to see the probability the market is implying.
          </p>

          <input
            type="number"
            step="0.01"
            placeholder="Example: 3.75"
            value={odds}
            onChange={(e) => setOdds(e.target.value)}
            className="w-full rounded-2xl border border-white/10 bg-black/40 px-5 py-4 text-lg outline-none transition focus:border-lime-400"
          />

          <div className="mt-4 text-sm text-white/50">
            Market Odds: {odds || "--"}
          </div>

          <div className="mt-6 rounded-2xl border border-lime-400/20 bg-lime-400/5 p-5">
            <p className="text-sm text-white/50">Implied Probability</p>

            <p className="mt-2 text-5xl font-black text-lime-400 drop-shadow-[0_0_20px_rgba(163,230,53,0.5)]">
              {impliedProbability ? `${impliedProbability}%` : "--"}
            </p>
          </div>

          <p className="mt-5 text-xs text-white/40">
            Formula: 1 ÷ decimal odds × 100
          </p>
        </div>
      </section>

      <section className="relative mx-auto max-w-7xl px-8 py-16">
        <h3 className="mb-8 text-3xl font-bold">Latest Insights</h3>

        <div className="grid gap-6 md:grid-cols-3">
          {insights.map((item) => (
            <div
              key={item}
              className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 transition hover:border-lime-400/50 hover:bg-white/[0.07]"
            >
              <p className="mb-3 text-sm text-lime-400">
                Football Intelligence
              </p>

              <h4 className="mb-4 text-xl font-bold">{item}</h4>

              <p className="text-white/60">
                Sharp analysis built around probability and football markets.
              </p>

              <p className="mt-6 text-lime-400">Read more →</p>
            </div>
          ))}
        </div>
      </section>

      <section className="relative mx-auto max-w-7xl px-8 py-16">
        <h3 className="mb-8 text-3xl font-bold">Free Intelligence Tools</h3>

        <div className="grid gap-6 md:grid-cols-4">
          {tools.map((tool) => (
            <div
              key={tool}
              className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 transition hover:border-lime-400/50"
            >
              <div className="mb-5 h-12 w-12 rounded-2xl bg-lime-400/15" />
              <h4 className="mb-3 font-bold">{tool}</h4>

              <p className="text-sm text-white/60">
                Understand the numbers behind football markets.
              </p>

              <p
                className={
                  tool === "Implied Probability Calculator"
                    ? "mt-4 text-sm text-lime-400"
                    : "mt-4 text-sm text-white/40"
                }
              >
                {tool === "Implied Probability Calculator"
                  ? "Live Now"
                  : "Coming Soon"}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section
        id="about"
        className="relative mx-auto max-w-4xl px-8 py-24 text-center"
      >
        <h3 className="text-4xl font-bold">Stay Ahead of the Game</h3>

        <p className="mt-4 text-white/60">
          Join the Footiaura waitlist and get football intelligence before the
          market reacts.
        </p>

        <div className="mt-8 flex flex-col gap-4 md:flex-row">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 rounded-full border border-white/10 bg-white/5 px-6 py-4 outline-none transition focus:border-lime-400"
          />

          <button className="rounded-full bg-lime-400 px-8 py-4 font-semibold text-black transition hover:bg-lime-300">
            Join Waitlist
          </button>
        </div>
      </section>

      <footer className="relative border-t border-white/10 py-8 text-center text-white/50">
        FOOTIAURA — Football Intelligence
      </footer>
    </main>
  );
}