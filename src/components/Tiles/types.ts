import { SchedulerMode, PaginatedSchedulerData, SchedulerProjectData } from "@/types/global";

export type TilesProps = {
  zoom: number;
  data: PaginatedSchedulerData;
  hasAParentSection: boolean;
  onTileClick?: (data: SchedulerProjectData) => void;
  mode?: SchedulerMode;
};

export type PlacedTiles = JSX.Element[];
