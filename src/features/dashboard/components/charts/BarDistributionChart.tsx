import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from "recharts";

export type DistributionPoint = {
  label: string;
  value: number;
};

type BarDistributionChartProps = {
  data: DistributionPoint[];
};

const BarDistributionChart = ({ data }: BarDistributionChartProps) => {
  return (
    <div className="h-56">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ top: 12, right: 8, left: -10, bottom: 0 }}>
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
          <Bar dataKey="value" fill="#3daa78" radius={[6, 6, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BarDistributionChart;
