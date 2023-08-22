import { useState } from "react";
import { PageLayoutContainer } from "../App";
import ChartCard from "../Common/ChartCard/ChartCard";

export default function MainChart() {
  const [pages, setPages] = useState<number>(1);
  return (
    <PageLayoutContainer>
      <ChartCard
        pages={pages}
        pletform={"Melon"}
        updateTime={"2023-08-21 18시"}
        searchValue={""}
        chart={[]}
      />
    </PageLayoutContainer>
  );
}
