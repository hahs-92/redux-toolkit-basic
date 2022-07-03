import React, { useState } from "react";
//rtk hooks
import { useGetTodosQuery, useGetTodoByIdQuery } from "./store/apis/todosApi";

export default function TodoApp() {
  const [todoId, setTodoId] = useState(1);
  //   const { data: todos = [], isLoading } = useGetTodosQuery();
  const { data: todo, isLoading } = useGetTodoByIdQuery(todoId);

  const nextTodo = () => {
    setTodoId(todoId + 1);
  };

  const prevTodo = () => {
    if (todoId == 1) return;
    setTodoId(todoId - 1);
  };

  return (
    <main>
      <h1>Rtk</h1>
      <hr />
      {isLoading && <span>Loading...</span>}
      {!isLoading && <pre>{JSON.stringify(todo)}</pre>}

      <button onClick={nextTodo}>Next</button>
      <button onClick={prevTodo}>Prev</button>

      {/* <section>
        <ul>
          {!isLoading &&
            todos.length &&
            todos.map((todo) => <li key={todo.id}>{todo.title}</li>)}
        </ul>
      </section> */}
    </main>
  );
}
