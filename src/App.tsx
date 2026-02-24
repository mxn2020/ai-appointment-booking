import { Authenticated, Unauthenticated, AuthLoading } from "convex/react";
import { Landing } from "./components/Landing";
import { AppLayout } from "./app/AppLayout";
import "./App.css";

export default function App() {
    return (
        <>
            <AuthLoading>
                <div className="loading-screen">
                    <div className="loading-spinner" />
                    <p>Loading…</p>
                </div>
            </AuthLoading>
            <Unauthenticated>
                <Landing />
            </Unauthenticated>
            <Authenticated>
                <AppLayout />
            </Authenticated>
        </>
    );
}
