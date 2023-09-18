import { AxiosResponse } from "axios";
import { PlatformValueType } from "../Function/pletformValue";
import { baseInstance } from "./instance";
import { transformDate } from "../Function/transformDate";
import dummydata from "./dummydata";

interface ChartDataResponse<T> {
  platform: "Melon" | "Genie" | "Flo" | "Bugs" | "Vibe";
  chart: T[];
  date: string;
  hour: number;
}

interface DailyChartProps extends PlatformValueType {
  date: Date;
}

interface MelonDailyChartType {
  rank: number;
  previous: number;
  likes: string;
  count: number;
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

interface GenieDailyChartType {
  rank: number;
  previous: number;
  listnerCount: string;
  playCount: string;
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

interface BugsDailyChartType {
  rank: number;
  previous: number;
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

interface VibeDailyChartType {
  rank: number;
  previous: number;
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

interface FloDailyChartType {
  rank: number;
  previous: number;
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

export const getDailyChartData = async (props: DailyChartProps) => {
  const params = props.platform.toLowerCase();
<<<<<<< HEAD
  const dateParams = transformDate(props.date);
  const test = dummydata()

  const dateValue = `${dateParams.year}${dateParams.month}${dateParams.day}`;
  if (params === "melon") {
    try {
      const response: AxiosResponse<ChartDataResponse<MelonDailyChartType>> =
        await baseInstance.get(`/songs/daily/${params}/${dateValue}`);
      return response;
    } catch (err) {
      console.error(err);
=======
  try {
    if (params === "melon") {
      const response: AxiosResponse<ChartDataResponse<MelonDailyChartType>> =
        await baseInstance.get(`/songs/daily/${params}/${props.date}`);
      return response.data;
>>>>>>> 283abc04b9c01f630c8f7e0fc0ff677d350c9a09
    }

<<<<<<< HEAD
  if (params === "genie") {
    try {
      // const response: AxiosResponse<ChartDataResponse<GenieDailyChartType>> =
      //   await baseInstance.get(`/songs/daily/${params}/${dateValue}`);
      return test;
    } catch (err) {
      console.error(err);
=======
    if (params === "genie") {
      const response: AxiosResponse<ChartDataResponse<GenieDailyChartType>> =
        await baseInstance.get(`/songs/daily/${params}/${props.date}`);
      return response.data;
>>>>>>> 283abc04b9c01f630c8f7e0fc0ff677d350c9a09
    }

    if (params === "flo") {
      const response: AxiosResponse<ChartDataResponse<FloDailyChartType>> =
<<<<<<< HEAD
        await baseInstance.get(`/songs/daily/${params}/${dateValue}`);
      return response;
    } catch (err) {
      console.error(err);
=======
        await baseInstance.get(`/songs/daily/${params}/${props.date}`);
      return response.data;
>>>>>>> 283abc04b9c01f630c8f7e0fc0ff677d350c9a09
    }

    if (params === "bugs") {
      const response: AxiosResponse<ChartDataResponse<BugsDailyChartType>> =
<<<<<<< HEAD
        await baseInstance.get(`/songs/daily/${params}/${dateValue}`);
      return response;
    } catch (err) {
      console.error(err);
=======
        await baseInstance.get(`/songs/daily/${params}/${props.date}`);
      return response.data;
>>>>>>> 283abc04b9c01f630c8f7e0fc0ff677d350c9a09
    }

    if (params === "vibe") {
      const response: AxiosResponse<ChartDataResponse<VibeDailyChartType>> =
<<<<<<< HEAD
        await baseInstance.get(`/songs/daily/${params}/${dateValue}`);
      return response;
    } catch (err) {
      console.error(err);
=======
        await baseInstance.get(`/songs/daily/${params}/${props.date}`);
      return response.data;
>>>>>>> 283abc04b9c01f630c8f7e0fc0ff677d350c9a09
    }

  } catch (err) {
    console.error(err);
  }
};
