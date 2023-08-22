import { CustomSpan } from "../CustomSpan";

interface ChartTitleType{
  pletform: "Melon" | "Genie" | "Flo" | "Bugs" | "Vibe";
}

export default function ChartTitle(props:ChartTitleType) {
  return (
    <>
      <CustomSpan
        children={`${props.pletform} 실시간 차트`}
        fontSize={18}
        fontWeight={500}
      />
    </>
  );
}
