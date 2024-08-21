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
            <StyledText bold>{data.title}</StyledText>
            <StyledText>{data.subtitle}</StyledText>
            <StyledDescription>{data.description}</StyledDescription>
            {Boolean(data.cost) && (
              <StyledDescription color={data.bgColor}>Cost: {data.cost}</StyledDescription>
            )}
          </StyledStickyWrapper>
        </StyledTextWrapper>
        {data.crewCount !== undefined && (
          <StyledCrewCountWrapper>
            <Icon iconName="crewIcon" width="16" height="16" />
            <StyledText underline>{`${data.crewCount} Scheduled Crew`}</StyledText>
          </StyledCrewCountWrapper>
        )}
      </StyledInnerWrapper>
    </StyledTileWrapper>
  );
};

export default Tile;
