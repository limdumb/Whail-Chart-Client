export interface PletformValueType {
  platform: "Melon24" | "Melon" | "Genie" | "Flo" | "Bugs" | "Vibe";
}

export const pletformValue = () => {
  const value: PletformValueType[] = [
    { platform: "Melon24" },
    { platform: "Melon" },
    { platform: "Genie" },
    { platform: "Bugs" },
    { platform: "Flo" },
    { platform: "Vibe" },
  ];

  return value;
};
