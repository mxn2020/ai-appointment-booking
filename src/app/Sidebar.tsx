import { useAuthActions } from "@convex-dev/auth/react";
import { APP_CONFIG } from "../config";
import type { AppPage } from "./AppLayout";

interface SidebarProps {
    currentPage: AppPage;
    onNavigate: (page: AppPage) => void;
    isOpen: boolean;
    onClose: () => void;
}

const NAV_ITEMS: { page: AppPage; label: string; icon: string }[] = [
    { page: "dashboard", label: "Dashboard", icon: "📊" },
    { page: "profile", label: "Profile", icon: "👤" },
    { page: "settings", label: "Settings", icon: "⚙️" },
];

export function Sidebar({ currentPage, onNavigate, isOpen, onClose }: SidebarProps) {
    const { signOut } = useAuthActions();

    return (
        <>
            {isOpen && <div className="sidebar-overlay" onClick={onClose} />}
            <aside className={`sidebar ${isOpen ? "sidebar--open" : ""}`}>
                <div className="sidebar-header">
                    <span className="sidebar-logo">◆</span>
                    <span className="sidebar-title">{APP_CONFIG.title}</span>
                </div>

                <nav className="sidebar-nav">
                    {NAV_ITEMS.map((item) => (
                        <button
                            key={item.page}
                            className={`sidebar-link ${currentPage === item.page ? "sidebar-link--active" : ""}`}
                            onClick={() => onNavigate(item.page)}
                        >
                            <span className="sidebar-link-icon">{item.icon}</span>
                            <span className="sidebar-link-label">{item.label}</span>
                        </button>
                    ))}
                </nav>

                <div className="sidebar-footer">
                    <button className="sidebar-link sidebar-link--signout" onClick={() => void signOut()}>
                        <span className="sidebar-link-icon">🚪</span>
                        <span className="sidebar-link-label">Sign Out</span>
                    </button>
                </div>
            </aside>
        </>
    );
}
