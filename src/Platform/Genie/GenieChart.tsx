import { useState } from "react";
import { styled } from "styled-components";
import ChartTitle from "../../Common/ChartTitle";

const GenieLayoutContainer = styled.div`
  margin-left: 260px;
  margin-top: 81px;
  display: flex;
  flex-direction: column;
  padding: 25px;
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
  padding: 0px 15px;
  @media screen and (max-width: 390px) {
    margin-top: 15px;
  }
`;

export default function GenieChart() {
  const buttonPerPage = 5;
  const [pageStartIndex, setPageStartIndex] = useState(0);
  const [pageEndIndex, setPageEndIndex] = useState(buttonPerPage - 1);
  const [numPage, setNumPage] = useState(0);

  return (
    <GenieLayoutContainer>
      <ChartTitle chartType="daily" platform={"Genie"} date="2022-11-30" />
      <ChartWrapper>
        {/* <ChartCard
          setPageStartIndex={setPageStartIndex}
          setPageEndIndex={setPageEndIndex}
          used="page"
          platform={"Genie"}
          searchValue={""}
          numPage={numPage}
          setNumPage={setNumPage}
          pageEndIndex={pageEndIndex}
          pageStartIndex={pageStartIndex}
          chartType={"daily"}
        /> */}
      </ChartWrapper>
    </GenieLayoutContainer>
  );
}
