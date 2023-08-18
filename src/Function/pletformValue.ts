interface PletformValueType {
  name: "Melon" | "Genie" | "Flo" | "Bugs" | "Vibe";
}

export const pleftformValue = () => {
  const value: PletformValueType[] = [
    { name: "Melon" },
    { name: "Genie" },
    { name: "Bugs" },
    { name: "Flo" },
    { name: "Vibe" },
  ];

  return value;
};
