import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { ClipLoader } from "react-spinners";

import "./Home.css";
import Logo from "../../images/Dota Logo.png";

const HomePage = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [registerLoading, setRegisterLoading] = useState(false);

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [loginLoading, setLoginLoading] = useState(false);

  const [demoEmail, setDemoEmail] = useState("user@gmail.com");
  const [demoPassword, setDemoPassword] = useState("pass123");
  const [demoLoading, setDemoLoading] = useState(false);

  const onSignup = (event) => {
    event.preventDefault();
    setRegisterLoading(true);
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, registerEmail, registerPassword)
      .then(() => {
        updateProfile(auth.currentUser, { displayName: username })
          .then(() => {
            setUsername("");
            setRegisterEmail("");
            setRegisterPassword("");
          })
          .catch((event) => alert(event.message));
      })
      .catch((event) => alert(event.message))
      .finally(() => setRegisterLoading(false));
  };

  const onLogin = (event) => {
    event.preventDefault();
    setLoginLoading(true);
    const auth = getAuth();
    signInWithEmailAndPassword(auth, loginEmail, loginPassword)
      .then((userCredential) => {
        localStorage.setItem("token", userCredential._tokenResponse.idToken);
        navigate("/profile");
      })
      .catch((event) => alert(event.message))
      .finally(() => setLoginLoading(false));
  };

  const onDemoLogin = (event) => {
    event.preventDefault();
    setDemoLoading(true);
    const auth = getAuth();
    signInWithEmailAndPassword(auth, demoEmail, demoPassword)
      .then((userCredential) => {
        localStorage.setItem("token", userCredential._tokenResponse.idToken);
        navigate("/profile");
      })
      .catch((event) => alert(event.message))
      .finally(() => setDemoLoading(false));
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/profile");
    }
  }, []);

  return (
    <div className="w-[390px] h-[850px] sm:w-[auto] sm:h-[auto] flex-col">
      <nav id="nav">
        <div className="flex sm:nav-content w-20">
          <img src={Logo} alt="Dota Logo" />
        </div>
      </nav>

      <div>
        <div className="flex text-white justify-center items-center sm:visible invisible">
          <form id="login_form" className="homeFormLogin sm:m-36">
            <h1>Login</h1>
            <div className="input-group">
              <label htmlFor="email">Email</label>
              <input
                value={loginEmail}
                onChange={(e) => setLoginEmail(e.target.value)}
                className="email"
                type="email"
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
                className="password"
                type="password"
                required
              />
            </div>
            <div id="btns">
              <button className="login_btn" type="submit" onClick={onLogin}>
                {loginLoading ? <ClipLoader size={20} /> : "Submit"}
              </button>
            </div>
          </form>
          <form className="homeFormSignUp m-32">
            <h1>Sign Up</h1>
            <div className="input-group">
              <label htmlFor="name">Username</label>
              <input
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                name="name"
                id="username"
                type="name"
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="email">Email</label>
              <input
                value={registerEmail}
                onChange={(e) => setRegisterEmail(e.target.value)}
                name="email"
                className="email"
                type="email"
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input
                value={registerPassword}
                onChange={(e) => setRegisterPassword(e.target.value)}
                name="password"
                className="password"
                type="password"
                required
              />
            </div>
            <div id="btns">
              <button className="signup_btn" type="submit" onClick={onSignup}>
                {registerLoading ? <ClipLoader size={20} /> : "Submit"}
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="flex justify-center items-center sm:mt-[-100px] mt-[-700px]">
        <button
          className="giveitatry_btn bg-black hover:bg-white hover:text-black shadow-md sm:w-[200px] w-[350px]"
          type="submit"
          onClick={onDemoLogin}
        >
          {demoLoading ? (
            <ClipLoader size={20} color={"white"} />
          ) : (
            "GIVE IT A TRY"
          )}
        </button>
      </div>
    </div>
  );
};

export default HomePage;
