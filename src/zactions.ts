"use server";

import { z } from "zod";
import { zact } from "zact/server";
import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";

export const createTodo = zact(z.object({ content: z.string().min(1) }))(
  async ({ content }) => {
    await sql`insert into todo (content) values (${content});`;
    revalidatePath("/");
  },
);
