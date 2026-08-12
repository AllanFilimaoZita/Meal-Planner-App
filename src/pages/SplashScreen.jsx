import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { getSession } from "../services/authService";

export default function SplashScreen() {
    const navigate = useNavigate();

    
    async function checkSession() {
        const { data, error } = await getSession();
        
        if (error) {
            console.error(error.message);
            navigate("/signin");
            return;
        }

        if (data.session) {
            navigate("/home");
        } else {
            navigate("/signin");
        }
    }
    
    useEffect(() => {
        checkSession();
    }, []);

    return (
        <div className="min-h-screen flex items-center justify-center">
            <h1>A Carregar...</h1>
        </div>
    );
}