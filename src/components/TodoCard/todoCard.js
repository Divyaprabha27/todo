import { useEffect, useState } from "react";

const TodoCard = (props) => {
  const { todo, editTodo, deleteTodo } = props;
  const [status, setStatus] = useState("");

  useEffect(() => {
    setStatus(todo.status);
  }, []);

  const handleEditTodo = () => {
    const editPayload = { ...todo, status: status };

    editTodo(editPayload);
  };
  const handleDeleteTodo = () => {
    deleteTodo(todo.id)
  };

  return (
    <div className="card-container">
      
      <div className="name">Name: {todo.name}</div>
      <div className="description">Description: {todo.description}</div>
      <div className="status">
        Status:{" "}
        <select value={todo.status} onChange={(e) => setStatus(e.target.value)}>
          <option value={"COMPLETED"}>COMPLETED</option>
          <option value={"NOT COMPLETED"}>NOT COMPLETED</option>
        </select>
      </div>
      <div class="status-button">
        <button className="edit" onClick={handleEditTodo}>Edit</button>
        <button className="delete" onClick={handleDeleteTodo}>Delete</button>
      </div>
    </div>
  );
};

export default TodoCard;
