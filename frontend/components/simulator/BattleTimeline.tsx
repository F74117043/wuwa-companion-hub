import type { Character, RotationStep } from "@/types/simulator";

export function BattleTimeline({
  steps,
  characters,
  onRemoveStep
}: Readonly<{
  steps: RotationStep[];
  characters: Character[];
  onRemoveStep: (stepId: string) => void;
}>) {
  const characterById = new Map(characters.map((character) => [character.id, character]));

  return (
    <section className="border border-white/10 bg-white/[0.035] p-5">
      <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-200">
        Replay timeline
      </p>
      <h2 className="mt-2 text-xl font-black">Battle Replay</h2>

      <div className="mt-6 space-y-4">
        {steps.length === 0 ? (
          <div className="border border-dashed border-white/15 bg-black/20 p-6 text-sm leading-6 text-white/45">
            Select 3 characters, add rotation steps, and the replay timeline will appear here.
          </div>
        ) : null}

        {steps.map((step) => {
          const character = characterById.get(step.characterId);

          return (
            <div key={step.id} className="grid grid-cols-[80px_1fr] gap-4">
              <div className="text-sm font-black text-cyan-200">
                {step.timestamp.toFixed(1)}s
              </div>
              <div className="border-l border-white/15 pb-5 pl-5">
                <div className="border border-white/10 bg-black/25 p-4">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div>
                      <h3 className="font-black text-white">{step.action}</h3>
                      <p className="mt-1 text-sm text-white/50">
                        {character ? `${character.name} - ${character.element}` : "Unknown character"}
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => onRemoveStep(step.id)}
                      className="border border-white/10 px-3 py-2 text-xs font-bold uppercase tracking-[0.12em] text-white/50 transition hover:border-rose-300/50 hover:text-rose-200"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
