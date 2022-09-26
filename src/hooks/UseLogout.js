import { useState, useEffect } from "react";
import { projectAuth } from "../firebase/config";
import { useAuthContext } from "./UseAuthContext";

export const useLogout = () => {
  const [isCancelled, serIsCancelled] = useState(false);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const { dispatch } = useAuthContext();

  const logout = async () => {
    setError(null);
    setIsPending(true);
    try {
      await projectAuth.signOut();
      dispatch({ type: "LOGOUT" });
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

  return { logout, error, isPending };
};
