import { sql } from "@vercel/postgres";
import CreateCreationInput from "./TodoCreationInput";
import TodoCompletionToggle from "./TodoCompletionToggle";

export default async function Index() {
  const { rows: todos } = await sql`SELECT * from TODO`;
  const sortedTodos = todos.sort((a, b) => b.id - a.id)

  return (
    <main className="mx-auto max-w-xl pb-4">
      <div className="sticky z-10 top-0 border-b border-slate-900 bg-slate-950/80 py-5 px-4 backdrop-blur-sm">
        <CreateCreationInput />
      </div>
      <ul>
        {sortedTodos.map((todo) => (
          <li
            key={todo.id}
            className="border-b ml-[1px] border-slate-900 pl-7 pr-4 py-3 text-lg flex justify-between gap-2 items-start"
          >
            {todo.content} 
            <TodoCompletionToggle id={todo.id} isCompleted={todo.iscompleted} />
          </li>
        ))}
      </ul>
    </main>
  );
}
