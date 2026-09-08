import { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { getSession } from "../services/authService";

export default function ProtectedRoute() {
    const [loading, setLoading] = useState(true);
    const [session, setSession] = useState(null);

    useEffect(() => {
        async function checkSession() {
            const { data, error } = await getSession();

            if (!error) {
                setSession(data?.session ?? null);
            }

            setLoading(false);
        }

        checkSession();
    }, []);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <h1>A verificar autenticação...</h1>
            </div>
        );
    }

    if (!session) {
        return <Navigate to="/signin" replace />;
    }

    return <Outlet />;
}