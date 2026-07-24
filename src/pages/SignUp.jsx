import { Link } from 'react-router-dom';
import { signUp } from "../services/authService";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function handleSubmit(e) {
        e.preventDefault();

        const { error } = await signUp(name, email, password);

        if (error) {
            alert(error.message);
            return;
        }

        alert("Conta criada com sucesso!");

        setName("");
        setEmail("");
        setPassword("");

        navigate("/home");
    }

    return (
        <div className="min-h-screen flex items-center justify-center  bg-linear-to-b from-black/50 --tw-gradient-via: #8B4EEB; to-[#8B4EEB] px-6">
            <div className="w-full max-w-md bg-black rounded-2xl shadow-lg p-8">
                <h1 className="text-3xl font-bold text-center text-gray-400">Criar Conta</h1>

                <p className="text-center text-gray-500 mt-2">
                    Cadastre-se para continuar
                </p>

                <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                    <div>
                        <label className="block text-sm font-medium text-gray-400 mb-2">
                            Nome
                        </label>

                        <input type="text" placeholder="Digite seu nome" value={name} onChange={(e) => setName(e.target.value)} className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-200 focus:outline-none focus:ring-2 placeholder:text-gray-400 focus:ring-purple-300" />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-400 mb-2">
                            Email
                        </label>

                        <input type="email" placeholder="Digite seu email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-200 focus:outline-none focus:ring-2 placeholder:text-gray-400 focus:ring-purple-300" />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-400 mb-2">
                            Senha
                        </label>

                        <input type="password" placeholder="Digite sua senha" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-200 focus:outline-none focus:ring-2 placeholder:text-gray-400 focus:ring-purple-300" />
                    </div>

                    <button type="submit" className="w-full bg-[#8B4EEB] text-white py-3 rounded-lg font-semibold hover:bg-[#8B4EEB]/70 transition">
                        Criar Conta
                    </button>
                </form>

                <p className="text-center text-gray-500 mt-6">
                    Já possui uma conta?
                    <Link to="/" className="ml-2 text-green-600 font-semibold hover:underline">
                        Entrar
                    </Link>
                </p>
            </div>
        </div>
    );
}