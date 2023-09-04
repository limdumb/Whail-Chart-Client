import { AxiosResponse } from "axios";
import { baseInstance } from "./instance";
import { SongDataType } from "../Common/ChartCard/ChartCard";
import dummydata from "./dummydata";

interface ChartDataResponse {
  platform: "Melon" | "Genie" | "Flo" | "Bugs" | "Vibe";
  chart: SongDataType[];
  date: string;
  hour: number;
}

interface Props {
  chartType: "daily" | "realTime";
  platform: string;
}

export const getChartData = async (props: Props) => {
  // const response: AxiosResponse<ChartDataResponse> = await baseInstance.get(
  //   `/songs/${props.platform}`
  // );

  const test: ChartDataResponse = dummydata();
  return test;

  // return response.data
};
