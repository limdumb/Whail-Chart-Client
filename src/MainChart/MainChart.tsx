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
  const pletformArr = pletformValue();
  const buttonPerPage = 5;
  const [numPage, setNumPage] = useState(0);
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
  
  const chartDataResponse = pletformArr.map((el)=>{
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const query = useQuery({
      queryKey: ["chartData", "melon"],
      queryFn: async () => {
        const data = await getChartData({
          platform: el.platform,
          chartType: "realTime",
        });
        return data;
      },
    });
    return query
  })
  // 데이터처리해
  console.log(chartDataResponse)

  const query = useQuery({
    queryKey: ["chartData", "melon"],
    queryFn: async () => {
      const data = await getChartData({
        platform: "Melon",
        chartType: "realTime",
      });
      return data;
    },
  });

  useEffect(() => {
    if (query.isFetched && query.data) {
      setNumPage(Math.ceil(query.data.chart.length / 10));
    }
  }, [query.data, query.isFetched]);

  // const response = pletformArr.map((el)=>{
  // })

  /*
  map, 
  [0] = { startIndex, endIndex }
  [1] = { startIndex, endIndex }

  */
  const updateTime = changeDate(query.data?.date, query.data?.hour);
  return (
    <PageLayoutContainer>
      <ChartTitle chartType={"realTime"} platform={""} />
      <div className="Chart_Container">
        {pletformArr.map((el, index) => {
          return (
            <div className="Main_Chart_Wrapper" key={index}>
              <NewChartCard
                index={index}
                handleNextClick={handleNextClick}
                handlePrevClick={handlePrevClick}
                updateTime={updateTime}
                platform={el.platform}
                charts={
                  query.data?.chart.map((item) => ({
                    rank: item.rank,
                    previousRank: item.previous,
                    image: item.song.image,
                    artistName: item.song.artists.name,
                    songName: item.song.name,
                  })) || []
                }
                startPageNum={chartCardPageIndex[index].startIndex}
                endPageNumber={chartCardPageIndex[index].endIndex}
                currentPageNumber={numPage}
              />
            </div>
          );
        })}
      </div>
      <div className="Last_Chart_Container"></div>
      {/* <div className="Last_Chart_Container">
        {lastPetformArr.map((el, index) => {
          return (
            <div className="Main_Chart_Wrapper" key={index}>
              <ChartCard
                index={index}
                clickIndex={clickIndex}
                setClickIndex={setClickIndex}
                setPageStartIndex={index => {}}
                setPageEndIndex={setPageEndIndex}
                used="all"
                numPage={numPage}
                setNumPage={setNumPage}
                pageStartIndex={pageStartIndex}
                pageEndIndex={pageEndIndex}
                platform={el.platform}
                searchValue={""}
                chartType={"realTime"}
              />
            </div>
          );
        })}
      </div> */}
    </PageLayoutContainer>
  );
}
