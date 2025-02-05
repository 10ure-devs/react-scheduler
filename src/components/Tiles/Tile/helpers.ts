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
  const travelText =
    crewOnTravelStart && crewOffTravelEnd
      ? `${useShorthand ? "T:" : "Travel:"} ${formatDateToMMDDYYYY(
          crewOnTravelStart
        )} - ${formatDateToMMDDYYYY(crewOffTravelEnd)}`
      : null;

  return {
    serviceText,
    travelText,
    showMissingCredentialsDot: !!missingCredentials,
    useShorthand
  };
};
