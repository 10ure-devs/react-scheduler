import { FC } from "react";
import { useCalendar } from "@/context/CalendarProvider";
import { getDatesRange } from "@/utils/getDatesRange";
import { getTileProperties } from "@/utils/getTileProperties";
import { tileDefaultBgColor, boxHeight } from "@/constants";
import { getTileTextColor } from "@/utils/getTileTextColor";
import { SchedulerProjectData } from "@/types/global";
import { getTileTextConfig } from "./helpers";
import {
  StyledTileWrapper,
  StyledInnerWrapper,
  StyledTextWrapper,
  StyledText,
  StyledMissingCredentialsDot,
  StyledTravelText
} from "./positionStyles";
import { TileProps } from "./types";

const formatTileStyles = (
  data: SchedulerProjectData
): {
  bgColor: string;
  border: string;
  color: string;
} => {
  const { title, bgColor, extraData } = data;
  const isMissing = title?.toUpperCase() === "MISSING";
  const isVesselHeader = extraData?.positionRefId === null;

  if (isMissing) {
    return {
      bgColor: isVesselHeader ? "#FF5050" : "#FDDCDA",
      border: isVesselHeader ? "none" : "1px dashed #FF5050",
      color: isVesselHeader ? "#FFFFFF" : "#FF5050"
    };
  }
  return {
    bgColor: data.bgColor ?? tileDefaultBgColor,
    border: "none",
    color: getTileTextColor(bgColor ?? "")
  };
};

const PositionsTile: FC<TileProps> = ({ row, data, zoom, onTileClick }) => {
  const { date } = useCalendar();
  const datesRange = getDatesRange(date, zoom);
  const {
    y: computedY,
    x,
    width
  } = getTileProperties(
    row,
    datesRange.startDate,
    datesRange.endDate,
    data.startDate,
    data.endDate,
    zoom
  );

  const isMissing = data.title?.toUpperCase() === "MISSING";
  const tileHeight = isMissing ? 30 : 58;
  const verticalOffset = isMissing ? (boxHeight - 30) / 2 : 0;
  const y = computedY + verticalOffset;

  const textConfig = getTileTextConfig(data);

  const handleClick = () => {
    onTileClick?.(data);
    if (isMissing) {
      console.log("Missing tile clicked => open Add Crew modal or alert");
    }
  };

  // If no extraData, render original Tile component
  if (!textConfig) {
    return null; // You might want to render the original Tile here or handle differently
  }

  const { bgColor, border, color } = formatTileStyles(data);

  return (
    <StyledTileWrapper
      onClick={handleClick}
      style={{
        left: x,
        top: y,
        width,
        height: tileHeight,
        backgroundColor: bgColor,
        border: border,
        color: color
      }}>
      <StyledInnerWrapper>
        {isMissing ? (
          <StyledTextWrapper isMissing>
            <StyledText bold>{data.title || "MISSING"}</StyledText>
          </StyledTextWrapper>
        ) : (
          <>
            {textConfig.showMissingCredentialsDot && <StyledMissingCredentialsDot />}
            <StyledTextWrapper>
              <StyledText bold>{data.title}</StyledText>
              <StyledText>{textConfig.serviceText}</StyledText>
              {textConfig.travelText && (
                <StyledTravelText>{textConfig.travelText}</StyledTravelText>
              )}
            </StyledTextWrapper>
          </>
        )}
      </StyledInnerWrapper>
    </StyledTileWrapper>
  );
};

export default PositionsTile;
