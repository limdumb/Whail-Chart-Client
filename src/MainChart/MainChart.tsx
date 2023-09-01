import { useState } from "react";
import { PageLayoutContainer } from "../App";
import ChartCard from "../Common/ChartCard/ChartCard";
import { pletformValue } from "../Function/pletformValue";
import "./css/mainChart.css";
import ChartTitle from "../Common/ChartTitle";
import CustomButton from "../Common/Header/CustomButton";

// 1. 왜 문제가 발생했는지
// 2. 발생한 문제의 코드를 유심히 볼것
// 3. 문제가 되는 부분의 코드를 무작정 짜집기 하지 말것

// Page Button의 값을 변경하는 Set함수가 PageButton을 추적하는 UseEffect안에서 변경이 되고있기 떄문에
// 상태값이 변경되고 그거에 맞는 요청을 보냄
//

export default function MainChart() {
  const firstPletformArr = pletformValue().slice(0, 3);
  const lastPetformArr = pletformValue().slice(3);
  const itemsPerPage = 5;
  const [pageStartIndex, setPageStartIndex] = useState(0);
  const [pageEndIndex, setPageEndIndex] = useState(itemsPerPage - 1);
  const [numPage, setNumPage] = useState(0);
  // const type = ['melon', 'genie'];

  // const chartData = useState({})
  // const chartIndex = useState({
  //   melon: 0,
  //   genie: 1,
  // })

  // useState(() => {
  //   type.forEach((item) => {
  //     const data = item 에 해당하는 차트 데이터를 API 호출로 가져옴
  //     charData[item] = data;
  //   })

  //   /*
  //   chartData = {
  //     melon = [{ ... }]
  //     genie = [{ ... }]
  //   }
  //   */
  // })

  // type.map((el) => {
  //   const query = useQuery(funct(el))
  // })

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
      <ChartTitle chartType={"realTime"} />
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
