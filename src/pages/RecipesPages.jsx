
import { useEffect, useState } from "react";
import { getRecipes } from "../services/recipeService";

function RecipesPage() {
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {

        async function loadRecipes() {

            try {

                const data = await getRecipes();
                setRecipes(data);

            } catch (error) {
                
                setError(error.message);

            } finally {

                setLoading(false);

            }

        }

        loadRecipes();
        
    }, []);

    if (loading) {
        return <p>A carregar receitas...</p>;
    }

    if (error) {
        return <p>Erro ao carregar receitas: {error}</p>;
    }

    return (

        <main>

            <h1>As minhas receitas</h1>

            {recipes.length === 0 ? (<p>Ainda não existem receitas.</p>) : (
                recipes.map((recipe) => (
                    <div key={recipe.id}>
                        <h2>{recipe.title}</h2>
                        <p>{recipe.description}</p>
                    </div>
                ))
            )}
        </main>
    );
}

export default RecipesPage;