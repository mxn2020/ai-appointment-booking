import { motion } from "motion/react";
import {
  Mail,
  MessageSquare,
  Clock,
  CheckCircle,
  AlertCircle,
} from "lucide-react";

export default function Notifications() {
  return (
    <div className="space-y-8 max-w-4xl mx-auto">
      <header className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight text-gray-900">
            Notifications
          </h1>
          <p className="text-gray-500 mt-1">
            Configure automated messages and reminders.
          </p>
        </div>
        <button className="px-4 py-2 bg-black text-white rounded-xl text-sm font-medium hover:bg-gray-800 transition-colors shadow-sm">
          Save Changes
        </button>
      </header>

      <div className="space-y-6">
        <NotificationSection
          title="Booking Confirmation"
          description="Sent immediately after a booking is confirmed."
          icon={CheckCircle}
          color="text-emerald-500"
          bg="bg-emerald-50"
        />
        <NotificationSection
          title="Upcoming Reminder"
          description="Sent before the appointment to reduce no-shows."
          icon={Clock}
          color="text-blue-500"
          bg="bg-blue-50"
        />
        <NotificationSection
          title="Cancellation Notice"
          description="Sent when an appointment is cancelled."
          icon={AlertCircle}
          color="text-rose-500"
          bg="bg-rose-50"
        />
      </div>
    </div>
  );
}

function NotificationSection({
  title,
  description,
  icon: Icon,
  color,
  bg,
}: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden"
    >
      <div className="p-6 border-b border-gray-100 flex items-start gap-4">
        <div
          className={`w-12 h-12 rounded-2xl ${bg} ${color} flex items-center justify-center flex-shrink-0`}
        >
          <Icon size={24} />
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-gray-900">{title}</h2>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" defaultChecked />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-black"></div>
            </label>
          </div>
          <p className="text-sm text-gray-500 mt-1">{description}</p>
        </div>
      </div>

      <div className="p-6 bg-gray-50/50 space-y-6">
        <div className="flex gap-6">
          <div className="flex-1 space-y-4">
            <div className="flex items-center gap-2 mb-2">
              <Mail size={16} className="text-gray-400" />
              <span className="text-sm font-medium text-gray-700">
                Email Template
              </span>
            </div>
            <input
              type="text"
              defaultValue={`Your appointment is confirmed!`}
              className="w-full px-3 py-2 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-black/5"
            />
            <textarea
              rows={4}
              defaultValue={`Hi {{client_name}},\n\nYour appointment for {{service_name}} is confirmed for {{date}} at {{time}}.\n\nSee you soon!`}
              className="w-full px-3 py-2 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-black/5 resize-none font-mono text-xs"
            />
          </div>

          <div className="flex-1 space-y-4">
            <div className="flex items-center gap-2 mb-2">
              <MessageSquare size={16} className="text-gray-400" />
              <span className="text-sm font-medium text-gray-700">
                SMS / WhatsApp
              </span>
            </div>
            <textarea
              rows={6}
              defaultValue={`Hi {{client_name}}, your {{service_name}} is confirmed for {{date}} at {{time}}. Reply CANCEL to cancel.`}
              className="w-full px-3 py-2 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-black/5 resize-none font-mono text-xs"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
