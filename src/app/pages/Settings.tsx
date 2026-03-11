import { useState } from "react";
import { Save, Building, Clock, CreditCard, Users, Shield, Plus, Trash2 } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function Settings() {
  const [activeTab, setActiveTab] = useState("Business Profile");

  return (
    <div className="space-y-8 max-w-4xl mx-auto pb-12">
      <header className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight text-gray-900">
            Settings
          </h1>
          <p className="text-gray-500 mt-1">
            Manage your business preferences.
          </p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-xl text-sm font-medium hover:bg-gray-800 transition-colors shadow-sm">
          <Save size={16} />
          Save Changes
        </button>
      </header>

      <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden flex flex-col md:flex-row min-h-[600px]">
        {/* Settings Sidebar */}
        <div className="w-full md:w-64 border-b md:border-b-0 md:border-r border-gray-100 bg-gray-50/50 p-4 space-y-1">
          <SettingsTab icon={Building} label="Business Profile" active={activeTab === "Business Profile"} onClick={() => setActiveTab("Business Profile")} />
          <SettingsTab icon={Clock} label="Business Hours" active={activeTab === "Business Hours"} onClick={() => setActiveTab("Business Hours")} />
          <SettingsTab icon={CreditCard} label="Payments" active={activeTab === "Payments"} onClick={() => setActiveTab("Payments")} />
          <SettingsTab icon={Users} label="Staff & Roles" active={activeTab === "Staff & Roles"} onClick={() => setActiveTab("Staff & Roles")} />
          <SettingsTab icon={Shield} label="Booking Policies" active={activeTab === "Booking Policies"} onClick={() => setActiveTab("Booking Policies")} />
        </div>

        {/* Settings Content */}
        <div className="flex-1 p-8 relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute inset-0 p-8 overflow-y-auto"
            >
              {activeTab === "Business Profile" && <BusinessProfile />}
              {activeTab === "Business Hours" && <BusinessHours />}
              {activeTab === "Payments" && <Payments />}
              {activeTab === "Staff & Roles" && <StaffAndRoles />}
              {activeTab === "Booking Policies" && <BookingPolicies />}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

function BusinessProfile() {
  return (
    <div className="max-w-xl space-y-8">
      <div>
        <h2 className="text-xl font-semibold text-gray-900 mb-6">
          Business Profile
        </h2>

        <div className="space-y-6">
          <div className="flex items-center gap-6">
            <div className="w-20 h-20 rounded-2xl bg-gray-100 border border-gray-200 flex items-center justify-center overflow-hidden">
              <span className="text-gray-400 font-medium text-sm">
                Logo
              </span>
            </div>
            <div>
              <button className="px-4 py-2 bg-white border border-gray-200 rounded-xl text-sm font-medium hover:bg-gray-50 transition-colors shadow-sm">
                Upload Logo
              </button>
              <p className="text-xs text-gray-500 mt-2">
                Recommended size: 512x512px
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Business Name
              </label>
              <input
                type="text"
                defaultValue="Aura Spa & Salon"
                className="w-full px-3 py-2 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-black/5"
              />
            </div>
            <div className="col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Description
              </label>
              <textarea
                rows={3}
                defaultValue="Premium spa and salon services in downtown."
                className="w-full px-3 py-2 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-black/5 resize-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                defaultValue="hello@auraspa.com"
                className="w-full px-3 py-2 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-black/5"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                defaultValue="+1 (555) 000-0000"
                className="w-full px-3 py-2 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-black/5"
              />
            </div>
            <div className="col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Address
              </label>
              <input
                type="text"
                defaultValue="123 Wellness Ave, Suite 100"
                className="w-full px-3 py-2 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-black/5"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="pt-8 border-t border-gray-100">
        <h2 className="text-xl font-semibold text-gray-900 mb-6">
          Timezone & Currency
        </h2>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Timezone
            </label>
            <select className="w-full px-3 py-2 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-black/5">
              <option>Pacific Time (PT)</option>
              <option>Eastern Time (ET)</option>
              <option>Central Time (CT)</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Currency
            </label>
            <select className="w-full px-3 py-2 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-black/5">
              <option>USD ($)</option>
              <option>EUR (€)</option>
              <option>GBP (£)</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

function BusinessHours() {
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  return (
    <div className="max-w-xl space-y-8">
      <div>
        <h2 className="text-xl font-semibold text-gray-900 mb-6">Business Hours</h2>
        <div className="space-y-4">
          {days.map((day, i) => (
            <div key={day} className="flex items-center justify-between p-4 bg-gray-50/50 rounded-xl border border-gray-100">
              <div className="flex items-center gap-4 w-32">
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" defaultChecked={i < 5} />
                  <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-black"></div>
                </label>
                <span className="text-sm font-medium text-gray-700">{day}</span>
              </div>
              <div className="flex items-center gap-2">
                <select className="px-3 py-1.5 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-black/5 disabled:opacity-50" disabled={i >= 5}>
                  <option>09:00 AM</option>
                  <option>10:00 AM</option>
                </select>
                <span className="text-gray-400">-</span>
                <select className="px-3 py-1.5 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-black/5 disabled:opacity-50" disabled={i >= 5}>
                  <option>05:00 PM</option>
                  <option>06:00 PM</option>
                </select>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Payments() {
  return (
    <div className="max-w-xl space-y-8">
      <div>
        <h2 className="text-xl font-semibold text-gray-900 mb-6">Payment Integration</h2>
        
        <div className="p-6 border border-gray-200 rounded-2xl flex items-start gap-4 mb-6">
          <div className="w-12 h-12 bg-[#635BFF]/10 text-[#635BFF] rounded-xl flex items-center justify-center flex-shrink-0">
            <CreditCard size={24} />
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between mb-1">
              <h3 className="text-base font-semibold text-gray-900">Stripe</h3>
              <span className="px-2.5 py-1 bg-emerald-50 text-emerald-700 text-xs font-medium rounded-full">Connected</span>
            </div>
            <p className="text-sm text-gray-500 mb-4">Accept credit cards, Apple Pay, and Google Pay.</p>
            <button className="px-4 py-2 bg-gray-50 border border-gray-200 rounded-xl text-sm font-medium hover:bg-gray-100 transition-colors text-gray-700">
              Manage Connection
            </button>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-sm font-medium text-gray-900">Payment Requirements</h3>
          
          <label className="flex items-start gap-3 p-4 border border-gray-200 rounded-xl cursor-pointer hover:bg-gray-50/50 transition-colors">
            <input type="radio" name="payment_req" className="mt-1 text-black focus:ring-black" defaultChecked />
            <div>
              <p className="text-sm font-medium text-gray-900">Require full payment</p>
              <p className="text-xs text-gray-500 mt-0.5">Clients must pay the full amount to secure their booking.</p>
            </div>
          </label>
          
          <label className="flex items-start gap-3 p-4 border border-gray-200 rounded-xl cursor-pointer hover:bg-gray-50/50 transition-colors">
            <input type="radio" name="payment_req" className="mt-1 text-black focus:ring-black" />
            <div>
              <p className="text-sm font-medium text-gray-900">Require deposit</p>
              <p className="text-xs text-gray-500 mt-0.5">Clients pay a percentage upfront, and the rest in person.</p>
            </div>
          </label>

          <label className="flex items-start gap-3 p-4 border border-gray-200 rounded-xl cursor-pointer hover:bg-gray-50/50 transition-colors">
            <input type="radio" name="payment_req" className="mt-1 text-black focus:ring-black" />
            <div>
              <p className="text-sm font-medium text-gray-900">No payment required</p>
              <p className="text-xs text-gray-500 mt-0.5">Clients book for free and pay in person.</p>
            </div>
          </label>
        </div>
      </div>
    </div>
  );
}

function StaffAndRoles() {
  const staff = [
    { name: 'Steve Jobs', role: 'Owner / Admin', email: 'steve@auraspa.com' },
    { name: 'Sarah Jenkins', role: 'Stylist', email: 'sarah@auraspa.com' },
    { name: 'Michael Chen', role: 'Massage Therapist', email: 'michael@auraspa.com' },
  ];

  return (
    <div className="max-w-2xl space-y-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-900">Staff Members</h2>
        <button className="flex items-center gap-2 px-3 py-1.5 bg-black text-white rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors">
          <Plus size={16} />
          Add Staff
        </button>
      </div>

      <div className="border border-gray-200 rounded-2xl overflow-hidden">
        <table className="w-full text-left text-sm">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="px-4 py-3 font-medium text-gray-500">Name</th>
              <th className="px-4 py-3 font-medium text-gray-500">Role</th>
              <th className="px-4 py-3 font-medium text-gray-500 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {staff.map((s, i) => (
              <tr key={i} className="hover:bg-gray-50/50">
                <td className="px-4 py-3">
                  <div className="font-medium text-gray-900">{s.name}</div>
                  <div className="text-xs text-gray-500">{s.email}</div>
                </td>
                <td className="px-4 py-3">
                  <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded-md text-xs font-medium">
                    {s.role}
                  </span>
                </td>
                <td className="px-4 py-3 text-right">
                  <button className="p-1.5 text-gray-400 hover:text-rose-600 rounded-lg transition-colors">
                    <Trash2 size={16} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function BookingPolicies() {
  return (
    <div className="max-w-xl space-y-8">
      <div>
        <h2 className="text-xl font-semibold text-gray-900 mb-6">Booking Policies</h2>
        
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Cancellation Window</label>
            <p className="text-xs text-gray-500 mb-3">How far in advance can clients cancel or reschedule?</p>
            <select className="w-full px-3 py-2 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-black/5">
              <option>Up to 24 hours before</option>
              <option>Up to 48 hours before</option>
              <option>Up to 12 hours before</option>
              <option>Anytime</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Advance Booking Limit</label>
            <p className="text-xs text-gray-500 mb-3">How far in the future can clients book appointments?</p>
            <select className="w-full px-3 py-2 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-black/5">
              <option>3 months in advance</option>
              <option>6 months in advance</option>
              <option>1 year in advance</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Minimum Notice</label>
            <p className="text-xs text-gray-500 mb-3">How much notice do you need for a new booking?</p>
            <select className="w-full px-3 py-2 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-black/5">
              <option>2 hours</option>
              <option>4 hours</option>
              <option>24 hours</option>
              <option>No minimum notice</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

function SettingsTab({ icon: Icon, label, active, onClick }: any) {
  return (
    <button
      onClick={onClick}
      className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${
        active
          ? "bg-white text-black shadow-sm border border-gray-200/60"
          : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
      }`}
    >
      <Icon size={18} className={active ? "text-black" : "text-gray-400"} />
      {label}
    </button>
  );
}
