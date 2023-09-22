import { supabase } from "$lib";

export async function load() {
  const { data } = await supabase.from('orders').select('*, registrations (*)');
  return { orders: data };
}