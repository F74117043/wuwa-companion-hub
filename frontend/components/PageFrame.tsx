export function PageFrame({
  eyebrow,
  title,
  description
}: Readonly<{
  eyebrow: string;
  title: string;
  description: string;
}>) {
  return (
    <main className="min-h-screen bg-[#05070d] px-6 py-16 text-white sm:px-10 lg:px-16">
      <section className="mx-auto max-w-7xl">
        <p className="text-xs font-bold uppercase tracking-[0.22em] text-cyan-200">
          {eyebrow}
        </p>
        <h1 className="mt-4 text-4xl font-black leading-tight sm:text-6xl">
          {title}
        </h1>
        <p className="mt-5 max-w-3xl text-base leading-8 text-white/65 sm:text-lg">
          {description}
        </p>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {["Interface Zone", "Data Panel", "Future Module"].map((item) => (
            <div key={item} className="border border-white/10 bg-white/[0.035] p-5">
              <div className="h-2 w-16 bg-cyan-300/60" />
              <h2 className="mt-5 text-lg font-black">{item}</h2>
              <p className="mt-3 text-sm leading-6 text-white/50">
                Placeholder layout ready for production feature work.
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
