import "./Nav.css";
import React, { useEffect } from "react";
import Logo from "../../images/Dota Logo.png";
import { useNavigate } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";

const Nav = () => {
  const auth = getAuth();
  const user = auth.currentUser;
  const navigate = useNavigate();

  const logout = () => {
    signOut(auth)
      .then(() => {
        localStorage.removeItem("token");
        navigate("/");
      })
      .catch((e) => alert(e.message));
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/");
    }
  }, []);

  return (
    <nav id="nav">
      <div className="nav-content">
        <p>{user && user.displayName}</p>
        {user && (
          <a id="signout" onClick={logout}>
            Log Out
          </a>
        )}
        <img src={Logo} alt="Dota2 Logo" />
      </div>
    </nav>
  );
};
export default Nav;
