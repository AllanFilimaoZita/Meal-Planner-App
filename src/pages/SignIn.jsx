import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import Background from "../assets/img/img.png";


import { signIn } from "../services/authService";

const SignIn = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function handleSubmit(e) {
        e.preventDefault();

        const { error } = await signIn(email, password);

        if (error) {
            alert(error.message);
            return;
        }

        setEmail("");
        setPassword("");

        navigate("/home");
    }

    return (
        <main className="relative min-h-screen flex flex-col">

            <section className="h-[35vh] w-full overflow-hidden">
                <img src={Background} alt="Background" className="h-full w-full object-cover" />
            </section>

            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-[#8B4EEB]/50 to-[#8B4EEB]"></div>

            {/* Conteúdo */}
            <section className="relative z-10 flex flex-col justify-center w-full max-w-sm mx-auto px-6 py-8">

                <h1 className="text-3xl font-bold text-white text-center">
                    Bem-vindo de volta
                </h1>

                <p className="text-center text-gray-200 mt-2 mb-8">
                    Entre para continuar
                </p>

                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                    <div>
                        <label className="block text-sm text-white mb-2">
                            Email
                        </label>

                        <input type="email" placeholder="Digite o seu email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-purple-400" required
                        />
                    </div>

                    <div>
                        <label className="block text-sm text-white mb-2">
                            Senha
                        </label>

                        <input type="password" placeholder="Digite a sua senha" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-purple-400"
                            required
                        />
                    </div>

                    <button type="submit" className="bg-black text-white font-semibold py-3 rounded-lg hover:bg-gray-900 transition"
                    >
                        Entrar
                    </button>
                </form>

                <p className="text-center text-white mt-8">
                    Ainda não possui uma conta?

                    <Link to="/signup" className="ml-2 font-bold text-black hover:underline" >
                        Criar Conta
                    </Link>
                </p>

            </section>

        </main>
    );
};

export default SignIn;