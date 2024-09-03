import { SchedulerItemClickData, SchedulerRowLabel } from "@/types/global";

export type LeftColumnItemProps = {
  id: string;
  item: SchedulerRowLabel;
  rows: number;
  hasAParent: boolean;
  onItemClick?: (data: SchedulerItemClickData) => void;
  textButtonLabel?: string;
  onTextButtonClick?: (data: SchedulerItemClickData) => void;
};

export type StyledTextProps = {
  isMain?: boolean;
};

export type StyledLeftColumnItemWrapperProps = {
  rows: number;
  clickable: boolean;
  hasAParent: boolean;
};
