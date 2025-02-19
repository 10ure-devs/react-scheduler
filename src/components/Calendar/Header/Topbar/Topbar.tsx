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
  Spacer
} from "./styles";
import { TopbarProps } from "./types";
import RangeSelector from "./RangeSelector/RangeSelector";

const Topbar: FC<TopbarProps> = ({
  addButtonText,
  width,
  handleClickDownload,
  handleClickAddEvent
}) => {
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
    onClearFilterData,
    zoom: currentZoom,
    changeZoom
  } = useCalendar();
  const { colors } = useTheme();
  console.log("Topbar - currentZoom: ", currentZoom);
  const handleRangeChange = (value: "week" | "month") => {
    if (value === "month") {
      changeZoom(1); // Show Month
    } else {
      changeZoom(0); // Show Week
    }
  };

  return (
    <Wrapper width={width}>
      <LeftSide>
        <TodayButton onClick={handleGoToday}>{topbar.today}</TodayButton>
      </LeftSide>
      <RightSide>
        <RangeSelector value={currentZoom === 1 ? "month" : "week"} onChange={handleRangeChange} />
        <Spacer />
        {handleClickDownload && (
          <DownloadButton onClick={handleClickDownload}>Download</DownloadButton>
        )}
        {handleClickAddEvent && (
          <AddEventButton onClick={handleClickAddEvent}>
            {addButtonText ?? "Add Event"}
          </AddEventButton>
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
