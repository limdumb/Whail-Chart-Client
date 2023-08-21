import { styled } from "styled-components";
import { CustomSpan } from "./CustomSpan";
import { BsFillCaretDownFill, BsFillCaretUpFill } from "react-icons/bs";

interface RankingType {
  rank: number;
  previous: number;
}

const RankWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 60px;
  align-items: center;
  width: 45px;
  justify-content: center;
`;
const ChangeRankWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 20px;
  margin-top: 5px;
`;

const ChangeRank = (changeRank: number) => {
  const minusRemoveChange = `${changeRank}`.replace("-", "");
  if (changeRank > 0) {
    return (
      <ChangeRankWrapper>
        <CustomSpan
          children={`${changeRank}`}
          fontSize={14}
          fontWeight={400}
          marginright={2}
          color="#f0780a"
        />
        <BsFillCaretUpFill size={10} color="#f0780a" />
      </ChangeRankWrapper>
    );
  } else if (changeRank < 0) {
    return (
      <ChangeRankWrapper>
        <CustomSpan
          children={minusRemoveChange}
          fontSize={14}
          fontWeight={400}
          marginright={2}
          color="#8cbefa"
        />
        <BsFillCaretDownFill size={10} color="#8cbefa" />
      </ChangeRankWrapper>
    );
  } else {
    return (
      <ChangeRankWrapper>
        <CustomSpan children="-" color="#8c8c8c" fontSize={14} />
      </ChangeRankWrapper>
    );
  }
};

export default function Ranking(props: RankingType) {
  const changesRank: number = props.previous - props.rank;

  switch (props.rank) {
    case 1:
      return (
        <RankWrapper>
          <CustomSpan
            color="#ff8061"
            fontSize={20}
            children={`${props.rank}`}
            fontWeight={400}
          />
          {ChangeRank(changesRank)}
        </RankWrapper>
      );
    case 2:
      return (
        <RankWrapper>
          <CustomSpan
            color="#f65e39"
            fontSize={20}
            children={`${props.rank}`}
            fontWeight={400}
          />
          {ChangeRank(changesRank)}
        </RankWrapper>
      );
    case 3:
      return (
        <RankWrapper>
          <CustomSpan
            color="#e23e16"
            fontSize={20}
            children={`${props.rank}`}
            fontWeight={400}
          />
          {ChangeRank(changesRank)}
        </RankWrapper>
      );
    case 4:
      return (
        <RankWrapper>
          <CustomSpan
            color="#bb2500"
            fontSize={20}
            children={`${props.rank}`}
            fontWeight={400}
          />
          {ChangeRank(changesRank)}
        </RankWrapper>
      );
    case 5:
      return (
        <RankWrapper>
          <CustomSpan
            color="#8c1c00"
            fontSize={20}
            children={`${props.rank}`}
            fontWeight={400}
          />
          {ChangeRank(changesRank)}
        </RankWrapper>
      );
    default:
      return (
        <RankWrapper>
          <CustomSpan
            children={`${props.rank}`}
            color="black"
            fontSize={20}
            fontWeight={400}
          />
          {ChangeRank(changesRank)}
        </RankWrapper>
      );
  }
}
