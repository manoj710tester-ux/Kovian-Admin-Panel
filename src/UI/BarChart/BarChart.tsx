import { useMemo } from "react";
import "./BarChart.scss";

interface BarChartProps {
  data?: Array<{ category: string; value: number }>;
  title?: string;
  maxValue?: number;
}

const BarChart = ({
  data = [
    { category: "Organic", value: 37 },
    { category: "Email", value: 75 },
    { category: "Referral", value: 38 },
    { category: "Adwords", value: 24 },
    { category: "Twitter", value: 13 },
    { category: "Other", value: 23 },
  ],
  title = "Lead Success",
  maxValue = 80,
}: BarChartProps) => {
  const chartData = useMemo(() => {
    const width = 600;
    const height = 300;
    const padding = { top: 20, right: 30, bottom: 50, left: 50 };
    const chartWidth = width - padding.left - padding.right;
    const chartHeight = height - padding.top - padding.bottom;
    const barWidth = (chartWidth / data.length) * 0.6; // Reduced to 60% of original
    const barSpacing = (chartWidth / data.length) * 0.4; // Increased spacing

    // Calculate bar positions and heights
    const bars = data.map((item, index) => {
      const barHeight = (item.value / maxValue) * chartHeight;
      const x = padding.left + index * (barWidth + barSpacing) + barSpacing / 2;
      const y = height - padding.bottom - barHeight;
      return {
        x,
        y,
        width: barWidth,
        height: barHeight,
        value: item.value,
        category: item.category,
      };
    });

    return {
      bars,
      width,
      height,
      padding,
      chartWidth,
      chartHeight,
      maxValue,
    };
  }, [data, maxValue]);

  const yAxisTicks = [0, 20, 40, 60, 80];

  return (
    <div className="bar-chart-container">
      {title && <h3 className="bar-chart-title">{title}</h3>}
      <div className="bar-chart-wrapper">
        <svg
          width={chartData.width}
          height={chartData.height}
          viewBox={`0 0 ${chartData.width} ${chartData.height}`}
          className="bar-chart-svg"
        >
          <defs>
            <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#66CAEC" stopOpacity="1" />
              <stop offset="100%" stopColor="#8b5cf6" stopOpacity="1" />
            </linearGradient>
          </defs>

          {/* Grid lines */}
          {yAxisTicks.map((tick) => {
            const y =
              chartData.height -
              chartData.padding.bottom -
              (tick / chartData.maxValue) * chartData.chartHeight;
            return (
              <line
                key={tick}
                x1={chartData.padding.left}
                y1={y}
                x2={chartData.width - chartData.padding.right}
                y2={y}
                stroke="rgba(255, 255, 255, 0.1)"
                strokeWidth="1"
                strokeDasharray="3 3"
              />
            );
          })}

          {/* Bars */}
          {chartData.bars.map((bar, index) => {
            return (
              <g key={index}>
                <rect
                  x={bar.x}
                  y={bar.y}
                  width={bar.width}
                  height={bar.height}
                  fill="url(#barGradient)"
                  className="bar-chart-bar"
                  rx="4"
                />
              </g>
            );
          })}

          {/* Y-axis */}
          <line
            x1={chartData.padding.left}
            y1={chartData.padding.top}
            x2={chartData.padding.left}
            y2={chartData.height - chartData.padding.bottom}
            stroke="rgba(255, 255, 255, 0.2)"
            strokeWidth="1"
          />

          {/* Y-axis labels */}
          {yAxisTicks.map((tick) => {
            const y =
              chartData.height -
              chartData.padding.bottom -
              (tick / chartData.maxValue) * chartData.chartHeight;
            return (
              <text
                key={tick}
                x={chartData.padding.left - 10}
                y={y + 4}
                fill="rgba(255, 255, 255, 0.6)"
                fontSize="12"
                textAnchor="end"
                className="bar-chart-axis-text"
              >
                {tick}
              </text>
            );
          })}

          {/* X-axis */}
          <line
            x1={chartData.padding.left}
            y1={chartData.height - chartData.padding.bottom}
            x2={chartData.width - chartData.padding.right}
            y2={chartData.height - chartData.padding.bottom}
            stroke="rgba(255, 255, 255, 0.2)"
            strokeWidth="1"
          />

          {/* X-axis labels */}
          {chartData.bars.map((bar, index) => {
            const labelX = bar.x + bar.width / 2;
            return (
              <text
                key={index}
                x={labelX}
                y={chartData.height - chartData.padding.bottom + 20}
                fill="rgba(255, 255, 255, 0.6)"
                fontSize="12"
                textAnchor="middle"
                className="bar-chart-axis-text"
              >
                {bar.category}
              </text>
            );
          })}
        </svg>
      </div>
    </div>
  );
};

export default BarChart;

