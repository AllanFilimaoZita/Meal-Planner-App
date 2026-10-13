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
