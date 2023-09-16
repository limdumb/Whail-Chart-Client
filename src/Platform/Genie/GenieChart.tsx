import { useState } from "react";
import { styled } from "styled-components";
import ChartTitle from "../../Common/ChartTitle";
import { CalendarBox } from "../../Common/CalendarBox";
import { transformDate } from "../../Function/transformDate";
import { useQuery } from "react-query";

const GenieLayoutContainer = styled.div`
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
/*
  1. 내부의 상태값이 많지않고 최대한 심플한 구조를 만들어라
  2. clickDate를 추적하게 하되, 확인이 눌렸을때 데이터를 호출 할 수 있는 로직을 만들것
  3. 처음 인입 했을때 데이터 호출 후에는 submit 데이터로 바꾸기
  4. 컴포넌트의 역할
*/

export default function GenieChart() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [clickDate, setClickDate] = useState(selectedDate);
  const [submitDate, setSubmitDate] = useState(clickDate);

  const query = useQuery(["genieDaily", transformDate(submitDate)], () => {});

  const changeSubmitDate = () => {
    setSubmitDate(clickDate);
  };

  return (
    <GenieLayoutContainer>
      <ChartTitle chartType="daily" platform={"Genie"} date="2022-11-30" />
      <CalendarBox
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
        clickedDate={clickDate}
        setClickedDate={setClickDate}
        submitFunc={changeSubmitDate}
      />
      <ChartWrapper></ChartWrapper>
    </GenieLayoutContainer>
  );
}
