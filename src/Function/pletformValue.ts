export interface PletformValueType {
  platform: "Melon100" | "Melon" | "Genie" | "Flo" | "Bugs" | "Vibe";
}

export const pletformValue = () => {
  const value: PletformValueType[] = [
    { platform: "Melon100" },
    { platform: "Melon" },
    { platform: "Genie" },
    { platform: "Bugs" },
    { platform: "Flo" },
    { platform: "Vibe" },
  ];

  return value;
};
