import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "../lib/supabase";
import Photo from "../assets/img/Photo.png";
import { signOut } from "../services/authService";

function Profile() {
  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [signingOut, setSigningOut] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    let active = true;

    async function loadProfile() {
      try {
        const { data, error } = await supabase.auth.getUser();

        if (error) {
          throw error;
        }

        if (active) setUser(data.user);
      } catch {
        if (active) setError("Não foi possível carregar o perfil.");
      } finally {
        if (active) setLoading(false);
      }
    }

    loadProfile();

    return () => {
      active = false;
    };
  }, []);

  async function handleSignOut() {
    setSigningOut(true);
    setError("");

    const { error } = await signOut();

    if (error) {
      setError("Não foi possível terminar a sessão.");
      setSigningOut(false);
      return;
    }

    navigate("/signin", { replace: true });
  }

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-50">
        <p role="status" className="text-gray-500">
          A carregar perfil...
        </p>
      </div>
    );
  }

  if (error && !user) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-gray-50 px-5">
        <p role="alert" className="text-center text-red-600">
          {error}
        </p>

        <Link
          to="/home"
          className="text-sm font-medium text-orange-600 hover:text-orange-700"
        >
          ← Voltar ao início
        </Link>
      </div>
    );
  }

  const fullName = user?.user_metadata?.full_name || "Utilizador";
  const email = user?.email || "E-mail não disponível";
  const avatar = user?.user_metadata?.avatar_url || Photo;

  const memberSince = user?.created_at
    ? new Date(user.created_at).toLocaleDateString("pt-PT", {
        month: "long",
        year: "numeric",
      })
    : "Não disponível";

  return (

    <main className="min-h-screen bg-gray-50 pb-10">

      <div className="h-40 bg-linear-to-br from-orange-500 to-orange-400 px-5 pt-6">

        <div className="mx-auto max-w-lg">

          <Link
            to="/home"
            className="inline-flex items-center gap-1 rounded-full bg-white/20 px-3 py-1.5 text-sm font-medium text-white backdrop-blur transition hover:bg-white/30 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            ← Início
          </Link>

        </div>

      </div>

      <div className="mx-auto -mt-14 max-w-lg px-5">
        
        <div className="flex flex-col items-center text-center">

          <img
            src={avatar}
            alt={`Foto de perfil de ${fullName}`}
            className="h-28 w-28 rounded-full border-4 border-gray-50 object-cover shadow-md"
          />

          <h1 className="mt-3 text-2xl font-bold text-gray-900">{fullName}</h1>

          <span className="mt-2 rounded-full bg-orange-100 px-3 py-1 text-xs font-semibold text-orange-700">
            Membro desde {memberSince}
          </span>

        </div>

        <section
          aria-labelledby="account-title"
          className="mt-8 rounded-2xl bg-white p-2 shadow-sm"
        >

          <h2 id="account-title" className="px-4 pt-4 text-sm font-semibold text-gray-500">
            INFORMAÇÕES DA CONTA
          </h2>

          <div className="mt-2">

            <div className="flex items-center gap-4 rounded-xl px-4 py-3">

              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-orange-50 text-orange-600">

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                  aria-hidden="true"
                >
                  <circle cx="12" cy="8" r="4" />
                  <path d="M4 21a8 8 0 0 1 16 0" />
                </svg>
              </div>

              <div className="min-w-0">

                <p className="text-xs text-gray-500">Nome completo</p>
                <p className="wrap-break-word font-medium text-gray-900">
                  {fullName}
                </p>

              </div>

            </div>

            <div className="mx-4 border-t border-gray-100" />

            <div className="flex items-center gap-4 rounded-xl px-4 py-3">

              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-orange-50 text-orange-600">

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                  aria-hidden="true"
                >
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="m3 7 9 6 9-6" />
                </svg>

              </div>

              <div className="min-w-0">

                <p className="text-xs text-gray-500">E-mail</p>
                <p className="wraps-break-word font-medium text-gray-900">
                  {email}
                </p>

              </div>

            </div>

          </div>

        </section>

        {error && (
          <p role="alert" className="mt-4 text-center text-sm text-red-600">
            {error}
          </p>
        )}

        <button
          type="button"
          onClick={handleSignOut}
          disabled={signingOut}
          className="mt-6 w-full rounded-xl bg-red-50 px-4 py-3.5 font-semibold text-red-600 transition hover:bg-red-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {signingOut ? "A terminar sessão..." : "Terminar sessão"}
        </button>

      </div>
      
    </main>
  );
}

export default Profile;