import { Plus, Search, Edit2, Trash2, Clock, DollarSign } from "lucide-react";
import { motion } from "motion/react";

const services = [
  {
    id: 1,
    name: "Haircut & Styling",
    category: "Hair",
    duration: "60 min",
    price: "$85",
    active: true,
  },
  {
    id: 2,
    type: "Deep Tissue Massage",
    category: "Spa",
    duration: "90 min",
    price: "$120",
    active: true,
  },
  {
    id: 3,
    name: "Manicure & Pedicure",
    category: "Nails",
    duration: "75 min",
    price: "$65",
    active: true,
  },
  {
    id: 4,
    name: "Facial Treatment",
    category: "Skincare",
    duration: "45 min",
    price: "$95",
    active: false,
  },
  {
    id: 5,
    name: "Hair Coloring",
    category: "Hair",
    duration: "120 min",
    price: "$150",
    active: true,
  },
];

export default function Services() {
  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      <header className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight text-gray-900">
            Services
          </h1>
          <p className="text-gray-500 mt-1">
            Manage your offerings and pricing.
          </p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-xl text-sm font-medium hover:bg-gray-800 transition-colors shadow-sm">
          <Plus size={16} />
          Add Service
        </button>
      </header>

      <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-4 border-b border-gray-100 flex items-center justify-between bg-gray-50/50">
          <div className="relative w-64">
            <Search
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              size={16}
            />
            <input
              type="text"
              placeholder="Search services..."
              className="w-full pl-9 pr-4 py-2 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-black/5"
            />
          </div>
          <div className="flex items-center gap-2">
            <select className="bg-white border border-gray-200 text-sm rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black/5">
              <option>All Categories</option>
              <option>Hair</option>
              <option>Spa</option>
              <option>Nails</option>
            </select>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-gray-50/50 text-gray-500 font-medium border-b border-gray-100">
              <tr>
                <th className="px-6 py-4">Service Name</th>
                <th className="px-6 py-4">Category</th>
                <th className="px-6 py-4">Duration</th>
                <th className="px-6 py-4">Price</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {services.map((service, i) => (
                <motion.tr
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  key={service.id}
                  className="hover:bg-gray-50/50 transition-colors group"
                >
                  <td className="px-6 py-4 font-medium text-gray-900">
                    {service.name || service.type}
                  </td>
                  <td className="px-6 py-4 text-gray-500">
                    <span className="px-2.5 py-1 rounded-lg bg-gray-100 text-xs font-medium">
                      {service.category}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-gray-500">
                    <div className="flex items-center gap-1.5">
                      <Clock size={14} className="text-gray-400" />
                      {service.duration}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-gray-900 font-medium">
                    <div className="flex items-center gap-1">
                      <DollarSign size={14} className="text-gray-400" />
                      {service.price.replace("$", "")}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${
                        service.active
                          ? "bg-emerald-50 text-emerald-700"
                          : "bg-gray-100 text-gray-600"
                      }`}
                    >
                      <span
                        className={`w-1.5 h-1.5 rounded-full ${service.active ? "bg-emerald-500" : "bg-gray-400"}`}
                      />
                      {service.active ? "Active" : "Draft"}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="p-1.5 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                        <Edit2 size={16} />
                      </button>
                      <button className="p-1.5 text-gray-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-colors">
                        <Trash2 size={16} />
                      </button>
                    </div>
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
