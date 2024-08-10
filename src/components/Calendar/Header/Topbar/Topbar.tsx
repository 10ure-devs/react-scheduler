import { useTheme } from "styled-components";
import { FC, MouseEventHandler } from "react";
import { Icon, IconButton } from "@/components";
import { useCalendar } from "@/context/CalendarProvider";
import { useLanguage } from "@/context/LocaleProvider";
import {
  NavigationWrapper,
  Wrapper,
  NavBtn,
  Today,
  Zoom,
  Filters,
  LeftSide,
  RightSide,
  TodayButton,
  DownloadButton,
  AddEventButton,
  RangeSelector,
  RangeOption,
  Spacer
} from "./styles";
import { TopbarProps } from "./types";

const Topbar: FC<TopbarProps> = ({ width, handleClickDownload, handleClickAddEvent }) => {
  const { topbar } = useLanguage();
  const {
    data,
    config,
    handleGoNext,
    handleGoPrev,
    handleGoToday,
    zoomIn,
    zoomOut,
    isNextZoom,
    isPrevZoom,
    handleFilterData,
    onClearFilterData
  } = useCalendar();
  const { colors } = useTheme();
  const { filterButtonState = -1, zoom: initialZoom } = config;

  const handleRangeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (e.target.value === "week") {
      zoomIn(); // Assuming zoomIn sets zoom to 1
    } else if (e.target.value === "month") {
      zoomOut(); // Assuming zoomOut sets zoom to 0
    }
  };

  return (
    <Wrapper width={width}>
      <LeftSide>
        <TodayButton onClick={handleGoToday}>{topbar.today}</TodayButton>
      </LeftSide>
      <RightSide>
        <RangeSelector onChange={handleRangeChange}>
          <RangeOption value="week">Week View</RangeOption>
          <RangeOption value="month">Month View</RangeOption>
        </RangeSelector>

        <Spacer />
        {handleClickDownload && (
          <DownloadButton onClick={handleClickDownload}>Download</DownloadButton>
        )}
        {handleClickAddEvent && (
          <AddEventButton onClick={handleClickAddEvent}>Add Event</AddEventButton>
        )}
      </RightSide>
    </Wrapper>
  );

  // return (
  //   <Wrapper width={width}>
  //     {/* <Filters>
  //       {filterButtonState >= 0 && (
  //         <IconButton
  //           variant={filterButtonState ? "filled" : "outlined"}
  //           iconName="filter"
  //           width="16"
  //           height="16"
  //           onClick={handleFilterData}>
  //           {topbar.filters}
  //           {!!filterButtonState && (
  //             <span onClick={handleClearFilters}>
  //               <Icon iconName="close" height="16" width="16" />
  //             </span>
  //           )}
  //         </IconButton>
  //       )}
  //     </Filters> */}
  //     <NavigationWrapper>
  //       <NavBtn disabled={!data?.length} onClick={handleGoPrev}>
  //         <Icon iconName="arrowLeft" height="15" fill="#3B3C5F" />
  //         {topbar.prev}
  //       </NavBtn>
  //       <Today onClick={handleGoToday}>{topbar.today}</Today>
  //       <NavBtn disabled={!data?.length} onClick={handleGoNext}>
  //         {topbar.next}
  //         <Icon iconName="arrowRight" height="15" fill={colors.blue900} />
  //       </NavBtn>
  //     </NavigationWrapper>
  //     <Zoom>
  //       {topbar.view}
  //       <IconButton
  //         isDisabled={!isPrevZoom}
  //         onClick={zoomOut}
  //         isFullRounded
  //         iconName="subtract"
  //         width="14"
  //       />
  //       <IconButton
  //         isDisabled={!isNextZoom}
  //         onClick={zoomIn}
  //         isFullRounded
  //         iconName="add"
  //         width="14"
  //       />
  //     </Zoom>
  //   </Wrapper>
  // );
};
export default Topbar;
