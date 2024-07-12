"use client";
import { createTodos, deleteTodosSoft, getTodos, getTodosById, getTodosBySearch, updateTodos } from '@/apis/todos-no-rls';
import React, { useEffect } from 'react'

const TodoContainer = () => {
  useEffect(() => {
    deleteTodosSoft(7);
  }, []);

  return (
    <div>TodoContainer</div>
  )
}

export default TodoContainer