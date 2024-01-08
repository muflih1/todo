import { useState } from "react";
import { v4 } from "uuid";
import Todo from "./components/todo";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState({
    id: "",
    task: "",
    isCompleted: false,
  });

  const handleAddTodo = (e) => {
    setTodo((prev) => ({
      ...prev,
      id: v4(),
      task: e.target.value,
    }));
  };

  const handleAddTododToList = () => {
    if (!todo.task) return;
    setTodos((prev) => [...prev, todo]);
    setTodo((prev) => ({
      ...prev,
      id: "",
      task: "",
    }));
  };

  const handleDeleteTodo = (id) => {
    setTodos((prev) => prev.filter((t) => t.id !== id));
  };

  const updateTodo = (id, todo) => {
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, task: todo } : t))
    );
  };

  const toggleComplete = (id) => {
    setTodos((prev) =>
      prev.map((t) => t.id === id ? { ...t, isCompleted: !t.isCompleted } : t)
    );
  };

  return (
    <div className="container">
      <div className="flex w-full">
        <input
          className="add-todo__input flex-grow"
          type="text"
          placeholder="Task"
          value={todo.task}
          onChange={handleAddTodo}
        />
        <button
          onClick={handleAddTododToList}
          disabled={!todo.task}
          className="btn flex-shrink-0"
        >
          Create
        </button>
      </div>

      <hr className="divider" />

      <ul className="w-full">
        {todos.map((t) => (
          <Todo
            todo={t}
            key={t.id}
            onDelete={handleDeleteTodo}
            todos={todos}
            updateTodo={updateTodo}
            onChange={toggleComplete}
          />
        ))}
      </ul>
    </div>
  );
}
