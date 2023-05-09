import { sql } from "@vercel/postgres";
import CreateTodoInput from "./CreateTodoInput";

export default async function Index() {
  const { rows: todos } = await sql`SELECT * from TODO`;

  return (
    <main className="max-w-4xl mx-auto p-4">
      <h1>TODOS</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.content}</li>
        ))}
      </ul>
      <CreateTodoInput />
    </main>
  );
}
