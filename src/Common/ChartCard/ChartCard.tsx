import { LuLineChart } from "react-icons/lu";
import { styled } from "styled-components";
import ChartTitle from "./ChartTitle";
import { CustomSpan } from "../CustomSpan";
import ContoureLine from "../ContourLine";
import RankCard from "./RankCard";
import { PageButton } from "../PageButton";
import { useEffect, useState } from "react";
import "./css/chartCard.css";
import { useQuery } from "react-query";
import { getChartData } from "../../API/getChartData";
import { changeDate } from "../../Function/changeDate";
import { itemPerPage } from "../../Function/itemPerPage";

export interface SongDataType {
  rank: number;
  previous: number;
  likes: string;
  song: {
    id: number;
    name: string;
    image: string;
    artists: {
      id: number;
      name: string;
      image: string;
    };
  };
}

interface ChartCardProps {
  platform: "Melon" | "Genie" | "Flo" | "Bugs" | "Vibe";
  searchValue: string;
  numPage: number;
  setNumPage: React.Dispatch<React.SetStateAction<number>>;
  handlePrevClick: () => void;
  handleNextClick: () => void;
  pageEndIndex: number;
  pageStartIndex: number;
  chartType: "daily" | "realTime";
}

const ChartCardWrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: white;
  box-shadow: 0.1px 0.1px 1px 1px rgba(124, 135, 152, 0.2);
  display: flex;
  flex-direction: column;
  padding: 25px;

  @media screen and (max-width: 390px) {
    box-shadow: none;
    margin-bottom: 30px;
  }
`;

const RankingChartWrapper = styled.div`
  height: 100%;
  margin-bottom: 6px;
`;

const PageNationWrapper = styled.div`
  height: 42px;
  margin-top: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MoveButton = styled.button`
  display: block;
  padding: 0.5rem 0.75rem;
  margin-left: -1px;
  line-height: 1.25;
  color: #5f76e8;
  background-color: #fff;
  border: 1px solid #dee2e6;
  cursor: pointer;
`;

export default function ChartCard(props: ChartCardProps) {
  const itemsPerPageValue = itemPerPage();
  const [platform, setPlatform] = useState(props.platform.toLowerCase());

  useEffect(() => {
    setPlatform(props.platform.toLowerCase());
  }, [props.platform]);

  const query = useQuery({
    queryKey: ["chartData", platform],
    queryFn: async () => {
      const data = await getChartData({
        platform: platform,
        chartType: props.chartType,
      });
      return data;
    },
  });

  const [pageActiveIndex, setPageActiveIndex] = useState(0);
  const startIndex = pageActiveIndex * itemsPerPageValue;
  const endIndex = startIndex + itemsPerPageValue;
  const currentData =
    query.data && query.data.chart.slice(startIndex, endIndex);
  console.log(pageActiveIndex);

  const changedDate = changeDate(query.data?.date, query.data?.hour);

  const pageButton = Array(props.numPage)
    .fill(0)
    .map((_, i) => i + 1)
    .slice(props.pageStartIndex, props.pageEndIndex + 1);

  useEffect(() => {
    if (query.isFetched && query.data) {
      props.setNumPage(Math.ceil(query.data.chart.length / 10));
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.pageStartIndex, props.pageEndIndex, query.isFetched]);

  const handleClick = (index: number) => {
    setPageActiveIndex(index);
  };

  return (
    <ChartCardWrapper>
      <div className="Chart_Title_Wrapper">
        <ChartTitle chartType={props.chartType} pletform={props.platform} />
      </div>
      <div className="Search_Input_Wrapper">
        <CustomSpan
          children={changedDate}
          fontSize={16}
          color={"rgb(158, 171, 192)"}
        />
      </div>
      <ContoureLine color={"rgb(124, 135, 152)"} thickness={1} opacity={0.1} />
      <div className="Chart_Top_Wrapper">
        <div className="Icon_Wrapper">
          <LuLineChart />
        </div>
        <div className="Title_Wrapper">
          <CustomSpan
            children="곡정보"
            fontSize={16}
            fontWeight={500}
            color={"rgb(124, 135, 152)"}
          />
        </div>
      </div>
      <ContoureLine color={"rgb(124, 135, 152)"} thickness={1} opacity={0.1} />
      <RankingChartWrapper>
        {currentData &&
          currentData.map((el, index) => {
            return (
              <RankCard
                key={index}
                rank={el.rank}
                image={el.song.image}
                song={el.song.name}
                artist={el.song.artists.name}
                previous={el.previous}
              />
            );
          })}
      </RankingChartWrapper>
      <PageNationWrapper>
        <MoveButton
          children="<<"
          onClick={() => {
            if (pageButton[0] !== 1) props.handlePrevClick();
          }}
        />
        {pageButton.map((el, index) => {
          return (
            <PageButton
              key={el}
              pages={el}
              active={el - 1 === pageActiveIndex}
              onClick={() => handleClick(el - 1)}
            />
          );
        })}
        <MoveButton
          children=">>"
          onClick={() => {
            if (
              pageButton[props.pageEndIndex] !== pageButton[pageButton.length]
            )
              props.handleNextClick();
          }}
        />
      </PageNationWrapper>
    </ChartCardWrapper>
  );
}
