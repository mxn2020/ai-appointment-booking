import { useState } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { Sidebar } from "./Sidebar";
import { TopBar } from "./TopBar";

// Design Pages
import Dashboard from "./pages/Dashboard";
import FlowBuilder from "./pages/FlowBuilder";
import Calendar from "./pages/Calendar";
import Services from "./pages/Services";
import Customers from "./pages/Customers";
import Notifications from "./pages/Notifications";
import Channels from "./pages/Channels";
import Analytics from "./pages/Analytics";
import Settings from "./pages/Settings";

// Template Pages (Keep Billing, Ignore Old Settings/Dashboard)
import { BillingPage } from "./pages/BillingPage";
import { ProfilePage } from "./pages/ProfilePage";

const PAGE_TITLES: Record<string, string> = {
    "/dashboard": "Dashboard",
    "/flow-builder": "Flow Builder",
    "/calendar": "Calendar",
    "/services": "Services",
    "/customers": "Customers",
    "/notifications": "Notifications",
    "/channels": "Channels",
    "/analytics": "Analytics",
    "/settings": "Settings",
    "/billing": "Billing & Plans",
    "/profile": "Profile"
};

export function AppLayout() {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const location = useLocation();

    const currentTitle = PAGE_TITLES[location.pathname] || "Dashboard";

    return (
        <div className="flex h-screen bg-[#f5f5f7] text-[#1d1d1f] font-sans overflow-hidden">
            <Sidebar
                isOpen={sidebarOpen}
                onClose={() => setSidebarOpen(false)}
            />

            <div className="flex-1 flex flex-col min-w-0 overflow-hidden relative">
                {/* 
                 * The design didn't have a TopBar, but we can keep it for the hamburger menu 
                 * or let the user decide. If we keep it, we don't need layoutStyle toggles.
                 */}
                <TopBar
                    title={currentTitle}
                    onMenuClick={() => setSidebarOpen(!sidebarOpen)}
                />

                <main className="flex-1 flex flex-col min-w-0 overflow-hidden relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent pointer-events-none" />

                    <AnimatePresence mode="wait">
                        <motion.div
                            key={location.pathname}
                            initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
                            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                            exit={{ opacity: 0, y: -10, filter: "blur(4px)" }}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                            className="flex-1 overflow-y-auto p-8 relative z-10"
                        >
                            <Routes>
                                <Route path="/" element={<Navigate to="/dashboard" replace />} />
                                <Route path="/dashboard" element={<Dashboard />} />
                                <Route path="/flow-builder" element={<FlowBuilder />} />
                                <Route path="/calendar" element={<Calendar />} />
                                <Route path="/services" element={<Services />} />
                                <Route path="/customers" element={<Customers />} />
                                <Route path="/notifications" element={<Notifications />} />
                                <Route path="/channels" element={<Channels />} />
                                <Route path="/analytics" element={<Analytics />} />
                                <Route path="/settings" element={<Settings />} />
                                <Route path="/billing" element={<BillingPage />} />
                                <Route path="/profile" element={<ProfilePage />} />
                                <Route path="*" element={<Navigate to="/dashboard" replace />} />
                            </Routes>
                        </motion.div>
                    </AnimatePresence>
                </main>
            </div>
        </div>
    );
}
