import { PageLayoutContainer } from "../App";
import ChartCard from "../Common/ChartCard/ChartCard";

export default function MainChart() {
  return (
    <PageLayoutContainer>
      <ChartCard pletform={"Melon"} updateTime={"2023-08-21 18시"} searchValue={""} chart={[]} />
    </PageLayoutContainer>
  );
}
