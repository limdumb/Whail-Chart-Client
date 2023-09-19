import { keyframes, styled } from "styled-components";
import spinnerImage from "../Image/SpinnerImage.png";
import { CustomSpan } from "./CustomSpan";

const rotation = keyframes`
    from{
        transform: rotate(0deg);
    }

    to{
        transform: rotate(360deg);
    }

`;

const CommonSpinner = styled.img`
  height: 60px;
  width: 60px;
  border-radius: 50%;
  border-top: none;
  border-left: none;
  margin: 16px auto;
  animation: ${rotation} 2.4s linear infinite;
`;

const SpinnerContainer = styled.div`
  width: 100%;
  min-height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const Spinner = () => {
  return (
    <SpinnerContainer>
      <CustomSpan color="gray" fontSize={20} fontWeight={800} children="로딩중 입니다.. 잠시만 기다려주세요"/>
      <CommonSpinner src={spinnerImage} />
    </SpinnerContainer>
  );
};

export default Spinner;
