import { styled } from "styled-components";
import AsideTabBox from "./TabBox";
import { pletformValue } from "../../Function/pletformValue";
import AllChartBox from "./AllChartBox";
import ContoureLine from "../ContourLine";
import "./css/asidebar.css";

const AsideBarWrapper = styled.aside`
  width: 260px;
  height: 100%;
  background-color: white;
  min-height: 100vh;
  box-shadow: 1px 0px 0px 0px rgb(237, 242, 249);
  padding-top: 30px;
  font-size: 16px;
  font-weight: 400;
  color: rgb(129, 129, 129);
  position: fixed;
  margin-top: 81px;
`;

const LableWrapper = styled.div`
  padding: 0 30px;
  margin-bottom: 5px;
  color: rgb(0, 0, 0);
  font-size: 14px;
  font-weight: 500;
  height: 25px;
`;

const ContoureLineWrapper = styled.div`
  margin-top: 10px;
  margin-bottom: 30px;
  padding-left: 30px;
  display: flex;
  justify-content: flex-end;
`;

export default function AsideBar(): JSX.Element {
  const pleftformArray = pletformValue();

  return (
    <AsideBarWrapper>
      <div className="All_Chart_Box_Conateinr">
        <LableWrapper>
          <span>All Chart</span>
        </LableWrapper>
        <AllChartBox />
      </div>
      <ContoureLineWrapper>
        <ContoureLine
          color={"rgb(124, 135, 152)"}
          thickness={1}
          opacity={0.1}
        />
      </ContoureLineWrapper>
      <div>
        <LableWrapper>
          <span>CHARTS</span>
        </LableWrapper>
        {pleftformArray.map((el) => {
          return <AsideTabBox key={el.name} pletform={el.name} />;
        })}
      </div>
    </AsideBarWrapper>
  );
}
