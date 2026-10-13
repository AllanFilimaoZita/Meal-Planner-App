import { useEffect, useState } from "react";
import { getRecipes, createRecipe } from "../services/recipeService";

function RecipesPages() {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [saving, setSaving] = useState(false);
    const [recipes, setRecipes] = useState([]);

  const [form, setForm] = useState({
    title: "",
    description: "",
    ingredients: "",
    instructions: "",
    image_url: "",
  });

  useEffect(() => {
    async function loadRecipes() {
      try {
        const data = await getRecipes();
        setRecipes(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    loadRecipes();
  }, []);

  function handleChange(event) {
    const { name, value } = event.target;

    setForm((previousForm) => ({...previousForm, [name]: value, }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setError(null);

    if (!form.title.trim()) {
      setError("O nome da receita é obrigatório.");
      return;
    }

    setSaving(true);

    try {
      const newRecipe = await createRecipe({
        title: form.title.trim(),
        description: form.description.trim(),
        ingredients: form.ingredients
          .split("\n")
          .map((item) => item.trim())
          .filter(Boolean)
          .map((item) => ({
            name: item,
            quantity: "1",
            unit: "unidade",
          })),
        instructions: form.instructions.trim(),
        image_url: form.image_url.trim() || null,
      });

      setRecipes((previousRecipes) => [newRecipe, ...previousRecipes]);

      setForm({
        title: "",
        description: "",
        ingredients: "",
        instructions: "",
        image_url: "",
      });
    } catch (error) {
      setError(error.message);
    } finally {
      setSaving(false);
    }
  }

  if (loading) {
    return <p>A carregar receitas...</p>;
  }

  return (
    <main className="mx-auto max-w-2xl space-y-8 p-6">
      <h1 className="text-2xl font-bold">As minhas receitas</h1>

      <form onSubmit={handleSubmit} className="space-y-4 rounded-lg border p-5">
        <h2 className="text-xl font-semibold">Criar receita</h2>

        <div>
          <label htmlFor="title">Nome da receita *</label>
          <input
            id="title"
            name="title"
            value={form.title}
            onChange={handleChange}
            required
            className="mt-1 w-full rounded border p-2"
          />
        </div>

        <div>
          <label htmlFor="description">Descrição</label>
          <textarea
            id="description"
            name="description"
            value={form.description}
            onChange={handleChange}
            className="mt-1 w-full rounded border p-2"
          />
        </div>

        <div>
          <label htmlFor="ingredients">Ingredientes (um por linha)</label>
          <textarea
            id="ingredients"
            name="ingredients"
            value={form.ingredients}
            onChange={handleChange}
            placeholder={"Frango\nAlho\nLimão"}
            className="mt-1 w-full rounded border p-2"
          />
        </div>

        <div>
          <label htmlFor="instructions">Instruções</label>
          <textarea
            id="instructions"
            name="instructions"
            value={form.instructions}
            onChange={handleChange}
            className="mt-1 w-full rounded border p-2"
          />
        </div>

        <div>
          <label htmlFor="image_url">URL da imagem (opcional)</label>
          <input
            id="image_url"
            name="image_url"
            type="url"
            value={form.image_url}
            onChange={handleChange}
            className="mt-1 w-full rounded border p-2"
          />
        </div>

        <button
          type="submit"
          disabled={saving}
          className="rounded bg-blue-600 px-4 py-2 text-white disabled:opacity-50"
        >
          {saving ? "A guardar..." : "Criar receita"}
        </button>

        {error && (
          <p role="alert" className="text-red-600">
            {error}
          </p>
        )}
      </form>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Receitas guardadas</h2>

        {recipes.length === 0 ? (
          <p>Ainda não existem receitas.</p>
        ) : (
          recipes.map((recipe) => (
            <div key={recipe.id} className="rounded-lg border p-4">
              <h3 className="font-semibold">{recipe.title}</h3>

              {recipe.description && <p>{recipe.description}</p>}
            </div>
          ))
        )}
      </section>
    </main>
  );
}

export default RecipesPages;
