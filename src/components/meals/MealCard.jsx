

export default function MealCard({ meal }) {

    return (

        <div className="mb-5">
            
            <div className="w-full">
                <img src={ meal.strMealThumb} alt={meal.strMeal} className="rounded-2xl" />
            </div>

            <h2 className="font-bold text-xl">{ meal.strMeal }</h2>

        </div>

    )

}

