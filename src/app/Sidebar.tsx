import { NavLink, useLocation } from "react-router-dom";
import { motion } from "motion/react";
import { useAuthActions } from "@convex-dev/auth/react";
import {
    LayoutDashboard,
    GitMerge,
    CalendarDays,
    Scissors,
    Users,
    BellRing,
    Share2,
    BarChart3,
    Settings as SettingsIcon,
    Bot,
    LogOut,
    CreditCard
} from "lucide-react";
import { cn } from "../lib/utils";

const navItems = [
    { name: "Dashboard", path: "/dashboard", icon: LayoutDashboard },
    { name: "Flow Builder", path: "/flow-builder", icon: GitMerge },
    { name: "Calendar", path: "/calendar", icon: CalendarDays },
    { name: "Services", path: "/services", icon: Scissors },
    { name: "Customers", path: "/customers", icon: Users },
    { name: "Notifications", path: "/notifications", icon: BellRing },
    { name: "Channels", path: "/channels", icon: Share2 },
    { name: "Analytics", path: "/analytics", icon: BarChart3 },
    { name: "Settings", path: "/settings", icon: SettingsIcon },
    { name: "Billing", path: "/billing", icon: CreditCard },
];

interface SidebarProps {
    isOpen: boolean;
    onClose: () => void;
}

export function Sidebar({ isOpen, onClose }: SidebarProps) {
    const location = useLocation();
    const { signOut } = useAuthActions();

    return (
        <>
            <aside className={`w-64 flex-shrink-0 border-r border-black/5 bg-white/50 backdrop-blur-xl flex flex-col z-20 ${isOpen ? "open" : ""}`}>
                <div className="h-16 flex items-center px-6 border-b border-black/5">
                    <div className="flex items-center gap-2 text-lg font-semibold tracking-tight">
                        <div className="w-8 h-8 rounded-xl bg-black text-white flex items-center justify-center">
                            <Bot size={18} />
                        </div>
                        <span>Aura Booking</span>
                    </div>
                </div>

                <nav className="flex-1 overflow-y-auto py-4 px-3 space-y-1">
                    {navItems.map((item) => {
                        const isActive = location.pathname.startsWith(item.path);
                        return (
                            <NavLink
                                key={item.path}
                                to={item.path}
                                onClick={onClose} // Close on mobile click
                                className={cn(
                                    "flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all relative",
                                    isActive
                                        ? "text-black"
                                        : "text-gray-500 hover:text-black hover:bg-black/5",
                                )}
                            >
                                {isActive && (
                                    <motion.div
                                        layoutId="sidebar-active"
                                        className="absolute inset-0 bg-white shadow-sm border border-black/5 rounded-xl -z-10"
                                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                    />
                                )}
                                <item.icon
                                    size={18}
                                    className={cn(
                                        "z-10",
                                        isActive ? "text-black" : "text-gray-400",
                                    )}
                                />
                                <span className="z-10">{item.name}</span>
                            </NavLink>
                        );
                    })}
                </nav>

                <div className="p-4 border-t border-black/5">
                    <button
                        onClick={() => void signOut()}
                        className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all text-red-500 hover:bg-red-50"
                    >
                        <LogOut size={18} />
                        <span>Log Out</span>
                    </button>
                </div>
            </aside>
        </>
    );
}
