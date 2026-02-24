import { SignIn } from "./SignIn";
import { APP_CONFIG } from "../config";

const FEATURES = [
    {
        icon: "⚡",
        title: "Real-time Sync",
        desc: "Powered by Convex — data updates instantly across all connected clients.",
    },
    {
        icon: "🔒",
        title: "Secure Auth",
        desc: "Built-in email & password authentication with session management.",
    },
    {
        icon: "🚀",
        title: "Production Ready",
        desc: "CI/CD pipelines, type safety, and optimized builds out of the box.",
    },
    {
        icon: "📱",
        title: "Responsive Design",
        desc: "Looks great on desktop, tablet, and mobile devices.",
    },
];

export function Landing() {
    return (
        <div className="landing">
            <header className="hero">
                <div className="hero-bg" />
                <nav className="nav">
                    <div className="nav-brand">
                        <span className="nav-logo">◆</span>
                        <span className="nav-name">{APP_CONFIG.title}</span>
                    </div>
                    <div className="nav-links">
                        <a href="#features" className="nav-link">Features</a>
                        <a href="#auth" className="btn btn-primary btn-sm">Get Started</a>
                    </div>
                </nav>

                <div className="hero-content">
                    <div className="hero-badge">Part of The Mehdi Verse ✨</div>
                    <h1 className="hero-title">{APP_CONFIG.title}</h1>
                    <p className="hero-description">{APP_CONFIG.description}</p>
                    <a href="#auth" className="btn btn-primary btn-lg">
                        Get Started Free →
                    </a>
                </div>
            </header>

            <section id="features" className="features-section">
                <h2 className="section-title">Built with Modern Tech</h2>
                <p className="section-subtitle">
                    Everything you need to build amazing apps, powered by a shared Convex backend.
                </p>
                <div className="features-grid">
                    {FEATURES.map((f) => (
                        <div key={f.title} className="feature-card">
                            <span className="feature-icon">{f.icon}</span>
                            <h3 className="feature-title">{f.title}</h3>
                            <p className="feature-desc">{f.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section id="auth" className="auth-section">
                <SignIn />
            </section>

            <footer className="footer">
                <p>
                    © 2026 Mehdi Nabhani ·{" "}
                    <a href={`https://github.com/mxn2020/${APP_CONFIG.slug}`} target="_blank" rel="noopener noreferrer">
                        GitHub
                    </a>{" "}·{" "}
                    <a href="https://buymeacoffee.com/mxn2020" target="_blank" rel="noopener noreferrer">
                        Buy Me a Coffee ☕
                    </a>
                </p>
            </footer>
        </div>
    );
}
