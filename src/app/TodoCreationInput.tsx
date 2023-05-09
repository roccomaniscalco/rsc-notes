"use client";

import { createTodo } from "@/zactions";
import { Loader2Icon, PlusIcon } from "lucide-react";
import { FormEvent, useState } from "react";
import { useZact } from "zact/client";

const CreateCreationInput = () => {
  const { mutate, isLoading } = useZact(createTodo);
  const [content, setContent] = useState("");

  const handleChange = (event: FormEvent<HTMLInputElement>) => {
    setContent(event.currentTarget.value);
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (content) mutate({ content });
    setContent("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="text"
        placeholder="Add todo..."
        onChange={handleChange}
        value={content}
        disabled={isLoading}
        className="flex-1 rounded-md border border-slate-800 bg-slate-900 px-3 py-2 text-xl opacity-80 outline-none ring-pink-400 ring-offset-4 ring-offset-slate-950 transition-opacity placeholder:text-slate-500 hover:opacity-100 focus-visible:ring-2"
      />
      <button
        type="submit"
        className="rounded-md border border-slate-800 bg-slate-900 px-3 opacity-80 outline-none ring-pink-400 ring-offset-4 ring-offset-slate-950 transition-opacity hover:opacity-100 focus-visible:ring-2"
        disabled={isLoading}
      >
        {isLoading ? (
          <Loader2Icon className="h-5 w-5 animate-spin" />
        ) : (
          <PlusIcon className="h-5 w-5" />
        )}
      </button>
    </form>
  );
};

export default CreateCreationInput;
