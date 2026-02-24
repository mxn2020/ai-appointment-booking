import { useState } from "react";
import { Sidebar } from "./Sidebar";
import { TopBar } from "./TopBar";
import { DashboardPage } from "./pages/DashboardPage";
import { ProfilePage } from "./pages/ProfilePage";
import { SettingsPage } from "./pages/SettingsPage";

export type AppPage = "dashboard" | "profile" | "settings";

const PAGE_TITLES: Record<AppPage, string> = {
    dashboard: "Dashboard",
    profile: "Profile",
    settings: "Settings",
};

export function AppLayout() {
    const [currentPage, setCurrentPage] = useState<AppPage>("dashboard");
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const renderPage = () => {
        switch (currentPage) {
            case "dashboard":
                return <DashboardPage />;
            case "profile":
                return <ProfilePage />;
            case "settings":
                return <SettingsPage />;
            default:
                return <DashboardPage />;
        }
    };

    return (
        <div className="app-layout">
            <Sidebar
                currentPage={currentPage}
                onNavigate={(page) => { setCurrentPage(page); setSidebarOpen(false); }}
                isOpen={sidebarOpen}
                onClose={() => setSidebarOpen(false)}
            />
            <div className="app-main">
                <TopBar
                    title={PAGE_TITLES[currentPage]}
                    onMenuClick={() => setSidebarOpen(!sidebarOpen)}
                />
                <main className="app-content">
                    <div className="page-enter">{renderPage()}</div>
                </main>
            </div>
        </div>
    );
}
