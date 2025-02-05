import { ThemeProvider } from "styled-components";
import { useEffect, useMemo, useRef, useState } from "react";
import dayjs from "dayjs";
import { Calendar } from "@/components";
import CalendarProvider from "@/context/CalendarProvider";
import LocaleProvider from "@/context/LocaleProvider";
import { GlobalStyle, theme } from "@/styles";
import { Config, SchedulerData, SchedulerProjectData } from "@/types/global";
import { outsideWrapperId } from "@/constants";
import { SchedulerProps } from "./types";
import { StyledInnerWrapper, StyledOutsideWrapper } from "./styles";

const Scheduler = ({
  data,
  config,
  startDate,
  isFullscreen,
  onRangeChange,
  onTileClick,
  onFilterData,
  onClearFilterData,
  onItemClick,
  onTextButtonClick,
  handleClickDownload,
  handleClickAddEvent,
  isLoading,
  minHeight,
  emptyText,
  emptyTextTwo,
  mode
}: SchedulerProps) => {
  // Process data to add missing slots
  const processedData = useMemo(() => {
    if (mode !== "positions") return data;

    return data.map((row) => {
      // Skip parent rows (those without parentId)
      if (!row.label.parentId) return row;

      const sortedData = [...row.data].sort(
        (a, b) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime()
      );

      // Find gaps between assignments
      const gaps: SchedulerProjectData[] = [];
      for (let i = 0; i < sortedData.length - 1; i++) {
        const currentEnd = new Date(sortedData[i].endDate);
        const nextStart = new Date(sortedData[i + 1].startDate);

        // If gap is more than 1 day
        if (nextStart.getTime() - currentEnd.getTime() > 24 * 60 * 60 * 1000) {
          gaps.push({
            id: `missing-${row.id}-${i}`,
            startDate: currentEnd,
            endDate: nextStart,
            occupancy: 0,
            title: "MISSING",
            description: `No crew assigned for ${row.label.title}`,
            bgColor: "#F56565" // Red color for missing slots
          });
        }
      }

      // Add gaps to the data
      return {
        ...row,
        data: [...sortedData, ...gaps].sort(
          (a, b) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime()
        )
      };
    });
  }, [data, mode]);
  console.log("mode: ", mode);
  const appConfig: Config = useMemo(
    () => ({
      zoom: mode === "positions" ? 1 : 0, // 1 = Month View, 0 = Week View
      filterButtonState: 1,
      mode,
      includeTakenHoursOnWeekendsInDayView: false,
      ...config
    }),
    [config, mode]
  );

  const outsideWrapperRef = useRef<HTMLDivElement>(null);
  const [topBarWidth, setTopBarWidth] = useState(outsideWrapperRef.current?.clientWidth);
  const defaultStartDate = useMemo(() => dayjs(startDate), [startDate]);

  // If you want to handle any special layout logic for positions:
  if (mode === "positions") {
    console.log("positions portion");
    // e.g. adjust left column grouping logic or style
    // ...
  }

  useEffect(() => {
    const handleResize = () => {
      if (outsideWrapperRef.current) {
        setTopBarWidth(outsideWrapperRef.current.clientWidth);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!outsideWrapperRef.current) null;
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <LocaleProvider lang={appConfig.lang}>
          <CalendarProvider
            data={processedData}
            isLoading={!!isLoading}
            config={appConfig}
            onRangeChange={onRangeChange}
            defaultStartDate={defaultStartDate}
            onFilterData={onFilterData}
            onClearFilterData={onClearFilterData}>
            <StyledOutsideWrapper
              showScroll={!!data.length}
              isFullscreen={isFullscreen}
              id={outsideWrapperId}
              ref={outsideWrapperRef}
              minHeight={minHeight}>
              <StyledInnerWrapper>
                <Calendar
                  isFullscreen={isFullscreen ?? false}
                  data={data}
                  onTileClick={onTileClick}
                  topBarWidth={topBarWidth ?? 0}
                  onItemClick={onItemClick}
                  onTextButtonClick={onTextButtonClick}
                  handleClickDownload={handleClickDownload}
                  handleClickAddEvent={handleClickAddEvent}
                  emptyText={emptyText}
                  emptyTextTwo={emptyTextTwo}
                />
              </StyledInnerWrapper>
            </StyledOutsideWrapper>
          </CalendarProvider>
        </LocaleProvider>
      </ThemeProvider>
    </>
  );
};

export default Scheduler;
