import { styled } from "styled-components";
import Ranking from "../Ranking";
import CustomImage from "../CustomImage";
import { CustomSpan } from "../CustomSpan";
import { limitStrChange } from "../../Function/limitStrChange";

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

const ArtistWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 60px;
  width: 100%;
  padding: 0 5px 3px 5px;
  justify-content: space-around;
`;

const SongContainer = styled.div`
  display: flex;
  align-items: center;
`;

export default function RankCard(props: RankCardType) {
  const rankInfo = {
    song: limitStrChange(props.song, 9),
    artist: limitStrChange(props.artist, 9),
  };

  return (
    <RankBox>
      <div>
        <Ranking rank={props.rank} previous={props.previous} />
      </div>
      <ImageWrapper>
        <CustomImage image={props.image} width={48} height={48} />
      </ImageWrapper>
      <ArtistWrapper>
        <SongContainer>
          <CustomSpan
            children={rankInfo.song}
            fontSize={14}
            color="#3d3d3d"
            fontWeight={600}
          />
        </SongContainer>
        <div>
          <CustomSpan
            children={rankInfo.artist}
            color="#646464"
            fontSize={14}
            fontWeight={400}
          />
        </div>
      </ArtistWrapper>
    </RankBox>
  );
}
