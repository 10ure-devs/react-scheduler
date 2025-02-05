import dayjs from "dayjs";
import { Day } from "@/types/global";

export const daysInYear = (year: number) =>
  (year % 4 === 0 && year % 100 > 0) || year % 400 === 0 ? 366 : 365;

export const getIsBusinessDay = (date: dayjs.Dayjs) => {
  const day = date.day();
  return day !== 0 && day !== 6;
};

export const getDaysInMonths = (date: Day, iterator: number) =>
  dayjs(`${date.year}-${date.month + 1}-${date.dayOfMonth}`)
    .add(iterator, "months")
    .daysInMonth();

export const parseDay = (data: dayjs.Dayjs): Day => {
  return {
    dayName: data.format("ddd"),
    dayOfMonth: data.date(),
    weekOfYear: data.isoWeek(),
    month: data.month(),
    monthName: data.format("MMMM"),
    isBusinessDay: getIsBusinessDay(data),
    isCurrentDay: data.isSame(dayjs(), "day"),
    year: parseInt(data.format("YYYY"))
  };
};

/**
 * Parses a date from a datetime string and returns only the date part.
 * @param date - The datetime string to parse.
 * @returns MM/DD/YYYY
 */
export const parseDateOnlyFromDateTime = (date: Date | string) => {
  return dayjs(date).startOf("day").format("MM/DD/YYYY");
};

// Moving away from moment
export function formatDateToYYYYMMDD(dateIn?: Date | string, includeTime?: boolean): string {
  const date = !dateIn
    ? new Date()
    : typeof dateIn === "string"
    ? new Date(dateIn)
    : new Date(dateIn);

  const year = date.getUTCFullYear();
  const month = String(date.getUTCMonth() + 1).padStart(2, "0");
  const day = String(date.getUTCDate()).padStart(2, "0");

  if (includeTime) {
    const hours = String(date.getUTCHours()).padStart(2, "0");
    const minutes = String(date.getUTCMinutes()).padStart(2, "0");
    const seconds = String(date.getUTCSeconds()).padStart(2, "0");
    return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}.000Z`;
  }

  return `${year}-${month}-${day}`;
}

export function formatDateToMMDDYYYY(dateIn?: Date | string): string {
  if (!dateIn) {
    return formatDateToMMDDYYYY(new Date());
  }

  let date: Date;
  if (typeof dateIn === "string") {
    // If the string only contains a date (no time), parse it directly
    if (dateIn.length === 10) {
      // YYYY-MM-DD format
      const [year, month, day] = dateIn.split("-").map(Number);
      date = new Date(Date.UTC(year, month - 1, day));
    } else {
      date = new Date(dateIn);
    }
  } else {
    date = dateIn;
  }

  const year = date.getUTCFullYear();
  let month = (1 + date.getUTCMonth()).toString();
  month = month.length > 1 ? month : "0" + month;
  let day = date.getUTCDate().toString();
  day = day.length > 1 ? day : "0" + day;

  return month + "/" + day + "/" + year;
}

export function getLocaleDateString(
  dateIn?: Date | string,
  optionsIn?: Intl.DateTimeFormatOptions
): string {
  const date = !dateIn ? new Date() : typeof dateIn === "string" ? new Date(dateIn) : dateIn;

  // ex: DEFAULT:  THURSDAY, 12/23/2021
  const options: Intl.DateTimeFormatOptions = optionsIn ?? {
    weekday: "long",
    year: "numeric",
    month: "numeric",
    day: "numeric"
  };
  return new Date(date).toLocaleDateString("en-us", options);
}
