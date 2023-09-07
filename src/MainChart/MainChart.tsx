import { useEffect, useState } from "react";
import { PageLayoutContainer } from "../App";
import { pletformValue } from "../Function/pletformValue";
import ChartTitle from "../Common/ChartTitle";
import "./css/mainChart.css";
import NewChartCard from "../Common/ChartCard/NewChartCard";
import { useQuery } from "react-query";
import { getChartData } from "../API/getChartData";
import { changeDate } from "../Function/changeDate";

export default function MainChart() {
  const platformArr = pletformValue();
  const buttonPerPage = 5;
  const [numPage, setNumPage] = useState([
    { pageCount: 0 },
    { pageCount: 0 },
    { pageCount: 0 },
    { pageCount: 0 },
    { pageCount: 0 },
    { pageCount: 0 },
  ]);
  const buttonsPerPageValue = 5;

  const [chartCardPageIndex, setChartCardPageIndex] = useState([
    { startIndex: 0, endIndex: 0 + buttonsPerPageValue },
    { startIndex: 0, endIndex: 0 + buttonsPerPageValue },
    { startIndex: 0, endIndex: 0 + buttonsPerPageValue },
    { startIndex: 0, endIndex: 0 + buttonsPerPageValue },
    { startIndex: 0, endIndex: 0 + buttonsPerPageValue },
    { startIndex: 0, endIndex: 0 + buttonsPerPageValue },
  ]);

  const handlePrevClick = (index: number) => {
    const newChartCardPageIndex = [...chartCardPageIndex];
    newChartCardPageIndex[index].startIndex =
      newChartCardPageIndex[index].startIndex - buttonPerPage;
    newChartCardPageIndex[index].endIndex =
      newChartCardPageIndex[index].endIndex - buttonPerPage;
    setChartCardPageIndex(newChartCardPageIndex);
  };

  const handleNextClick = (index: number) => {
    const newChartCardPageIndex = [...chartCardPageIndex];
    newChartCardPageIndex[index].startIndex =
      newChartCardPageIndex[index].endIndex;
    newChartCardPageIndex[index].endIndex =
      newChartCardPageIndex[index].endIndex + buttonPerPage;

    setChartCardPageIndex(newChartCardPageIndex);
  };

  const chartDataResponse = platformArr.map((el) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const query = useQuery({
      queryKey: ["chartData", `${el.platform}`],
      queryFn: async () => {
        const data = await getChartData({
          platform: el.platform,
          chartType: "realTime",
        });
        return data;
      },
    });
    return query;
  });

  useEffect(() => {
    chartDataResponse.forEach((el, index) => {
      if (el.data && el.isFetched) {
        const newNumPageArr = [...numPage];
        const newPageNum = Math.ceil(el.data.chart.length / 10);
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        newNumPageArr[index].pageCount = newPageNum;
        setNumPage(newNumPageArr);
      }
    });
  }, [chartDataResponse, numPage]);

  const updateTime = chartDataResponse.map((query) => {
    const transformDate = changeDate(query.data?.date, query.data?.hour);
    return transformDate;
  });

  return (
    <PageLayoutContainer>
      <ChartTitle chartType={"realTime"} platform={""} />
      <div className="Chart_Container">
        {chartDataResponse.map((el, index) => {
          return (
            <div className="Main_Chart_Wrapper" key={index}>
              <NewChartCard
                index={index}
                chartType="realTime"
                handleNextClick={handleNextClick}
                handlePrevClick={handlePrevClick}
                updateTime={updateTime[index]}
                platform={platformArr[index].platform}
                charts={
                  el.data?.chart.map((item) => ({
                    id: item.song.id,
                    rank: item.rank,
                    previousRank: item.previous,
                    image: item.song.image,
                    artistName: item.song.artists.name,
                    songName: item.song.name,
                  })) || []
                }
                startPageNum={chartCardPageIndex[index].startIndex}
                endPageNumber={chartCardPageIndex[index].endIndex}
                currentPageNumber={numPage[index].pageCount}
              />
            </div>
          );
        })}
      </div>
      <div className="Last_Chart_Container"></div>
    </PageLayoutContainer>
  );
}
