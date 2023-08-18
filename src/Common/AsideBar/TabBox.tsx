import { pletformIcon } from "../../Function/pletformIcon";
import "./tabBox.css";

interface AsideTabBoxProps {
  pletform: "Melon" | "Genie" | "Flo" | "Bugs" | "Vibe";
}

export default function AsideTabBox(props: AsideTabBoxProps) {
  const tabIcon = pletformIcon({ pletform: props.pletform });

  return (
    <div className="Box_Wrapper">
      <img alt="Pletform Icon" className="Icon_Image" src={tabIcon} />
      <span className="Pletform_Name">{props.pletform}</span>
    </div>
  );
}
