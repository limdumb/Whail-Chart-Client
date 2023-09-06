import { LuLineChart } from "react-icons/lu";
import { styled } from "styled-components";
import ChartTitle from "./ChartTitle";
import { CustomSpan } from "../CustomSpan";
import ContoureLine from "../ContourLine";
import "./css/chartCard.css";
import { PlatformValueType } from "../../Function/pletformValue";
import RankCard from "./RankCard";
import { useState } from "react";
import { itemPerPage } from "../../Function/itemPerPage";
import { PageButton } from "../PageButton";

interface NewChartCardProps extends PlatformValueType {
  charts: {
    rank: number;
    previousRank: number;
    image: string;
    artistName: string;
    songName: string;
  }[];
  startPageNum: number;
  endPageNumber: number;
  currentPageNumber: number;
  updateTime: string;
  handlePrevClick: (index: number) => void;
  handleNextClick: (index: number) => void;
  index: number;
  chartType:"realTime" | "daily"
}

export default function NewChartCard(props: NewChartCardProps) {
  const itemsPerPageValue = itemPerPage();
  const pageButtonArr = Array(props.currentPageNumber)
    .fill(0)
    .map((_, i) => i + 1)
    .slice(props.startPageNum, props.endPageNumber);

  const [pageActiveIndex, setPageActiveIndex] = useState(0);
  const startIndex = pageActiveIndex * itemsPerPageValue;
  const endIndex = startIndex + itemsPerPageValue;
  const currentData = props.charts.slice(startIndex, endIndex);
  const handleClick = (index: number) => {
    setPageActiveIndex(index);
  };

  return (
    <ChartCardWrapper>
      <div className="Chart_Title_Wrapper">
        <ChartTitle chartType={props.chartType} platform={props.platform} />
      </div>
      <div className="Search_Input_Wrapper">
        <CustomSpan
          children={props.updateTime}
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
        {currentData.map((el) => {
          return (
            <RankCard
              rank={el.rank}
              image={el.image}
              song={el.songName}
              artist={el.artistName}
              previous={el.previousRank}
              used={"all"}
            />
          );
        })}
      </RankingChartWrapper>
      <PageNationWrapper>
        <MoveButton
          children={"<<"}
          onClick={() => {
            if (pageButtonArr[0] !== 1) props.handlePrevClick(props.index);
          }}
        />
        {pageButtonArr.map((el) => {
          return (
            <PageButton
              key={el}
              pages={el}
              active={el - 1 === pageActiveIndex}
              onClick={() => {
                handleClick(el - 1);
              }}
            />
          );
        })}
        <MoveButton
          children={">>"}
          onClick={() => {
            console.log(props.endPageNumber)
            console.log(pageButtonArr.length)
            if(props.endPageNumber === pageButtonArr.length)
              props.handleNextClick(props.index);
          }}
        />
      </PageNationWrapper>
    </ChartCardWrapper>
  );
}

/*

MainChart, ChartCard 에 필요한 데이터를 구성해서 전달한다.

<->

ChartCard Props 만 이용해서, 렌더링만 한다.


*/

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
