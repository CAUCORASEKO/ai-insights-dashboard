import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from "recharts";

export type TrendPoint = {
  label: string;
  value: number;
};

type AreaTrendChartProps = {
  data: TrendPoint[];
};

const AreaTrendChart = ({ data }: AreaTrendChartProps) => {
  return (
    <div className="h-56">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data} margin={{ top: 12, right: 8, left: -10, bottom: 0 }}>
          <defs>
            <linearGradient id="trendFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#1b9dff" stopOpacity={0.35} />
              <stop offset="100%" stopColor="#1b9dff" stopOpacity={0.02} />
            </linearGradient>
          </defs>
          <CartesianGrid stroke="#e6e8ee" strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="label" tick={{ fill: "#5c6685", fontSize: 12 }} />
          <YAxis tick={{ fill: "#5c6685", fontSize: 12 }} />
          <Tooltip
            contentStyle={{
              borderRadius: 12,
              borderColor: "#e6e8ee",
              fontSize: 12
            }}
          />
          <Area
            type="monotone"
            dataKey="value"
            stroke="#1b9dff"
            strokeWidth={2}
            fill="url(#trendFill)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AreaTrendChart;
