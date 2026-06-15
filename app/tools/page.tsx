import Link from "next/link";

export default function ToolsPage() {
  const tools = [
    {
      name: "Implied Probability Calculator",
      status: "Live",
      description:
        "Convert betting odds into implied probability instantly.",
      href: "/tools/implied-probability",
    },
    {
      name: "Odds Converter",
      status: "Coming Soon",
      description:
        "Convert between decimal, fractional and American odds.",
      href: "#",
    },
    {
      name: "Expected Value Calculator",
      status: "Coming Soon",
      description:
        "Calculate whether a betting opportunity offers value.",
      href: "#",
    },
    {
      name: "Kelly Calculator",
      status: "Coming Soon",
      description:
        "Determine optimal bankroll allocation based on edge.",
      href: "#",
    },
  ];

  return (
    <main className="min-h-screen bg-black px-8 py-16 text-white">
      <section className="mx-auto max-w-7xl">
        <p className="mb-4 text-sm font-semibold tracking-widest text-lime-400">
          FOOTIAURA TOOLS
        </p>

        <h1 className="text-5xl font-black">
          Football Intelligence Toolkit
        </h1>

        <p className="mt-4 max-w-2xl text-white/60">
          Free tools designed to help football fans understand probability,
          markets and decision-making.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {tools.map((tool) => (
            <Link
              href={tool.href}
              key={tool.name}
              className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 transition hover:border-lime-400/50 hover:bg-white/[0.06]"
            >
              <div className="mb-4 flex items-center justify-between">
                <h2 className="text-xl font-bold">{tool.name}</h2>

                <span
                  className={
                    tool.status === "Live"
                      ? "rounded-full bg-lime-400/10 px-3 py-1 text-sm text-lime-400"
                      : "rounded-full bg-white/10 px-3 py-1 text-sm text-white/50"
                  }
                >
                  {tool.status}
                </span>
              </div>

              <p className="text-white/60">{tool.description}</p>

              <p className="mt-6 text-lime-400">
                {tool.status === "Live"
                  ? "Open Tool →"
                  : "Coming Soon"}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}