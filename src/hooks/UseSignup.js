import { useState, useEffect } from "react";
import { projectAuth } from "../firebase/config";
import { useAuthContext } from "./UseAuthContext";

export const useSignUp = () => {
  const [isCancelled, serIsCancelled] = useState(false);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const { dispatch } = useAuthContext();

  const signUp = async (email, passowrd, displayName) => {
    setError(null);
    setIsPending(true);
    try {
      const res = await projectAuth.createUserWithEmailAndPassword(
        email,
        passowrd
      );
      if (!res) {
        throw new Error("Could not complete signup");
      }
      await res.user.updateProfile({ displayName });
      dispatch({ type: "LOGIN", payload: res.user });
      if (!isCancelled) {
        setIsPending(false);
        setError(null);
      }
    } catch (e) {
      if (!isCancelled) {
        setError(e.message);
        setIsPending(false);
      }
    }
  };

  useEffect(() => {
    return () => {
      serIsCancelled(true);
    };
  }, []);
  return { error, isPending, signUp };
};
