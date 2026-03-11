import { Search, Filter, MoreHorizontal, Mail, Phone } from "lucide-react";
import { motion } from "motion/react";

const customers = [
  {
    id: 1,
    name: "Emma Watson",
    email: "emma.w@example.com",
    phone: "+1 (555) 123-4567",
    visits: 12,
    lastVisit: "2 days ago",
    status: "VIP",
  },
  {
    id: 2,
    name: "Michael Chen",
    email: "m.chen@example.com",
    phone: "+1 (555) 987-6543",
    visits: 4,
    lastVisit: "1 week ago",
    status: "Regular",
  },
  {
    id: 3,
    name: "Sarah Jenkins",
    email: "sarah.j@example.com",
    phone: "+1 (555) 456-7890",
    visits: 1,
    lastVisit: "Today",
    status: "New",
  },
  {
    id: 4,
    name: "David Miller",
    email: "david.m@example.com",
    phone: "+1 (555) 234-5678",
    visits: 28,
    lastVisit: "3 weeks ago",
    status: "VIP",
  },
  {
    id: 5,
    name: "Olivia Davis",
    email: "olivia.d@example.com",
    phone: "+1 (555) 876-5432",
    visits: 8,
    lastVisit: "1 month ago",
    status: "Regular",
  },
];

export default function Customers() {
  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      <header className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight text-gray-900">
            Customers
          </h1>
          <p className="text-gray-500 mt-1">
            View and manage your client base.
          </p>
        </div>
        <button className="px-4 py-2 bg-black text-white rounded-xl text-sm font-medium hover:bg-gray-800 transition-colors shadow-sm">
          Export CSV
        </button>
      </header>

      <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-4 border-b border-gray-100 flex items-center justify-between bg-gray-50/50">
          <div className="relative w-80">
            <Search
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              size={16}
            />
            <input
              type="text"
              placeholder="Search by name, email, or phone..."
              className="w-full pl-9 pr-4 py-2 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-black/5"
            />
          </div>
          <button className="flex items-center gap-2 px-3 py-2 bg-white border border-gray-200 rounded-xl text-sm font-medium hover:bg-gray-50 transition-colors shadow-sm text-gray-700">
            <Filter size={16} />
            Filter
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-gray-50/50 text-gray-500 font-medium border-b border-gray-100">
              <tr>
                <th className="px-6 py-4">Customer</th>
                <th className="px-6 py-4">Contact</th>
                <th className="px-6 py-4">Total Visits</th>
                <th className="px-6 py-4">Last Visit</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4 text-right"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {customers.map((customer, i) => (
                <motion.tr
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  key={customer.id}
                  className="hover:bg-gray-50/50 transition-colors group cursor-pointer"
                >
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center text-gray-600 font-medium text-xs">
                        {customer.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </div>
                      <span className="font-medium text-gray-900">
                        {customer.name}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-gray-500 space-y-1">
                    <div className="flex items-center gap-2">
                      <Mail size={12} className="text-gray-400" />
                      <span className="text-xs">{customer.email}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone size={12} className="text-gray-400" />
                      <span className="text-xs">{customer.phone}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-gray-900 font-medium">
                    {customer.visits}
                  </td>
                  <td className="px-6 py-4 text-gray-500">
                    {customer.lastVisit}
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${
                        customer.status === "VIP"
                          ? "bg-purple-50 text-purple-700"
                          : customer.status === "New"
                            ? "bg-blue-50 text-blue-700"
                            : "bg-gray-100 text-gray-700"
                      }`}
                    >
                      {customer.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="p-1.5 text-gray-400 hover:text-black hover:bg-gray-100 rounded-lg transition-colors opacity-0 group-hover:opacity-100">
                      <MoreHorizontal size={16} />
                    </button>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
