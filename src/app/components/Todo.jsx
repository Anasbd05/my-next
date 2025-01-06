"use client";
import React, { useEffect, useState } from "react";

const Todo = () => {
  const [todo, setTodo] = useState({});

  useEffect(async () => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/199"
    );

    const result = await response.json();
    setTodo(result);
  }, []);

  return (
    <div>
      <h1 className="text-3xl text-emerald-400">{todo.title}</h1>
    </div>
  );
};

export default Todo;
