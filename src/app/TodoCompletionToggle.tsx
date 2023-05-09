"use client";

import { updateTodoCompletion } from "@/zactions";
import { CheckSquareIcon, SquareIcon } from "lucide-react";
import { useZact } from "zact/client";

type TodoCompletionToggleProps = {
  isCompleted: boolean;
  id: number;
};
const TodoCompletionToggle = (props: TodoCompletionToggleProps) => {
  const { mutate, isLoading } = useZact(updateTodoCompletion);

  const handleClick = () => {
    mutate({ isCompleted: !props.isCompleted, id: props.id });
  };

  return (
    <button onClick={handleClick} disabled={isLoading} className="px-4 outline-none ring-pink-400 ring-offset-4 ring-offset-slate-950 bg-slate-950 transition-opacity hover:opacity-100 focus-visible:ring-2 rounded-md">
      {props.isCompleted ? (
        <CheckSquareIcon className="h-5 w-5 text-pink-400" />
      ) : (
        <SquareIcon className="h-5 w-5 text-slate-500" />
      )}
    </button>
  );
};

export default TodoCompletionToggle;
