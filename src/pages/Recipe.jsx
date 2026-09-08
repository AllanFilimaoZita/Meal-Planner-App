import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import { MdKeyboardBackspace } from "react-icons/md";
import { IoIosMore } from "react-icons/io";
import { IoReload } from "react-icons/io5";

import { getMealById } from "../services/mealService";

function Recipe() {
    const { id } = useParams();

    const [recipe, setRecipe] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function loadRecipe() {
            try {
                const data = await getMealById(id);

                if (!data) {
                    setError("Receita não encontrada.");
                    return;
                }

                setRecipe(data);
            } catch {
                setError("Não foi possível carregar a receita.");
            } finally {
                setLoading(false);
            }
        }

        loadRecipe();
    }, [id]);

    if (loading) {
        return (
            <div className="min-h-screen w-full flex items-center justify-center">
                <p>A carregar receita...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen w-full flex items-center justify-center px-5">
                <p className="text-center">{error}</p>
            </div>
        );
    }

    const ingredients = Array.from({ length: 20 }, (_, index) => {
        const ingredient = recipe[`strIngredient${index + 1}`]?.trim();
        const measure = recipe[`strMeasure${index + 1}`]?.trim();

        if (!ingredient) {
            return null;
        }

        return {
            ingredient,
            measure,
        };
    }).filter(Boolean);

    return (
        <div className="min-h-screen w-full relative pb-10">

            {/* Header */}
            <header className="absolute top-0 left-0 z-10 w-full flex items-center justify-between px-5 py-4">

                <Link
                    to="/home"
                    aria-label="Voltar para Home"
                    className="bg-white/80 rounded-full p-1"
                >
                    <MdKeyboardBackspace className="size-7" />
                </Link>

                <button
                    type="button"
                    aria-label="Mais opções"
                    className="bg-white/80 rounded-full p-1"
                >
                    <IoIosMore className="size-7" />
                </button>

            </header>

            {/* Recipe image */}
            <section>
                <img
                    src={recipe.strMealThumb}
                    alt={recipe.strMeal}
                    className="w-full h-70 object-cover"
                />
            </section>

            {/* Recipe content */}
            <main className="w-full -mt-5 relative bg-white rounded-t-4xl pt-5">

                {/* Recipe title */}
                <section className="w-full flex items-center justify-between px-5">

                    <IoReload className="size-7" />

                    <div className="flex flex-col items-center text-center">

                        <h1 className="font-bold text-xl">
                            {recipe.strMeal}
                        </h1>

                        <p className="text-gray-500">
                            {recipe.strArea}
                        </p>

                    </div>

                    <div className="w-7" />

                </section>

                {/* Nutrition */}
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

                {/* Ingredients */}
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

                            {ingredients.map(({ ingredient, measure }) => (
                                <li
                                    key={`${ingredient}-${measure}`}
                                    className="flex items-center justify-between gap-4"
                                >

                                    <p>
                                        {ingredient}
                                    </p>

                                    <span className="text-gray-400 text-sm text-right">
                                        {measure || "—"}
                                    </span>

                                </li>
                            ))}

                        </ul>
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

        </div>
    );
}

export default Recipe;