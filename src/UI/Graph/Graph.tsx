import { useMemo } from "react";
import "./Graph.scss";

interface GraphProps {
  data?: Array<{ month: string; value: number }>;
  title?: string;
}

const Graph = ({
  data = [
    { month: "Jan", value: 10 },
    { month: "Feb", value: 180 },
    { month: "Mar", value: 120 },
    { month: "Apr", value: 230 },
    { month: "May", value: 170 },
    { month: "Jun", value: 340 },
    { month: "July", value: 350 },
    { month: "Aug", value: 430 },
    { month: "Sep", value: 270 },
    { month: "Oct", value: 290 },
  ],
  title,
}: GraphProps) => {
  const chartData = useMemo(() => {
    const maxValue = 500;
    const minValue = 0;
    const width = 600;
    const height = 250;
    const padding = { top: 20, right: 20, bottom: 30, left: 40 };
    const chartWidth = width - padding.left - padding.right;
    const chartHeight = height - padding.top - padding.bottom;

    // Calculate points for the area chart
    const points = data.map((item, index) => {
      const x = (index / (data.length - 1)) * chartWidth + padding.left;
      const y =
        height -
        padding.bottom -
        ((item.value - minValue) / (maxValue - minValue)) * chartHeight;
      return { x, y, value: item.value, month: item.month };
    });

    // Create path for area
    let areaPath = `M ${points[0].x} ${height - padding.bottom}`;
    points.forEach((point) => {
      areaPath += ` L ${point.x} ${point.y}`;
    });
    areaPath += ` L ${points[points.length - 1].x} ${
      height - padding.bottom
    } Z`;

    // Create path for line
    let linePath = `M ${points[0].x} ${points[0].y}`;
    points.slice(1).forEach((point) => {
      linePath += ` L ${point.x} ${point.y}`;
    });

    return {
      points,
      areaPath,
      linePath,
      width,
      height,
      padding,
      chartWidth,
      chartHeight,
      maxValue,
      minValue,
    };
  }, [data]);

  const yAxisTicks = [0, 100, 200, 300, 400, 500];
  const xAxisLabels = data.map((item) => item.month);

  return (
    <div className="graph-container">
      {title && <h3 className="graph-title">{title}</h3>}
      <div className="graph-wrapper">
        <svg
          width={chartData.width}
          height={chartData.height}
          viewBox={`0 0 ${chartData.width} ${chartData.height}`}
          className="graph-svg"
        >
          <defs>
            <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#66CAEC" stopOpacity="0.8" />
              <stop offset="95%" stopColor="#66CAEC" stopOpacity="0.1" />
            </linearGradient>
          </defs>

          {/* Grid lines */}
          {yAxisTicks.map((tick) => {
            const y =
              chartData.height -
              chartData.padding.bottom -
              ((tick - chartData.minValue) /
                (chartData.maxValue - chartData.minValue)) *
                chartData.chartHeight;
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

          {/* Area */}
          <path
            d={chartData.areaPath}
            fill="url(#areaGradient)"
            className="graph-area"
          />

          {/* Line */}
          <path
            d={chartData.linePath}
            fill="none"
            stroke="#66CAEC"
            strokeWidth="2"
            className="graph-line"
          />

          {/* Data points */}
          {chartData.points.map((point, index) => (
            <circle
              key={index}
              cx={point.x}
              cy={point.y}
              r="4"
              fill="#66CAEC"
              className="graph-dot"
            />
          ))}

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
              ((tick - chartData.minValue) /
                (chartData.maxValue - chartData.minValue)) *
                chartData.chartHeight;
            return (
              <text
                key={tick}
                x={chartData.padding.left - 10}
                y={y + 4}
                fill="rgba(255, 255, 255, 0.6)"
                fontSize="12"
                textAnchor="end"
                className="graph-axis-text"
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
          {xAxisLabels.map((label, index) => {
            const x =
              (index / (xAxisLabels.length - 1)) * chartData.chartWidth +
              chartData.padding.left;
            return (
              <text
                key={index}
                x={x}
                y={chartData.height - chartData.padding.bottom + 20}
                fill="rgba(255, 255, 255, 0.6)"
                fontSize="12"
                textAnchor="middle"
                className="graph-axis-text"
              >
                {label}
              </text>
            );
          })}
        </svg>
      </div>
    </div>
  );
};

export default Graph;
