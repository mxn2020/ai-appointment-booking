import { motion } from "motion/react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import { Download, Calendar as CalendarIcon, Filter } from "lucide-react";

const data = [
  { name: "Jan", bookings: 400, revenue: 2400 },
  { name: "Feb", bookings: 300, revenue: 1398 },
  { name: "Mar", bookings: 200, revenue: 9800 },
  { name: "Apr", bookings: 278, revenue: 3908 },
  { name: "May", bookings: 189, revenue: 4800 },
  { name: "Jun", bookings: 239, revenue: 3800 },
];

const pieData = [
  { name: "Haircut", value: 400 },
  { name: "Massage", value: 300 },
  { name: "Manicure", value: 300 },
  { name: "Facial", value: 200 },
];

const COLORS = ["#000000", "#4f46e5", "#10b981", "#f59e0b"];

export default function Analytics() {
  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      <header className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight text-gray-900">
            Analytics
          </h1>
          <p className="text-gray-500 mt-1">Track your business performance.</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-xl text-sm font-medium hover:bg-gray-50 transition-colors shadow-sm text-gray-700">
            <CalendarIcon size={16} />
            Last 6 Months
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-xl text-sm font-medium hover:bg-gray-800 transition-colors shadow-sm">
            <Download size={16} />
            Export Report
          </button>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold">Revenue Overview</h2>
            <button className="p-2 hover:bg-gray-50 rounded-lg transition-colors">
              <Filter size={16} className="text-gray-500" />
            </button>
          </div>
          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={data}
                margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
              >
                <CartesianGrid
                  strokeDasharray="3 3"
                  vertical={false}
                  stroke="#f0f0f0"
                />
                <XAxis
                  dataKey="name"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 12, fill: "#888" }}
                  dy={10}
                />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 12, fill: "#888" }}
                  tickFormatter={(value) => `$${value}`}
                />
                <Tooltip
                  cursor={{ fill: "#f9fafb" }}
                  contentStyle={{
                    borderRadius: "12px",
                    border: "none",
                    boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                  }}
                />
                <Bar
                  dataKey="revenue"
                  fill="#000"
                  radius={[4, 4, 0, 0]}
                  barSize={32}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 flex flex-col">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold">Top Services</h2>
          </div>
          <div className="flex-1 flex flex-col items-center justify-center relative">
            <div className="h-48 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                    stroke="none"
                  >
                    {pieData.map((_, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{
                      borderRadius: "12px",
                      border: "none",
                      boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>

            <div className="w-full mt-4 space-y-3">
              {pieData.map((item, index) => (
                <div
                  key={item.name}
                  className="flex items-center justify-between text-sm"
                >
                  <div className="flex items-center gap-2">
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: COLORS[index] }}
                    />
                    <span className="text-gray-600 font-medium">
                      {item.name}
                    </span>
                  </div>
                  <span className="font-semibold text-gray-900">
                    {item.value} bookings
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <MetricCard
          title="Average Booking Value"
          value="$124.50"
          trend="+4.2%"
        />
        <MetricCard title="Customer Retention" value="68%" trend="+2.1%" />
        <MetricCard title="No-Show Rate" value="2.4%" trend="-0.8%" />
      </div>
    </div>
  );
}

function MetricCard({ title, value, trend }: any) {
  const isPositive = trend.startsWith("+");
  return (
    <motion.div
      whileHover={{ y: -2 }}
      className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100"
    >
      <h3 className="text-gray-500 text-sm font-medium mb-2">{title}</h3>
      <div className="flex items-end gap-3">
        <p className="text-3xl font-semibold tracking-tight">{value}</p>
        <span
          className={`text-sm font-medium mb-1 ${isPositive ? "text-emerald-600" : "text-rose-600"}`}
        >
          {trend}
        </span>
      </div>
    </motion.div>
  );
}
