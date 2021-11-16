import { Link } from "react-router-dom";
import { useAuthCtx } from "../store/AuthContext";

function HomePage() {
  const { logout, userName } = useAuthCtx();
  const currentUser = userName;
  return (
    <main>
      <h1 className="display-1">Welcome to our Website</h1>
      <Link to="/register">
        <button className="btn btn-outline-success">Register here</button>
      </Link>
      <Link to="/login">
        <button className="btn btn-outline-info">Login here</button>
      </Link>
      {/* only show when logged in */}
      {currentUser && (
        <>
          <Link to="/profile">
            <button className="btn btn-outline-info">Your page</button>
          </Link>
          <Link onClick={logout} to="/">
            <button className="btn btn-outline-info">Logout here</button>
          </Link>
        </>
      )}
    </main>
  );
}

export default HomePage;
