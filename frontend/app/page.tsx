const cards = [
  {
    title: "Characters",
    href: "/characters",
    description: "Explore resonators, roles, elements, and team foundations."
  },
  {
    title: "Simulator",
    href: "/simulator",
    description: "Prepare battle replay tools, rotations, and encounter timelines."
  },
  {
    title: "Optimizer",
    href: "/optimizer",
    description: "Plan the future AI build optimizer for weapons, echoes, and stats."
  },
  {
    title: "Lore",
    href: "/lore",
    description: "Visualize factions, regions, story threads, and character arcs."
  },
  {
    title: "About",
    href: "/about",
    description: "Learn the vision behind this Wuthering Waves companion hub."
  }
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#05070d] text-white">
      <section className="relative overflow-hidden px-6 py-20 sm:px-10 lg:px-16">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(102,242,255,0.18),transparent_30%),radial-gradient(circle_at_85%_10%,rgba(255,79,216,0.12),transparent_28%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:58px_58px] opacity-25" />

        <div className="relative mx-auto grid min-h-[calc(100vh-10rem)] max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="mb-5 inline-flex border border-cyan-300/30 bg-cyan-300/10 px-3 py-2 text-xs font-bold uppercase tracking-[0.22em] text-cyan-200">
              Resonance command center
            </p>
            <h1 className="max-w-4xl text-5xl font-black leading-none text-white sm:text-7xl lg:text-8xl">
              Wuwa Companion Hub
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">
              AI-powered tools for Wuthering Waves players
            </p>
          </div>

          <div className="grid gap-3">
            {cards.map((card, index) => (
              <a
                key={card.href}
                href={card.href}
                className="group border border-white/10 bg-white/[0.04] p-5 backdrop-blur transition hover:border-cyan-300/60 hover:bg-cyan-300/10"
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="border border-cyan-300/35 bg-cyan-300/10 px-2.5 py-1 text-xs font-black uppercase tracking-[0.16em] text-cyan-200">
                    0{index + 1}
                  </span>
                  <span className="h-px flex-1 bg-white/10 transition group-hover:bg-cyan-300/40" />
                </div>
                <h2 className="mt-5 text-xl font-black text-white">{card.title}</h2>
                <p className="mt-3 text-sm leading-6 text-white/55">{card.description}</p>
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
