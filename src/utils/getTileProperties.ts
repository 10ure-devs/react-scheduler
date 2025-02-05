import dayjs from "dayjs";
import { boxHeight, tileYOffset } from "@/constants";
import { TileProperties } from "@/types/global";
import { formatDateToMMDDYYYY } from "@/utils/dates";
import { getTileXAndWidth } from "./getTileXAndWidth";

export const getTileProperties = (
  row: number,
  startDate: dayjs.Dayjs,
  endDate: dayjs.Dayjs,
  resourceStartDate: Date | string,
  resourceEndDate: Date | string,
  zoom: number
): TileProperties => {
  const y = row * boxHeight + tileYOffset;

  // Use formatDateToMMDDYYYY to get consistent date strings, then parse with dayjs
  const formattedStartDate = formatDateToMMDDYYYY(resourceStartDate);
  const formattedEndDate = formatDateToMMDDYYYY(resourceEndDate);

  const parsedResourceStartDate = dayjs(formattedStartDate, "MM/DD/YYYY").startOf("day");
  const parsedResourceEndDate = dayjs(formattedEndDate, "MM/DD/YYYY").endOf("day");

  return {
    ...getTileXAndWidth(
      { startDate: parsedResourceStartDate, endDate: parsedResourceEndDate },
      { startDate, endDate },
      zoom
    ),
    y
  };
};
