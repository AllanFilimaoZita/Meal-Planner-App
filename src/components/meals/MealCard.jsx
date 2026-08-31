import { Link } from 'react-router-dom';

export default function MealCard({ meal }) {

    return (

        <Link to={`/recipe/${meal.idMeal}`}>
            <div className="mb-5">
                
                <img src={ meal.strMealThumb} alt={meal.strMeal} className="rounded-2xl" />

                <div className="p-4">
                    <h2 className="font-bold text-xl">{ meal.strMeal }</h2>
                    
                    <p className="text-gray-500 text-sm">
                        {meal.strCategory} • {meal.strArea}
                    </p>
                </div>

            </div>
        </Link>

    )

}

