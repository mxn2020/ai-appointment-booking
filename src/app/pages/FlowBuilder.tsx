import { useState } from "react";
import { motion } from "motion/react";
import {
  Plus,
  Settings,
  MessageSquare,
  Calendar,
  User,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

export default function FlowBuilder() {
  const [nodes] = useState([
    {
      id: 1,
      type: "trigger",
      title: "User starts chat",
      icon: MessageSquare,
      color: "bg-blue-500",
    },
    {
      id: 2,
      type: "action",
      title: "Ask for Service",
      icon: Settings,
      color: "bg-purple-500",
    },
    {
      id: 3,
      type: "action",
      title: "Show Available Dates",
      icon: Calendar,
      color: "bg-emerald-500",
    },
    {
      id: 4,
      type: "action",
      title: "Collect Details",
      icon: User,
      color: "bg-amber-500",
    },
    {
      id: 5,
      type: "end",
      title: "Confirm Booking",
      icon: CheckCircle,
      color: "bg-black",
    },
  ]);

  return (
    <div className="h-full flex flex-col max-w-7xl mx-auto">
      <header className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight text-gray-900">
            Flow Builder
          </h1>
          <p className="text-gray-500 mt-1">
            Design your AI booking conversation.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button className="px-4 py-2 bg-white border border-gray-200 rounded-xl text-sm font-medium hover:bg-gray-50 transition-colors shadow-sm">
            Test Flow
          </button>
          <button className="px-4 py-2 bg-black text-white rounded-xl text-sm font-medium hover:bg-gray-800 transition-colors shadow-sm">
            Publish
          </button>
        </div>
      </header>

      <div className="flex-1 bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden flex relative">
        {/* Canvas Area */}
        <div
          className="flex-1 bg-gray-50/50 p-8 overflow-auto relative"
          style={{
            backgroundImage: "radial-gradient(#e5e7eb 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        >
          <div className="flex flex-col items-center space-y-8 py-12">
            {nodes.map((node, index) => (
              <div
                key={node.id}
                className="relative flex flex-col items-center"
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="w-64 bg-white p-4 rounded-2xl shadow-sm border border-gray-200 flex items-center gap-4 cursor-pointer z-10"
                >
                  <div
                    className={`w-10 h-10 rounded-xl ${node.color} text-white flex items-center justify-center flex-shrink-0`}
                  >
                    <node.icon size={20} />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-gray-900">
                      {node.title}
                    </h3>
                    <p className="text-xs text-gray-500 capitalize">
                      {node.type} Node
                    </p>
                  </div>
                </motion.div>

                {index < nodes.length - 1 && (
                  <div className="h-8 w-px bg-gray-300 relative">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white border border-gray-300 rounded-full flex items-center justify-center">
                      <ArrowRight
                        size={10}
                        className="text-gray-400 rotate-90"
                      />
                    </div>
                  </div>
                )}
              </div>
            ))}

            <button className="w-12 h-12 rounded-full bg-white border border-dashed border-gray-300 flex items-center justify-center text-gray-400 hover:text-black hover:border-black transition-colors z-10">
              <Plus size={24} />
            </button>
          </div>
        </div>

        {/* Properties Panel */}
        <div className="w-80 border-l border-gray-100 bg-white p-6 overflow-y-auto">
          <h2 className="text-lg font-semibold mb-6">Node Properties</h2>
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Node Title
              </label>
              <input
                type="text"
                defaultValue="Ask for Service"
                className="w-full px-3 py-2 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-black/5"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Bot Message
              </label>
              <textarea
                rows={4}
                defaultValue="What service would you like to book today?"
                className="w-full px-3 py-2 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-black/5 resize-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Expected Input
              </label>
              <select className="w-full px-3 py-2 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-black/5">
                <option>Service Selection</option>
                <option>Date & Time</option>
                <option>Text Input</option>
                <option>Multiple Choice</option>
              </select>
            </div>
            <div className="pt-4 border-t border-gray-100">
              <button className="w-full px-4 py-2 bg-black text-white rounded-xl text-sm font-medium hover:bg-gray-800 transition-colors">
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
