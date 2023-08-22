import { AxiosResponse } from "axios";
import { baseInstance } from "./instance";
import { SongDataType } from "../Common/ChartCard/ChartCard";

interface ChartDataResponse {
  pletform: string;
  chart: SongDataType[];
}

export const getChartData = async () => {
  const response: AxiosResponse<ChartDataResponse> = await baseInstance.get(
    "/songs"
  );
  return response;
};
