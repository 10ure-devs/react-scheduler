export const resizeCanvas = (ctx: CanvasRenderingContext2D, width: number, height: number) => {
  const scaledWidth = width * window.devicePixelRatio;
  ctx.canvas.width = scaledWidth;
  ctx.canvas.height = height * window.devicePixelRatio;
  ctx.canvas.style.width = width + "px";
  ctx.canvas.style.height = height + "px";
  ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
};
