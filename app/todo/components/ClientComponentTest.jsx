"use client";
import React from "react";
import {pingAction} from "@/actions/ping/ping.action";
import {getTodoAction} from "@/actions/todo/todo.action";

const ClientComponentTest = () => {
  const handleClick = async () => {
    const result = await getTodoAction();
    console.log("handleClick result : ", result);
  }
  return (
    <div>
      <button onClick={handleClick}>Test Server actions</button>
    </div>
  )
}

export default ClientComponentTest;

// 1. ServerActions + RouteHandler
// 2. ServerActions + SSR
// 3. ServerActions + CSR