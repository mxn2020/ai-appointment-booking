import { motion } from "motion/react";
import {
  Users,
  CalendarCheck,
  XCircle,
  MessageSquare,
  ArrowUpRight,
  ArrowDownRight,
} from "lucide-react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Mon", bookings: 4000, revenue: 2400 },
  { name: "Tue", bookings: 3000, revenue: 1398 },
  { name: "Wed", bookings: 2000, revenue: 9800 },
  { name: "Thu", bookings: 2780, revenue: 3908 },
  { name: "Fri", bookings: 1890, revenue: 4800 },
  { name: "Sat", bookings: 2390, revenue: 3800 },
  { name: "Sun", bookings: 3490, revenue: 4300 },
];

export default function Dashboard() {
  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      <header className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight text-gray-900">
            Dashboard
          </h1>
          <p className="text-gray-500 mt-1">Here's what's happening today.</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="px-4 py-2 bg-white border border-gray-200 rounded-xl text-sm font-medium hover:bg-gray-50 transition-colors shadow-sm">
            Export Report
          </button>
          <button className="px-4 py-2 bg-black text-white rounded-xl text-sm font-medium hover:bg-gray-800 transition-colors shadow-sm">
            New Booking
          </button>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Total Bookings"
          value="1,248"
          trend="+12.5%"
          isPositive={true}
          icon={CalendarCheck}
        />
        <StatCard
          title="Active Customers"
          value="842"
          trend="+5.2%"
          isPositive={true}
          icon={Users}
        />
        <StatCard
          title="Cancellation Rate"
          value="4.2%"
          trend="-1.1%"
          isPositive={true}
          icon={XCircle}
        />
        <StatCard
          title="Bot Success Rate"
          value="92.8%"
          trend="+2.4%"
          isPositive={true}
          icon={MessageSquare}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold">Booking Trends</h2>
            <select className="bg-gray-50 border border-gray-200 text-sm rounded-lg px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-black/5">
              <option>This Week</option>
              <option>This Month</option>
              <option>This Year</option>
            </select>
          </div>
          <div className="h-72 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={data}
                margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
              >
                <defs>
                  <linearGradient
                    id="colorBookings"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop offset="5%" stopColor="#000" stopOpacity={0.1} />
                    <stop offset="95%" stopColor="#000" stopOpacity={0} />
                  </linearGradient>
                </defs>
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
                />
                <Tooltip
                  contentStyle={{
                    borderRadius: "12px",
                    border: "none",
                    boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                  }}
                  cursor={{
                    stroke: "#e5e7eb",
                    strokeWidth: 1,
                    strokeDasharray: "3 3",
                  }}
                />
                <Area
                  type="monotone"
                  dataKey="bookings"
                  stroke="#000"
                  strokeWidth={2}
                  fillOpacity={1}
                  fill="url(#colorBookings)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 flex flex-col">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold">Upcoming Timeline</h2>
            <button className="text-sm text-blue-600 hover:underline">
              View All
            </button>
          </div>
          <div className="flex-1 overflow-y-auto pr-2 space-y-6">
            {[
              {
                time: "09:00 AM",
                name: "Sarah Jenkins",
                service: "Haircut & Styling",
                status: "Confirmed",
              },
              {
                time: "10:30 AM",
                name: "Michael Chen",
                service: "Deep Tissue Massage",
                status: "In Progress",
              },
              {
                time: "01:00 PM",
                name: "Emma Watson",
                service: "Manicure",
                status: "Pending",
              },
              {
                time: "02:45 PM",
                name: "David Miller",
                service: "Consultation",
                status: "Confirmed",
              },
              {
                time: "04:00 PM",
                name: "Olivia Davis",
                service: "Hair Coloring",
                status: "Confirmed",
              },
            ].map((apt, i) => (
              <div key={i} className="flex gap-4 relative">
                <div className="w-16 text-right flex-shrink-0">
                  <span className="text-xs font-medium text-gray-500">
                    {apt.time}
                  </span>
                </div>
                <div className="relative pb-6">
                  {i !== 4 && (
                    <div className="absolute top-2 left-[5px] w-[2px] h-full bg-gray-100" />
                  )}
                  <div
                    className={`w-3 h-3 rounded-full absolute top-1 left-0 border-2 border-white ${
                      apt.status === "In Progress"
                        ? "bg-blue-500"
                        : apt.status === "Pending"
                          ? "bg-amber-400"
                          : "bg-black"
                    }`}
                  />
                  <div className="ml-6">
                    <p className="text-sm font-medium text-gray-900">
                      {apt.name}
                    </p>
                    <p className="text-xs text-gray-500 mt-0.5">
                      {apt.service}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function StatCard({ title, value, trend, isPositive, icon: Icon }: any) {
  return (
    <motion.div
      whileHover={{ y: -2 }}
      className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100"
    >
      <div className="flex items-center justify-between mb-4">
        <div className="w-10 h-10 rounded-2xl bg-gray-50 flex items-center justify-center text-gray-600">
          <Icon size={20} />
        </div>
        <div
          className={`flex items-center gap-1 text-xs font-medium px-2 py-1 rounded-full ${
            isPositive
              ? "text-emerald-700 bg-emerald-50"
              : "text-rose-700 bg-rose-50"
          }`}
        >
          {isPositive ? (
            <ArrowUpRight size={14} />
          ) : (
            <ArrowDownRight size={14} />
          )}
          {trend}
        </div>
      </div>
      <h3 className="text-gray-500 text-sm font-medium">{title}</h3>
      <p className="text-3xl font-semibold mt-1 tracking-tight">{value}</p>
    </motion.div>
  );
}
