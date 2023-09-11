import { useState } from "react";

import "./css/calendar.css";
import { CustomSpan } from "./CustomSpan";
import { styled } from "styled-components";
import CustomButton from "./Header/CustomButton";

interface CalendarProps {
  year: number;
  month: number;
  setYear: React.Dispatch<React.SetStateAction<number>>;
  setMonth: React.Dispatch<React.SetStateAction<number>>;
}
//
// 달력의 날자를 눌렀을때 State에 number Type의 값이 담기게만들것
//

// input => startDay => endDay까지의 정보가 담겨있는 numberType의배열
function splice_name_tbd(daysArr: number[]) {
  const newArr: number[][] = [];
  for (let i = 0; i < daysArr.length; i += 7) {
    newArr.push(daysArr.slice(i, i + 7));
  }
  return newArr;
}

const Calendar: React.FC<CalendarProps> = (props: CalendarProps) => {
  const [selectedDate, setSelectedDate] = useState(0); // 선택한 날짜를 저장할 상태

  const goToPreviousMonth = () => {
    if (props.month === 0) {
      props.setYear(props.year - 1);
      props.setMonth(11);
    } else {
      props.setMonth(props.month - 1);
    }
  };
  // 다음 달로 이동
  const goToNextMonth = () => {
    if (props.month === 11) {
      props.setYear(props.year + 1);
      props.setMonth(0);
    } else {
      props.setMonth(props.month + 1);
    }
  };

  // 선택한 날짜가 변경될 때 호출되는 함수
  const handleDateChange = (date: number) => {
    setSelectedDate(date);
  };

  return (
    <div className="Calendar_Wrapper">
      <div className="Calendar_Header">
        <button className="Previous_Button" onClick={goToPreviousMonth}>
          &lt;
        </button>
        <CustomSpan
          children={`${props.year}년 ${props.month + 1}월`}
          fontSize={16}
          fontWeight={700}
        />
        <button className="Previous_Button" onClick={goToNextMonth}>
          &gt;
        </button>
      </div>
      <table className="Week_Wrapper">
        <thead>
          <tr>
            <th>일</th>
            <th>월</th>
            <th>화</th>
            <th>수</th>
            <th>목</th>
            <th>금</th>
            <th>토</th>
          </tr>
        </thead>
        <tbody className="Calender_Table">
          <RenderCalendarDays
            selectedDate={selectedDate}
            handleDateChange={handleDateChange}
            year={props.year}
            month={props.month}
          />
        </tbody>
        <div className="Submit_Button_Wrapper">
          <CustomButton
            children={"확인"}
            type={"button"}
            width={"280px"}
            height={""}
            backgroundColor={"#5f76e8"}
            color={"white"}
            fontWeight={600}
            borderRadius={"5px"}
          />
        </div>
      </table>
    </div>
  );
};

interface RenderCalendarDaysProps {
  year: number;
  month: number;
  handleDateChange: (date: number) => void;
  selectedDate: number;
}

const RenderCalendarDays: React.FC<RenderCalendarDaysProps> = ({
  year,
  month,
  handleDateChange,
  selectedDate,
}) => {
  const firstDayOfMonth = new Date(year, month, 1);
  const lastDayOfMonth = new Date(year, month + 1, 0);
  const startDate = new Date(firstDayOfMonth);
  const endDate = new Date(lastDayOfMonth);
  startDate.setDate(startDate.getDate() - startDate.getDay()); // 첫 주의 시작 날짜 계산
  endDate.setDate(endDate.getDate() + (6 - endDate.getDay())); // 마지막 주의 끝 날짜 계산

  const transformMonth = `${month}`.length === 1 ? `0${month}` : `${month}`;
  const days: number[] = [];
  let currentDate = new Date(startDate);
  while (currentDate <= endDate) {
    days.push(currentDate.getDate());

    currentDate.setDate(currentDate.getDate() + 1);
  }

  const transformDayes = splice_name_tbd(days);

  return (
    <>
      {transformDayes.map((el, i) => {
        return (
          <tr key={i}>
            {el.map((el) => {
              return (
                <DayTable
                  selectedDate={selectedDate}
                  date={el}
                  onClick={() => {
                    handleDateChange(el);
                  }}
                  key={el}
                >
                  {el}
                </DayTable>
              );
            })}
          </tr>
        );
      })}
    </>
  );
};

export default Calendar;

interface DayTableProps {
  selectedDate: number;
  date: number;
}

const DayTable = styled.td<DayTableProps>`
  background-color: ${(props) =>
    props.selectedDate === props.date ? "#5f76e8" : "white"};
  border-radius: 100%;
  color: ${(props) => (props.selectedDate === props.date ? "white" : "black")};
  height: 36px;
`;
