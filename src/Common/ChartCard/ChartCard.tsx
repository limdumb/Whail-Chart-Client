import { styled } from "styled-components";
import { CustomSpan } from "../CustomSpan";

interface SongDataType {
  rank: number;
  previous: number;
  likes: string;
  song: {
    id: number;
    name: string;
    album: {
      id: number;
      name: string;
      image: string;
    };
    artists: [
      {
        id: number;
        name: string;
        image: string;
      }
    ];
  };
}

interface ChartDataType {
  pletform: string;
  // chart: SongDataType[];
}

const ChartCardWrapper = styled.div`
  width: 285px;
  height: 900px;
  background-color: white;
  box-shadow: 0.1px 0.1px 1px 1px rgba(124, 135, 152, 0.2);
  display: flex;
  flex-direction: column;
  padding: 25px;
`;

export default function ChartCard(props: ChartDataType) {
  
  return (
    <ChartCardWrapper>
      <CustomSpan
        children={`${props.pletform} 실시간 차트`}
        fontSize={18}
        fontWeight={500}
        marginB={15}
      />
    </ChartCardWrapper>
  );
}
