import { boxHeight } from "@/constants";
import { theme } from "@/styles";

type DrawCellConfig = {
  ctx: CanvasRenderingContext2D;
  x: number;
  y: number;
  width: number;
  isBusinessDay: boolean;
  isCurrentDay: boolean;
};

export const drawCell = ({ ctx, x, y, width, isBusinessDay, isCurrentDay }: DrawCellConfig) => {
  ctx.strokeStyle = theme.colors.grey400;
  if (isCurrentDay) {
    ctx.fillStyle = theme.colors.blue200;
  } else if (isBusinessDay) {
    ctx.fillStyle = "transparent";
  } else {
    ctx.fillStyle = theme.colors.blue100;
  }
  ctx.beginPath();
  ctx.setLineDash([]);
  ctx.fillRect(x, y, width, boxHeight);
  ctx.strokeRect(x + 0.5, y + 0.5, width, boxHeight);
};
