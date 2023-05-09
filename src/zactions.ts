"use server";

import { z } from "zod";
import { zact } from "zact/server";
import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";

export const createTodo = zact(z.object({ content: z.string().min(1) }))(
  async ({ content }) => {
    await sql`INSERT INTO todo (content) VALUES (${content});`;
    revalidatePath("/");
  },
);

export const updateTodoCompletion = zact(
  z.object({ isCompleted: z.boolean(), id: z.number() }),
)(async ({ isCompleted, id }) => {
  await sql`UPDATE todo SET iscompleted = ${isCompleted} WHERE id = ${id}`;
  revalidatePath("/");
});
