import { styled } from "styled-components";
import { CustomSpan } from "./CustomSpan";
import NoResultImageFile from "../Image/noResult.png";

export const NoResult = () => {
  return (
    <ImageContainer>
      <CustomSpan
        color="gray"
        fontSize={18}
        fontWeight={800}
        children="차트결과가 없습니다! 다른정보를 조회해주세요"
      />
      <NoResultImage src={NoResultImageFile} />
    </ImageContainer>
  );
};

const NoResultImage = styled.img`
  width: 400px;
  height: 400px;
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  min-height: 80vh;
`;
