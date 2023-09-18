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
    }
  }

  if (params === "genie") {
    try {
      // const response: AxiosResponse<ChartDataResponse<GenieDailyChartType>> =
      //   await baseInstance.get(`/songs/daily/${params}/${dateValue}`);
      return test;
    } catch (err) {
      console.error(err);
    }
  }
  if (params === "flo") {
    try {
      const response: AxiosResponse<ChartDataResponse<FloDailyChartType>> =
        await baseInstance.get(`/songs/daily/${params}/${dateValue}`);
      return response;
    } catch (err) {
      console.error(err);
    }
  }
  if (params === "bugs") {
    try {
      const response: AxiosResponse<ChartDataResponse<BugsDailyChartType>> =
        await baseInstance.get(`/songs/daily/${params}/${dateValue}`);
      return response;
    } catch (err) {
      console.error(err);
    }
  }
  if (params === "vibe") {
    try {
      const response: AxiosResponse<ChartDataResponse<VibeDailyChartType>> =
        await baseInstance.get(`/songs/daily/${params}/${dateValue}`);
      return response;
    } catch (err) {
      console.error(err);
    }
  }
};
