import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import { useLogout } from "../../hooks/UseLogout";
import { useAuthContext } from "../../hooks/UseAuthContext";

const Navbar = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext();
  
  return (
    <nav className={styles.navbar}>
      <ul>
        <li className={styles.title}>
          <Link className={styles.navbarLogo} to="/">
            myMoney
          </Link>
        </li>
        {!user && (
          <div>
            <li>
              <Link className="btn" to="/login">
                Login
              </Link>
            </li>
            <li>
              <Link className="btn" to="/signup">
                SignUp
              </Link>
            </li>
          </div>
        )}
        {user && (
          <div>
            <li> hello, {user.displayName}</li>
            <li>
              <button className="btn" onClick={logout}>
                Logout
              </button>
            </li>
          </div>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
