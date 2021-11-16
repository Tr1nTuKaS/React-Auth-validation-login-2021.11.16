import "./App.css";
import { Switch, Route, Link } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import { Toaster } from "react-hot-toast";
import { useAuthCtx } from "./store/AuthContext";

function App() {
  const { userName: currentUser } = useAuthCtx();

  return (
    <div className="container">
      <Toaster />
      <Switch>
        <Route path="/register">
          <RegisterPage />
        </Route>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/profile">
          {currentUser ? (
            <ProfilePage />
          ) : (
            <>
              <h2>Please register or login to see this page</h2>
              <Link to="/">Home page</Link>
            </>
          )}
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
