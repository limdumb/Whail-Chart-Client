import { AxiosResponse } from "axios";
import { baseInstance } from "./instance";
import { PlatformValueType } from "../Function/pletformValue";

interface ChartDataResponse {
  platform: "Melon" | "Genie" | "Flo" | "Bugs" | "Vibe";
  chart: SongDataType[];
  date: string;
  hour: number;
}

interface Props extends PlatformValueType {
  chartType: "daily" | "realTime";
}

export interface SongDataType {
  rank: number;
  previous: number;
  likes: string;
  song: {
    id: number;
    name: string;
    image: string;
    artists: {
      id: number;
      name: string;
      image: string;
    };
  };
}

export const getChartData = async (props: Props) => {
  const params = props.platform.toLowerCase();
  console.log(params)
  const response: AxiosResponse<ChartDataResponse> = await baseInstance.get(
    `/songs/${params}`
  );

  return response.data;
};
