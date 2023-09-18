import { styled } from "styled-components";
import { AsideTabWrapper } from "./TabBox";
import { BsFillGridFill } from "react-icons/bs";
import { NavigateFunction } from "react-router-dom";
const IconWrapper = styled.div`
  margin-right: 8px;
`;

interface Props {
  navigate: NavigateFunction;
  toggleAsideBar: () => void;
}

export default function AllChartBox(props: Props) {
  return (
    <AsideTabWrapper
      onClick={() => {
        props.navigate("/");
        props.toggleAsideBar();
      }}
    >
      <IconWrapper>
        <BsFillGridFill color="hsl(218deg 18.75% 68.63%)" size={20} />
      </IconWrapper>
      <span>차트 모아보기</span>
    </AsideTabWrapper>
  );
}
