import { AxiosResponse } from "axios";
import { baseInstance } from "./instance";
import { SongDataType } from "../Common/ChartCard/ChartCard";

interface ChartDataResponse {
  platform: "Melon" | "Genie" | "Flo" | "Bugs" | "Vibe";
  chart: SongDataType[];
  date: string;
  hour: number;
}

interface Props {
  platform: string;
}

export const getChartData = async (props: Props) => {
    // const response: AxiosResponse<ChartDataResponse> = await baseInstance.get(
    //   `/songs/${props.platform}`
    // );
    const test:ChartDataResponse = {
      platform: "Melon",
      chart: [],
      date: "",
      hour: 0
    }
    return test;
};
