import { useEffect, useState } from "react";
import { FaFire } from "react-icons/fa6";
import { IoMdMenu } from "react-icons/io";

import Photo from "../assets/img/Photo.png";
import Navigation from "../components/Navigation";
import MealCard from "../components/meals/MealCard";
import { getMeals } from "../services/mealService";

function Home() {
    const [meals, setMeals] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function loadMeals() {
            try {
                const data = await getMeals();

                setMeals(data);
            } catch {
                setError("Não foi possível carregar as receitas.");
            } finally {
                setLoading(false);
            }
        }

        loadMeals();
    }, []);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <p>A carregar receitas...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen flex items-center justify-center px-5">
                <p className="text-center">{error}</p>
            </div>
        );
    }

    return (
        <div className="min-h-screen w-full flex flex-col items-center py-5 relative">
            <header className="flex flex-row items-center justify-between w-full px-5 py-4 bg-white">
                <div className="w-10 cursor-pointer">
                    <img
                        src={Photo}
                        className="w-full rounded-full"
                        alt="Profile"
                    />
                </div>

                <button
                    type="button"
                    className="bg-gray-200 p-1.5 rounded-md hover:bg-gray-700 hover:text-white transition-all"
                >
                    <IoMdMenu className="size-6" />
                </button>
            </header>

            <section className="px-4 py-3 flex flex-col items-center justify-between border w-[90%] h-50 rounded-xl">
                <div className="flex items-center justify-between w-full">
                    <h3 className="font-bold">Today's Progress</h3>

                    <span className="text-blue-400">
                        View more
                    </span>
                </div>

                <div className="w-full">
                    <div className="flex flex-col items-start">
                        <span className="text-gray-300 text-sm">
                            Calories
                        </span>

                        <div className="flex items-center justify-center gap-1">
                            <FaFire />

                            <p className="text-xl">
                                1,284
                            </p>
                        </div>
                    </div>
                </div>

                <div className="w-full flex items-center justify-start gap-4">
                    <img
                        src={Photo}
                        className="w-9 rounded-full"
                        alt="Profile"
                    />

                    <p className="bg-gray-100 px-4 py-2 rounded-full text-sm">
                        Keep the pace! You're doing great.
                    </p>
                </div>
            </section>

            <section className="flex flex-col items-center justify-center gap-5 mt-5 mb-15 w-full px-5">
                {meals.length === 0 ? (
                    <p className="text-gray-500 text-center">
                        Nenhuma receita encontrada.
                    </p>
                ) : (
                    meals.map((meal) => (
                        <MealCard
                            key={meal.idMeal}
                            meal={meal}
                        />
                    ))
                )}
            </section>

            <Navigation />
        </div>
    );
}

export default Home;