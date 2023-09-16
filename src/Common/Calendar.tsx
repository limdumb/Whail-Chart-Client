import { CustomSpan } from "./CustomSpan";
import { styled } from "styled-components";
import CustomButton from "./Header/CustomButton";
import { calendarDate } from "../Function/calendarDate";
import "./css/calendar.css";
import { useState } from "react";

interface CalendarProps {
  selectedDate: Date;
  setSelectedDate: React.Dispatch<React.SetStateAction<Date>>;
  clickedDate: Date;
  setClickedDate: React.Dispatch<React.SetStateAction<Date>>;
  submitFunc: Function;
}

const Calendar = (props: CalendarProps) => {
  const calendarDateArray = calendarDate(props.selectedDate);
  const [nowDate, setNowDate] = useState(props.selectedDate);

  const changeYear = (year: number) => {
    const date = new Date(props.selectedDate.getTime());
    date.setFullYear(date.getFullYear() + year);
    props.setSelectedDate(date);
    setNowDate(date);
  };

  const changeMonth = (month: number) => {
    const date = new Date(props.selectedDate.getTime());
    date.setMonth(date.getMonth() + month);
    props.setSelectedDate(date);
    setNowDate(date);
  };

  const dayClickedHandler = (date: Date) => {
    props.setClickedDate(date);
  };

  const weekArr = ["일", "월", "화", "수", "목", "금", "토"];

  return (
    <div className="Calendar_Wrapper">
      <div className="Calendar_Header">
        <button
          className="Previous_Button"
          onClick={() => {
            changeYear(-1);
          }}
        >
          {"<<"}
        </button>
        <button
          className="Previous_Button"
          onClick={() => {
            changeMonth(-1);
          }}
        >
          {"<"}
        </button>
        <CustomSpan
          children={`${props.selectedDate.getFullYear()}년 ${
            props.selectedDate.getMonth() + 1
          }월`}
          fontSize={16}
          fontWeight={700}
        />
        <button
          className="Previous_Button"
          onClick={() => {
            changeMonth(1);
          }}
        >
          {">"}
        </button>
        <button
          className="Previous_Button"
          onClick={() => {
            changeYear(1);
          }}
        >
          {">>"}
        </button>
      </div>
      <div className="Week_Wrapper">
        {weekArr.map((el) => {
          return (
            <WeekWrapper day={el} key={el}>
              <span>{el}</span>
            </WeekWrapper>
          );
        })}
      </div>
      <CalenderTable>
        {calendarDateArray.map((day, i) => {
          return (
            <RenderCalendarDays
              key={i}
              clickedDate={props.clickedDate}
              nowDate={nowDate}
              dayClickedHandler={dayClickedHandler}
              selectedDate={props.selectedDate}
              day={day}
            />
          );
        })}
        <div
          className="Submit_Button_Wrapper"
          onClick={() => {
            props.submitFunc(props.clickedDate);
          }}
        >
          <CustomButton
            children={"확인"}
            type={"button"}
            width={"290px"}
            height={""}
            backgroundcolor={"#5f76e8"}
            color={"white"}
            fontWeight={600}
            borderradius={"5px"}
          />
        </div>
      </CalenderTable>
    </div>
  );
};

interface RenderCalendarDaysProps {
  selectedDate: Date;
  dayClickedHandler: (date: Date) => void;
  day: Date;
  nowDate: Date;
  clickedDate: Date;
}

const RenderCalendarDays = ({
  dayClickedHandler,
  day,
  nowDate,
  clickedDate,
}: RenderCalendarDaysProps) => {
  const sameMonth = nowDate.getMonth() === day.getMonth();
  const sameDay =
    clickedDate.getFullYear() === day.getFullYear() &&
    clickedDate.getMonth() === day.getMonth() &&
    clickedDate.getDate() === day.getDate();

  return (
    <DayWrapper>
      <DayTable
        samemonth={sameMonth}
        sameday={sameDay}
        date={day.getDate()}
        onClick={() => {
          dayClickedHandler(day);
        }}
      >
        {day.getDate()}
      </DayTable>
    </DayWrapper>
  );
};

export default Calendar;

interface DayTableProps {
  samemonth: boolean;
  sameday: boolean;
  date: number;
}

const DayTable = styled.div<DayTableProps>`
  color: ${(props) => (props.samemonth ? "black" : "gray")};
  font-weight: ${(props) => (props.samemonth ? 600 : 400)};
  height: 40px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => (props.sameday ? "#5f76e8" : "none")};
  width: 40px;
  border-radius: 50%;
`;

const WeekWrapper = styled.div<{ day: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;

  & > span {
    font-size: 16px;
    font-weight: 700;
    color: ${(props) =>
      props.day === "일" ? "red" : props.day === "토" ? "blue" : "black"};
  }
`;

const DayWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  cursor: pointer;
  &:hover {
    background-color: #e8eaec;
    border-radius: 100%;
  }
`;

const CalenderTable = styled.div`
  flex: 1;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
`;
