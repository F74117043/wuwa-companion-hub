import type { Character, RotationAction } from "@/types/simulator";

export const rotationActions: RotationAction[] = [
  "Intro Skill",
  "Basic Attack",
  "Resonance Skill",
  "Forte Circuit",
  "Echo Skill",
  "Resonance Liberation",
  "Outro Skill",
  "Dodge Counter"
];

export function RotationStepForm({
  selectedCharacters,
  characterId,
  action,
  timestamp,
  onCharacterChange,
  onActionChange,
  onTimestampChange,
  onAddStep
}: Readonly<{
  selectedCharacters: Character[];
  characterId: string;
  action: RotationAction;
  timestamp: string;
  onCharacterChange: (characterId: string) => void;
  onActionChange: (action: RotationAction) => void;
  onTimestampChange: (timestamp: string) => void;
  onAddStep: () => void;
}>) {
  const canAdd = selectedCharacters.length === 3 && characterId && timestamp !== "";

  return (
    <section className="border border-white/10 bg-white/[0.035] p-5">
      <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-200">
        Manual input
      </p>
      <h2 className="mt-2 text-xl font-black">Add Rotation Step</h2>

      <div className="mt-5 grid gap-4">
        <label className="grid gap-2">
          <span className="text-xs font-bold uppercase tracking-[0.16em] text-white/45">
            Character
          </span>
          <select
            value={characterId}
            onChange={(event) => onCharacterChange(event.target.value)}
            className="border border-white/10 bg-black/35 px-3 py-3 text-sm text-white outline-none transition focus:border-cyan-300"
          >
            {selectedCharacters.length === 0 ? (
              <option value="">Select team first</option>
            ) : null}
            {selectedCharacters.map((character) => (
              <option key={character.id} value={character.id}>
                {character.name}
              </option>
            ))}
          </select>
        </label>

        <label className="grid gap-2">
          <span className="text-xs font-bold uppercase tracking-[0.16em] text-white/45">
            Action
          </span>
          <select
            value={action}
            onChange={(event) => onActionChange(event.target.value as RotationAction)}
            className="border border-white/10 bg-black/35 px-3 py-3 text-sm text-white outline-none transition focus:border-cyan-300"
          >
            {rotationActions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>

        <label className="grid gap-2">
          <span className="text-xs font-bold uppercase tracking-[0.16em] text-white/45">
            Timestamp seconds
          </span>
          <input
            value={timestamp}
            type="number"
            min="0"
            step="0.1"
            placeholder="0.0"
            onChange={(event) => onTimestampChange(event.target.value)}
            className="border border-white/10 bg-black/35 px-3 py-3 text-sm text-white outline-none transition placeholder:text-white/30 focus:border-cyan-300"
          />
        </label>

        <button
          type="button"
          disabled={!canAdd}
          onClick={onAddStep}
          className="border border-cyan-300 bg-cyan-300 px-4 py-3 text-sm font-black uppercase tracking-[0.16em] text-[#05070d] transition hover:bg-white disabled:cursor-not-allowed disabled:border-white/10 disabled:bg-white/10 disabled:text-white/35"
        >
          Add Step
        </button>
      </div>
    </section>
  );
}
