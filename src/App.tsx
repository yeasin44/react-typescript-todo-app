import Navbar from "./components/Navbar";
import Todos from "./components/Todos";
import AddToDo from "./components/AddTodo";
import "./App.css";

const App = () => {
  return (
    <main>
      <h1>React + TypeScript Todo App</h1>
      <Navbar />
      <AddToDo />
      <Todos />
    </main>
  );
};

export default App;
