import { APP_CONFIG } from "../../config";

export function DashboardPage() {
    return (
        <div className="page">
            <div className="page-header">
                <h2>Welcome to {APP_CONFIG.title} 🎉</h2>
                <p className="page-desc">
                    You're signed in! This is the starting point for your app.
                    The backend is connected to the shared Convex deployment.
                </p>
            </div>

            <div className="cards-grid">
                <div className="card">
                    <div className="card-icon">📊</div>
                    <h3>Real-time Data</h3>
                    <p>Connect to your Convex tables and start building features with live data.</p>
                </div>
                <div className="card">
                    <div className="card-icon">🔧</div>
                    <h3>Ready to Build</h3>
                    <p>Edit components in <code>src/app/pages/</code> to start building your app.</p>
                </div>
                <div className="card">
                    <div className="card-icon">📦</div>
                    <h3>Shared Backend</h3>
                    <p>All data is managed by the shared Convex backend repo — one schema, many apps.</p>
                </div>
                <div className="card">
                    <div className="card-icon">🔐</div>
                    <h3>Auth Ready</h3>
                    <p>Email/password auth is active. Add OAuth providers in the backend's <code>auth.ts</code>.</p>
                </div>
                <div className="card">
                    <div className="card-icon">🎨</div>
                    <h3>Premium Design</h3>
                    <p>Dark theme with glassmorphism, gradients, and smooth animations built in.</p>
                </div>
                <div className="card">
                    <div className="card-icon">🚀</div>
                    <h3>CI/CD Pipelines</h3>
                    <p>GitHub Actions for build, typecheck, and tag-based releases are preconfigured.</p>
                </div>
            </div>
        </div>
    );
}
