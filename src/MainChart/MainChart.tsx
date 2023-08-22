import { useState } from "react";
import { PageLayoutContainer } from "../App";
import ChartCard from "../Common/ChartCard/ChartCard";
import { useQuery } from "react-query";
import { getChartData } from "../API/getChartData";

export default function MainChart() {
  const { isLoading, error, data, status } = useQuery("chartData", async () => {
    const data = await getChartData();
    return data.data;
  });
  const itemsPerPage = 5;
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

  if (isLoading) return <span>로딩</span>;
  if (error) return <span>에러</span>;

  return (
    <PageLayoutContainer>
      <ChartCard
        pageStartIndex={pageStartIndex}
        pageEndIndex={pageEndIndex}
        handleNextClick={handleNextClick}
        handlePrevClick={handlePrevClick}
        // pages={pages}
        pletform={"Melon"}
        updateTime={"2023-08-21 18시"}
        searchValue={""}
        chart={[]}
      />
    </PageLayoutContainer>
  );
}
