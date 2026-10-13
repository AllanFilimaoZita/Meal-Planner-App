import { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { supabase } from "../lib/supabase";

export default function ProtectedRoute() {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);

    useEffect(() => {
        async function checkUser() {
            const { data, error } = await supabase.auth.getUser();

            if (!error) {
                setUser(data.user);
            }

            setLoading(false);
        }

        checkUser();
    }, []);

    if (loading) {
        return <p>A verificar autenticação...</p>;
    }

    if (!user) {
        return <Navigate to="/signin" replace />;
    }

    return <Outlet />;
}