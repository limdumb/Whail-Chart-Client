import { useState } from "react";
import { PageLayoutContainer } from "../App";
import ChartCard from "../Common/ChartCard/ChartCard";
import { pletformValue } from "../Function/pletformValue";
import ChartTitle from "../Common/ChartTitle";
import "./css/mainChart.css";

export default function MainChart() {
  const firstPletformArr = pletformValue().slice(0, 3);
  const lastPetformArr = pletformValue().slice(3);
  const buttonPerPage = 5;
  const [pageStartIndex, setPageStartIndex] = useState(0);
  const [pageEndIndex, setPageEndIndex] = useState(buttonPerPage - 1);
  const [numPage, setNumPage] = useState(0);

  const handleNextClick = () => {
    setPageStartIndex(pageEndIndex + 1);
    setPageEndIndex(pageEndIndex + buttonPerPage);
  };

  const handlePrevClick = () => {
    setPageStartIndex(pageStartIndex - buttonPerPage);
    setPageEndIndex(pageEndIndex - buttonPerPage);
  };

  return (
    <PageLayoutContainer>
      <ChartTitle chartType={"realTime"} platform={""} />
      <div className="Chart_Container">
        {firstPletformArr.map((el, index) => {
          return (
            <div className="Main_Chart_Wrapper" key={index}>
              <ChartCard
                used="all"
                numPage={numPage}
                setNumPage={setNumPage}
                pageStartIndex={pageStartIndex}
                pageEndIndex={pageEndIndex}
                handleNextClick={handleNextClick}
                handlePrevClick={handlePrevClick}
                platform={el.platform}
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
                used="all"
                numPage={numPage}
                setNumPage={setNumPage}
                pageStartIndex={pageStartIndex}
                pageEndIndex={pageEndIndex}
                handleNextClick={handleNextClick}
                handlePrevClick={handlePrevClick}
                platform={el.platform}
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
