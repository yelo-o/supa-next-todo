"use client";
import React, { useEffect } from 'react'
import useTodosController from '../hooks/useTodosController';
import TodoList from '@/components/ui/TodoList';

interface TodoContainerProps {
  ownerUserId?: string;
}

const TodoContainer = ({ ownerUserId }: TodoContainerProps) => {
  const {
    loading,
    todos,
    onCreateEmptyTodos,
    onDeleteTodos,
    onSearchTodos,
    onUpdateTodos
  } = useTodosController();

  return (
    <div>
      <TodoList
        sharedUserFullName='test user'
        ownerUserId={ownerUserId}
        loading={loading}
        todoListData={todos}
        isReadOnly={false}
        onUpdate={onUpdateTodos}
        onCreate={onCreateEmptyTodos}
        onDelete={onDeleteTodos}
        onSearch={onSearchTodos}
      />
    </div>
  )
}

export default TodoContainer