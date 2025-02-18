import dayjs from "dayjs";
import { SchedulerProjectData } from "@/types/global";
import { formatDateToMMDDYYYY } from "@/utils/dates";

type TileTextConfig = {
  serviceText: string;
  travelText: string | null;
  showMissingCredentialsDot: boolean;
  useShorthand: boolean;
};

export const getTileTextConfig = (data: SchedulerProjectData): TileTextConfig | null => {
  if (!data.extraData) return null;

  const {
    serviceStartedAt,
    serviceEndedAt,
    crewOnTravelStart,
    crewOnTravelEnd,
    crewOffTravelStart,
    crewOffTravelEnd,
    missingCredentials
  } = data.extraData;

  const duration = dayjs(data.endDate)
    .startOf("day")
    .diff(dayjs(data.startDate).startOf("day"), "days");
  const useShorthand = duration < 3;

  // Format the service dates using formatDateToMMDDYYYY
  const serviceText =
    serviceStartedAt && serviceEndedAt
      ? `${useShorthand ? "S:" : "Service:"} ${formatDateToMMDDYYYY(
          serviceStartedAt
        )} - ${formatDateToMMDDYYYY(serviceEndedAt)}`
      : "";

  // Format the travel dates using formatDateToMMDDYYYY
  const travelText = (() => {
    if (crewOnTravelStart && crewOffTravelEnd) {
      return `${useShorthand ? "T:" : "Travel:"} ${formatDateToMMDDYYYY(
        crewOnTravelStart
      )} - ${formatDateToMMDDYYYY(crewOffTravelEnd)}`;
    }

    if (crewOnTravelStart && crewOnTravelEnd) {
      return `${useShorthand ? "TS:" : "Travel At Start:"} ${formatDateToMMDDYYYY(
        crewOnTravelStart
      )} - ${formatDateToMMDDYYYY(crewOnTravelEnd)}`;
    }

    if (crewOffTravelStart && crewOffTravelEnd) {
      return `${useShorthand ? "TE:" : "Travel At End:"} ${formatDateToMMDDYYYY(
        crewOffTravelStart
      )} - ${formatDateToMMDDYYYY(crewOffTravelEnd)}`;
    }

    return null;
  })();

  return {
    serviceText,
    travelText,
    showMissingCredentialsDot: !!missingCredentials,
    useShorthand
  };
};
