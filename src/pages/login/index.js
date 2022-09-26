import React, { useState } from "react";
import styles from "./Login.module.css";
import { useLogin } from "../../hooks/UseLogin";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, error, isPending } = useLogin();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password);
  };

  return (
    <form className={styles.loginForm} onSubmit={handleSubmit}>
      <h2>Login</h2>
      <label>
        <span>email :</span>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <label>
        <span>passowrd :</span>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      {isPending ? (
        <button className="btn" disabled>
          loading
        </button>
      ) : (
        <button type="submit" className="btn">
          Login
        </button>
      )}
      {error && <p>{error}</p>}
    </form>
  );
};

export default Login;
