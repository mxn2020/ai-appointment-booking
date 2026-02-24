interface TopBarProps {
    title: string;
    onMenuClick: () => void;
}

export function TopBar({ title, onMenuClick }: TopBarProps) {
    return (
        <header className="topbar">
            <button className="topbar-menu" onClick={onMenuClick} aria-label="Toggle menu">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 12h18M3 6h18M3 18h18" />
                </svg>
            </button>
            <h1 className="topbar-title">{title}</h1>
            <div className="topbar-spacer" />
        </header>
    );
}
