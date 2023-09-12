import { CustomSpan } from "./CustomSpan";
import { styled } from "styled-components";
import CustomButton from "./Header/CustomButton";
import { calendarDate } from "../Function/calendarDate";
import "./css/calendar.css";

interface CalendarProps {
  selectedDate: Date;
  setSelectedDate: React.Dispatch<React.SetStateAction<Date>>;
  clickedDate: Date;
  setClickedDate: React.Dispatch<React.SetStateAction<Date>>;
}

const Calendar: React.FC<CalendarProps> = (props: CalendarProps) => {
  const calendarDateArray = calendarDate(props.selectedDate);

  const changeYear = (year: number) => {
    const date = new Date(props.selectedDate.getTime());
    date.setFullYear(date.getFullYear() + year);
    props.setSelectedDate(date);
  };

  const changeMonth = (month: number) => {
    const date = new Date(props.selectedDate.getTime());
    date.setMonth(date.getMonth() + month);
    props.setSelectedDate(date);
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
        <div>
          <div>
            {weekArr.map((el) => {
              return <div key={el}>{el}</div>;
            })}
          </div>
        </div>
        <div className="Calender_Table">
          {calendarDateArray.map((day, i) => {
            return (
              <RenderCalendarDays
                key={i}
                dayClickedHandler={dayClickedHandler}
                selectedDate={props.selectedDate}
                day={day}
              />
            );
          })}
        </div>
        <div className="Submit_Button_Wrapper">
          <CustomButton
            children={"확인"}
            type={"button"}
            width={"280px"}
            height={""}
            backgroundcolor={"#5f76e8"}
            color={"white"}
            fontWeight={600}
            borderradius={"5px"}
          />
        </div>
      </div>
    </div>
  );
};

interface RenderCalendarDaysProps {
  selectedDate: Date;
  dayClickedHandler: (date: Date) => void;
  day: Date;
}

const RenderCalendarDays = ({
  dayClickedHandler,
  day,
}: RenderCalendarDaysProps) => {
  const nowTime = new Date();
  const sameMonth = nowTime.getMonth() === day.getMonth();
  const sameDay =
    nowTime.getFullYear() === day.getFullYear() &&
    nowTime.getMonth() === day.getMonth() &&
    nowTime.getDate() === day.getDate();

  return (
    <div>
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
    </div>
  );
};

export default Calendar;

interface DayTableProps {
  samemonth: boolean;
  sameday: boolean;
  date: number;
}

const DayTable = styled.div<DayTableProps>`
  background-color: ${(props) => (props.samemonth ? "white" : "gray")};
  color: black;
  height: 36px;
  cursor: pointer;
`;
