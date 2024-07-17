import { createTodos, deleteTodosSoft, getTodos, getTodosBySearch, updateTodos } from '@/apis/todos-no-rls';
import { Database } from '@/types/supabase';
import { useState, useEffect } from 'react'

type TodoDto = Database["public"]["Tables"]["todos_no_rls"]["Row"];

const useTodosController = () => {
  const [loading, setLoading] = useState(false);
  const [todos, setTodos] = useState<TodoDto[]>([]);

  // todos 가져오기
  const onGetTodos = async () => {
    setLoading(true);
    try {
      const resultTodos = await getTodos();
      if (resultTodos) {
        setTodos(resultTodos);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    onGetTodos();
  }, []);

  // 비어있는 todo 생성하기
  const onCreateEmptyTodos = async () => {
    await createTodos ("");
    await onGetTodos();
  }

  // todo 업데이트하기
  const onUpdateTodos = async (id: number, content: string) => {
    await updateTodos(id, content);
    await onGetTodos();
  }

  // todo 삭제하기
  const onDeleteTodos = async (id: number) => {
    await deleteTodosSoft(id);
    await onGetTodos();
  }

  // todo 검색하기
  const onSearchTodos = async (terms: string) => {
    if (terms) {
      const todoResult = await getTodosBySearch(terms);
      if (todoResult) {
        setTodos(todoResult);
      }
    } else {
      await onGetTodos();
    }
  }

  return { loading, todos, onCreateEmptyTodos, onUpdateTodos, onDeleteTodos, onSearchTodos };
};

export default useTodosController;