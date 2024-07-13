"use client";
import React, { useEffect } from 'react'
import useTodosController from '../hooks/useTodosController';
import TodoList from '@/components/ui/TodoList';

const TodoContainer = () => {
    const { loading, todos } = useTodosController();

    return (
        <div>
            <TodoList sharedUserFullName='test user' ownerUserId='123123 '/>
        </div>
    )
}

export default TodoContainer