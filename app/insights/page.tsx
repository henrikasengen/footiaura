export default function InsightPage() {
  const articles = [
    {
      title: "Netherlands vs Japan: Is Japan Undervalued?",
      category: "Match Analysis",
      date: "14 June 2026",
      description:
        "A football intelligence look at market perception, probability and why Japan may be more dangerous than the odds suggest.",
    },
    {
      title: "Why 95% of Bettors Lose Long-Term",
      category: "Betting Psychology",
      date: "14 June 2026",
      description:
        "Most bettors do not lose because they lack football knowledge. They lose because they misunderstand probability.",
    },
    {
      title: "The Difference Between Odds and Probability",
      category: "Education",
      date: "14 June 2026",
      description:
        "Understanding odds is not about guessing winners. It is about understanding what the market is implying.",
    },
  ];

  return (
    <main className="min-h-screen bg-black px-8 py-16 text-white">
      <section className="mx-auto max-w-7xl">
        <p className="mb-4 text-sm font-semibold tracking-widest text-lime-400">
          FOOTIAURA INSIGHTS
        </p>

        <h1 className="text-5xl font-black">Football Intelligence</h1>

        <p className="mt-4 max-w-2xl text-white/60">
          Match analysis, betting psychology and probability education for
          modern football fans.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {articles.map((article) => (
            <article
              key={article.title}
              className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 transition hover:border-lime-400/50"
            >
              <p className="text-sm text-lime-400">{article.category}</p>

              <h2 className="mt-4 text-2xl font-bold">{article.title}</h2>

              <p className="mt-2 text-sm text-white/40">{article.date}</p>

              <p className="mt-5 text-white/60">{article.description}</p>

              <p className="mt-6 text-lime-400">Read more →</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}