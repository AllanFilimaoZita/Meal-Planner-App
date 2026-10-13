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