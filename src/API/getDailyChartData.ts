import { AxiosResponse } from "axios";
import { PlatformValueType } from "../Function/pletformValue";
import { baseInstance } from "./instance";

interface ChartDataResponse<T> {
  platform: "Melon" | "Genie" | "Flo" | "Bugs" | "Vibe";
  chart: T[];
  date: string;
  hour: number;
}

interface DailyChartProps extends PlatformValueType {
  date: number;
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

/* 
  Platform 별 Response Data Type 정의
  Platform별 if문 정의 
  데이터호출
*/
export const getDailyChartData = async (props: DailyChartProps) => {
  const params = props.platform.toLowerCase();
  try {
    if (params === "melon") {
      const response: AxiosResponse<ChartDataResponse<MelonDailyChartType>> =
        await baseInstance.get(`/songs/daily/${params}/${props.date}`);
      return response.data;
    }

    if (params === "genie") {
      const response: AxiosResponse<ChartDataResponse<GenieDailyChartType>> =
        await baseInstance.get(`/songs/daily/${params}/${props.date}`);
      return response.data;
    }

    if (params === "flo") {
      const response: AxiosResponse<ChartDataResponse<FloDailyChartType>> =
        await baseInstance.get(`/songs/daily/${params}/${props.date}`);
      return response.data;
    }

    if (params === "bugs") {
      const response: AxiosResponse<ChartDataResponse<BugsDailyChartType>> =
        await baseInstance.get(`/songs/daily/${params}/${props.date}`);
      return response.data;
    }

    if (params === "vibe") {
      const response: AxiosResponse<ChartDataResponse<VibeDailyChartType>> =
        await baseInstance.get(`/songs/daily/${params}/${props.date}`);
      return response.data;
    }

  } catch (err) {
    console.error(err);
  }
};
