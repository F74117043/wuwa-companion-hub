export type Character = {
  id: string;
  name: string;
  element: "Aero" | "Electro" | "Fusion" | "Glacio" | "Havoc" | "Spectro";
  role: string;
};

export type RotationAction =
  | "Intro Skill"
  | "Basic Attack"
  | "Resonance Skill"
  | "Forte Circuit"
  | "Echo Skill"
  | "Resonance Liberation"
  | "Outro Skill"
  | "Dodge Counter";

export type RotationStep = {
  id: string;
  characterId: string;
  action: RotationAction;
  timestamp: number;
};
