import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { FaFire } from "react-icons/fa6";
import { IoAddOutline } from "react-icons/io5";

import Photo from "../assets/img/Photo.png";
import Navigation from "../components/Navigation";
import RecipeModal from "../components/RecipeModal";
import { getRecipes } from "../services/recipeService";

function Home() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    async function loadRecipes() {
      try {
        const data = await getRecipes();
        setRecipes(data);
      } catch {
        setError("Não foi possível carregar as receitas.");
      } finally {
        setLoading(false);
      }
    }

    loadRecipes();
  }, []);

  function handleRecipeCreated(newRecipe) {
    setRecipes((previousRecipes) => [newRecipe, ...previousRecipes]);
  }

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p className="text-gray-500">A carregar receitas...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex min-h-screen items-center justify-center px-5">
        <p role="alert" className="text-center text-red-600">
          {error}
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full bg-gray-50 pb-24">
      <header className="flex items-center justify-between bg-white px-5 py-4">
        <div className="flex items-center gap-3">
          <img
            src={Photo}
            alt="Perfil"
            className="h-10 w-10 rounded-full object-cover"
          />

          <div>
            <p className="text-sm text-gray-500">O teu espaço</p>
            <h1 className="text-xl font-bold">Minhas receitas</h1>
          </div>
        </div>

        <button
          type="button"
          onClick={() => setIsModalOpen(true)}
          aria-label="Adicionar receita"
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-orange-600 px-5 py-3 font-semibold text-white shadow-sm transition hover:bg-orange-700 active:scale-[0.98]"
        >
          <IoAddOutline className="size-5" />
        </button>
      </header>

      <main className="mx-auto max-w-6xl px-5 py-6">
        <section className="mb-8 rounded-2xl bg-white p-5 shadow-sm">
          <h2 className="mb-4 font-bold">Today's Progress</h2>

          <div className="flex items-center gap-2">
            <FaFire className="text-orange-500" />
            <p className="text-2xl font-bold">1,284</p>
            <span className="text-sm text-gray-500">calorias</span>
          </div>

          <p className="mt-3 text-sm text-gray-500">
            Continua a cuidar da tua alimentação!
          </p>
        </section>

        <section>
          <div className="mb-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-2xl font-bold">As minhas receitas</h2>

              <p className="mt-1 text-sm text-gray-500">
                Todas as receitas que guardaste no teu espaço.
              </p>
            </div>
          </div>

          {recipes.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-gray-300 bg-white px-5 py-12 text-center">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-orange-50">
                <IoAddOutline className="size-7 text-orange-600" />
              </div>

              <h3 className="text-lg font-semibold">
                Ainda não tens receitas
              </h3>

              <p className="mt-2 text-sm text-gray-500">
                Começa por guardar a tua primeira receita!
              </p>

              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="mt-5 rounded-xl bg-orange-600 px-5 py-3 font-semibold text-white transition hover:bg-orange-700"
              >
                Criar primeira receita
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {recipes.map((recipe) => (
                <Link
                  key={recipe.id}
                  to={`/recipe/${recipe.id}`}
                  className="block"
                >
                  <article className="cursor-pointer overflow-hidden rounded-2xl bg-white shadow-sm transition hover:shadow-md">
                    <img
                      src={recipe.image_url || Photo}
                      alt={recipe.title}
                      className="h-52 w-full object-cover"
                    />

                    <div className="p-4">
                      <h3 className="text-lg font-bold">{recipe.title}</h3>

                      {recipe.description && (
                        <p className="mt-2 line-clamp-3 text-sm text-gray-500">
                          {recipe.description}
                        </p>
                      )}
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          )}
        </section>
      </main>

      <Navigation />

      {isModalOpen && (
        <RecipeModal
          onClose={() => setIsModalOpen(false)}
          onCreated={handleRecipeCreated}
        />
      )}
    </div>
  );
}

export default Home;