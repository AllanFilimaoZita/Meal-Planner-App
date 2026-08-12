import axios from "axios";

export async function getMeals() {

    const response = await axios.get(
        "https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood"
    );

    return response.data.meals;
}