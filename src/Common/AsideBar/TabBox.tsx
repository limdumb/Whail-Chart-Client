import { styled } from "styled-components";
import { pletformIcon } from "../../Function/pletformIcon";
import "./css/tabBox.css";
import { NavigateFunction } from "react-router-dom";
import { PletformValueType } from "../../Function/pletformValue";

interface AsideTabBoxProps extends PletformValueType {
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
  const tabIcon = pletformIcon({ platform: props.platform });
  const platformValue =
    props.platform !== "Melon24" ? props.platform : "Melon 24Hits";
  return (
    <AsideTabWrapper
      onClick={() => {
        props.navigate(`/${props.platform.toLowerCase()}/chart`);
      }}
    >
      <img alt="Platform Icon" className="Icon_Image" src={tabIcon} />
      <span>{platformValue}</span>
    </AsideTabWrapper>
  );
}