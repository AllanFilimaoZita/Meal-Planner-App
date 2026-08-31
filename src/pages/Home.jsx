import Photo from '../assets/img/Photo.png'

import { FaFire } from "react-icons/fa6";
import { IoMdMenu } from "react-icons/io";

import { useEffect, useState } from "react";

import Navigation from "../components/Navigation";
import { getMeals } from "../services/mealService";
import MealCard from "../components/meals/MealCard"

function Home() {

    const [meals, setMeals] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null)

    console.log("Receitas:", meals);
    console.log("Qauntidade:", meals.length);

    useEffect(() => {
        async function loadMeals() {

            try {

                const data = await getMeals();

                setMeals(data);

            } catch{

                setError("Não foi possível carregar receitas...")

            } finally {

                setLoading(false);

            }

        }

        loadMeals();
    }, [])

    if (loading) {
        return (
            <div className='w-full h-full flex flex-col items-center justify-center'>
                <p>Carregando...</p>
            </div>
        )
    }

    if (error) {
        return (
            <div className='w-full h-full flex flex-col items-center justify-center'>
                <p>{error}</p>
            </div>
        )
    }

    return (
        <div className="w-full h-full flex flex-col items-center justify-end py-5  relative">

            <header className="flex flex-row items-center justify-between w-full px-5 py-4 bg-white">
                <div className="w-10 hover:cursor-pointer duration-300">
                    <img src={Photo} className="w-full rounded-full" alt="profile" />
                </div>
                <div className='bg-gray-200 p-1.5 rounded-md hover:cursor-pointer hover:bg-gray-700 hover:text-white duration-300'>
                    <IoMdMenu className="size-6" />
                </div>
            </header>

            <section className='px-4 py-3 flex flex-col items-center justify-between border w-[90%] h-50 rounded-xl'>
                <div className='flex items-center justify-between w-full'>
                    <h3 className='font-bold'>Today's Progress</h3>

                    <span className='text-blue-400'>View more</span>
                </div>

                <div className='w-full'>
                    <div className='flex flex-col items-start'>
                        <span className='text-gray-300 text-sm'>Calories</span>
                        <div className='flex items-center justify-center gap-1'>
                            <FaFire />
                            <p className='text-xm'>1,284</p>
                        </div>
                    </div>
                </div>

                <div className='w-full flex items-center justify-start gap-4'>
                    <img src={Photo} className="w-9 rounded-full" alt="profile" />

                    <p className='bg-gray-100 px-4 py-2 rounded-full text-sm'>
                        Keep the pace! You're doing great.
                    </p>
                </div>
            </section>

            <section className='flex flex-col items-center justify-center gap-5 mt-5 mb-15 w-full px-5'>

                {meals.map((meal) => (
                    <MealCard
                        key={meal.idMeal}
                        meal={meal}
                    />
                ))}


            </section>

            <Navigation />
        </div>
    )
}

export default Home