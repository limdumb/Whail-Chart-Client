import { styled } from "styled-components";
import ChartCard from "../../Common/ChartCard/ChartCard";
import { SetStateAction, useState } from "react";
import { pletformValue } from "../../Function/pletformValue";

const MelonLayoutContainer = styled.div`
  margin-left: 260px;
  margin-top: 81px;
  display: flex;
  flex-direction: column;
  padding: 35px;
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
  @media screen and (max-width: 390px) {
    padding: 0px 15px;
    margin-top: 15px;
  }
`;

export default function MelonChart() {
  const itemsPerPage = 5;
  const [pageStartIndex, setPageStartIndex] = useState(0);
  const [pageEndIndex, setPageEndIndex] = useState(itemsPerPage - 1);
  const [numPage, setNumPage] = useState(0);

  const handlePrevClick = () => {
    setPageStartIndex(pageStartIndex - itemsPerPage);
    setPageEndIndex(pageEndIndex - itemsPerPage);
  };

  const handleNextClick = () => {
    setPageStartIndex(pageEndIndex + 1);
    setPageEndIndex(pageEndIndex + itemsPerPage);
  };

  return (
    <MelonLayoutContainer>
      <ChartWrapper>
        <ChartCard
          platform={"Melon"}
          searchValue={""}
          numPage={numPage}
          setNumPage={setNumPage}
          handlePrevClick={handlePrevClick}
          handleNextClick={handleNextClick}
          pageEndIndex={pageEndIndex}
          pageStartIndex={pageStartIndex}
          chartType={"daily"}
        />
      </ChartWrapper>
    </MelonLayoutContainer>
  );
}
