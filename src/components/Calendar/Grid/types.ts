import { SchedulerMode, PaginatedSchedulerData, SchedulerProjectData } from "@/types/global";

export type GridProps = {
  zoom: number;
  rows: number;
  data: PaginatedSchedulerData;
  onTileClick?: (data: SchedulerProjectData) => void;
  mode?: SchedulerMode;
};

export type StyledSpanProps = {
  position: "left" | "right";
};
