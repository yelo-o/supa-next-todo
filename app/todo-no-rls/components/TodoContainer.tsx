"use client";
import React, { useEffect } from 'react'
import useTodosController from '../hooks/useTodosController';
import TodoList from '@/components/ui/TodoList';

const TodoContainer = () => {
    const { loading, todos } = useTodosController();

    return (
        <div>
            <TodoList 
            sharedUserFullName='test user'
            ownerUserId='123123'
            loading={loading}
            todoListData={todos}
            isReadOnly={false}
            onUpdate={(id, content) => {
                console.log(">>id, content, id, content");
            }}
            onCreate={()=>{
                console.log(">>onCreate");
            }}
            onDelete={(id)=>{
                console.log(">>id", id);
            }}
            onSearch={(terms) => {
                console.log(">>terms", terms);
            }}

            />
        </div>
    )
}

export default TodoContainer