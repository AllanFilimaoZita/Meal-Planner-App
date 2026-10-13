import { supabase } from "../lib/supabase";

export async function getRecipes() {
    const {
        data: { user },
        error: userError,
    } = await supabase.auth.getUser();

    if (userError) {
        throw userError;
    }

    if (!user) {
        throw new Error("Utilizador não autenticado.");
    }

    const { data, error } = await supabase
        .from("recipes")
        .select("*")
        .eq("user_id", user.id);

    if (error) {
        throw error;
    }

    return data;
}

export async function getRecipeById(recipeId) {

    const {
        data: { user },
        error: userError,
    } = await supabase.auth.getUser();

    if (userError) {

        throw userError;

    }

    if (!user) {

        throw new Error("Utilizador não autenticado.")

    }

    const { data, error } = await supabase
        .from("recipes")
        .select("*")
        .eq("id", recipeId)
        .single()

    if (error) {

        throw error;

    }

    return data;

}

export async function createRecipe(recipe) {
    const {
        data: { user },
        error: userError,
    } = await supabase.auth.getUser();

    if (userError) {
        throw userError;
    }

    if (!user) {
        throw new Error("Utilizador não autenticado.");
    }

    const { data, error } = await supabase
        .from("recipes")
        .insert({
            user_id: user.id,
            title: recipe.title,
            description: recipe.description,
            ingredients: recipe.ingredients,
            instructions: recipe.instructions,
            image_url: recipe.image_url,
        })
        .select()
        .single();

    if (error) {
        throw error;
    }

    return data;
}

export async function updateRecipe(recipeId, recipe) {
    const {
        data: { user },
        error: userError,
    } = await supabase.auth.getUser();

    if (userError) {
        throw userError;
    }

    if (!user) {
        throw new Error("Utilizador não autenticado.");
    }

    const { data, error } = await supabase
        .from("recipes")
        .update({
            title: recipe.title,
            description: recipe.description,
            ingredients: recipe.ingredients,
            instructions: recipe.instructions,
            image_url: recipe.image_url,
        })
        .eq("id", recipeId)
        .eq("user_id", user.id)
        .select()
        .single();

    if (error) {
        throw error;
    }

    return data;
}


export async function deleteRecipe(recipeId) {
    const { error } = await supabase
        .from("recipes")
        .delete()
        .eq("id", recipeId);

    if (error) {
        throw error;
    }
}

