
import { useEffect, useState } from "react";
import { createRecipe, updateRecipe } from "../services/recipeService";

function RecipeForm({ onCreated, onUpdated, onClose, recipe = null }) {
    const [saving, setSaving] = useState(false);
    const [error, setError] = useState(null);

    const [form, setForm] = useState({
        title: "",
        description: "",
        ingredients: "",
        instructions: "",
        image_url: "",
    });

    const isEditing = Boolean(recipe);

    useEffect(() => {
        if (recipe) {
            setForm({
                title: recipe.title || "",
                description: recipe.description || "",
                ingredients: Array.isArray(recipe.ingredients)
                    ? recipe.ingredients
                        .map((item) =>
                            [
                                item.name,
                                item.quantity,
                                item.unit,
                            ]
                                .filter(Boolean)
                                .join(" | ")
                        )
                        .join("\n")
                    : "",
                instructions: recipe.instructions || "",
                image_url: recipe.image_url || "",
            });
        }
    }, [recipe]);

    function handleChange(event) {
        const { name, value } = event.target;

        setForm((previousForm) => ({
            ...previousForm,
            [name]: value,
        }));
    }

    function parseIngredients(value) {
        return value
            .split("\n")
            .map((line) => line.trim())
            .filter(Boolean)
            .map((line) => {
                const [name, quantity, unit] = line
                    .split("|")
                    .map((part) => part.trim());

                return {
                    name,
                    quantity: quantity || "1",
                    unit: unit || "unidade",
                };
            });
    }

    async function handleSubmit(event) {
        event.preventDefault();
        setError(null);

        if (!form.title.trim()) {
            setError("O nome da receita é obrigatório.");
            return;
        }

        const ingredients = parseIngredients(form.ingredients);

        if (
            ingredients.length === 0 ||
            ingredients.some(
                (item) =>
                    !item.name ||
                    !item.quantity ||
                    Number(item.quantity) <= 0 ||
                    !Number.isFinite(Number(item.quantity))
            )
        ) {
            setError(
                "Adiciona ingredientes válidos, com nome e quantidade positiva."
            );
            return;
        }

        const recipeData = {
            title: form.title.trim(),
            description: form.description.trim(),
            ingredients,
            instructions: form.instructions.trim(),
            image_url: form.image_url.trim() || null,
        };

        setSaving(true);

        try {
            if (isEditing) {
                const updatedRecipe = await updateRecipe(
                    recipe.id,
                    recipeData
                );

                onUpdated(updatedRecipe);
            } else {
                const newRecipe = await createRecipe(recipeData);

                onCreated(newRecipe);
            }

            onClose();
        } catch (error) {
            console.error("Erro ao guardar receita:", error);
            setError(error.message || "Não foi possível guardar a receita.");
        } finally {
            setSaving(false);
        }
    }

    const inputClass =
        "mt-1 w-full rounded-xl border border-gray-200 bg-gray-50 px-3 py-2.5 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-100";

    const labelClass = "text-sm font-medium text-gray-700";

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div>
                <label htmlFor="recipe-title" className={labelClass}>
                    Nome da receita *
                </label>
                <input
                    id="recipe-title"
                    name="title"
                    value={form.title}
                    onChange={handleChange}
                    placeholder="Ex.: Frango grelhado"
                    required
                    className={inputClass}
                />
            </div>

            <div>
                <label htmlFor="recipe-description" className={labelClass}>
                    Descrição
                </label>
                <textarea
                    id="recipe-description"
                    name="description"
                    value={form.description}
                    onChange={handleChange}
                    placeholder="Conta-nos um pouco sobre esta receita..."
                    rows={2}
                    className={inputClass}
                />
            </div>

            <div>
                <label htmlFor="recipe-ingredients" className={labelClass}>
                    Ingredientes *
                </label>
                <textarea
                    id="recipe-ingredients"
                    name="ingredients"
                    value={form.ingredients}
                    onChange={handleChange}
                    placeholder={"Frango\nAlho\nLimão"}
                    rows={4}
                    required
                    className={inputClass}
                />
                <p className="mt-1 text-xs text-gray-500">
                    Um ingrediente por linha. Para indicar a quantidade e a
                    unidade, usa: Frango | 2 | kg
                </p>
            </div>

            <div>
                <label htmlFor="recipe-instructions" className={labelClass}>
                    Instruções de preparação
                </label>
                <textarea
                    id="recipe-instructions"
                    name="instructions"
                    value={form.instructions}
                    onChange={handleChange}
                    placeholder="Descreve os passos da preparação..."
                    rows={3}
                    className={inputClass}
                />
            </div>

            <div>
                <label htmlFor="recipe-image" className={labelClass}>
                    URL da imagem (opcional)
                </label>
                <input
                    id="recipe-image"
                    name="image_url"
                    type="url"
                    value={form.image_url}
                    onChange={handleChange}
                    placeholder="https://exemplo.com/imagem.jpg"
                    className={inputClass}
                />
            </div>

            {error && (
                <p
                    role="alert"
                    className="rounded-xl bg-red-50 p-3 text-sm text-red-700"
                >
                    {error}
                </p>
            )}

            <div className="flex gap-3 pt-2">
                <button
                    type="button"
                    onClick={onClose}
                    disabled={saving}
                    className="flex-1 rounded-xl border border-gray-200 px-4 py-3 font-medium transition hover:bg-gray-50 disabled:opacity-50"
                >
                    Cancelar
                </button>

                <button
                    type="submit"
                    disabled={saving}
                    className="flex-1 rounded-xl bg-orange-600 px-4 py-3 font-semibold text-white transition hover:bg-orange-700 disabled:cursor-not-allowed disabled:opacity-50"
                >
                    {saving
                        ? "A guardar..."
                        : isEditing
                            ? "Guardar alterações"
                            : "Guardar receita"}
                </button>
            </div>
        </form>
    );
}

export default RecipeForm;
