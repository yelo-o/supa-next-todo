import {NextResponse} from "next/server";
import {createServerSideClient} from "@/lib/supabase";

export const GET = async () => {
  const supabase = await createServerSideClient();

  const result = await supabase
    .from("todos_no_rls")
    .select("*")
    .is("deleted_at", null)
    .order("id", { ascending: false });

  console.log("todo GET API income" , result);

  return NextResponse.json({ ...result });
}