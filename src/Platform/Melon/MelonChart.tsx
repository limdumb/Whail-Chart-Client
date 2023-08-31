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
`;

export default function MelonChart() {
  const firstPletformArr = pletformValue().slice(0, 3);
  const lastPetformArr = pletformValue().slice(3);
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
      <div>
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
      </div>
    </MelonLayoutContainer>
  );
}
