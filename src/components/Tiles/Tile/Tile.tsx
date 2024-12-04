import { FC } from "react";
import { useCalendar } from "@/context/CalendarProvider";
import { Icon } from "@/components";
import { getDatesRange } from "@/utils/getDatesRange";
import { getTileProperties } from "@/utils/getTileProperties";
import { tileDefaultBgColor } from "@/constants";
import { getTileTextColor } from "@/utils/getTileTextColor";
import {
  StyledCrewCountWrapper,
  StyledDescription,
  StyledInnerWrapper,
  StyledStickyWrapper,
  StyledText,
  StyledTextWrapper,
  StyledTileWrapper
} from "./styles";
import { TileProps } from "./types";

const Tile: FC<TileProps> = ({ row, data, zoom, onTileClick }) => {
  const { date } = useCalendar();
  const datesRange = getDatesRange(date, zoom);
  const { y, x, width } = getTileProperties(
    row,
    datesRange.startDate,
    datesRange.endDate,
    data.startDate,
    data.endDate,
    zoom
  );

  const isLessThan3DaysLong =
    new Date(data.endDate).getTime() - new Date(data.startDate).getTime() < 3 * 24 * 60 * 60 * 1000;

  const isLessThan2DaysLong =
    new Date(data.endDate).getTime() - new Date(data.startDate).getTime() < 2 * 24 * 60 * 60 * 1000;

  const crewCountText = isLessThan2DaysLong
    ? `${data.crewCount}`
    : isLessThan3DaysLong
    ? `${data.crewCount} Crew`
    : `${data.crewCount} Scheduled Crew`;

  return (
    <StyledTileWrapper
      style={{
        left: `${x}px`,
        top: `${y}px`,
        backgroundColor: `${data.bgColor ?? tileDefaultBgColor}`,
        width: `${width}px`,
        color: getTileTextColor(data.bgColor ?? "")
      }}
      onClick={() => onTileClick?.(data)}>
      <StyledInnerWrapper>
        <StyledTextWrapper>
          <StyledStickyWrapper>
            {data.title && !isLessThan2DaysLong && <StyledText bold>{data.title}</StyledText>}
            {data.subtitle && !isLessThan2DaysLong && (
              <StyledText>{` | ${data.subtitle}`}</StyledText>
            )}
            {data.description && !isLessThan3DaysLong && (
              <StyledDescription>{data.description}</StyledDescription>
            )}
            {Boolean(data.cost) && !isLessThan3DaysLong && (
              <StyledDescription color={data.bgColor}>Cost: {data.cost}</StyledDescription>
            )}
          </StyledStickyWrapper>
        </StyledTextWrapper>
        {data.crewCount !== undefined && (
          <StyledCrewCountWrapper>
            <Icon iconName="crewIcon" width="14" height="14" />
            <StyledText fontSize="10px" underline>
              {crewCountText}
            </StyledText>
          </StyledCrewCountWrapper>
        )}
      </StyledInnerWrapper>
    </StyledTileWrapper>
  );
};

export default Tile;
