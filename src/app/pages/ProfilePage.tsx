import { useState } from "react";

export function ProfilePage() {
    const [name, setName] = useState("User");
    const [email, setEmail] = useState("user@example.com");
    const [saved, setSaved] = useState(false);

    const handleSave = (e: React.FormEvent) => {
        e.preventDefault();
        // TODO: persist to Convex when backend user profile table is ready
        setSaved(true);
        setTimeout(() => setSaved(false), 2000);
    };

    const initials = name
        .split(" ")
        .map((n) => n[0])
        .join("")
        .toUpperCase()
        .slice(0, 2) || "U";

    return (
        <div className="page">
            <div className="page-header">
                <h2>Profile</h2>
                <p className="page-desc">Manage your personal information.</p>
            </div>

            <div className="profile-layout">
                <div className="profile-avatar-section">
                    <div className="avatar avatar--lg">
                        <span>{initials}</span>
                    </div>
                    <p className="profile-avatar-hint">
                        Your initials are used as your avatar. Update your name below.
                    </p>
                </div>

                <form className="profile-form" onSubmit={handleSave}>
                    <div className="form-group">
                        <label htmlFor="profile-name">Full Name</label>
                        <input
                            id="profile-name"
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Your name"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="profile-email">Email</label>
                        <input
                            id="profile-email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="you@example.com"
                        />
                    </div>

                    <div className="form-actions">
                        <button type="submit" className="btn btn-primary">
                            {saved ? "✓ Saved!" : "Save Changes"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
