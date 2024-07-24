import {NextResponse} from "next/server";
import {createServerSideClient} from "@/lib/supabase";
import {getTodos} from "@/actions/todo/todo.action";

export const GET = async () => {
  const result = await getTodos();
  console.log("todo GET API income", result);
  return NextResponse.json({ ...result });
}