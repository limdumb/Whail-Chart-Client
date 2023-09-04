import { CustomSpan } from "./CustomSpan";

interface ChartTitleProps {
  chartType: "daily" | "realTime";
  date?: string;
  platform: string;
}

export default function ChartTitle(props: ChartTitleProps) {
  return (
    <div className="Chart_Intro_Container">
      <div className="Title_Container">
        <CustomSpan
          children={`${props.platform ? props.platform : "Chart"}`}
          fontSize={21}
          fontWeight={500}
        />
      </div>
      <div>
        {props.chartType === "realTime" ? (
          <>
            <CustomSpan
              children="All In One"
              fontSize={14}
              fontWeight={500}
              color="#7c8798"
              marginright={8}
            />
            <CustomSpan
              children="/"
              fontSize={12}
              color="#ced4da"
              marginright={8}
            />
            <CustomSpan
              children="차트가 업데이트 되면 자동으로 차트를 불러옵니다."
              fontSize={13}
              color="#9eabc0"
            />
          </>
        ) : (
          <>
            <CustomSpan
              children="일간 차트"
              fontSize={14}
              fontWeight={500}
              color="#7c8798"
              marginright={8}
            />
            <CustomSpan
              children="/"
              fontSize={12}
              color="#ced4da"
              marginright={8}
            />
            <CustomSpan
              children={props.date ? props.date : "0000-00-00"}
              fontSize={13}
              color="#9eabc0"
            />
          </>
        )}
      </div>
    </div>
  );
}
