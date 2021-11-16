import MyInput from "./UI/MyInput";
import { useState } from "react";
import { login } from "../utils/Fetch";
import { useAuthCtx } from "../store/AuthContext";
import { useHistory } from "react-router-dom";

function LoginForm() {
  const history = useHistory();
  const authCtx = useAuthCtx();
  console.log("file: LoginForm.js variable: authCtx:", authCtx);
  const [email, setEmail] = useState("james@bond.com");
  const [password, setPassword] = useState("123456");

  const handleLogin = async (e) => {
    e.preventDefault();
    // validate
    console.log("Login");
    const loginRezult = await login(email, password);
    console.log("loginRezult", loginRezult);
    if (loginRezult.msg && loginRezult.msg === "success") {
      const { email, token } = loginRezult.data;
      // TODO: make it work with context.api
      authCtx.login(email, token);
      history.replace("/profile");

      // TODO: redirect to home page
    }
  };

  return (
    <form onSubmit={handleLogin} className="w-50">
      <MyInput
        value={email}
        setValue={setEmail}
        type="text"
        placeholder="your email"
      />
      <MyInput
        value={password}
        setValue={setPassword}
        type="password"
        placeholder="your Password"
      />
      <button className="btn btn-success">Login</button>
    </form>
  );
}

export default LoginForm;
