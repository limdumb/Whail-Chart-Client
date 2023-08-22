import { SongDataType } from "../Common/ChartCard/ChartCard";

export const sliceData =(chart:SongDataType[], pages:number, perPages:number) => {
  const startIndex = (pages - 1) * perPages;
  const endIndex = startIndex + perPages;
  const pageItems = chart.slice(startIndex, endIndex);

  return pageItems
}