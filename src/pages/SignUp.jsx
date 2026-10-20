
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import Background from "../assets/img/img.png";
import { signUp } from "../services/authService";

const SignUp = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    setErrorMessage("");
    setLoading(true);

    try {
      const { error } = await signUp(name, email, password);

      if (error) {
        setErrorMessage(
          "Verifica os teus dados e tenta novamente. Se já tiveres uma conta, inicia sessão."
        );
        return;
      }

      setName("");
      setEmail("");
      setPassword("");

      navigate("/home");
    } catch {
      setErrorMessage(
        "Não foi possível comunicar com o servidor. Verifica a tua ligação à internet e tenta novamente."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="relative flex min-h-screen flex-col">
      <section className="h-[35vh] w-full overflow-hidden">
        <img
          src={Background}
          alt=""
          className="h-full w-full object-cover"
        />
      </section>

      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-[#8B4EEB]/50 to-[#8B4EEB]" />

      <section className="relative z-10 mx-auto flex w-full max-w-sm flex-col justify-center px-6 py-8">
        <h1 className="text-center text-3xl font-bold text-white">
          Criar Conta
        </h1>

        <p className="mt-2 mb-8 text-center text-gray-200">
          Cadastre-se para continuar
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          {errorMessage && (
            <div
              role="alert"
              className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
            >
              <p className="font-semibold">
                Não foi possível criar a conta
              </p>
              <p className="mt-1">{errorMessage}</p>
            </div>
          )}

          <div>
            <label
              htmlFor="signup-name"
              className="mb-2 block text-sm text-white"
            >
              Nome
            </label>

            <input
              id="signup-name"
              type="text"
              autoComplete="name"
              placeholder="Digite o seu nome"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                setErrorMessage("");
              }}
              className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-purple-400"
              required
            />
          </div>

          <div>
            <label
              htmlFor="signup-email"
              className="mb-2 block text-sm text-white"
            >
              Email
            </label>

            <input
              id="signup-email"
              type="email"
              autoComplete="email"
              placeholder="Digite o seu email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setErrorMessage("");
              }}
              className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-purple-400"
              required
            />
          </div>

          <div>
            <label
              htmlFor="signup-password"
              className="mb-2 block text-sm text-white"
            >
              Senha
            </label>

            <div className="relative">
              <input
                id="signup-password"
                type={showPassword ? "text" : "password"}
                autoComplete="new-password"
                placeholder="Digite a sua senha"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setErrorMessage("");
                }}
                className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 pr-20 outline-none focus:ring-2 focus:ring-purple-400"
                required
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                aria-label={
                  showPassword
                    ? "Ocultar palavra-passe"
                    : "Mostrar palavra-passe"
                }
                aria-pressed={showPassword}
                className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-500 hover:text-purple-700"
              >
                {showPassword ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M3 3l18 18" />
                    <path d="M10.58 10.58a2 2 0 0 0 2.83 2.83" />
                    <path d="M9.88 5.09A10.94 10.94 0 0 1 12 4.9c5 0 8.27 4.11 9 7.1a9.8 9.8 0 0 1-2.16 3.77" />
                    <path d="M6.61 6.61A11.5 11.5 0 0 0 3 12c.73 2.99 4 7.1 9 7.1a10.7 10.7 0 0 0 5.39-1.47" />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7-10-7-10-7Z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="rounded-lg bg-black py-3 font-semibold text-white transition hover:bg-gray-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? "A criar conta..." : "Criar Conta"}
          </button>
        </form>

        <p className="mt-8 text-center text-white">
          Já possui uma conta?
          <Link
            to="/signin"
            className="ml-2 font-bold text-black hover:underline"
          >
            Entrar
          </Link>
        </p>
      </section>
    </main>
  );
};

export default SignUp;
