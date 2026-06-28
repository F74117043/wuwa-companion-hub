export function RotationSummary({
  totalDuration,
  stepCount
}: Readonly<{
  totalDuration: number;
  stepCount: number;
}>) {
  return (
    <section className="grid gap-4 sm:grid-cols-2">
      <div className="border border-cyan-300/25 bg-cyan-300/10 p-5">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-cyan-200">
          Total duration
        </p>
        <div className="mt-3 text-4xl font-black">{totalDuration.toFixed(1)}s</div>
      </div>
      <div className="border border-white/10 bg-white/[0.035] p-5">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/45">
          Rotation steps
        </p>
        <div className="mt-3 text-4xl font-black">{stepCount}</div>
      </div>
    </section>
  );
}
