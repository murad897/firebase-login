import React from "react";
import styles from "./SignUp.module.css";
import { useState } from "react";
import { useSignUp } from "../../hooks/UseSignup";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const { signUp, isPending, error } = useSignUp();

  const handleSubmit = (e) => {
    e.preventDefault();
    signUp(email, password, displayName);
  };

  return (
    <form className={styles.signUp} onSubmit={handleSubmit}>
      <h2>SignUp</h2>
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
      <label>
        <span>displayName :</span>
        <input
          type="text"
          value={displayName}
          onChange={(e) => setDisplayName(e.target.value)}
        />
      </label>
      {!isPending && (
        <button type="submit" className="btn">
          SignUp
        </button>
      )}
      {isPending && (
        <button className="btn" disabled>
          loading
        </button>
      )}
      {error && <p>{error}</p>}
    </form>
  );
};

export default SignUp;
