"use client";

import TodoCreationInput from "@/app/TodoCreationInput";
import TodoCompletionToggle from "@/app/TodoCompletionToggle";
import { experimental_useOptimistic as useOptimistic } from "react";

type TodosProps = {
  todos: { id: number; content: string; iscompleted: boolean }[];
};

const Todos = (props: TodosProps) => {
  const [optimisticTodos, addOptimisticTodo] = useOptimistic(
    props.todos,
    (state, newContent: string) => [
      {
        id: props.todos[0].id + 1 ?? 1,
        content: newContent,
        iscompleted: false,
      },
      ...state,
    ],
  );

  return (
    <>
      <div className="sticky top-0 z-10 border-b border-slate-900 bg-slate-950/80 px-4 py-5 backdrop-blur-sm">
        <TodoCreationInput addOptimisticTodo={addOptimisticTodo} />
      </div>
      <ul>
        {optimisticTodos.map((todo) => (
          <li
            key={todo.id}
            className="ml-[1px] flex items-start justify-between gap-2 border-b border-slate-900 py-3 pl-7 pr-4 text-lg"
          >
            {todo.content}
            <TodoCompletionToggle id={todo.id} isCompleted={todo.iscompleted} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default Todos;
