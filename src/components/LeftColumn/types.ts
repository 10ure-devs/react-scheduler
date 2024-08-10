import { PaginatedSchedulerData, SchedulerItemClickData } from "@/types/global";

export type LeftColumnProps = {
  isFullscreen: boolean;
  data: PaginatedSchedulerData;
  rows: number[];
  pageNum: number;
  pagesAmount: number;
  onLoadNext: () => void;
  onLoadPrevious: () => void;
  searchInputValue: string;
  onSearchInputChange: React.ChangeEventHandler<HTMLInputElement>;
  onItemClick?: (data: SchedulerItemClickData) => void;
  onTextButtonClick?: (data: SchedulerItemClickData) => void;
};

export type StyledInputWrapperProps = {
  isFocused: boolean;
};

export type StyledLeftColumnWrapperProps = {
  isFullscreen: boolean;
};
