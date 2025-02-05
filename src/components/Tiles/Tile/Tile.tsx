// src/components/Tiles/Tile/Tile.tsx
import { FC } from "react";
import { useCalendar } from "@/context/CalendarProvider";
import { Icon } from "@/components";
import { getDatesRange } from "@/utils/getDatesRange";
import { getTileProperties } from "@/utils/getTileProperties";
import { tileDefaultBgColor, boxHeight } from "@/constants";
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

/**
 * Renders a single event tile for the scheduler grid.
 * - Normal “service” or “travel” tiles use standard styling
 * - “Missing” tiles have special styles (pale-red background, dashed border, smaller height)
 */
const Tile: FC<TileProps> = ({ row, data, zoom, onTileClick }) => {
  const { date } = useCalendar();
  // Retrieve the date range from context for positioning logic
  const datesRange = getDatesRange(date, zoom);

  // Calculate x, y, and width for the tile, based on start/end dates
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

  // Check if tile is "MISSING" type
  const isMissing = data.title?.toUpperCase() === "MISSING";

  // For missing tiles: smaller height, special background/border, etc.
  const missingHeight = 30;
  const standardHeight = 58;

  // The tile is normally placed at `computedY`.
  // For a missing tile (30px high) to appear centered in a 65px row, we offset it:
  const tileHeight = isMissing ? missingHeight : standardHeight;
  const verticalOffset = isMissing ? (boxHeight - missingHeight) / 2 : 0;

  // Final y-position
  const y = computedY + verticalOffset;

  /**
   * Check event length so we can show/hide certain text conditionally
   * (like "service" or "description" in short tiles).
   */
  const isLessThan3DaysLong =
    new Date(data.endDate).getTime() - new Date(data.startDate).getTime() < 3 * 24 * 60 * 60 * 1000;

  const isLessThan2DaysLong =
    new Date(data.endDate).getTime() - new Date(data.startDate).getTime() < 2 * 24 * 60 * 60 * 1000;

  // Determine how to display a crew count if present
  const crewCountText = isLessThan2DaysLong
    ? `${data.crewCount}`
    : isLessThan3DaysLong
    ? `${data.crewCount} Crew`
    : `${data.crewCount} Scheduled Crew`;

  const handleClick = () => {
    console.log("click - data: ", data);
    onTileClick?.(data);
    // Optionally handle MISSING-specific logic:
    if (isMissing) {
      console.log("Missing tile clicked => open 'Add Crew' modal or alert");
    }
  };

  return (
    <StyledTileWrapper
      onClick={handleClick}
      style={{
        left: x,
        top: y,
        width: width,
        height: tileHeight,
        // If missing, apply special styles, else use normal fallback
        backgroundColor: isMissing ? "#FDDCDA" : data.bgColor ?? tileDefaultBgColor,
        border: isMissing ? "1px dashed #FF5050" : "none",
        color: isMissing ? "#FF5050" : getTileTextColor(data.bgColor ?? "")
      }}>
      <StyledInnerWrapper>
        {/*
          If tile is missing, show simpler text. 
          Otherwise, show normal "title/subtitle/description/crew count"
        */}
        {isMissing ? (
          <StyledTextWrapper style={{ justifyContent: "flex-start" }}>
            <StyledText bold style={{ textAlign: "left" }}>
              {/* For clarity, you might use data.description or “Missing” text */}
              {data.title || "MISSING"}
            </StyledText>
          </StyledTextWrapper>
        ) : (
          <>
            <StyledTextWrapper>
              <StyledStickyWrapper>
                {/* Show main text (title, etc.) if not extremely short */}
                {data.title && !isLessThan2DaysLong && <StyledText bold>{data.title}</StyledText>}
                {data.subtitle && !isLessThan2DaysLong && (
                  <StyledText>{" | " + data.subtitle}</StyledText>
                )}
                {/* Show longer description in bigger tiles */}
                {data.description && !isLessThan3DaysLong && (
                  <StyledDescription>{data.description}</StyledDescription>
                )}
                {Boolean(data.cost) && !isLessThan3DaysLong && (
                  <StyledDescription color={data.bgColor}>Cost: {data.cost}</StyledDescription>
                )}
              </StyledStickyWrapper>
            </StyledTextWrapper>

            {/*
              If a crewCount is present, show it at bottom-right.
              For extremely short blocks, we just show a small label or none.
            */}
            {data.crewCount !== undefined && (
              <StyledCrewCountWrapper>
                <Icon iconName="crewIcon" width="14" height="14" />
                <StyledText fontSize="10px" underline>
                  {crewCountText}
                </StyledText>
              </StyledCrewCountWrapper>
            )}
          </>
        )}
      </StyledInnerWrapper>
    </StyledTileWrapper>
  );
};

export default Tile;
