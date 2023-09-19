import { useEffect, useState } from "react";
import { styled } from "styled-components";
import ChartTitle from "../../Common/ChartTitle";
import { transformDate } from "../../Function/transformDate";
import { getDailyChartData } from "../../API/getDailyChartData";
import { useQuery } from "react-query";
import NewChartCard from "../../Common/ChartCard/NewChartCard";
import { CalendarBox } from "../../Common/CalendarBox";
import Spinner from "../../Common/Spinner";

const VibeLayoutContainer = styled.div`
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

export default function VibeChart() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [clickDate, setClickDate] = useState(selectedDate);
  const [submitDate, setSubmitDate] = useState(clickDate);
  const buttonPerPage = 5;
  const buttonsPerPageValue = 5;
  const [numPage, setNumPage] = useState(0);

  const [chartCardPageIndex, setChartCardPageIndex] = useState({
    startIndex: 0,
    endIndex: 0 + buttonsPerPageValue,
  });

  const query = useQuery(["vibeDaily", transformDate(submitDate)], async () => {
    const result = await getDailyChartData({
      platform: "Vibe",
      date: submitDate,
    });
    if (result) return result.data;
  });

  const changeSubmitDate = () => {
    setSubmitDate(clickDate);
  };

  const handlePrevClick = () => {
    setChartCardPageIndex((prevState) => ({
      startIndex: prevState.startIndex - buttonPerPage,
      endIndex: prevState.endIndex - buttonPerPage,
    }));
  };

  const handleNextClick = () => {
    setChartCardPageIndex((prevState) => ({
      startIndex: prevState.endIndex,
      endIndex: prevState.endIndex + buttonPerPage,
    }));
  };

  useEffect(() => {
    if (query.data && query.isFetched) {
      const newPageNum = Math.ceil(query.data.chart.length / 10);
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      setNumPage(newPageNum);
    }
  }, [query, numPage]);

  return (
    <VibeLayoutContainer>
      <ChartTitle chartType="daily" platform={"Vibe"} date="2022-11-30" />
      <CalendarBox
        updateTime={query.data?.date}
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
        clickedDate={clickDate}
        setClickedDate={setClickDate}
        submitFunc={changeSubmitDate}
      />
      <ChartWrapper>
        {query.isLoading ? (
          <Spinner />
        ) : (
          <>
            {query.data ? (
              <NewChartCard
                charts={
                  query.data.chart.map((item) => ({
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
                updateTime={query.data.date}
                handlePrevClick={handlePrevClick}
                handleNextClick={handleNextClick}
                chartType={"daily"}
                platform={"Vibe"}
              />
            ) : null}
          </>
        )}
      </ChartWrapper>
    </VibeLayoutContainer>
  );
}
