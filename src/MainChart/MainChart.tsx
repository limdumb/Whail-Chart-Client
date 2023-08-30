import { useState } from "react";
import { PageLayoutContainer } from "../App";
import ChartCard from "../Common/ChartCard/ChartCard";
import { pletformValue } from "../Function/pletformValue";
import "./css/mainChart.css";

export default function MainChart() {
  const pletformArr = pletformValue();
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
      <div className="Chart_Container">
        {pletformArr.map((el, index) => {
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
              />
            </div>
          );
        })}
      </div>
    </PageLayoutContainer>
  );
}
