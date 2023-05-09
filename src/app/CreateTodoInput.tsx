"use client";

import { createTodo } from "@/zactions";
import { FormEvent, useState } from "react";

const CreateTodoInput = () => {
  const [content, setContent] = useState("");

  const handleChange = (event: FormEvent<HTMLInputElement>) => {
    setContent(event.currentTarget.value);
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    setContent("");
    createTodo({ content });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={handleChange} value={content} />
      <button type="submit" >Add Todo</button>
    </form>
  );
};

export default CreateTodoInput;
