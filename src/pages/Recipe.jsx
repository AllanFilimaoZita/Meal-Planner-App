import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import { MdKeyboardBackspace } from "react-icons/md";
import { IoIosMore } from "react-icons/io";
import { IoReload } from "react-icons/io5";

import {
    deleteRecipe,
    getRecipeById,
} from "../services/recipeService";

import RecipeModal from "../components/RecipeModal";

function Recipe() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [recipe, setRecipe] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const [isDeleting, setIsDeleting] = useState(false);
    const [deleteError, setDeleteError] = useState(null);

    useEffect(() => {
        async function loadRecipe() {
            try {
                setLoading(true);
                setError(null);

                const data = await getRecipeById(id);
                setRecipe(data);
            } catch (error) {
                console.error("Erro ao carregar receita:", error);
                setError("Não foi possível carregar a receita.");
            } finally {
                setLoading(false);
            }
        }

        loadRecipe();
    }, [id]);

    function handleRecipeUpdated(updatedRecipe) {
        setRecipe(updatedRecipe);
    }

    async function handleDeleteRecipe() {
        setIsMenuOpen(false);

        try {
            setIsDeleting(true);
            setDeleteError(null);

            await deleteRecipe(recipe.id);

            navigate("/home", { replace: true });
        } catch (error) {
            console.error("Erro ao eliminar receita:", error);

            setDeleteError(
                "Não foi possível eliminar a receita. Tenta novamente."
            );
        } finally {
            setIsDeleting(false);
        }
    }

    if (loading) {
        return (
            <div className="min-h-screen w-full flex items-center justify-center">
                <p>A carregar receita...</p>
            </div>
        );
    }

    if (error || !recipe) {
        return (
            <div className="min-h-screen w-full flex flex-col items-center justify-center gap-4 px-5">
                <p className="text-center">
                    {error || "Receita não encontrada."}
                </p>

                <Link to="/home" className="text-[#8B4EEB] font-bold">
                    Voltar para Home
                </Link>
            </div>
        );
    }

    const ingredients = Array.isArray(recipe.ingredients)
        ? recipe.ingredients
        : [];

    return (
        <div className="min-h-screen w-full relative pb-10">
            <header className="absolute top-0 left-0 z-20 w-full flex items-center justify-between px-5 py-4">
                <Link
                    to="/home"
                    aria-label="Voltar para Home"
                    className="bg-white/80 rounded-full p-1"
                >
                    <MdKeyboardBackspace className="size-7" />
                </Link>

                <div className="relative">
                    <button
                        type="button"
                        aria-label="Mais opções"
                        aria-expanded={isMenuOpen}
                        onClick={() =>
                            setIsMenuOpen((previous) => !previous)
                        }
                        className="bg-white/80 rounded-full p-1"
                    >
                        <IoIosMore className="size-7" />
                    </button>

                    {isMenuOpen && (
                        <div className="absolute right-0 mt-2 w-48 overflow-hidden rounded-xl bg-white shadow-lg">
                            <button
                                type="button"
                                onClick={() => {
                                    setIsMenuOpen(false);
                                    setIsModalOpen(true);
                                }}
                                className="w-full px-4 py-3 text-left text-sm hover:bg-gray-100"
                            >
                                Editar receita
                            </button>

                            <button
                                type="button"
                                onClick={handleDeleteRecipe}
                                disabled={isDeleting}
                                className="w-full px-4 py-3 text-left text-sm text-red-600 hover:bg-red-50 disabled:opacity-50"
                            >
                                Eliminar receita
                            </button>
                        </div>
                    )}
                </div>
            </header>

            {deleteError && (
                <div
                    role="alert"
                    className="fixed top-20 left-5 right-5 z-30 rounded-xl bg-red-50 p-3 text-sm text-red-700 shadow"
                >
                    {deleteError}
                </div>
            )}

            <section>
                {recipe.image_url ? (
                    <img
                        src={recipe.image_url}
                        alt={recipe.title}
                        className="w-full h-70 object-cover"
                    />
                ) : (
                    <div className="w-full h-70 flex items-center justify-center bg-gray-200">
                        <p className="text-gray-500">
                            Sem imagem disponível
                        </p>
                    </div>
                )}
            </section>

            <main className="w-full -mt-5 relative bg-white rounded-t-4xl pt-5">
                <section className="w-full flex items-center justify-between px-5">
                    <IoReload className="size-7" />

                    <div className="flex flex-col items-center text-center">
                        <h1 className="font-bold text-xl">
                            {recipe.title}
                        </h1>

                        {recipe.description && (
                            <p className="text-gray-500 mt-2">
                                {recipe.description}
                            </p>
                        )}
                    </div>

                    <div className="w-7" />
                </section>

                <section className="flex items-center justify-between w-full px-5 py-4 mt-4 bg-gray-200">
                    <div className="flex flex-col items-center">
                        <span>—</span>
                        <p className="font-bold">Energy</p>
                    </div>

                    <div className="flex flex-col items-center">
                        <span>—</span>
                        <p className="font-bold">Protein</p>
                    </div>

                    <div className="flex flex-col items-center">
                        <span>—</span>
                        <p className="font-bold">Carbs</p>
                    </div>

                    <div className="flex flex-col items-center">
                        <span>—</span>
                        <p className="font-bold">Fat</p>
                    </div>
                </section>

                <section className="flex flex-col w-full gap-3 px-5 py-4">
                    <div className="flex items-center justify-between">
                        <p className="font-bold">
                            Ingredients{" "}
                            <span className="font-light text-xs">
                                {ingredients.length} items
                            </span>
                        </p>
                    </div>

                    {ingredients.length === 0 ? (
                        <p className="text-gray-500">
                            Ingredientes não disponíveis.
                        </p>
                    ) : (
                        <ul className="flex flex-col gap-4 mt-3">
                            {ingredients.map((ingredient, index) => (
                                <li
                                    key={`${ingredient.name}-${index}`}
                                    className="flex items-center justify-between gap-4"
                                >
                                    <p>{ingredient.name}</p>

                                    <span className="text-gray-400 text-sm text-right">
                                        {[
                                            ingredient.quantity,
                                            ingredient.unit,
                                        ]
                                            .filter(Boolean)
                                            .join(" ") || "—"}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    )}

                    {recipe.instructions && (
                        <div className="mt-5">
                            <h2 className="font-bold text-lg mb-2">
                                Instructions
                            </h2>

                            <p className="text-gray-600 whitespace-pre-line">
                                {recipe.instructions}
                            </p>
                        </div>
                    )}

                    <div className="mt-5">
                        <Link
                            to={`/preparetion/${id}`}
                            className="block bg-[#8B4EEB] w-full py-3 rounded-md text-white text-lg font-bold text-center"
                        >
                            Start cooking
                        </Link>
                    </div>
                </section>
            </main>

            {isModalOpen && (
                <RecipeModal
                    recipe={recipe}
                    onClose={() => setIsModalOpen(false)}
                    onUpdated={handleRecipeUpdated}
                />
            )}
        </div>
    );
}

export default Recipe;