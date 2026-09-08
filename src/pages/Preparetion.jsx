import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import { MdOpenInFull } from "react-icons/md";

import { getMealById } from "../services/mealService";

function Preparetion() {
    const { id } = useParams();

    const [recipe, setRecipe] = useState(null);
    const [steps, setSteps] = useState([]);
    const [currentStep, setCurrentStep] = useState(0);

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

                const instructions = data.strInstructions
                    ?.split(/\r?\n/)
                    .map((step) => step.trim())
                    .filter(Boolean);

                setSteps(instructions ?? []);
            } catch {
                setError("Não foi possível carregar a receita.");
            } finally {
                setLoading(false);
            }
        }

        loadRecipe();
    }, [id]);

    function handlePrevious() {
        if (currentStep > 0) {
            setCurrentStep((step) => step - 1);
        }
    }

    function handleNext() {
        if (currentStep < steps.length - 1) {
            setCurrentStep((step) => step + 1);
        }
    }

    if (loading) {
        return (
            <div className="min-h-screen w-full flex items-center justify-center">
                <p>A carregar preparação...</p>
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

    if (steps.length === 0) {
        return (
            <div className="min-h-screen w-full flex flex-col items-center justify-center gap-5 px-5">
                <p className="text-center">
                    As instruções desta receita não estão disponíveis.
                </p>

                <Link
                    to={`/recipe/${id}`}
                    className="bg-[#8B4EEB] px-6 py-3 rounded-md text-white font-bold"
                >
                    Voltar para receita
                </Link>
            </div>
        );
    }

    const isFirstStep = currentStep === 0;
    const isLastStep = currentStep === steps.length - 1;

    return (
        <div className="min-h-screen w-full relative">

            <header className="absolute top-0 left-0 z-10 w-full flex items-center justify-end px-5 py-4">
                <button
                    type="button"
                    aria-label="Expandir preparação"
                    className="text-white"
                >
                    <MdOpenInFull className="size-7" />
                </button>
            </header>

            <section>
                <img
                    src={recipe.strMealThumb}
                    alt={recipe.strMeal}
                    className="w-full h-70 object-cover"
                />
            </section>

            <main className="w-full -mt-5 relative bg-white rounded-t-4xl pt-5">

                <section className="flex flex-col w-full gap-3 px-5 py-4">

                    <h2 className="font-bold">
                        Ingredients
                    </h2>

                    <ul className="flex flex-col gap-3">

                        {Array.from({ length: 20 }, (_, index) => {
                            const ingredient =
                                recipe[
                                    `strIngredient${index + 1}`
                                ]?.trim();

                            const measure =
                                recipe[
                                    `strMeasure${index + 1}`
                                ]?.trim();

                            if (!ingredient) {
                                return null;
                            }

                            return (
                                <li
                                    key={`${ingredient}-${measure}`}
                                    className="flex items-center justify-between gap-4"
                                >
                                    <p>{ingredient}</p>

                                    <span className="text-gray-400 text-sm text-right">
                                        {measure || "—"}
                                    </span>
                                </li>
                            );
                        })}

                    </ul>

                    <div className="mt-4">

                        <h2 className="font-bold mb-2">
                            Instructions
                        </h2>

                        <p className="leading-7 text-gray-700">
                            {steps[currentStep]}
                        </p>

                    </div>

                    <div className="flex gap-4 mt-5">

                        <button
                            type="button"
                            onClick={handlePrevious}
                            disabled={isFirstStep}
                            className={`w-full py-3 rounded-md text-lg font-bold ${
                                isFirstStep
                                    ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                                    : "bg-gray-300 text-black"
                            }`}
                        >
                            Previous
                        </button>

                        {isLastStep ? (
                            <Link
                                to={`/recipe/${id}`}
                                className="w-full py-3 rounded-md bg-[#8B4EEB] text-white text-lg font-bold text-center"
                            >
                                Finish
                            </Link>
                        ) : (
                            <button
                                type="button"
                                onClick={handleNext}
                                className="w-full py-3 rounded-md bg-[#8B4EEB] text-white text-lg font-bold"
                            >
                                Next
                            </button>
                        )}

                    </div>

                </section>
            </main>
        </div>
    );
}

export default Preparetion;