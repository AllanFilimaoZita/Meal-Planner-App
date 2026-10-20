import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "../lib/supabase";
import Photo from "../assets/img/Photo.png";
import { signOut } from "../services/authService";

function Profile() {
  const navigate = useNavigate();

  const editButtonRef = useRef(null);
  const nameInputRef = useRef(null);
  const modalRef = useRef(null);

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [signingOut, setSigningOut] = useState(false);

  const [editing, setEditing] = useState(false);
  const [saving, setSaving] = useState(false);
  const [fullName, setFullName] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    async function loadUser() {
      try {
        const {
          data: { user: authenticatedUser },
          error: authError,
        } = await supabase.auth.getUser();

        if (authError) {
          throw authError;
        }

        if (!authenticatedUser) {
          navigate("/signin");
          return;
        }

        setUser(authenticatedUser);
        setFullName(authenticatedUser.user_metadata?.full_name || "");
      } catch (err) {
        console.error("Erro ao carregar perfil:", err);
        setError("Não foi possível carregar o perfil.");
      } finally {
        setLoading(false);
      }
    }

    loadUser();
  }, [navigate]);

  useEffect(() => {
    if (!editing) return;

    const timeoutId = setTimeout(() => {
      nameInputRef.current?.focus();
    }, 0);

    return () => clearTimeout(timeoutId);
  }, [editing]);

  useEffect(() => {
    if (!editing) return;

    function handleKeyDown(event) {
      if (event.key === "Escape" && !saving) {
        setFullName(user?.user_metadata?.full_name || "");
        setError("");
        setSuccess("");
        setEditing(false);
        return;
      }

      if (event.key !== "Tab") return;

      const modal = modalRef.current;

      if (!modal) return;

      const focusableElements = Array.from(
        modal.querySelectorAll(
          'button:not(:disabled), input:not(:disabled), select:not(:disabled), textarea:not(:disabled), a[href], [tabindex]:not([tabindex="-1"])',
        ),
      ).filter((element) => {
        return element.getClientRects().length > 0;
      });

      if (focusableElements.length === 0) {
        event.preventDefault();
        return;
      }

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (
        event.shiftKey &&
        (document.activeElement === firstElement ||
          !modal.contains(document.activeElement))
      ) {
        event.preventDefault();
        lastElement.focus();
      } else if (
        !event.shiftKey &&
        (document.activeElement === lastElement ||
          !modal.contains(document.activeElement))
      ) {
        event.preventDefault();
        firstElement.focus();
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [editing, saving, user]);

  useEffect(() => {
    if (editing) return;

    editButtonRef.current?.focus();
  }, [editing]);

  function handleCancelEdit() {
    if (saving) return;

    setFullName(user?.user_metadata?.full_name || "");
    setError("");
    setSuccess("");
    setEditing(false);
  }

  async function handleSaveProfile(event) {
    event.preventDefault();

    const trimmedName = fullName.trim();

    if (!trimmedName) {
      setError("O nome é obrigatório.");
      return;
    }

    if (trimmedName.length < 2) {
      setError("O nome deve ter pelo menos 2 caracteres.");
      return;
    }

    setSaving(true);
    setError("");
    setSuccess("");

    try {
      const { data, error: updateError } = await supabase.auth.updateUser({
        data: {
          full_name: trimmedName,
        },
      });

      if (updateError) {
        throw updateError;
      }

      setUser(data.user);
      setFullName(data.user.user_metadata?.full_name || trimmedName);

      setEditing(false);
      setSuccess("Perfil actualizado com sucesso!");
    } catch (err) {
      console.error("Erro ao actualizar perfil:", err);
      setError(err.message || "Não foi possível actualizar o perfil.");
    } finally {
      setSaving(false);
    }
  }

  async function handleSignOut() {
    if (signingOut) return;

    setSigningOut(true);
    setError("");

    try {
      await signOut();
      navigate("/signin");
    } catch (err) {
      console.error("Erro ao terminar sessão:", err);
      setError("Não foi possível terminar a sessão.");
      setSigningOut(false);
    }
  }

  if (loading) {
    return (
      <main className="flex min-h-screen items-center justify-center p-6">
        <p role="status" aria-live="polite">
          A carregar o perfil...
        </p>
      </main>
    );
  }

  if (!user) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center gap-4 p-6">
        <p>Não foi possível encontrar o utilizador.</p>

        <Link to="/signin" className="text-blue-600 underline">
          Voltar ao início de sessão
        </Link>
      </main>
    );
  }

  const avatarUrl = user.user_metadata?.avatar_url || Photo;

  const memberSince = user.created_at
    ? new Date(user.created_at).toLocaleDateString("pt-MZ", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      })
    : "Não disponível";

  return (
    <main className="min-h-screen bg-gray-50 px-4 py-10 sm:px-6">
      <div className="mx-auto max-w-2xl">
        {/* Cabeçalho */}
        <header className="mb-8">
          <Link to="/" className="text-sm text-orange-600 hover:text-orange-700">
            ← Voltar
          </Link>

          <h1 className="mt-4 text-3xl font-bold text-gray-900">Meu perfil</h1>

          <p className="mt-2 text-gray-600">
            Consulta e gere as informações da tua conta.
          </p>
        </header>

        {/* Mensagens gerais */}
        {success && (
          <p
            role="status"
            aria-live="polite"
            className="mb-4 rounded-lg border border-green-200 bg-green-50 p-4 text-sm text-green-800"
          >
            {success}
          </p>
        )}

        {error && !editing && (
          <p
            role="alert"
            className="mb-4 rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-700"
          >
            {error}
          </p>
        )}

        {/* Cartão do perfil */}
        <section
          aria-labelledby="profile-heading"
          className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8"
        >
          <h2 id="profile-heading" className="sr-only">
            Informações do perfil
          </h2>

          <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-start">
            <img
              src={avatarUrl}
              alt={`Foto de perfil de ${
                user.user_metadata?.full_name || "utilizador"
              }`}
              className="h-24 w-24 rounded-full border border-gray-200 object-cover"
            />

            <div className="min-w-0 flex-1 text-center sm:text-left">
              <h2 className="break-words text-xl font-semibold text-gray-900">
                {user.user_metadata?.full_name || "Nome não definido"}
              </h2>

              <p className="mt-1 break-all text-sm text-gray-600">
                {user.email}
              </p>

              <p className="mt-3 text-sm text-gray-500">
                Membro desde {memberSince}
              </p>
            </div>
          </div>

          <div className="mt-8 border-t border-gray-100 pt-6">
            <h3 className="text-sm font-semibold text-gray-900">
              Informações pessoais
            </h3>

            <dl className="mt-4 space-y-4">
              <div>
                <dt className="text-sm text-gray-500">Nome completo</dt>

                <dd className="mt-1 break-words font-medium text-gray-900">
                  {user.user_metadata?.full_name || "Não definido"}
                </dd>
              </div>

              <div>
                <dt className="text-sm text-gray-500">Endereço de e-mail</dt>

                <dd className="mt-1 break-all font-medium text-gray-900">
                  {user.email}
                </dd>
              </div>
            </dl>
          </div>

          {/* Acções do perfil */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <button
              ref={editButtonRef}
              type="button"
              onClick={() => {
                setFullName(user.user_metadata?.full_name || "");
                setError("");
                setSuccess("");
                setEditing(true);
              }}
              className="rounded-lg bg-orange-500 px-5 py-3 font-medium text-white transition hover:bg-orange-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
            >
              Editar perfil
            </button>

            <button
              type="button"
              onClick={handleSignOut}
              disabled={signingOut}
              className="rounded-lg border border-gray-300 px-5 py-3 font-medium text-gray-700 transition hover:bg-gray-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-500 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {signingOut ? "A terminar sessão..." : "Terminar sessão"}
            </button>
          </div>
        </section>
      </div>

      {/* Modal de edição */}
      {editing && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-gray-950/40 p-4 backdrop-blur-sm"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget && !saving) {
              handleCancelEdit();
            }
          }}
        >
          <section
            ref={modalRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="edit-profile-title"
            aria-describedby="edit-profile-description"
            className="my-auto w-full max-w-md rounded-2xl bg-white p-6 shadow-xl sm:p-8"
          >
            <div className="mb-6">
              <h2
                id="edit-profile-title"
                className="text-xl font-bold text-gray-900"
              >
                Editar perfil
              </h2>

              <p
                id="edit-profile-description"
                className="mt-2 text-sm text-gray-600"
              >
                Actualiza o teu nome. As alterações serão guardadas na tua
                conta.
              </p>
            </div>

            <form onSubmit={handleSaveProfile}>
              <div>
                <label
                  htmlFor="full-name"
                  className="mb-2 block text-sm font-medium text-gray-700"
                >
                  Nome completo
                </label>

                <input
                  ref={nameInputRef}
                  id="full-name"
                  name="fullName"
                  type="text"
                  autoComplete="name"
                  value={fullName}
                  onChange={(event) => setFullName(event.target.value)}
                  disabled={saving}
                  required
                  minLength={2}
                  maxLength={100}
                  aria-invalid={Boolean(error)}
                  aria-describedby={
                    error ? "full-name-error" : "full-name-help"
                  }
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-200 disabled:bg-gray-100"
                  placeholder="Introduz o teu nome"
                />

                {error ? (
                  <p
                    id="full-name-error"
                    role="alert"
                    className="mt-2 text-sm text-red-600"
                  >
                    {error}
                  </p>
                ) : (
                  <p id="full-name-help" className="mt-2 text-xs text-gray-500">
                    Introduz pelo menos 2 caracteres.
                  </p>
                )}
              </div>

              <div className="mt-8 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
                <button
                  type="button"
                  onClick={handleCancelEdit}
                  disabled={saving}
                  className="rounded-lg border border-gray-300 px-5 py-3 font-medium text-gray-700 transition hover:bg-gray-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-500 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  Cancelar
                </button>

                <button
                  type="submit"
                  disabled={saving}
                  className="rounded-lg bg-orange-500 px-5 py-3 font-medium text-white transition hover:bg-orange-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {saving ? "A guardar..." : "Guardar alterações"}
                </button>
              </div>
            </form>
          </section>
        </div>
      )}
    </main>
  );
}

export default Profile;
