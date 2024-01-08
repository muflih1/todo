import { useCallback, useState } from "react";
import Edit from "./edit";

export default function Todo({ todo, onChange, onDelete, updateTodo }) {
  const [open, setOpen] = useState(false);

  const closeModal = useCallback(() => {
    setOpen(false);
  }, [open]);

  return (
    <li className="todo">
      <div className="todo-left">
        <input
          type="checkbox"
          value={todo.isCompleted}
          onChange={() => onChange(todo.id)}
        />
        <span className={`${todo.isCompleted ? "line-through" : ""}`}>
          {todo.task}
        </span>
      </div>
      <div className="todo-right">
        <button className="btn-sm" onClick={() => setOpen(true)}>
          Edit
        </button>
        {open && (
          <Edit todo={todo} closeModal={closeModal} updateTodo={updateTodo} />
        )}
        <button className="btn-sm btn-danger" onClick={() => onDelete(todo.id)}>
          Delete
        </button>
      </div>
    </li>
  );
}
