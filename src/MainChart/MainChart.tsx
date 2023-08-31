import { useState } from "react";
import { PageLayoutContainer } from "../App";
import ChartCard from "../Common/ChartCard/ChartCard";
import { pletformValue } from "../Function/pletformValue";
import "./css/mainChart.css";
import { CustomSpan } from "../Common/CustomSpan";

export default function MainChart() {
  const firstPletformArr = pletformValue().slice(0, 3);
  const lastPetformArr = pletformValue().slice(3);
  const itemsPerPage = 5;
  const [pageStartIndex, setPageStartIndex] = useState(0);
  const [pageEndIndex, setPageEndIndex] = useState(itemsPerPage - 1);
  const [numPage, setNumPage] = useState(0);

  const handleNextClick = () => {
    setPageStartIndex(pageEndIndex + 1);
    setPageEndIndex(pageEndIndex + itemsPerPage);
  };

  const handlePrevClick = () => {
    setPageStartIndex(pageStartIndex - itemsPerPage);
    setPageEndIndex(pageEndIndex - itemsPerPage);
  };

  return (
    <PageLayoutContainer>
      <div className="Chart_Intro_Container">
        <div className="Title_Container">
          <CustomSpan children="Chart" fontSize={21} fontWeight={500} />
        </div>
        <div>
          <CustomSpan
            children="All In One"
            fontSize={14}
            fontWeight={500}
            color="#7c8798"
            marginright={8}
          />
          <CustomSpan
            children="/"
            fontSize={12}
            color="#ced4da"
            marginright={8}
          />
          <CustomSpan
            children="차트가 업데이트 되면 자동으로 차트를 불러옵니다."
            fontSize={13}
            color="#9eabc0"
          />
        </div>
      </div>
      <div className="Chart_Container">
        {firstPletformArr.map((el, index) => {
          return (
            <div className="Main_Chart_Wrapper" key={index}>
              <ChartCard
                numPage={numPage}
                setNumPage={setNumPage}
                pageStartIndex={pageStartIndex}
                pageEndIndex={pageEndIndex}
                handleNextClick={handleNextClick}
                handlePrevClick={handlePrevClick}
                platform={el.name}
                searchValue={""}
                chartType={"realTime"}
              />
            </div>
          );
        })}
      </div>
      <div className="Last_Chart_Container">
        {lastPetformArr.map((el, index) => {
          return (
            <div className="Main_Chart_Wrapper" key={index}>
              <ChartCard
                numPage={numPage}
                setNumPage={setNumPage}
                pageStartIndex={pageStartIndex}
                pageEndIndex={pageEndIndex}
                handleNextClick={handleNextClick}
                handlePrevClick={handlePrevClick}
                platform={el.name}
                searchValue={""}
                chartType={"realTime"}
              />
            </div>
          );
        })}
      </div>
    </PageLayoutContainer>
  );
}
