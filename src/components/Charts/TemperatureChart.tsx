import {
  LineChart,
  Line,
  ResponsiveContainer,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";
import metrics from "../../../lib/data/metrics";

export default function TemperatureChart() {
  const data = metrics.tempratures.map((item) => {
    const DateAndTime = item.timestamp.split(" ");
    let x = {
      date: DateAndTime[0],
      time: DateAndTime[1],
      CPU: item.cpuTemp,
      GPU: item.gpuTemp,
      RAM: item.ramTemp,
    };
    return x;
  });
  return (
    <ResponsiveContainer
      width="90%"
      height={500}
      className="mx-auto overflow-hidden"
    >
      <LineChart data={data}>
        <Line
          type={"monotone"}
          dataKey={"GPU"}
          stroke="#FF0000"
          strokeWidth={2}
        />
        <Line
          type={"monotone"}
          dataKey={"CPU"}
          stroke="#FFFF00"
          strokeWidth={2}
        />
        <Line
          type={"monotone"}
          dataKey={"RAM"}
          stroke="#CCCC"
          strokeWidth={2}
        />
        <CartesianGrid stroke="#CCC" strokeDasharray="3 3" />
        <XAxis fontSize={10} dataKey={"time"} />
        <YAxis />
        <Tooltip />
        <Legend />
      </LineChart>
    </ResponsiveContainer>
  );
}
