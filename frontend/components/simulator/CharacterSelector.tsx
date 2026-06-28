import type { Character } from "@/types/simulator";

const elementStyles: Record<Character["element"], string> = {
  Aero: "border-emerald-300/40 text-emerald-200",
  Electro: "border-violet-300/40 text-violet-200",
  Fusion: "border-rose-300/40 text-rose-200",
  Glacio: "border-sky-300/40 text-sky-200",
  Havoc: "border-fuchsia-300/40 text-fuchsia-200",
  Spectro: "border-amber-200/40 text-amber-100"
};

export function CharacterSelector({
  characters,
  selectedIds,
  onToggle
}: Readonly<{
  characters: Character[];
  selectedIds: string[];
  onToggle: (characterId: string) => void;
}>) {
  return (
    <section className="border border-white/10 bg-white/[0.035] p-5">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-200">
            Team setup
          </p>
          <h2 className="mt-2 text-xl font-black">Select 3 Characters</h2>
        </div>
        <span className="border border-white/10 bg-black/20 px-3 py-1 text-sm font-bold text-white/70">
          {selectedIds.length}/3
        </span>
      </div>

      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        {characters.map((character) => {
          const selected = selectedIds.includes(character.id);
          const disabled = !selected && selectedIds.length >= 3;

          return (
            <button
              key={character.id}
              type="button"
              disabled={disabled}
              onClick={() => onToggle(character.id)}
              className={`border p-4 text-left transition ${
                selected
                  ? "border-cyan-300/60 bg-cyan-300/10 shadow-[0_0_36px_rgba(102,242,255,0.14)]"
                  : "border-white/10 bg-black/20 hover:border-white/30"
              } ${disabled ? "cursor-not-allowed opacity-35" : ""}`}
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="font-black text-white">{character.name}</h3>
                  <p className="mt-1 text-sm text-white/50">{character.role}</p>
                </div>
                <span
                  className={`border px-2 py-1 text-xs font-bold uppercase tracking-[0.14em] ${elementStyles[character.element]}`}
                >
                  {character.element}
                </span>
              </div>
            </button>
          );
        })}
      </div>
    </section>
  );
}
