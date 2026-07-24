import { supabase } from "../lib/supabase";

export async function signUp(name, email, password) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        full_name: name,
      },
    },
  });

  return { data, error };
}

export async function SignIn(email, password) {
  const {data, error} = await supabase.auth.signWithPassword({
    email,
    password
  });

  return (data, error)
}

export async function SignOut() {
  const { error }= await supabase.auth.signOut();

  return ((error))
}