import { dayWidth, singleDayWidth } from "@/constants";
import { DatesRange } from "./getDatesRange";

export const getTileXAndWidth = (item: DatesRange, range: DatesRange, zoom: number) => {
  // console.log("getTileXAndWidth input:", { item, range, zoom });
  const cellWidth = zoom === 0 ? singleDayWidth : dayWidth;

  const getX = () => {
    const position = (item.startDate.diff(range.startDate, "day") + 1) * cellWidth;
    // console.log("getX calculation:", {
    //   position,
    //   cellWidth,
    //   itemStartDate: item.startDate.toISOString(),
    //   rangeStartDate: range.startDate.toISOString()
    // });
    return Math.max(0, position);
  };

  let width = 0;
  let x = getX();

  if (item.startDate.isBefore(range.startDate)) {
    width = item.endDate.diff(range.startDate, "day") * cellWidth + cellWidth;
    x = 0;
  } else if (item.endDate.isAfter(range.endDate)) {
    width = range.endDate.diff(item.startDate, "day") * cellWidth + cellWidth;
  } else {
    width = item.endDate.diff(item.startDate, "day") * cellWidth + cellWidth;
  }

  width = Math.max(0, width);

  // console.log("getTileXAndWidth result:", { x, width });
  return { x, width };
};
