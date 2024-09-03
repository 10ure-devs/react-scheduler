import {
  Config,
  SchedulerData,
  SchedulerItemClickData,
  SchedulerProjectData
} from "@/types/global";
import { ParsedDatesRange } from "@/utils/getDatesRange";

export type SchedulerProps = {
  data: SchedulerData;
  isLoading?: boolean;
  isFullscreen: boolean;
  config?: Config;
  startDate?: string;
  minHeight?: string;
  emptyText?: string;
  emptyTextTwo?: string;
  onRangeChange?: (range: ParsedDatesRange) => void;
  onTileClick?: (data: SchedulerProjectData) => void;
  onFilterData?: () => void;
  onClearFilterData?: () => void;
  onItemClick?: (data: SchedulerItemClickData) => void;
  onTextButtonClick?: (data: SchedulerItemClickData) => void;
  handleClickDownload?: () => void;
  handleClickAddEvent?: () => void;
};

export type StyledOutsideWrapperProps = {
  showScroll: boolean;
  isFullscreen: boolean;
  minHeight?: string;
};
