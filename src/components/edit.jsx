import React, { useState } from "react";
import { createPortal } from "react-dom";

export default function Edit({ todo, closeModal, updateTodo }) {
  const [value, setValue] = useState(todo.task);

  return createPortal(
    <div className="edit-modal">
      <div className="overlay" onClick={closeModal} />
      <div className="wrapper">
        <div className="modal">
          <div className="modal-content">
            <h3>Edit</h3>
            <input
              type="text"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
            <button
              className="btn"
              onClick={() => {
                updateTodo(todo.id, value);
                setValue("");
                closeModal();
              }}
            >
              Update
            </button>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}
