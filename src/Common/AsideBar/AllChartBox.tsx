import { styled } from "styled-components";
import { AsideTabWrapper } from "./TabBox";
import { BsFillGridFill } from "react-icons/bs";
const IconWrapper = styled.div`
  margin-right: 8px;
`;
export default function AllChartBox() {
  return (
    <AsideTabWrapper>
      <IconWrapper>
        <BsFillGridFill color="hsl(218deg 18.75% 68.63%)" size={20} />
      </IconWrapper>
      <span>차트 모아보기</span>
    </AsideTabWrapper>
  );
}
