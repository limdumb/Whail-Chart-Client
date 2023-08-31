import { styled } from "styled-components";
import { pletformIcon } from "../../Function/pletformIcon";
import "./css/tabBox.css";
import { NavigateFunction } from "react-router-dom";

interface AsideTabBoxProps {
  pletform: "Melon" | "Genie" | "Flo" | "Bugs" | "Vibe";
  navigate: NavigateFunction;
}

export const AsideTabWrapper = styled.div`
  width: 100%;
  height: 51px;
  padding: 12px 30px;
  display: flex;
  justify-content: flex-start;
  cursor: pointer;
`;

export default function AsideTabBox(props: AsideTabBoxProps) {
  const tabIcon = pletformIcon({ pletform: props.pletform });

  return (
    <AsideTabWrapper
      onClick={() => {
        props.navigate(`/${props.pletform.toLowerCase()}/chart`);
      }}
    >
      <img alt="Pletform Icon" className="Icon_Image" src={tabIcon} />
      <span>{props.pletform}</span>
    </AsideTabWrapper>
  );
}
