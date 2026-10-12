import { supabase } from "../lib/supabase";

export async function getRecipes() {
    const { data, error } = await supabase
        .from("recipes")
        .select("*");

    if (error) {
        throw error;
    }

    return data;
}