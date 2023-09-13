import { styled } from "styled-components";
import CustomButton from "./Header/CustomButton";
import { useState } from "react";
import Calendar from "./Calendar";
import { transformDate } from "../Function/transformDate";

interface CalendarBoxProps {
  selectedDate: Date;
  setSelectedDate: React.Dispatch<React.SetStateAction<Date>>;
  clickedDate: Date;
  setClickedDate: React.Dispatch<React.SetStateAction<Date>>;
}

export const CalendarBox = (props: CalendarBoxProps) => {
  const [activeCalendar, setActiveCalendar] = useState(false);
  const [calendarDate, setCalendarDate] = useState(
    transformDate(props.selectedDate)
  );

  const calendarClickHandler = () => {
    setActiveCalendar(!activeCalendar);
  };

  return (
    <BoxContainer>
      <CustomButton
        fontWeight={600}
        children={`${calendarDate.year}.${calendarDate.month}.${calendarDate.day}`}
        type={"calendar"}
        width={"160px"}
        height={"35px"}
        onClick={calendarClickHandler}
      />
      {activeCalendar ? (
        <CalendarContainer>
          <Calendar
            selectedDate={props.selectedDate}
            setSelectedDate={props.setSelectedDate}
            clickedDate={props.clickedDate}
            setClickedDate={props.setClickedDate}
          />
        </CalendarContainer>
      ) : null}
    </BoxContainer>
  );
};

const BoxContainer = styled.div`
  background-color: white;
  width: 96%;
  height: 88px;
  padding: 25px;
  box-shadow: 2px 2px 5px 1px rgba(233, 236, 239);
  opacity: 1;
  margin-left: 15px;

  display: flex;
  justify-content: center;
  align-items: center;

  & > button:hover {
    background-color: #5f76e8;
    color: white;
  }

  & > button:active {
    background-color: #2e4cdf;
    color: white;
  }

  @media screen and (max-width: 390px) {
    width: 92%;
  }
`;

const CalendarContainer = styled.div`
  position: absolute;
  top: 252px;
`;
