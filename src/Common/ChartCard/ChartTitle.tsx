import { CustomSpan } from "../CustomSpan";

interface ChartTitleType {
  chartType: "daily" | "realTime";
  pletform: "Melon" | "Genie" | "Flo" | "Bugs" | "Vibe";
}

export default function ChartTitle(props: ChartTitleType) {
  return (
    <>
      {props.chartType === "realTime" ? (
        <CustomSpan
          children={`${props.pletform} 실시간 차트`}
          fontSize={18}
          fontWeight={500}
        />
      ) : (
        <CustomSpan
          children={`${props.pletform} 일간 차트`}
          fontSize={18}
          fontWeight={500}
        />
      )}
    </>
  );
}
