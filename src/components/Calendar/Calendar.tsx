import { ChangeEvent, FC, useCallback, useEffect, useMemo, useRef, useState } from "react";
import debounce from "lodash.debounce";
import { useCalendar } from "@/context/CalendarProvider";
import { Day, SchedulerData, SchedulerProjectData, TooltipData, ZoomLevel } from "@/types/global";
import { getTooltipData } from "@/utils/getTooltipData";
import { getDatesRange } from "@/utils/getDatesRange";
import { usePagination } from "@/hooks/usePagination";
import EmptyBox from "../EmptyBox";
import { Grid, Header, LeftColumn, Tooltip } from "..";
import { CalendarProps } from "./types";
import { StyledOuterWrapper, StyledInnerWrapper } from "./styles";

const initialTooltipData: TooltipData = {
  coords: { x: 0, y: 0 },
  resourceIndex: 0,
  disposition: {
    taken: { hours: 0, minutes: 0 },
    free: { hours: 0, minutes: 0 },
    overtime: { hours: 0, minutes: 0 }
  }
};

export const Calendar: FC<CalendarProps> = ({
  data,
  isFullscreen,
  onTileClick,
  onItemClick,
  onTextButtonClick,
  topBarWidth,
  handleClickDownload,
  handleClickAddEvent,
  emptyText,
  emptyTextTwo
}) => {
  const [tooltipData, setTooltipData] = useState<TooltipData>(initialTooltipData);
  const [filteredData, setFilteredData] = useState(data);
  const [isVisible, setIsVisible] = useState(false);
  const [searchPhrase, setSearchPhrase] = useState("");
  const {
    zoom,
    startDate,
    date,
    config: { includeTakenHoursOnWeekendsInDayView }
  } = useCalendar();
  const gridRef = useRef<HTMLDivElement>(null);
  const datesRange = useMemo(() => getDatesRange(date, zoom), [date, zoom]);
  const {
    page,
    projectsPerPerson,
    totalRowsPerPage,
    rowsPerItem,
    currentPageNum,
    pagesAmount,
    next,
    previous,
    reset
  } = usePagination(filteredData, datesRange);
  console.log("Pagination data:", {
    page,
    projectsPerPerson,
    totalRowsPerPage,
    rowsPerItem,
    currentPageNum,
    pagesAmount
  });
  const debouncedHandleMouseOver = useRef(
    debounce(
      (
        e: MouseEvent,
        startDate: Day,
        rowsPerItem: number[],
        projectsPerPerson: SchedulerProjectData[][][],
        zoom: ZoomLevel
      ) => {
        if (!gridRef.current) return;
        const { left, top } = gridRef.current.getBoundingClientRect();
        const tooltipCoords = { x: e.clientX - left, y: e.clientY - top };
        const {
          coords: { x, y },
          resourceIndex,
          disposition
        } = getTooltipData(
          startDate,
          tooltipCoords,
          rowsPerItem,
          projectsPerPerson,
          zoom,
          includeTakenHoursOnWeekendsInDayView
        );
        setTooltipData({ coords: { x, y }, resourceIndex, disposition });
        setIsVisible(true);
      },
      300
    )
  );

  /**
   * Filtering logic:
   * 1. If current is a match, obviously display it
   * 2. If any child of parent is a match, display that parent
   * 3. If parent is a match, display that child
   */
  const debouncedFilterData = useRef(
    debounce((dataToFilter: SchedulerData, enteredSearchPhrase: string) => {
      reset();
      // console.log("full - dataToFilter:", dataToFilter);
      const lowercasePhrase = enteredSearchPhrase.toLowerCase();
      // console.log("in filter - lowercasePhrase:", lowercasePhrase);
      setFilteredData(
        dataToFilter.filter((item) => {
          const parentOfItem = dataToFilter.find(
            (parent) => parent.label.id === item.label.parentId
          );
          const isCurrentItemMatch =
            item.label.title.toLowerCase().includes(lowercasePhrase) ??
            item.label.subtitle?.toLowerCase().includes(lowercasePhrase);
          const childrenIds = dataToFilter
            .filter((maybeChild) => maybeChild.label.parentId === item.id)
            .map((child) => child.id);
          // console.log(`children of ${item.label.title}: `, childrenIds);
          // If any child is a match, we want to display the parent too
          const isAnyChildMatch =
            childrenIds.length &&
            childrenIds.some((childId) => {
              const childData = dataToFilter.find((child) => child.id === childId);
              console.log("in filter - CHILD: ", childData);
              return (
                childData?.label.title.toLowerCase().includes(lowercasePhrase) ||
                (childData?.label.subtitle &&
                  childData?.label.subtitle.toLowerCase().includes(lowercasePhrase))
              );
            });
          // If parent is a match, display that child
          const isParentMatch =
            parentOfItem &&
            (parentOfItem.label.title.toLowerCase().includes(lowercasePhrase) ??
              parentOfItem?.label.subtitle?.toLowerCase().includes(lowercasePhrase));
          return isCurrentItemMatch || isAnyChildMatch || isParentMatch;
        })
      );
      console.log("Filtered data:", filteredData);
    }, 500)
  );

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    const phrase = event.target.value;
    setSearchPhrase(phrase);
    debouncedFilterData.current.cancel();
    debouncedFilterData.current(data, phrase);
  };

  const handleMouseLeave = useCallback(() => {
    debouncedHandleMouseOver.current.cancel();
    setIsVisible(false);
    setTooltipData(initialTooltipData);
  }, []);

  useEffect(() => {
    const handleMouseOver = () => {};
    // const handleMouseOver = (e: MouseEvent) =>
    //   debouncedHandleMouseOver.current(e, startDate, rowsPerItem, projectsPerPerson, zoom);
    const gridArea = gridRef.current;

    if (!gridArea) return;

    gridArea.addEventListener("mousemove", handleMouseOver);
    gridArea.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      gridArea.removeEventListener("mousemove", handleMouseOver);
      gridArea.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [debouncedHandleMouseOver, handleMouseLeave, projectsPerPerson, rowsPerItem, startDate, zoom]);

  useEffect(() => {
    if (searchPhrase) return;

    setFilteredData(data);
  }, [data, searchPhrase]);

  return (
    <StyledOuterWrapper>
      <LeftColumn
        isFullscreen={isFullscreen ?? false}
        data={page}
        pageNum={currentPageNum}
        pagesAmount={pagesAmount}
        rows={rowsPerItem}
        onLoadNext={next}
        onLoadPrevious={previous}
        searchInputValue={searchPhrase}
        onSearchInputChange={handleSearch}
        onItemClick={onItemClick}
        onTextButtonClick={onTextButtonClick}
      />
      <StyledInnerWrapper>
        <Header
          zoom={zoom}
          topBarWidth={topBarWidth}
          handleClickDownload={handleClickDownload}
          handleClickAddEvent={handleClickAddEvent}
        />
        {data.length ? (
          <Grid
            data={page}
            zoom={zoom}
            rows={totalRowsPerPage}
            ref={gridRef}
            onTileClick={onTileClick}
          />
        ) : (
          <EmptyBox emptyText={emptyText} emptyTextTwo={emptyTextTwo} />
        )}
        {isVisible && tooltipData?.resourceIndex > -1 && (
          <Tooltip tooltipData={tooltipData} zoom={zoom} />
        )}
      </StyledInnerWrapper>
    </StyledOuterWrapper>
  );
};

export default Calendar;
