import { AuthContext } from "../context";
import { useContext } from "react";

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  
  if (!context) {
    throw Error("useAuthCOntext must be inside an AuthCOntextProvider");
  }
  return context;
};
