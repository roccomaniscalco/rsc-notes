import { updateTodoCompletion } from "@/zactions";
import { CheckIcon } from "lucide-react";
import { experimental_useOptimistic as useOptimistic } from "react";
import { useZact } from "zact/client";

type TodoCompletionToggleProps = {
  isCompleted: boolean;
  id: number;
};
const TodoCompletionToggle = (props: TodoCompletionToggleProps) => {
  const { mutate, isLoading } = useZact(updateTodoCompletion);
  const [optimisticIsCompleted, toggleOptimisticIsCompleted] = useOptimistic(
    props.isCompleted,
    (prevIsCompleted) => !prevIsCompleted,
  );

  const handleClick = () => {
    toggleOptimisticIsCompleted(undefined);
    mutate({ isCompleted: !optimisticIsCompleted, id: props.id });
  };

  return (
    <button
      onClick={handleClick}
      disabled={isLoading}
      className="mx-2 rounded-md border border-slate-800 bg-slate-900 p-1 opacity-80 outline-none ring-pink-400 ring-offset-4 ring-offset-slate-950 transition-opacity hover:opacity-100 focus-visible:ring-2"
    >
      <CheckIcon
        className={`h-5 w-5 ${
          optimisticIsCompleted ? "text-pink-400" : "text-slate-600"
        }`}
      />
    </button>
  );
};

export default TodoCompletionToggle;
