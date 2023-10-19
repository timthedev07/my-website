import { FC, useEffect, useRef, useState } from "react";
import { PolarArea } from "react-chartjs-2";
import {
  Chart as ChartJS,
  RadialLinearScale,
  ArcElement,
  Title,
  Legend,
  Tooltip,
} from "chart.js";
import {
  hexColorTransparentize,
  rgbaColorTransparentize,
} from "../../../lib/colorTransparentize";
import { createGradient } from "../../../lib/chartGradientColor";

ChartJS.register(RadialLinearScale, ArcElement, Title, Legend, Tooltip);

interface CASStrandsHoursProps {
  creativityHours?: number;
  activityHours?: number;
  serviceHours?: number;
}

const transparentizeGradients = (
  gradients: (string | number)[][][],
  opacity = 1
) => {
  return gradients.map((a) => {
    return a.map((each) => [
      each[0],
      rgbaColorTransparentize(each[1] as string, opacity),
    ]);
  });
};

const HOVER_OPACITY = 0.9;
const NORMAL_OPACITY = 0.7;

const gradients = [
  [
    [0, "rgb(216, 82, 207)"],
    [1, "rgb(107, 48, 214)"],
  ],
  [
    [0, "rgb(109, 223, 215)"],
    [1, "rgb(51, 116, 239)"],
  ],
  [
    [0, "rgb(243, 194, 78)"],
    [1, "rgb(232, 129, 98)"],
  ],
];

export const CASStrandsHours: FC<CASStrandsHoursProps> = ({
  activityHours = 0,
  creativityHours = 0,
  serviceHours = 0,
}) => {
  const data = [creativityHours, activityHours, serviceHours];
  const chartRef = useRef<ChartJS>(null);
  const [bg, setBg] = useState<any>(() =>
    transparentizeGradients(gradients, NORMAL_OPACITY).map(
      (each) => each[0][1] as string
    )
  );
  const [hoverBg, setHoverBg] = useState<any>(() => {
    transparentizeGradients(gradients, HOVER_OPACITY).map(
      (each) => each[0][1] as string
    );
  });

  useEffect(() => {
    const chart = chartRef.current;

    if (!chart) {
      return;
    }

    const gradientColors = transparentizeGradients(
      gradients,
      NORMAL_OPACITY
    ).map((each) => createGradient(chart.ctx, chart.chartArea, each as any));

    const hoverGradientColors = transparentizeGradients(
      gradients,
      HOVER_OPACITY
    ).map((each) => createGradient(chart.ctx, chart.chartArea, each as any));

    setBg(gradientColors);
    setHoverBg(hoverGradientColors);
  }, []);

  return (
    <div className="w-full h-full my-12 bg-slate-800/50 backdrop-blur-xl shadow-2xl border border-slate-400/30 p-12 relative max-w-[512px] max-h-[612px] rounded-xl flex justify-center items-center mx-auto">
      <PolarArea
        ref={chartRef as any}
        options={{
          responsive: true,
          maintainAspectRatio: true,
          aspectRatio: 0.7,
          plugins: {
            tooltip: {
              enabled: true,
              backgroundColor: hexColorTransparentize("#0f172a", 0.6),
              callbacks: {
                label(tooltipItem) {
                  return (
                    tooltipItem.dataset.data[tooltipItem.dataIndex] + " hours"
                  );
                },
              },
            },
            legend: {
              position: "top",
              labels: {
                color: hexColorTransparentize("#f8fafc", 0.7),
                pointStyle: "rectRounded",
                pointStyleWidth: 55,
                usePointStyle: true,
              },
            },
            title: {
              display: true,
              text: "CAS Hours",
              color: hexColorTransparentize("#f8fafc", 0.8),
              font: {
                family: "Open Sans",
                size: 18,
              },
            },
          },
          borderColor: "transparent",
          scales: {
            r: {
              ticks: {
                backdropColor: "rgba(0, 0, 0, 0)",
                color: hexColorTransparentize("#f8fafc", 0.55),
              },
              grid: { color: hexColorTransparentize("#cbd5e1", 0.15) },
            },
          },
        }}
        data={{
          datasets: [
            {
              data,
              backgroundColor: bg,
              hoverBackgroundColor: hoverBg,
            },
          ],
          labels: ["Creativity", "Activity", "Service"],
        }}
      />
    </div>
  );
};
