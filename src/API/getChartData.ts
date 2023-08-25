import { AxiosResponse } from "axios";
import { baseInstance } from "./instance";
import { SongDataType } from "../Common/ChartCard/ChartCard";

interface ChartDataResponse {
  pletform: "Melon" | "Genie" | "Flo" | "Bugs" | "Vibe";
  chart: SongDataType[];
  date: string
  hour: number
}

export const getChartData = async () => {
  const response: AxiosResponse<ChartDataResponse> = await baseInstance.get(
    "/songs"
  );
  return response;
};
