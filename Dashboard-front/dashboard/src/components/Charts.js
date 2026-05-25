import { Pie, Line } from "react-chartjs-2";

export default function Charts({ logs }) {
  const levelsCount = { INFO: 0, WARN: 0, ERROR: 0 };
  logs.forEach(log => levelsCount[log.level] += log.count);

  const pieData = {
    labels: ["INFO", "WARN", "ERROR"],
    datasets: [{ data: Object.values(levelsCount), backgroundColor: ["#36A2EB", "#FFCE56", "#FF6384"] }]
  };

  return (
    <div>
      <Pie data={pieData} />
      {/* Line chart can be built similarly by grouping logs per day */}
    </div>
  );
}
