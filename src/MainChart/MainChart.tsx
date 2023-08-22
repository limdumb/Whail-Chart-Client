import { useState } from "react";
import { PageLayoutContainer } from "../App";
import ChartCard from "../Common/ChartCard/ChartCard";

export default function MainChart() {
  // const [pages, setPages] = useState<number>(1);
  const itemsPerPage = 5;
  const [pageStartIndex, setPageStartIndex] = useState(0);
  const [pageEndIndex, setPageEndIndex] = useState(itemsPerPage - 1);
  const handleNextClick = () => {
    setPageStartIndex(pageEndIndex + 1);
    setPageEndIndex(pageEndIndex + itemsPerPage);
  };

  const handlePrevClick = () => {
    setPageStartIndex(pageStartIndex - itemsPerPage);
    setPageEndIndex(pageEndIndex - itemsPerPage);
  };
  return (
    <PageLayoutContainer>
      <ChartCard
        pageStartIndex={pageStartIndex}
        pageEndIndex={pageEndIndex}
        handleNextClick={handleNextClick}
        handlePrevClick={handlePrevClick}
        // pages={pages}
        pletform={"Melon"}
        updateTime={"2023-08-21 18시"}
        searchValue={""}
        chart={[]}
      />
    </PageLayoutContainer>
  );
}
