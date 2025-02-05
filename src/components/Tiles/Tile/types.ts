import { SchedulerMode, SchedulerProjectData } from "@/types/global";

export type TileProps = {
  row: number;
  data: SchedulerProjectData;
  zoom: number;
  crewCount?: number;
  mode?: SchedulerMode;
  onTileClick?: (data: SchedulerProjectData) => void;
};

export type StyledTextProps = {
  bold?: boolean;
  underline?: boolean;
  fontSize?: string;
};
