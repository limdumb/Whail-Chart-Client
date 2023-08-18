interface PletformIconProps {
  pletform: string;
}

export const pletformIcon = (props: PletformIconProps) => {
  switch (props.pletform) {
    case "Melon":
      return "https://xn--o39an51b2re.com/static/images/ico/melon.png?v=2";
    case "Bugs":
      return "https://xn--o39an51b2re.com/static/images/ico/bugs.png?v=2";
    case "Flo":
      return "https://xn--o39an51b2re.com/static/images/ico/flo.png?v=2";
    case "Genie":
      return "https://xn--o39an51b2re.com/static/images/ico/genie.png?v=2";
    case "Vibe":
      return "https://xn--o39an51b2re.com/static/images/ico/vibe.png?v=2";
  }
};