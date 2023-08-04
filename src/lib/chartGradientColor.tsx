import { ChartArea } from "chart.js";

export const createGradient = (
  ctx: CanvasRenderingContext2D,
  area: ChartArea,
  colors: [number, string][]
) => {
  const gradient = ctx.createLinearGradient(0, area.bottom, 0, area.top);

  for (const [a, b] of colors) {
    gradient.addColorStop(a, b);
  }

  console.log(gradient);
  return gradient;
};
