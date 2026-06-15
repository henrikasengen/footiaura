"use client";

import { useState } from "react";
import Link from "next/link";

export default function ImpliedProbabilityPage() {
  const [odds, setOdds] = useState("");

  const decimalOdds = Number(odds);
  const impliedProbability =
    decimalOdds > 0 ? ((1 / decimalOdds) * 100).toFixed(2) : null;

  return (
    <main className="min-h-screen bg-black px-8 py-16 text-white">
      <section className="mx-auto max-w-4xl">
        <Link href="/tools" className="text-sm text-lime-400">
          ← Back to Tools
        </Link>

        <p className="mt-10 text-sm font-semibold tracking-widest text-lime-400">
          FOOTIAURA TOOL
        </p>

        <h1 className="mt-4 text-5xl font-black">
          Implied Probability Calculator
        </h1>

        <p className="mt-4 max-w-2xl text-white/60">
          Convert decimal odds into the probability the market is implying.
        </p>

        <div className="mt-10 rounded-3xl border border-white/10 bg-white/[0.04] p-6">
          <input
            type="number"
            step="0.01"
            placeholder="Example: 3.75"
            value={odds}
            onChange={(e) => setOdds(e.target.value)}
            className="w-full rounded-2xl border border-white/10 bg-black/40 px-5 py-4 text-lg outline-none transition focus:border-lime-400"
          />

          <div className="mt-6 rounded-2xl border border-lime-400/20 bg-lime-400/5 p-6">
            <p className="text-sm text-white/50">Implied Probability</p>

            <p className="mt-2 text-6xl font-black text-lime-400">
              {impliedProbability ? `${impliedProbability}%` : "--"}
            </p>
          </div>

          <p className="mt-5 text-xs text-white/40">
            Formula: 1 ÷ decimal odds × 100
          </p>
        </div>
      </section>
    </main>
  );
}