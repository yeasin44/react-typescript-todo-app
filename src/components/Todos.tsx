import { useTodos } from "../context/ContextProvider";
import { useSearchParams } from "react-router-dom";

const Todos = () => {
  const { todos, toggleTodoAsCompleted, handleDelete } = useTodos();

  const [searchParams] = useSearchParams();
  const todosData = searchParams.get("todos");
  // console.log(todosData);

  let filteredData = todos;

  if (todosData === "active") {
    filteredData = filteredData.filter((task) => !task.completed);
  }
  if (todosData === "completed") {
    filteredData = filteredData.filter((task) => task.completed);
  }
  return (
    <div>
      <ul className="main-task">
        {filteredData.map((todo) => {
          return (
            <li key={todo.id}>
              <input
                type="checkbox"
                id={`todo- ${todo.id}`}
                checked={todo.completed}
                onChange={() => toggleTodoAsCompleted(todo.id)}
              />
              <label htmlFor={`todo- ${todo.id}`}>{todo.task}</label>

              {todo.completed && (
                <button type="button" onClick={() => handleDelete(todo.id)}>
                  Delete
                </button>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Todos;
