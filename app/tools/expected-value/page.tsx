"use client";

import { useState } from "react";
import Link from "next/link";

export default function ExpectedValuePage() {
  const [odds, setOdds] = useState("");
  const [probability, setProbability] = useState("");

  const decimalOdds = Number(odds);
  const userProbability = Number(probability) / 100;

  const impliedProbability =
    decimalOdds > 0 ? ((1 / decimalOdds) * 100).toFixed(2) : null;

  const expectedValue =
    decimalOdds > 0 && userProbability > 0
      ? ((userProbability * decimalOdds - 1) * 100).toFixed(2)
      : null;

  const isPositiveEV = expectedValue !== null && Number(expectedValue) > 0;

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
          Expected Value Calculator
        </h1>

        <p className="mt-4 max-w-2xl text-white/60">
          Calculate whether your estimated probability creates positive or
          negative expected value against the market odds.
        </p>

        <div className="mt-10 rounded-3xl border border-white/10 bg-white/[0.04] p-6">
          <div className="grid gap-4 md:grid-cols-2">
            <input
              type="number"
              step="0.01"
              placeholder="Decimal odds e.g. 2.50"
              value={odds}
              onChange={(e) => setOdds(e.target.value)}
              className="w-full rounded-2xl border border-white/10 bg-black/40 px-5 py-4 text-lg outline-none transition focus:border-lime-400"
            />

            <input
              type="number"
              step="0.1"
              placeholder="Your probability % e.g. 45"
              value={probability}
              onChange={(e) => setProbability(e.target.value)}
              className="w-full rounded-2xl border border-white/10 bg-black/40 px-5 py-4 text-lg outline-none transition focus:border-lime-400"
            />
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-black/40 p-5">
              <p className="text-sm text-white/50">Market Implied</p>
              <p className="mt-2 text-3xl font-black text-white">
                {impliedProbability ? `${impliedProbability}%` : "--"}
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/40 p-5">
              <p className="text-sm text-white/50">Your Probability</p>
              <p className="mt-2 text-3xl font-black text-white">
                {probability ? `${probability}%` : "--"}
              </p>
            </div>

            <div
              className={
                isPositiveEV
                  ? "rounded-2xl border border-lime-400/20 bg-lime-400/5 p-5"
                  : "rounded-2xl border border-white/10 bg-black/40 p-5"
              }
            >
              <p className="text-sm text-white/50">Expected Value</p>
              <p
                className={
                  isPositiveEV
                    ? "mt-2 text-3xl font-black text-lime-400"
                    : "mt-2 text-3xl font-black text-white"
                }
              >
                {expectedValue ? `${expectedValue}%` : "--"}
              </p>
            </div>
          </div>

          <div className="mt-6 rounded-2xl border border-white/10 bg-black/40 p-5">
            <p className="text-sm text-white/50">Signal</p>
            <p
              className={
                expectedValue === null
                  ? "mt-2 text-xl font-bold text-white/50"
                  : isPositiveEV
                  ? "mt-2 text-xl font-bold text-lime-400"
                  : "mt-2 text-xl font-bold text-red-400"
              }
            >
              {expectedValue === null
                ? "Enter odds and probability"
                : isPositiveEV
                ? "Positive Expected Value"
                : "Negative Expected Value"}
            </p>
          </div>

          <p className="mt-5 text-xs text-white/40">
            Formula: EV % = (your probability × decimal odds - 1) × 100
          </p>
        </div>
      </section>
    </main>
  );
}