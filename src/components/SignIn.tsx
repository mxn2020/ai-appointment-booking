import { useAuthActions } from "@convex-dev/auth/react";
import { useState } from "react";

export function SignIn() {
    const { signIn } = useAuthActions();
    const [flow, setFlow] = useState<"signIn" | "signUp">("signIn");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError("");
        setLoading(true);
        const formData = new FormData(e.currentTarget);
        try {
            await signIn("password", formData);
        } catch {
            setError(
                flow === "signIn"
                    ? "Invalid email or password."
                    : "Could not create account. Try a different email."
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="auth-card">
            <h2 className="auth-title">
                {flow === "signIn" ? "Welcome back" : "Create your account"}
            </h2>
            <p className="auth-subtitle">
                {flow === "signIn" ? "Sign in to continue" : "Get started for free"}
            </p>

            <form onSubmit={handleSubmit} className="auth-form">
                <div className="form-group">
                    <label htmlFor="auth-email">Email</label>
                    <input
                        id="auth-email"
                        name="email"
                        type="email"
                        placeholder="you@example.com"
                        required
                        autoComplete="email"
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="auth-password">Password</label>
                    <input
                        id="auth-password"
                        name="password"
                        type="password"
                        placeholder="••••••••"
                        required
                        autoComplete={flow === "signIn" ? "current-password" : "new-password"}
                    />
                </div>

                <input name="flow" type="hidden" value={flow} />

                {error && <p className="auth-error">{error}</p>}

                <button type="submit" className="btn btn-primary btn-full" disabled={loading}>
                    {loading ? "Please wait…" : flow === "signIn" ? "Sign In" : "Create Account"}
                </button>
            </form>

            <p className="auth-switch">
                {flow === "signIn" ? "Don't have an account?" : "Already have an account?"}{" "}
                <button
                    type="button"
                    className="link-btn"
                    onClick={() => { setFlow(flow === "signIn" ? "signUp" : "signIn"); setError(""); }}
                >
                    {flow === "signIn" ? "Sign up" : "Sign in"}
                </button>
            </p>
        </div>
    );
}
