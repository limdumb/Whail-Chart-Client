import { styled } from "styled-components";
import { useState } from "react";
import ChartTitle from "../../Common/ChartTitle";
import Calendar from "../../Common/Calendar";

const MelonLayoutContainer = styled.div`
  margin-left: 260px;
  margin-top: 81px;
  display: flex;
  flex-direction: column;
  padding: 25px;
  width: 100%;
  height: 100%;
  @media screen and (max-width: 390px) {
    width: 390px;
    height: 100%;
    margin: 0px;
    padding: 0px;
    display: flex;
    flex-direction: column;
    margin-top: 81px;
  }
`;

const ChartWrapper = styled.div`
  padding: 0px 15px;
  @media screen and (max-width: 390px) {
    margin-top: 15px;
  }
`;

export default function MelonHot100Chart() {
  const [year, setYear] = useState(new Date().getFullYear());
  const [month, setMonth] = useState(new Date().getMonth());

  return (
    <MelonLayoutContainer>
      <ChartTitle
        chartType="daily"
        platform={"Melon Hot 100"}
        date="2022-11-30"
      />
      <ChartWrapper>
        <Calendar
          year={year}
          month={month}
          setYear={setYear}
          setMonth={setMonth}
        />
      </ChartWrapper>
    </MelonLayoutContainer>
  );
}
