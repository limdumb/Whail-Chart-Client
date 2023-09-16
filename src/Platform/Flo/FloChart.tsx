import { useState } from "react";
import { styled } from "styled-components";
import ChartTitle from "../../Common/ChartTitle";
import { CalendarBox } from "../../Common/CalendarBox";
import { transformDate } from "../../Function/transformDate";
import { useQuery } from "react-query";

const FloLayoutContainer = styled.div`
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

export default function FloChart() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [clickDate, setClickDate] = useState(selectedDate);
  const transformDateValue = transformDate(new Date());
  const [submitDate, setSubmitDate] = useState(
    Number(
      `${transformDateValue.year}${transformDateValue.month}${transformDateValue.day}`
    )
  );

  const query = useQuery(["floDailyChart", submitDate], () => {});

  const changeSubmitDate = (date: Date) => {
    const resultValue = transformDate(date);
    const result = Number(
      `${resultValue.year}${resultValue.month}${resultValue.day}`
    );
    setSubmitDate(result);
  };

  return (
    <FloLayoutContainer>
      <ChartTitle chartType="daily" platform={"Flo"} date="2022-11-30" />
      <CalendarBox
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
        clickedDate={clickDate}
        setClickedDate={setClickDate}
        submitFunc={changeSubmitDate}
      />
      <ChartWrapper></ChartWrapper>
    </FloLayoutContainer>
  );
}
