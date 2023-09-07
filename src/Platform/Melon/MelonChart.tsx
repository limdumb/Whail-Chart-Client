import { styled } from "styled-components";
import { useEffect, useState } from "react";
import ChartTitle from "../../Common/ChartTitle";
import NewChartCard from "../../Common/ChartCard/NewChartCard";
import { useQuery } from "react-query";
import { getDailyChartData } from "../../API/getDailyChartData";
import { changeDate } from "../../Function/changeDate";

const MelonLayoutContainer = styled.div`
  margin-left: 260px;
  margin-top: 81px;
  display: flex;
  flex-direction: column;
  padding: 25px;
  width: 100%;
  height: 100%;
  @media screen and (max-width: 390px) {
    width: 390px;
    height: 100%;
    margin: 0px;
    padding: 0px;
    display: flex;
    flex-direction: column;
    margin-top: 81px;
  }
`;

const ChartWrapper = styled.div`
  padding: 0px 15px;
  @media screen and (max-width: 390px) {
    margin-top: 15px;
  }
`;

export default function MelonChart() {
  const buttonsPerPageValue = 5;
  const [chartCardPageIndex, setChartCardPageIndex] = useState({
    startIndex: 0,
    endIndex: 0 + buttonsPerPageValue,
  });
  const [numPage, setNumPage] = useState(0);

  const query = useQuery({
    queryKey: ["dailyChart", "melon"],
    queryFn: async () => {
      const data = await getDailyChartData({
        date: 20230905,
        platform: "Melon",
      });
      return data;
    },
  });
  const transformDate = changeDate(query.data?.date, query.data?.hour);

  useEffect(() => {
    if (query.data && query.isFetched) {
      setNumPage(Math.ceil(query.data.chart.length / 10));
    }
  }, [query.data, query.isFetched]);

  const handlePrevClick = (i: number) => {
    const newPageIndex = { ...chartCardPageIndex };
    newPageIndex.startIndex = newPageIndex.startIndex - buttonsPerPageValue;
    newPageIndex.endIndex = newPageIndex.endIndex - buttonsPerPageValue;
    setChartCardPageIndex(newPageIndex);
  };

  const handleNextClick = (i: number) => {
    const newPageIndex = { ...chartCardPageIndex };
    newPageIndex.startIndex = newPageIndex.endIndex;
    newPageIndex.endIndex = newPageIndex.endIndex + buttonsPerPageValue;
  };

  return (
    <MelonLayoutContainer>
      <ChartTitle chartType="daily" platform={"Melon"} date="2022-11-30" />
      <ChartWrapper>
        <NewChartCard
          used="page"
          charts={
            query.data?.chart.map((item) => ({
              id: item.song.id,
              rank: item.rank,
              previousRank: item.previous,
              image: item.song.image,
              artistName: item.song.artists.name,
              songName: item.song.name,
            })) || []
          }
          startPageNum={chartCardPageIndex.startIndex}
          endPageNumber={chartCardPageIndex.endIndex}
          currentPageNumber={numPage}
          updateTime={transformDate}
          handlePrevClick={handlePrevClick}
          handleNextClick={handleNextClick}
          chartType={"daily"}
          platform={"Melon"}
        />
      </ChartWrapper>
    </MelonLayoutContainer>
  );
}
