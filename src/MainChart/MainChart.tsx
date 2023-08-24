import { useState } from "react";
import { PageLayoutContainer } from "../App";
import ChartCard from "../Common/ChartCard/ChartCard";
import { useQuery } from "react-query";
import { getChartData } from "../API/getChartData";
import { changeDate } from "../Function/changeDate";

export default function MainChart() {
  const itemsPerPage = 5;
  const { isLoading, error, data } = useQuery("chartData", async () => {
    const data = await getChartData();
    return data.data;
  });
  const changedDate = changeDate(data?.date, data?.hour);
  const [pageStartIndex, setPageStartIndex] = useState(0);
  const [pageEndIndex, setPageEndIndex] = useState(itemsPerPage - 1);

  const handleNextClick = () => {
    setPageStartIndex(pageEndIndex + 1);
    setPageEndIndex(pageEndIndex + itemsPerPage);
  };

  const handlePrevClick = () => {
    setPageStartIndex(pageStartIndex - itemsPerPage);
    setPageEndIndex(pageEndIndex - itemsPerPage);
  };

  if (isLoading) return <span>로딩중..</span>;
  if (error) return <span>에러입니다</span>;

  return (
    <PageLayoutContainer>
      {!isLoading ? (
        data &&
        data.chart.map((el, index) => {
          return (
            <div key={index}>
              <ChartCard
                pageStartIndex={pageStartIndex}
                pageEndIndex={pageEndIndex}
                handleNextClick={handleNextClick}
                handlePrevClick={handlePrevClick}
                pletform={data.platform}
                updateTime={changedDate}
                searchValue={""}
                chart={data.chart}
              />
            </div>
          );
        })
      ) : (
        <div></div>
      )}
    </PageLayoutContainer>
  );
}
