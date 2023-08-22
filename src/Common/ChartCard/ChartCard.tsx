import { LuLineChart } from "react-icons/lu";
import { styled } from "styled-components";
import ChartTitle from "./ChartTitle";
import { CustomSpan } from "../CustomSpan";
import ContoureLine from "../ContourLine";
import "./css/chartCard.css";
import RankCard from "./RankCard";

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
  pletform: "Melon" | "Genie" | "Flo" | "Bugs" | "Vibe";
  updateTime: string;
  searchValue: string;
  chart: SongDataType[];
  pages: number
}

const ChartCardWrapper = styled.div`
  width: 300px;
  height: 900px;
  background-color: white;
  box-shadow: 0.1px 0.1px 1px 1px rgba(124, 135, 152, 0.2);
  display: flex;
  flex-direction: column;
  padding: 25px;
`;

const RankingChartWrapper = styled.div`
  min-height: 600px;
  background-color: pink;
  margin-bottom: 6px;
`

const CountWrapper = styled.div`
height: 37px;
  padding-top: 13px;
  justify-content: center;
  align-items: center;
  background-color: black;
`

const PageNationWrapper = styled.div`
  height: 42px;
  margin-top: 5px;
  background-color: pink;
`

export default function ChartCard(props: ChartCardProps) {
  return (
    <ChartCardWrapper>
      <div className="Chart_Title_Wrapper">
        <ChartTitle pletform={props.pletform} />
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
        {props.chart.map((el) => {
          return (
            <RankCard
              rank={el.rank}
              image={el.song.image}
              song={el.song.name}
              artist={el.song.artists.name}
              previous={el.previous}
            />
          );
        })}
      </RankingChartWrapper>
      <CountWrapper>

      </CountWrapper>
      <PageNationWrapper>

      </PageNationWrapper>
    </ChartCardWrapper>
  );
}
