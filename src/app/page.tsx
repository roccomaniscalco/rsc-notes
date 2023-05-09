import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";

export default async function Index() {
  const { rows: todos } = await sql`SELECT * from TODO`;

  async function createTodo (todoFormData: FormData) {
    "use server"

    const content = todoFormData.get("content") as string
    if (!content) return

    await sql`insert into todo (content) values (${content});`
    revalidatePath("/")
  }

  return (
    <main className="max-w-4xl mx-auto my-4">
      <h1>TODOS</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.content}</li>
        ))}
      </ul>
      <form action={createTodo}>
          <input type="text" name="content" />
          <button type="submit">Create Todo</button>
      </form>
    </main>
  );
}
