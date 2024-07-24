"use server";

import {createServerSideClient} from "@/lib/supabase";

// todoList 가져오기
export const getTodos = async () => {
  const supabase = await createServerSideClient();
  const result = await supabase
    .from("todos_with_rls")
    .select("*")
    .is("deleted_at", null)
    .order("id", { ascending: false });

  return result.data;
}

// todoList 가져오기 by id
export const getTodosById = async (id: number) => {
  const supabase = await createServerSideClient();
  const result = await supabase
    .from("todos_with_rls")
    .select("*")
    .is("deleted_at", null)
    .eq("id", id);

  return result.data;
}

// todoList 가져오기 + search
export const getTodosBySearch = async (terms: string) => {
  const supabase = await createServerSideClient();
  const result = await supabase
    .from("todos_with_rls")
    .select("*")
    .is("deleted_at", null)
    .ilike("content", `%${terms}%`)
    .order("id", { ascending: false })
    .limit(500);

  return result.data;
}

// todoList 생성하기
export const createTodos = async (content: string) => {
  const supabase = await createServerSideClient();
  const result = await supabase
    .from("todos_with_rls")
    .insert([{ content }])
    .select();

  return result.data;
}

// todoList 업데이트 하기
export const updateTodos = async (id: number, content: string) => {
  const supabase = await createServerSideClient();
  const result = await supabase
    .from("todos_with_rls")
    // .update({ content: content })
    .update({
      content, // key value 값이 같으므로 content만 적어도 됨
      updated_at: new Date().toISOString()})
    .eq("id", id)
    .select();

  return result.data;
}

// todoList soft delete 하기
export const deleteTodosSoft = async (id: number)  => {
  const supabase = await createServerSideClient();
  const result = await supabase
    .from("todos_with_rls")
    .update({
      deleted_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    })
    .eq("id", id)
    .select();

  return result.data;
}

// todoList hard delete 하기
// export const deleteTodosHard = async (id: number)  => {
//     const supabase = await createServerSideClient();
//     const result = await supabase
//     .from("todos_with_rls")
//     .delete()
//     .eq("id", id);

//     return result.data;
// }