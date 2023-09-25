import { Link } from "react-router-dom";
import { useSearchParams } from "react-router-dom";

const Navbar = () => {
  const [searchParams] = useSearchParams();
  const todosData = searchParams.get("todos");
  return (
    <nav>
      <Link to="/" className={todosData === null ? "active" : ""}>
        All
      </Link>
      <Link
        to="/?todos=active"
        className={todosData === "active" ? "active" : ""}>
        Active
      </Link>
      <Link
        to="/?todos=completed"
        className={todosData === "active" ? "completed" : ""}>
        Completed
      </Link>
    </nav>
  );
};

export default Navbar;
