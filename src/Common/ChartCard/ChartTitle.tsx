import "./css/chartTitle.css";
import { CustomSpan } from "../CustomSpan";
import { PlatformValueType } from "../../Function/pletformValue";

interface ChartTitleType extends PlatformValueType {
  chartType: "daily" | "realTime";
}

export default function ChartTitle(props: ChartTitleType) {
  return (
    <>
      {props.platform !== "Melon100" ? (
        props.chartType === "realTime" ? (
          <CustomSpan
            children={`${props.platform} 실시간 차트`}
            fontSize={18}
            fontWeight={500}
          />
        ) : (
          <CustomSpan
            children={`${props.platform} 일간 차트`}
            fontSize={18}
            fontWeight={500}
          />
        )
      ) : (
        <CustomSpan
          children="Melon Hot 100 차트"
          fontSize={18}
          fontWeight={500}
        />
      )}
    </>
  );
}
