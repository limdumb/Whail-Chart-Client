import { styled } from "styled-components";
import Ranking from "../Ranking";
import CustomImage from "../CustomImage";

interface RankCardType {
  rank: number;
  image: string;
  song: string;
  artist: string;
  previous: number;
}

const RankBox = styled.div`
  height: 60px;
  display: flex;
  border-top: 1px solid rgba(124, 135, 152, 0.1);
  border-bottom: 1px solid rgba(124, 135, 152, 0.1);
  opacity: 0.1px;
`;

const ImageWrapper = styled.div`
  padding: 5px;
`;

export default function RankCard(props: RankCardType) {
  return (
    <RankBox>
      <div>
        <Ranking rank={props.rank} previous={props.previous} />
      </div>
      <ImageWrapper>
        <CustomImage image={props.image} width={48} height={48} />
      </ImageWrapper>
      <div></div>
    </RankBox>
  );
}
