"use client";

import { useEffect, useMemo, useState } from "react";
import { BattleTimeline } from "@/components/simulator/BattleTimeline";
import { CharacterSelector } from "@/components/simulator/CharacterSelector";
import { RotationStepForm } from "@/components/simulator/RotationStepForm";
import { RotationSummary } from "@/components/simulator/RotationSummary";
import { characters } from "@/data/characters";
import type { RotationAction, RotationStep } from "@/types/simulator";

export default function SimulatorPage() {
  const [selectedIds, setSelectedIds] = useState<string[]>(["jiyan", "yinlin", "verina"]);
  const [characterId, setCharacterId] = useState("jiyan");
  const [action, setAction] = useState<RotationAction>("Intro Skill");
  const [timestamp, setTimestamp] = useState("0");
  const [steps, setSteps] = useState<RotationStep[]>([
    {
      id: "opening-jiyan",
      characterId: "jiyan",
      action: "Intro Skill",
      timestamp: 0
    },
    {
      id: "yinlin-skill",
      characterId: "yinlin",
      action: "Resonance Skill",
      timestamp: 2.4
    },
    {
      id: "verina-liberation",
      characterId: "verina",
      action: "Resonance Liberation",
      timestamp: 5.8
    }
  ]);

  const selectedCharacters = useMemo(
    () => characters.filter((character) => selectedIds.includes(character.id)),
    [selectedIds]
  );

  const sortedSteps = useMemo(
    () => [...steps].sort((first, second) => first.timestamp - second.timestamp),
    [steps]
  );

  const totalDuration = sortedSteps.at(-1)?.timestamp ?? 0;

  useEffect(() => {
    if (!selectedIds.includes(characterId)) {
      setCharacterId(selectedIds[0] ?? "");
    }
  }, [characterId, selectedIds]);

  const toggleCharacter = (id: string) => {
    setSelectedIds((current) => {
      if (current.includes(id)) {
        return current.filter((characterId) => characterId !== id);
      }

      return current.length >= 3 ? current : [...current, id];
    });
  };

  const addStep = () => {
    const parsedTimestamp = Number(timestamp);

    if (!characterId || Number.isNaN(parsedTimestamp) || parsedTimestamp < 0) {
      return;
    }

    setSteps((current) => [
      ...current,
      {
        id: `${characterId}-${action}-${Date.now()}`,
        characterId,
        action,
        timestamp: parsedTimestamp
      }
    ]);
    setTimestamp((parsedTimestamp + 1.5).toFixed(1));
  };

  const removeStep = (stepId: string) => {
    setSteps((current) => current.filter((step) => step.id !== stepId));
  };

  return (
    <main className="min-h-screen bg-[#05070d] px-6 py-12 text-white sm:px-10 lg:px-16">
      <section className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-cyan-200">
            Combat telemetry
          </p>
          <h1 className="mt-4 text-4xl font-black leading-tight sm:text-6xl">
            Battle Simulator
          </h1>
          <p className="mt-5 text-base leading-8 text-white/65 sm:text-lg">
            Build a three-character team, enter timestamped rotation actions, and review the battle replay timeline.
          </p>
        </div>

        <div className="mt-10 grid gap-6 xl:grid-cols-[0.95fr_1.05fr]">
          <div className="grid gap-6">
            <CharacterSelector
              characters={characters}
              selectedIds={selectedIds}
              onToggle={toggleCharacter}
            />
            <RotationStepForm
              selectedCharacters={selectedCharacters}
              characterId={characterId}
              action={action}
              timestamp={timestamp}
              onCharacterChange={setCharacterId}
              onActionChange={setAction}
              onTimestampChange={setTimestamp}
              onAddStep={addStep}
            />
          </div>

          <div className="grid content-start gap-6">
            <RotationSummary totalDuration={totalDuration} stepCount={steps.length} />
            <BattleTimeline
              steps={sortedSteps}
              characters={characters}
              onRemoveStep={removeStep}
            />
          </div>
        </div>
      </section>
    </main>
  );
}
