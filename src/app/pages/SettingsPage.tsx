import { useState } from "react";

export function SettingsPage() {
    const [theme, setTheme] = useState<"dark" | "light">("dark");
    const [notifications, setNotifications] = useState(true);
    const [language, setLanguage] = useState("en");

    return (
        <div className="page">
            <div className="page-header">
                <h2>Settings</h2>
                <p className="page-desc">Configure your application preferences.</p>
            </div>

            <div className="settings-sections">
                {/* Appearance */}
                <div className="settings-card">
                    <div className="settings-card-header">
                        <span className="settings-card-icon">🎨</span>
                        <div>
                            <h3>Appearance</h3>
                            <p>Customize how the app looks.</p>
                        </div>
                    </div>
                    <div className="settings-card-body">
                        <div className="setting-row">
                            <div className="setting-info">
                                <span className="setting-label">Theme</span>
                                <span className="setting-hint">Choose your preferred color scheme.</span>
                            </div>
                            <div className="toggle-group">
                                <button
                                    className={`toggle-btn ${theme === "dark" ? "toggle-btn--active" : ""}`}
                                    onClick={() => setTheme("dark")}
                                >
                                    🌙 Dark
                                </button>
                                <button
                                    className={`toggle-btn ${theme === "light" ? "toggle-btn--active" : ""}`}
                                    onClick={() => setTheme("light")}
                                >
                                    ☀️ Light
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Notifications */}
                <div className="settings-card">
                    <div className="settings-card-header">
                        <span className="settings-card-icon">🔔</span>
                        <div>
                            <h3>Notifications</h3>
                            <p>Manage your notification preferences.</p>
                        </div>
                    </div>
                    <div className="settings-card-body">
                        <div className="setting-row">
                            <div className="setting-info">
                                <span className="setting-label">Email Notifications</span>
                                <span className="setting-hint">Receive updates via email.</span>
                            </div>
                            <label className="switch">
                                <input
                                    type="checkbox"
                                    checked={notifications}
                                    onChange={(e) => setNotifications(e.target.checked)}
                                />
                                <span className="switch-slider" />
                            </label>
                        </div>
                    </div>
                </div>

                {/* Language */}
                <div className="settings-card">
                    <div className="settings-card-header">
                        <span className="settings-card-icon">🌍</span>
                        <div>
                            <h3>Language & Region</h3>
                            <p>Set your preferred language.</p>
                        </div>
                    </div>
                    <div className="settings-card-body">
                        <div className="setting-row">
                            <div className="setting-info">
                                <span className="setting-label">Language</span>
                                <span className="setting-hint">Display language for the interface.</span>
                            </div>
                            <select
                                className="setting-select"
                                value={language}
                                onChange={(e) => setLanguage(e.target.value)}
                            >
                                <option value="en">English</option>
                                <option value="de">Deutsch</option>
                                <option value="fr">Français</option>
                                <option value="es">Español</option>
                                <option value="ar">العربية</option>
                            </select>
                        </div>
                    </div>
                </div>

                {/* Danger Zone */}
                <div className="settings-card settings-card--danger">
                    <div className="settings-card-header">
                        <span className="settings-card-icon">⚠️</span>
                        <div>
                            <h3>Danger Zone</h3>
                            <p>Irreversible and destructive actions.</p>
                        </div>
                    </div>
                    <div className="settings-card-body">
                        <div className="setting-row">
                            <div className="setting-info">
                                <span className="setting-label">Delete Account</span>
                                <span className="setting-hint">Permanently delete your account and all data.</span>
                            </div>
                            <button className="btn btn-danger">Delete Account</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
