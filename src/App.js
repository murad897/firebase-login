import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { useAuthContext } from "./hooks/UseAuthContext";
import Login from "./pages/login";
import SignUp from "./pages/signUp";
import Home from "./pages/home";
import Navbar from "./components/navbar";

const App = () => {
  const { authIsReady, user } = useAuthContext();
  return (
    <div className="app">
      {authIsReady && (
        <Router>
          <Navbar />
          <Routes>
            <Route
              exact
              path="/signup"
              element={user ? <Navigate to="/" replace /> : <SignUp />}
            ></Route>
            <Route
              exact
              path="/"
              element={user ? <Home /> : <Navigate to="/login" replace />}
            />
            <Route
              exact
              path="/login"
              element={user ? <Navigate to="/" replace /> : <Login />}
            />
          </Routes>
        </Router>
      )}
    </div>
  );
};

export default App;
