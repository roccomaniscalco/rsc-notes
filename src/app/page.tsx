import Todos from "@/app/Todos";
import { sql } from "@vercel/postgres";

export default async function Index() {
  const { rows: todos } = await sql`SELECT * from TODO`;

  const sortedTodos = todos.sort((a, b) => b.id - a.id) as {
    id: number;
    content: string;
    iscompleted: boolean;
  }[];

  return (
    <main className="mx-auto max-w-xl pb-4">
      <Todos todos={sortedTodos} />
    </main>
  );
}
