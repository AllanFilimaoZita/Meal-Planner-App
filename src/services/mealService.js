import axios from "axios";

export async function getMeals() {

    const response = await axios.get(
        "https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood"
    );

    return response.data.meals;

}

export async function getMealById(id) {

    const response = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    );

    return response.data.meals[0];

}